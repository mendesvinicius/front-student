import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Form } from "./styles";
import * as yup from "yup";
import { StudentProps } from "../../types";

const schema = yup
  .object({
    name: yup.string().required().max(110),
    cpf: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

export type ModalCreateProps = {
  show: boolean;
  handleCloseModal: () => void;
  handleCreateStudent: (name: string, cpf: string, email: string) => void;
};

export default function ModalCreate({
  show,
  handleCloseModal,
  handleCreateStudent,
}: ModalCreateProps) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: StudentProps) => {
    handleCreateStudent(data.name, data.cpf, data.email);
  };

  return (
    <>
      <ReactModal
        isOpen={show}
        style={{
          content: {
            position: "relative",
            width: "650px",
            height: "330px",
            backgroundColor: "#FFF",
            marginRight: "auto",
            marginLeft: "auto",
            top: "20%",
          }
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div id="form_input">
            <div id="header_form">
              <h3>Register</h3>
            </div>
            <label>Name</label>
            <input {...register("name")} />
            <label>CPF</label>
            <input {...register("cpf")} />
            <label>Email</label>
            <input {...register("email")} type="email" />
          </div>
          <div id="form_bottom">
            <button type="submit">Resgister</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </Form>
      </ReactModal>
    </>
  );
}

//primeiro botao
// margin-right: 20px;
//     height: 30px;
//     padding-left: 20px;
//     padding-right: 20px;
//     background-color: rgb(0, 232, 143);
//     border: none;
//     border-radius: 4px;
//     font-size: 15px;
//     font-weight: bold;

//segundo botão
// height: 30px;
// padding-left: 20px;
// padding-right: 20px;
// border: none;
// border-radius: 4px;
// font-size: 15px;
// font-weight: bold;
// background: #d1cece;
