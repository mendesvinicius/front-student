import { HTMLAttributes } from "react";

import { CustomContainer } from "./styles";

export default function Container({ children }: HTMLAttributes<HTMLElement>) {
  return <CustomContainer>{children}</CustomContainer>;
}
