import styled from "styled-components";

export const RootContainer = styled.div`
  background-color: #363740;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainerWrapper = styled.div`
  background-color: white;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 575.98px) {
    width: 90vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

export const FormContainer = styled.div`
  min-width: 300px;
`;

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="d-flex justify-content-center mt-1">
      <span className="text-danger">{message.toLowerCase()}</span>
    </div>
  );
};

export default ErrorMessage;
