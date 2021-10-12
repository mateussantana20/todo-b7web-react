import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
  `
    display: flex;
    background-color: #20212c;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 8px;
    align-items: center;

    input {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }

    label {
      color: #ccc;
      text-decoration: ${ done ? 'line-through' : 'initial'};
    }
  `
))