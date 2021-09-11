import { InputLabel, Subtitle, Title } from "@components/ui/Typography";
import * as React from "react";
import { Formik, FormikHelpers, Form, Field } from "formik";

import ErrorMessage, { FormContainer, FormContainerWrapper, RootContainer, TextContainer } from "./components";

import gears from "@assets/svg/gears.svg";
import Api from "@services/Api";
import { toastMessage } from "@util/functions";
import Auth from "@services/Auth";
import { Redirect } from "react-router";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const initialValues: LoginFormValues = { username: "", password: "" };
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    try {
      setErrorMessage("");
      actions.setSubmitting(true);
      const { data } = await Api.post(`/user/authenticate`, values);
      Auth.setAuthData(data.token, data.name, data.role);
      window.location.href = "/";
      toastMessage("Autenticado", "success");
    } catch (error: any) {
      actions.setSubmitting(false);
      if (error?.response?.data?.userMessage === "unauthorized") return setErrorMessage("credenciais inválidas");
      setErrorMessage(error?.response?.data?.userMessage ?? "erro de conexão");
    }
  };

  if (Auth.isAuthenticated()) return <Redirect to="/" />;

  return (
    <RootContainer>
      <FormContainerWrapper>
        <img src={gears} width={60} height={60} alt="gears" />
        <TextContainer>
          <Title>Login Back Office</Title>
          <Subtitle>Entre com suas credenciais</Subtitle>
        </TextContainer>
        <FormContainer>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <InputLabel>Email</InputLabel>
                  <Field name="username" type="email" className="form-control" placeholder="Digite seu email" required />
                </div>
                <div className="">
                  <InputLabel>Senha</InputLabel>
                  <Field name="password" type="password" className="form-control" placeholder="Digite sua senha" required />
                </div>
                <ErrorMessage message={errorMessage} />
                <div className="w-100 d-grid mt-4">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    entrar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </FormContainerWrapper>
    </RootContainer>
  );
};

export default LoginScreen;
