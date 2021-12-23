import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdRefresh } from "react-icons/io";
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
    handleGetStudent(data.name);
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
          <button type='submit' onClick={getAllStudents}>
            <IoMdRefresh size={18} />
          </button>
        </Search>

        <button onClick={handleOpenModal}>+ Add</button>
      </Container>
    </CustomHeadline>
  );
}
