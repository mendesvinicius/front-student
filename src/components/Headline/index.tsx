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
};

export default function Headline({ handleGetStudent }: HeadlineProps) {
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
        </Search>

        <button>+ Add</button>
      </Container>
    </CustomHeadline>
  );
}
