import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  textoBotaoNovoCarregando?: string;
  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmNovo?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={aoClicarEmSalvar}
          startIcon={
            <Icon>
              <Save></Save>
            </Icon>
          }
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && !smDown && !mdDown && (
        <Skeleton width={110} height={60} />
      )}

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={aoClicarEmSalvarEFechar}
            startIcon={
              <Icon>
                <Save></Save>
              </Icon>
            }
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e voltar
            </Typography>
          </Button>
        )}
      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmApagar}
          startIcon={
            <Icon>
              <Delete></Delete>
            </Icon>
          }
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmNovo}
          startIcon={
            <Icon>
              <Add></Add>
            </Icon>
          }
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo ||
          mostrarBotaoApagar ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarEFechar) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmVoltar}
          startIcon={
            <Icon>
              <ArrowBack></ArrowBack>
            </Icon>
          }
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
