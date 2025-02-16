import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from 'react-toastify';
import { db } from "../../../src/FirebaseConfig"; // Ensure firebase is configured correctly
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "StudentReg"));
                const tableData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(tableData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'userName', headerName: 'UserName', width: 130 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'studentClass', headerName: 'Class', width: 130 },
        {
            field: 'controls',
            headerName: 'Edit',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Button
                    onClick={() => editUser(params.id)}
                    variant="contained"
                    color="primary"
                    endIcon={<EditIcon />}
                >Edit</Button>
            ),
        }, 
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Button
                    onClick={() => deleteUser(params.id)}
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                >Delete</Button>
            ),
        },
    ];

    const editUser = (id) => {
        navigate(`/edit/${id}`);
    };

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Would you like to delete this user?");
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, "StudentReg", id));
                toast.success("User deleted successfully");
                setData((prevData) => prevData.filter((user) => user.id !== id));
            } catch (error) {
                console.error("Error deleting user: ", error);
            }
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Student List</h1>
            <br />
            <Button
                onClick={() => navigate("/dashboard/StudentRegistration/:id")}
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
