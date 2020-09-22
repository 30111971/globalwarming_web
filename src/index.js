import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core'
import mainTheme from './design'

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
