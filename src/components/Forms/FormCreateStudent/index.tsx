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
    name: yup.string().max(30).required("This field is required"),
    cpf: yup.string().min(14).max(14).required("This field is required"),
    email: yup.string().email("E-mail is invalid").required("This field is required"),
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
        <label>Name</label><p className="info_error">{formState.errors.name?.message}</p>
        <input {...register("name")} placeholder="ex: Jhon" />
        <label>CPF</label><p className="info_error">{formState.errors.cpf?.message}</p>
        <input {...register("cpf")} placeholder="ex: 000.000.000-00" />
        <label>E-mail</label><p className="info_error">{formState.errors.email?.message}</p>
        <input {...register("email")} type="email" placeholder="ex: jhon@email.com" />
      </div>
      <div id="form_bottom">
        <button onClick={handleCloseModal}>Cancel</button>
        <button type="submit">Register</button>
      </div>
    </Form>
  );
}
