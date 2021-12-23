import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import ToastAnimated, { showToast } from "./components/Toast";

import graphCmsClient from "./lib/graphqlClient";
import { StudentProps } from "./types";
import { Headline, Table, ModalCreate } from "./components";

export default function App() {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    getAllStudents();
  }, []);

  // get all students
  const getAllStudents = () => {
    graphCmsClient
      .request(
        gql`
            query {
              readStudents {
                id
                name
                cpf
                email
              }
            }
          `
      )
      .then((data) => setStudents(data.readStudents))
      .catch((error) => console.log(error));
  };

  // get a student
  const handleGetStudent = (name?: string) => {
    const query = gql`
        query getStudents($name: String!) {
          readStudents(student: { name: $name}) {
            id
            name
            cpf
            email
          }
        }
      `;

    const variables = {
      name: name
    };
    graphCmsClient
      .request(query, variables)
      .then((data) => setStudents(data.readStudents))
      .catch((error) => console.log(error));
  };

  // delete a student
  const handleDeleteStudent = (id: string) => {
    const mutation = gql`
        mutation ($id: String!) {
          deleteStudent(id: $id)
        }
      `;

    const variables = {
      id: id,
    };

    graphCmsClient.request(mutation, variables)
      .then(() => showToast({ type: "info", message: "student successfully deleted" }))
      .catch(() => showToast({ type: "error", message: "Error, student was not deleted" }))
    getAllStudents();
  };

  //criar estudante
  const handleCreateStudent = (name: string, cpf: string, email: string) => {
    const mutation = gql`
       mutation createStudent($name: String!, $cpf: String!, $email: String!
       ) {
       createStudent(data: { name: $name, cpf: $cpf, email: $email}){
           id
           name
           cpf
           email
         }
       }
      `;

    const variables = {
      name: name,
      cpf: cpf,
      email: email,
    };
    graphCmsClient.request(mutation, variables)
      .then(() => showToast({ type: "success", message: "student successfully added" }))
      .catch(() => showToast({ type: "error", message: "Error, student was not created" }));
    setTimeout(() => {
      getAllStudents();
      handleCloseModal();
    }, 200)
  };

  const handleUpdateStudent = (id: string, name?: string, cpf?: string, email?: string) => {
    try {
      const mutation = gql`
       mutation updateStudent($name: String!, $cpf: String!, $email: String!, $id: String!
       ) {
       updateStudent(data: { 
         name: $name, 
         cpf: $cpf, 
         email: $email
         }, id: $id){
           id
           name
           cpf
           email
         }
       }
      `;

      const variables = {
        name: name,
        cpf: cpf,
        email: email,
        id: id
      };

      graphCmsClient.request(mutation, variables);
      setTimeout(() => {
        getAllStudents();
        handleCloseModal();
      }, 200)
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setShow(true);
  }

  const handleCloseModal = () => {
    setShow(false);
  }

  return (
    <main>
      <Headline getAllStudents={getAllStudents} handleGetStudent={handleGetStudent} handleOpenModal={handleOpenModal} />
      <ModalCreate show={show} handleCloseModal={handleCloseModal} handleCreateStudent={handleCreateStudent} />
      <Table students={students} handleDeleteStudent={handleDeleteStudent} show={show} />
      <ToastAnimated />
    </main>
  );
}
