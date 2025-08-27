import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useState } from "react";
import { SignUpService } from "../../services/api/auth/SignUpService";
import { Link, useNavigate } from "react-router-dom";

const signUpSchema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(5).required(),
});

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({ nome: "", email: "", senha: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    signUpSchema
      .validate({ nome, email, senha }, { abortEarly: false })
      .then(async () => {
        const result = await SignUpService.signUp(nome, email, senha);
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Usuário cadastrado com sucesso!");
          navigate("/login"); // redireciona para login
        }
      })
      .catch((yupError: yup.ValidationError) => {
        setIsLoading(false);
        const newErrors: typeof errors = { nome: "", email: "", senha: "" };
        yupError.inner.forEach((err) => {
          if (
            err.path &&
            newErrors[err.path as keyof typeof newErrors] !== undefined
          ) {
            newErrors[err.path as keyof typeof newErrors] = err.message;
          }
        });
        setErrors(newErrors);
      });
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card>
        <Box padding={2}>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2} width={250}>
              <Typography variant="h6" align="center">
                Cadastre-se
              </Typography>

              <TextField
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                error={!!errors.nome}
                helperText={errors.nome}
                disabled={isLoading}
              />

              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                disabled={isLoading}
              />

              <TextField
                label="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                error={!!errors.senha}
                helperText={errors.senha}
                disabled={isLoading}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Box width="100%" display="flex" justifyContent="center">
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading}
                endIcon={
                  isLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : undefined
                }
              >
                Cadastrar
              </Button>
            </Box>
          </CardActions>
          <Typography variant="body2" align="center">
            <Link
              to="/entrar"
              style={{ textDecoration: "none", color: "#858383" }}
            >
              Entrar
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
