import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../../../src/FirebaseConfig";  

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();  

    const [obj, setObj] = useState({
        name: "",
        userName: "",
        email: "",
        phone: "",
    });

    // ✅ Firestore سے ڈیٹا حاصل کریں
    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const teacherRef = doc(db, "TeacherReg", id); // "teachers" → Firestore Collection
                const teacherSnap = await getDoc(teacherRef);
                if (teacherSnap.exists()) {
                    setObj(teacherSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.log("Error fetching teacher:", err);
            }
        };

        fetchTeacher();
    }, [id]);

    // ✅ Firestore میں ڈیٹا اپڈیٹ کریں
    const updateUser = async () => {
        try {
            const teacherRef = doc(db, "TeacherReg", id);
            await updateDoc(teacherRef, obj);

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

            navigate("/dashboard/TeacherList/:id"); // 🔹 ID ہٹائیں
        } catch (err) {
            console.log("Error updating user:", err);
        }
    };

    return (
        <div>
            <Paper elevation={12} sx={{ width: "40vw", marginX: "auto", padding: 5, marginTop: "90px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Update Teacher
                </Typography>
                <br /><br />
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
                    onChange={(e) => setObj({ ...obj, phone: e.target.value })}
                    label="Phone"
                    value={obj.phone}
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
                <Button onClick={() => navigate('/dashboard/TeacherList/:id')} color="error" fullWidth variant="contained">
                    Back
                </Button>
            </Paper>
        </div>
    );
};

export default Edit;
