import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --green: #00e88f;
    --gray: #EFF3F9;
    --red: #D12020;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    scrollbar-width: thin;
    background:var(--gray);
    font-family: 'Poppins', sans-serif;
  }

  html,
  body {
    scroll-behavior: smooth;
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe,
  hr {
    border: 0;
  }

  a,
  button {
    cursor: pointer;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
