import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import RegisterPage from './RegisterPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    mainTone: {
      main: "#9ED5C5",
      darker: "#8EC3B0"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/search' element= {<SearchPage/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
