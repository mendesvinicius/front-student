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

#form_bottom button:first-child {
    background: rgb(0, 232, 143);
}

#form_bottom button + button {
    margin-left:10px;
    background: #d1cece;
}

#form_bottom button:hover {
    opacity: 0.7    ;
}
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  background-clip: padding-box;
  outline: 0;
`;
