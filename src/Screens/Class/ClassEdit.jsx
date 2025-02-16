import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../../FirebaseConfig"; 

const ClassEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [obj, setObj] = useState({
        name: "",
        fatherName: "",
        email: "",
        phone: "",
        Studentclass: "",
        group: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = await getDoc(doc(db, "Class", id));
                if (userDoc.exists()) {
                    setObj(userDoc.data());
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };
        fetchUser();
    }, [id]);

    const updateUser = async () => {
        try {
            const userRef = doc(db, "Class", id);
            await updateDoc(userRef, obj);
            
            toast("User updated successfully!", {
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
        } catch (err) {
            console.error("Error updating user:", err);
        }
    };

    return (
        <>
            <div>
                <Paper elevation={12} sx={{ width: "40vw", marginX: "auto", padding: 5, marginTop: "90px" }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Update User
                    </Typography>
                    <br />
                    <br />

                    <label>Name
                        <TextField
                            onChange={(e) => setObj({ ...obj, name: e.target.value })}
                            value={obj.name}
                            fullWidth
                        />
                    </label>
                    <br /><br />

                    <label>Father Name
                        <TextField
                            onChange={(e) => setObj({ ...obj, fatherName: e.target.value })}
                            value={obj.fatherName}
                            fullWidth
                        />
                    </label>
                    <br /><br />

                    <label>Email
                        <TextField
                            onChange={(e) => setObj({ ...obj, email: e.target.value })}
                            value={obj.email}
                            fullWidth
                        />
                    </label>
                    <br /><br />

                    <label>Phone
                        <TextField
                            onChange={(e) => setObj({ ...obj, phone: e.target.value })}
                            value={obj.phone}
                            fullWidth
                        />
                    </label>
                    <br /><br />

                    <label>Class
                        <TextField
                            onChange={(e) => setObj({ ...obj, Studentclass: e.target.value })}
                            value={obj.Studentclass}
                            fullWidth
                        />
                    </label>
                    <br /><br />

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

                    <br />

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
                        onClick={() => navigate('/dashboard/ClassList/:id')}
                        color="error"
                        fullWidth
                        variant="contained"
                    >
                        Back
                    </Button>
                </Paper>
            </div>
        </>
    );
};

export default ClassEdit;
