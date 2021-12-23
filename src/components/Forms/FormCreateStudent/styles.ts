import styled from "styled-components";

export const Form = styled.form`
#form_input {
display:flex; 
flex-direction:column;
}

#header_form {
margin-bottom: 20px
}

#form_input label {
    font-weight: bold;
}

#form_input input {
    margin-bottom: 10px;
    height: 30px;
    padding:0 8px;
    font-weight: bold;
}

#form_input input:last-child {
    margin-bottom: 20px;
}

#form_bottom {
    display:flex;
    justify-content: flex-end;
}

#form_bottom button {
  height: 30px;
  padding 0 20px 0 20px;
  border:none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
}

#form_bottom button:last-child {
  background: rgb(0, 232, 143);
}

#form_bottom button + button {
  margin-left:10px;
  background: #d1cece;
}

#form_bottom button:hover {
  opacity: 0.7;
}

.info_error {
  color: red;
  font-size: 12px;
  font-weight: 100;
}
`;
