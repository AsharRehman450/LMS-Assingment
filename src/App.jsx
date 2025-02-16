import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import SignUp from "./Entries/SignUp";
import Login from "./Entries/Login";
import Dashboard from './Components/Dashboard';
import './App.css'
import Edit from './Screens/Student/Edit';
import TeacherEdit from "./Screens/Student/Teacher/TeacherEdit"
import SubjectEdit from "./Screens/Subject/SubjectEdit"
import ClassEdit from './Screens/Class/ClassEdit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProtectedRoute from './Components/ProtectedRoute';
import AuthRoute from './Components/AuthRoute';
import { ToastContainer } from 'react-toastify';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />

<Routes>
      
      <Route element={<AuthRoute/>}>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>

        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/TeacherEdit/:id" element={<TeacherEdit />} />
        <Route path="/SubjectEdit/:id" element={<SubjectEdit />} />
        <Route path="/ClassEdit/:id" element={<ClassEdit />} />
      </Routes>
    </ThemeProvider>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Bounce}
/>

</>
    
  );
}

export default App;