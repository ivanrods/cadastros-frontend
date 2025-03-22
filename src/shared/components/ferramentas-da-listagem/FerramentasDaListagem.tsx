import { Add } from "@mui/icons-material";
import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";

interface IFerramentasDaListagemProps {
  textoDeBuscas?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDeBuscas = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {
  const theme = useTheme();
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
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder={Environment.INPUT_DE_BUSCA}
          value={textoDeBuscas}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={aoClicarEmNovo}
            endIcon={
              <Icon>
                <Add></Add>
              </Icon>
            }
          >
            {textBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
