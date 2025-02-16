import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { db } from "../../FirebaseConfig"; // Firestore configuration
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; 

export default function DataTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch class data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Class"));
        const tableData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(tableData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Delete user from Firestore
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Would you like to delete this user?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "Class", id));
        toast("User deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        setData((prevData) => prevData.filter((user) => user.id !== id));
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  // Table columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "fatherName", headerName: "Father's Name", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "Studentclass", headerName: "Class", width: 100 },
    { field: "group", headerName: "Group", width: 130 },
    {
      field: "controls",
      headerName: "Edit",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => navigate(`/ClassEdit/${params.id}`)}
          variant="contained"
          color="primary"
          endIcon={<EditIcon />}
        >
          Edit
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => deleteUser(params.id)}
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
      <h1 style={{ textAlign: "center" }}>Class List</h1>
      <br />
      <Button
        onClick={() => navigate("/dashboard/ClassForm/:id")}
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
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSizeOptions={[5, 10,50,100]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
