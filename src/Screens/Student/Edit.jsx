import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../src/FirebaseConfig";  // 🔹 Firestore Configuration

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [obj, setObj] = useState({
        name: "",
        userName: "",
        email: "",
        studentClass: "",
    });

    // ✅ Firestore سے ڈیٹا حاصل کریں
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const docRef = doc(db, "StudentReg", id);  // 🔹 "students" → Firestore Collection
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setObj(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.log("Error fetching student:", err);
            }
        };

        fetchStudent();
    }, [id]);

    // ✅ Firestore میں ڈیٹا اپڈیٹ کریں
    const updateUser = async () => {
        try {
            const docRef = doc(db, "StudentReg", id);
            await updateDoc(docRef, obj);

            toast('User updated successfully...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/dashboard/StudentList/:id");
        } catch (err) {
            console.log("Error updating user:", err);
        }
    };

    return (
        <div>
            <Paper elevation={12} sx={{ width: "40vw", marginX: "auto", padding: 5, marginTop: "90px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Update Student
                </Typography>
                <br />
                <TextField
                    onChange={(e) => setObj({ ...obj, name: e.target.value })}
                    label="Enter Name"
                    value={obj.name}
                    fullWidth
                />
                <br /><br />
                <TextField
                    onChange={(e) => setObj({ ...obj, userName: e.target.value })}
                    label="Enter Username"
                    value={obj.userName}
                    fullWidth
                />
                <br /><br />
                <TextField
                    onChange={(e) => setObj({ ...obj, email: e.target.value })}
                    label="Email"
                    value={obj.email}
                    fullWidth
                />
                <br /><br />
                <TextField
                    onChange={(e) => setObj({ ...obj, studentClass: e.target.value })}
                    label="Class"
                    value={obj.studentClass}
                    fullWidth
                />
                <br /><br />
                <Button
                    onClick={updateUser}
                    color="success"
                    fullWidth
                    variant="contained"
                    sx={{ marginBottom: 3 }}
                >
                    Update
                </Button>
                <Button
                    onClick={() => navigate('/dashboard/StudentList/:id')}
                    color="error"
                    fullWidth
                    variant="contained"
                >
                    Back
                </Button>
            </Paper>
        </div>
    );
};

export default Edit;
