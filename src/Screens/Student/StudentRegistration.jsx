import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from "@mui/material";
import { CenterFocusStrong } from '@mui/icons-material';
import { useNavigate} from "react-router-dom";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import axios from "axios";
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../FirebaseConfig';

const TransferStudent = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [studentClass, setStudentClass] = useState();

    const CreateUser = async() => {

      let obj = {
        name,
        userName,
        email,
        gender,
        studentClass,
    
      }

      try {
        const docRef = await addDoc(collection(db, "StudentReg"), obj);
        console.log("Document written with ID: ", docRef.id);
        toast('create user successfully...', {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          });
          navigate("/dashboard/StudentList/:id")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  return(
    <>

    <h1 style={{textAlign:"center"}}>Student Registration</h1>
    <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
 
    <br />

<label>Name
    <TextField
    value={name}
    onChange={(e) => {
       setName(e.target.value );
      }}
      fullWidth
    />
    </label>
    <br />
    <br />

<label>User Name
    <TextField
        value={userName}

    onChange={(e) => {
      setUsername(e.target.value );
      }}
      fullWidth
    />
    </label>
    <br />
    <br />
    <label>Email
    <TextField
    value={email}
    onChange={(e) => {
      setEmail( e.target.value);
      }}
      fullWidth
    />
    </label>
   <br/>
   <br/>
   <label>Class
   <TextField
       value={studentClass}
    onChange={(e) => {
      setStudentClass( e.target.value );
      }}
    fullWidth
  />
   </label>
   <br />
   <br />
   <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
<br /><br />
    <Button
    onClick={CreateUser}
     type='submit' 
     color="error" 
     fullWidth 
     variant="contained">
      Submit

    </Button>
  </Paper>
  </>
);
};


export default TransferStudent