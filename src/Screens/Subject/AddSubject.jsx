import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from "@mui/material";
import { CenterFocusStrong } from '@mui/icons-material';
import { useNavigate} from "react-router-dom";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import axios from "axios";
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../src/FirebaseConfig';

const TransferStudent = () => {
  const navigate = useNavigate();
  
  const [subjectName, setSubjectname] = useState();
    const [studentClass, setStudentclass] = useState();
    const [group, setGroup] = useState();

    const CreateUser = async() => {
 
        let obj = {subjectName,
          studentClass,
          group }


          try {
            const docRef = await addDoc(collection(db, "Subject"),obj);
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
                
                console.log("user create successfully..");
                navigate("/dashboard/SubjectList/:id")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

  return(
    <>
            <h1 style={{textAlign:"center"}}>Subject Registration</h1>

    <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
    <br />

<label>Subject Name
    <TextField
    value={subjectName}
    onChange={(e) => {
      setSubjectname(e.target.value );
      }}
      fullWidth
    />
    </label>
    <br />
    <br />

<label>Class
    <TextField
      value={studentClass}
    onChange={(e) => {
      setStudentclass(e.target.value );
      }}
      fullWidth
    />
    </label>
    <br />
    <br />
    
   <br />
   <br />
   <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Select Group</FormLabel>
                            <RadioGroup
                                row
                                aria-label="group"
                                name="Select group"
                                value={group}
                                onChange={(e) => setGroup(e.target.value)}
                            >
                                <FormControlLabel value="GeneralSciece" control={<Radio />} label="GeneralSciece" />
                                <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
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