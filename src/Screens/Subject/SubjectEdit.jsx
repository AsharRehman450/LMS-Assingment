import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../src/FirebaseConfig"; // 🔹 Firestore Configuration

const EditSubject = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [obj, setObj] = useState({
        subjectName: "",
        studentClass: "",
        group: "",
    });

    // ✅ Firestore سے سبجیکٹ حاصل کریں
    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const docRef = doc(db, "Subject", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setObj(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.log("Error fetching subject:", err);
            }
        };

        fetchSubject();
    }, [id]);

    // ✅ Firestore میں ڈیٹا اپڈیٹ کریں
    const updateSubject = async () => {
        try {
            const docRef = doc(db, "Subject", id);
            await updateDoc(docRef, obj);

            toast("Subject updated successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/dashboard/SubjectList/:id");
        } catch (err) {
            console.log("Error updating subject:", err);
        }
    };

    return (
        <div>
            <Paper elevation={12} sx={{ width: "40vw", marginX: "auto", padding: 5, marginTop: "90px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Update Subject
                </Typography>
                <br />
                <br />
                <TextField
                    onChange={(e) => {
                        setObj({ ...obj, subjectName: e.target.value });
                    }}
                    label="Subject Name"
                    value={obj.subjectName}
                    fullWidth
                />
                <br />
                <br />
                <TextField
                    onChange={(e) => {
                        setObj({ ...obj, studentClass: e.target.value });
                    }}
                    label="Class"
                    value={obj.studentClass}
                    fullWidth
                />
                <br />
                <br />

                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Select Group</FormLabel>
                    <RadioGroup
                        row
                        aria-label="group"
                        name="Select group"
                        value={obj.group}
                        onChange={(e) => setObj({ ...obj, group: e.target.value })}
                    >
                        <FormControlLabel value="GeneralScience" control={<Radio />} label="General Science" />
                        <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
                    </RadioGroup>
                </FormControl>

                <Button
                    onClick={updateSubject}
                    color="success"
                    fullWidth
                    variant="contained"
                    sx={{ marginBottom: 3 }}
                >
                    Update
                </Button>
                <Button onClick={() => {
                    navigate('/dashboard/SubjectList/:id');
                }} color="error" fullWidth variant="contained">
                    Back
                </Button>
            </Paper>
        </div>
    );
};

export default EditSubject;
