import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import ToastAnimated, { showToast } from "./components/Toast";

import graphCmsClient from "./lib/graphqlClient";
import { StudentProps } from "./types";
import { Headline, Table, Modal, FormCreateStudent } from "./components";

export default function App() {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    getAllStudents();
  }, []);

// C -> Create student
const handleCreateStudent = (name: string, cpf: string, email: string) => {
  const mutation = gql`
    mutation createStudent($name: String!, $cpf: String!, $email: String!) {
      createStudent(data: { name: $name, cpf: $cpf, email: $email }) {
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
  graphCmsClient
    .request(mutation, variables)
    .then(() => {
      showToast({ type: "success", message: "Student successfully added" });
      getAllStudents();
      handleCloseModal();
    })
    .catch(() =>
      showToast({ type: "error", message: "Error, student was not created" })
    );
};

// R -> Read all students
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

// U -> update student
const handleUpdateStudent = (
  name: string,
  cpf: string,
  email: string,
  id: string
) => {
  console.log(id);
    const mutation = gql`
      mutation updateStudent(
        $name: String!
        $cpf: String!
        $email: String!
        $id: String!
      ) {
        updateStudent(
          data: { name: $name, cpf: $cpf, email: $email },
          id: $id
        ) {
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

     graphCmsClient.request(mutation, variables)
    .then(() => {
      showToast({ type: "success", message: "student updated successfully" });
      getAllStudents();
      setShow(false);
    })
    .catch(() =>
      showToast({ type: "error", message: "Error, student has not been updated" })
    );
  }

// D - > delete a student
const handleDeleteStudent = (id: string) => {
  const mutation = gql`
    mutation ($id: String!) {
      deleteStudent(id: $id)
    }
  `;

  const variables = {
    id: id,
  };

  graphCmsClient
    .request(mutation, variables)
    .then(() => {
      showToast({ type: "info", message: "Student successfully deleted" });
      getAllStudents();
    })
    .catch(() =>
      showToast({ type: "error", message: "Error, student was not deleted" })
    );
};

// Read a student by name
const handleGetStudent = (name?: string) => {
  const query = gql`
    query getStudents($name: String!) {
      readStudents(student: { name: $name }) {
        id
        name
        cpf
        email
      }
    }
  `;

  const variables = {
    name: name,
  };
  graphCmsClient
    .request(query, variables)
    .then((data) => setStudents(data.readStudents))
    .catch((error) => console.log(error));
};

const handleOpenModal = () => {
  setShow(true);
};

const handleCloseModal = () => {
  setShow(false);
};

return (
  <main>
    <Headline
      getAllStudents={getAllStudents}
      handleGetStudent={handleGetStudent}
      handleOpenModal={handleOpenModal}
    />

    <Modal show={show}>
      <FormCreateStudent
        handleCloseModal={handleCloseModal}
        handleCreateStudent={handleCreateStudent}
      />
    </Modal>

    <Table
      students={students}
      handleUpdateStudent={handleUpdateStudent}
      handleDeleteStudent={handleDeleteStudent}
    />
    <ToastAnimated />
  </main>
);
}