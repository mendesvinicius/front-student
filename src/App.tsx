import { useState, useEffect } from "react";
import { gql } from "graphql-request";

import graphCmsClient from "./lib/graphqlClient";
import { StudentProps } from "./types";

import { Headline, Table } from "./components";

export default function App() {
  const [students, setStudents] = useState<StudentProps[]>([]);

  // get all students
  const getAllStudents = () => {
    try {
      graphCmsClient
        .request(
          gql`
            query {
              students {
                id
                name
                cpf
                email
              }
            }
          `
        )
        .then((data) => setStudents(data.students));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  // get a student
  const handleGetStudent = (name: string) => {
    try {
      const query = gql`
        query getStudents($name: String!) {
          students(student: { name: $name }) {
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
        .then((data) => setStudents(data.students));
    } catch (error) {
      console.log(error);
    }
  };

  // delete a student
  const handleDeleteStudent = (id: string) => {
    try {
      const mutation = gql`
        mutation ($id: String!) {
          deleteStudent(id: $id)
        }
      `;

      const variables = {
        id: id,
      };

      graphCmsClient.request(mutation, variables);
      getAllStudents();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Headline handleGetStudent={handleGetStudent} />

      <Table students={students} handleDeleteStudent={handleDeleteStudent} />
    </main>
  );
}
