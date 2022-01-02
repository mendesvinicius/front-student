import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

import { StudentProps } from "../../types";

import { CustomTable, Section } from "./styles";
import { Container, Modal, FormEditStudent } from "../../components";

export type TableProps = {
  students: StudentProps[];
  handleUpdateStudent: (name: string, cpf: string, email: string, id: string) => void;
  handleDeleteStudent: (id: string) => void;
};

export default function Table({ students, handleDeleteStudent, handleUpdateStudent }: TableProps) {
  const [show, setShow] = useState<boolean>(false);
  const [studentInfo, setStudentInfo] = useState<StudentProps>({
    id: "",
    name: "",
    cpf: "",
    email: "",
  });

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Section>
      <Container>
        <CustomTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student: StudentProps) => (
              <tr key={student.email}>
                <td>{student.name}</td>
                <td>{student.cpf}</td>
                <td>{student.email}</td>
                <td>
                  <button type="button">
                    <MdEdit
                      size={18}
                      onClick={() => {
                        handleOpenModal();
                        setStudentInfo({
                          id: student.id,
                          name: student.name,
                          cpf: student.cpf,
                          email: student.email,
                        });
                      }}
                    />
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
      <Modal show={show}>
        <FormEditStudent
          studentInfo={studentInfo}
          handleCloseModal={handleCloseModal}
          handleUpdateStudent={handleUpdateStudent}
        />
      </Modal>
    </Section>
  );
}
