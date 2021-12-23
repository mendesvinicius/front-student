import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "../";
import { CustomHeadline, Search } from "./styles";
import { StudentProps } from "../../types";

const schema = yup
  .object({
    name: yup.string().required().max(110),
  })
  .required();

export type HeadlineProps = {
  handleGetStudent: (name: string) => void;
  handleOpenModal: () => void
  getAllStudents: () => void
};

export default function Headline({ handleOpenModal, handleGetStudent, getAllStudents }: HeadlineProps) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: StudentProps) => {
    console.log(data.name)
    setTimeout(() => {
      handleGetStudent(data.name);
    }, 200)
  };

  return (
    <CustomHeadline>
      <Container>
        <Search>
          <h1>Students</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <MdSearch size={18} />
            <input {...register("name")} />
          </form>
        </Search>
        <button type='submit' onClick={getAllStudents}>Limpar</button>
        <button onClick={handleOpenModal}>+ Add</button>
      </Container>
    </CustomHeadline>
  );
}
