import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import AppRouter from "./routes/AppRouter";

// Define tu tema personalizado
const theme = createTheme({
  palette: {
    background: {
      paper: '#ffffff', // Color de fondo para los componentes Paper
    },
    text: {
      primary: '#212121', // Color de texto principal
      secondary: '#757575', // Color de texto secundario
    },
  },
  // Puedes agregar más personalizaciones aquí
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza los estilos básicos */}
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;