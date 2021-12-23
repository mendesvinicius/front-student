import { StudentProps} from "../../../types";
import { Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export type FormEditStudentProps = {
  studentInfo?: StudentProps;
  handleCloseModal: () => void;
  handleUpdateStudent: (name: string, cpf: string, email: string, id: string) => void;
};

const schema = yup
  .object({
    name: yup.string().required().max(30),
    cpf: yup.string().required().min(14).max(14),
    email: yup.string().required().email(),
  })
  .required();

export default function FormEditStudent({
  studentInfo,
  handleCloseModal,
  handleUpdateStudent
}: FormEditStudentProps) {
  console.log(studentInfo);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: StudentProps) => {
    const id: any = studentInfo?.id;
    handleUpdateStudent(data.name, data.cpf, data.email, id);
    handleCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div id="form_input">
        <div id="header_form">
          <h3>Update</h3>
        </div>
        <label>Name</label>
      <input type="text" defaultValue={studentInfo?.name} {...register("name")}/>
      <label>CPF {formState.errors.cpf && <span className="info_error">type cpf invalid</span>}</label>
      <input type="text" defaultValue={studentInfo?.cpf} {...register("cpf")} />
      <label>Email {formState.errors.email && <span className="info_error">type email invalid</span>}</label>
      <input type="email" defaultValue={studentInfo?.email} {...register("email")}/>
      </div>
      <div id="form_bottom">
        <button onClick={handleCloseModal}>Cancel</button>
        <button type="submit">Edit</button>
      </div>
    </Form>
  );
}
