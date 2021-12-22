import { MdEdit, MdDelete } from "react-icons/md";

import { StudentProps } from "../../types";

import { CustomTable, Section } from "./styles";
import { Container } from "../../components";

export type TableProps = {
  students?: StudentProps[];
  handleDeleteStudent: (id: string) => void;
};

export default function Table({ students, handleDeleteStudent }: TableProps) {
  return (
    <Section>
      <Container>
        <CustomTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students?.map((student: StudentProps) => (
              <tr key={student.email}>
                <td>{student.name}</td>
                <td>{student.cpf}</td>
                <td>{student.email}</td>
                <td>
                  <button type="button">
                    <MdEdit size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </Container>
    </Section>
  );
}
