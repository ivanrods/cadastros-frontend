
import { AxiosError } from "axios";
import { Api } from "../axios-config";


const signUp = async (
  nome: string,
  email: string,
  senha: string
): Promise<void | Error> => {
  try {
    await Api().post("/cadastrar", { nome, email, senha });
  } catch (error) {
    console.error(error);
    return new Error(
      (error as AxiosError).response?.data.errors?.default || "Erro no cadastro."
    );
  }
};

export const SignUpService = {
  signUp,
};
