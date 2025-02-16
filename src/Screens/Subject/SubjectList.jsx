import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from 'react-toastify';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../src/FirebaseConfig";  // 🔹 Firestore Configuration

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    // ✅ Firestore سے ڈیٹا حاصل کریں
    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Subject"));
                const TableData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(TableData);
            } catch (err) {
                console.log("Error fetching subjects:", err);
            }
        };

        fetchSubjects();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'subjectName', headerName: 'Subject Name', width: 130 },
        { field: 'studentClass', headerName: 'Class', width: 130 },
        { field: 'group', headerName: 'Group', width: 130 },
        {
            field: 'controls',
            headerName: 'Edit',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Button
                    onClick={() => EditSubject(params.id)}
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
                    onClick={() => DeleteSubject(params.id)}
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            ),
        },
    ];

    // ✅ ایڈیٹ پیج پر نیویگیٹ کریں
    const EditSubject = (id) => {
        navigate(`/SubjectEdit/${id}`);
    };

    // ✅ Firestore سے سبجیکٹ ڈیلیٹ کریں
    const DeleteSubject = async (id) => {
        const confirm = window.confirm("Would you like to delete this subject?");
        if (confirm) {
            try {
                await deleteDoc(doc(db, "subjects", id));  // 🔹 Firestore سے ڈیلیٹ کریں
                toast('Subject deleted successfully...', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setData((prevData) => prevData.filter((subject) => subject.id !== id));
            } catch (err) {
                console.log("Error deleting subject:", err);
            }
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Subject List</h1>
            <br />
            <Button
                onClick={() => {
                    navigate("/dashboard/AddSubject/:id");
                }}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "fit-content",
                    padding: "10px 20px",
                    marginLeft: "auto",
                }}
                color="success"
                variant="contained"
                endIcon={<AddIcon />}
            >
                Add Here
            </Button>
            <br />
            <br />
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
