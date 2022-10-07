import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import s from './App.module.scss';
import Header from "../Header/Header";
import TableHead from "../TableHead/TableHead";
import Sidebar from "../Sidebar/Sidebar";
import {Box, Divider} from "@mui/material";
import MyDivider from "../UI/MyDivider";

const theme = createTheme({
    palette: {
        primary: {
            light: '#525254',
            main: '#27272A',
            dark: '#1b1b1d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b3b3bb',
            main: '#A1A1AA',
            dark: '#707076',
            contrastText: '#000',
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className={s.App}>
            <Header />
            <Box
                sx={{
                    display: 'flex'
                }}
            >
                <Sidebar />
            </Box>
            {/*<TableHead />*/}
        </div>
      </ThemeProvider>
  );
}

export default App;
