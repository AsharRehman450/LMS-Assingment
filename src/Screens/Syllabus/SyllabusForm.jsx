import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../src/FirebaseConfig';


const SyllabusForm = () => {
    const navigate = useNavigate();


      const [subjectName, setSubjectname] = useState();
        const [studentClass, setStudentclass] = useState();
        const [download, setDownload] = useState();
  


    const CreateUser = async() => {

        let obj = {subjectName,
            studentClass,
            download }

            try {
                const docRef = await addDoc(collection(db, "syllabus"),obj);
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
             navigate("/dashboard/SyllabusList/:id")

              } catch (e) {
                console.error("Error adding document: ", e);
              }
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Syllabus Form</h1>

            <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
                <br />

                <label>Subject Name
                    <TextField
                    value={subjectName}
                        onChange={(e) => {
                            setSubjectname( e.target.value );
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
                            setStudentclass(e.target.value);
                        }}
                        fullWidth
                    />

                </label>
                <br></br>
                <br />
                {/* <Button>
      
    </Button> */}
                {/* <Button
                    startIcon={<UploadFileIcon />}
                    variant="contained"
                    color="error"
                    fullWidth
                >
                    Upload PDF
                    <input
                        type="file"
                        accept=".pdf"
                        hidden
                        value={pdfdownload}
                        onChange={(e) => setPdfDownload(e.target.value )}
                    />
                </Button> */}
                <Button
                            variant="contained"
                            component="label"
                            color="secondary"
                            fullWidth
                        >
                            Upload PDF
                            <input
                                type="file"
                                accept=".pdf"
                                hidden
                                value={download}
                                onChange={(e) => setDownload(e.target.value)}
                            />
                        </Button>


                <br /><br />

                <Button
                    onClick={CreateUser}
                    type='submit'
                    color="inherit"
                    // edge="end"
                    fullWidth
                    variant="contained">
                    Add
                </Button>
            </Paper>
        </>
    );
};


export default SyllabusForm