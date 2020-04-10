import styled, { keyframes, css } from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  // Set disable property based on loading property value. This allow you to
  // use the loading props in two differente ways.
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* if button is [disabled] */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
