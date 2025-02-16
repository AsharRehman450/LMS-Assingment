import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // 🔹 Firestore functions
import { db } from "../../../src/FirebaseConfig"; // 🔹 Firebase config

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  // 🔹 Fetch data from Firestore
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "syllabus"));
        const TableData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // ✅ Firestore doc ID
          subject: doc.data().subjectName,
          class: doc.data().studentClass,
          download: doc.data().pdfdownload,
        }));
        setData(TableData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 🔹 Delete document from Firestore
  const DeleteUser = async (id) => {
    const confirm = window.confirm("Would you like to delete this syllabus?");
    if (confirm) {
      try {
        await deleteDoc(doc(db, "syllabus", id)); // ✅ Firestore delete function
        toast("Syllabus deleted successfully!", {
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
      } catch (error) {
        console.error("Error deleting syllabus:", error);
      }
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "subject", headerName: "Subject Name", width: 150 },
    { field: "class", headerName: "Class", width: 130 },
    {
      field: "download",
      headerName: "Download",
      width: 200,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          📥 Download PDF
        </a>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
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
      <h1 style={{ textAlign: "center" }}>Syllabus List</h1>
      <br />
      <Button
        onClick={() => navigate("/dashboard/SyllabusForm/:id")}
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
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
