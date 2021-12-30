import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { StudentProps } from "../../../types";

import { Form } from "./styles";

export type FormCreateStudentProps = {
  handleCloseModal: () => void;
  handleCreateStudent: (name: string, cpf: string, email: string) => void;
};

const schema = yup
  .object({
    name: yup.string().required().max(30),
    cpf: yup.string().required().min(14).max(14),
    email: yup.string().email().required(),
  })
  .required();

export default function FormCreateStudent({
  handleCloseModal,
  handleCreateStudent,
}: FormCreateStudentProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: StudentProps) => {
    handleCreateStudent(data.name, data.cpf, data.email);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div id="form_input">
        <div id="header_form">
          <h3>Register</h3>
        </div>
        <label>Name {formState.errors.name && <span className="info_error">This field is required</span>}</label>
        <input {...register("name")} />
        <label>CPF {formState.errors.cpf && <span className="info_error">This field is required</span>}</label>
        <input {...register("cpf")} />
        <label>Email {formState.errors.email && <span className="info_error">This field is required</span>}</label>
        <input {...register("email")} type="email" />
      </div>
      <div id="form_bottom">
        <button onClick={handleCloseModal}>Cancel</button>
        <button type="submit">Register</button>
      </div>
    </Form>
  );
}
