import { StudentProps } from "../../../types";
import { Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export type FormEditStudentProps = {
  studentInfo: StudentProps;
  handleCloseModal: () => void;
  handleUpdateStudent: (name: string, cpf: string, email: string, id: string) => void;
};

const schema = yup
  .object({
    name: yup.string().max(30).required("This field is required"),
    cpf: yup.string().min(14).max(14).required("This field is required"),
    email: yup.string().email("E-mail is invalid").required("This field is required"),
  })
  .required();

export default function FormEditStudent({
  studentInfo,
  handleCloseModal,
  handleUpdateStudent,
}: FormEditStudentProps) {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: StudentProps) => {
    handleUpdateStudent(data.name, data.cpf, data.email, studentInfo.id);
    handleCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div id="form_input">
        <div id="header_form">
          <h3>Update</h3>
        </div>
        <label>Name</label><p className="info_error">{formState.errors.name?.message}</p>
        <input type="text" defaultValue={studentInfo?.name} {...register("name")} placeholder="ex: Jhon" />
        <label>CPF</label><p className="info_error">{formState.errors.cpf?.message}</p>
        <input type="text" defaultValue={studentInfo?.cpf} {...register("cpf")} placeholder="ex: 000.000.000-00" />
        <label>E-mail</label><p className="info_error">{formState.errors.email?.message}</p>
        <input type="email" defaultValue={studentInfo?.email} {...register("email")} placeholder="ex: jhon@email.com" />
      </div>
      <div id="form_bottom">
        <button onClick={handleCloseModal}>Cancel</button>
        <button type="submit">Edit</button>
      </div>
    </Form>
  );
}
