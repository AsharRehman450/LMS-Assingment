import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from 'react-toastify';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../src/FirebaseConfig"

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // ✅ Firestore سے ڈیٹا حاصل کریں
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "TeacherReg")); // 🔹 "teachers" → Firestore Collection
                const teacherData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(teacherData);
            } catch (err) {
                console.log("Error fetching teachers:", err);
            }
        };

        fetchTeachers();
    }, []);

    const DeleteUser = async (id) => {
        const confirm = window.confirm("Would you like to delete this user?");
        if (confirm) {
            try {
                await deleteDoc(doc(db, "TeacherReg", id));
                toast('User deleted successfully...', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setData((prevData) => prevData.filter((user) => user.id !== id));
            } catch (err) {
                console.log("Error deleting user:", err);
            }
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'userName', headerName: 'UserName', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        {
            field: 'controls',
            headerName: 'Edit',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Button
                    onClick={() => navigate(`/TeacherEdit/${params.id}`)}
                    variant="contained"
                    color="primary"
                    endIcon={<EditIcon />}
                >
                    Edit
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Button
                    onClick={() => DeleteUser(params.id)}
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Teacher List</h1>
            <br />
            <Button
                onClick={() => navigate("/dashboard/TeacherRegistration/:id")}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "fit-content",
                    padding: "10px 20px",
                    marginLeft: "auto",
                }}
                color="success" variant="contained"
                endIcon={<AddIcon />}
            >
                Add Here
            </Button>
            <br /><br />
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}
