import React, { useState } from "react";
import { Button, Paper, TextField, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig"; // Firestore database

const ClassForm = () => {
  const navigate = useNavigate();

  // State variables
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");
  const [gender, setGender] = useState("");
  const [Studentclass, setStudentclass] = useState("");

  // Function to create user in Firestore
  const CreateUser = async () => {
    // ✅ Move the object inside function
    let obj = {
      name,
      fatherName,
      email,
      phone,
      group,
      gender,
      Studentclass,
    };

    try {
      const docRef = await addDoc(collection(db, "Class"), obj);
      console.log("Document written with ID: ", docRef.id);
      toast("User created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/dashboard/ClassList/:id");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Admission Form</h1>

      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <br />

        <label>Name</label>
        <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Father's Name</label>
        <TextField value={fatherName} onChange={(e) => setFatherName(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Email</label>
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Phone</label>
        <TextField value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Class</label>
        <TextField value={Studentclass} onChange={(e) => setStudentclass(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Group</label>
        <TextField value={group} onChange={(e) => setGroup(e.target.value)} fullWidth />
        <br />
        <br />

        <label>Date Of Birth</label>
        <TextField placeholder="DD/MM/YYYY" type="date" fullWidth />
        <br />
        <br />

        <label>Qualification</label>
        <TextField fullWidth />
        <br />
        <br />

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <br />
        <br />
        <Button onClick={CreateUser} type="submit" color="error" fullWidth variant="contained">
          Submit
        </Button>
      </Paper>
    </>
  );
};

export default ClassForm;
