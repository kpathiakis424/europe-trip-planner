import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import TripPlanner from './TripPlanner';
import 'leaflet/dist/leaflet.css';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <div className="glass-container">
              <TripPlanner />
            </div>
          </div>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;