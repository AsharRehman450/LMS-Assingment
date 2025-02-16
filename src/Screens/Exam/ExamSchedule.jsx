import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const examSchedule = [
  { date: "12 Feb", class1_2: "English", class3_4: "English", class5_6: "English", class7_8: "English", class9: "English", class10: "English" },
  { date: "13 Feb", class1_2: "Math", class3_4: "Math", class5_6: "Math", class7_8: "Math", class9: "Math", class10: "Math" },
  { date: "14 Feb", class1_2: "Urdu", class3_4: "Urdu", class5_6: "Urdu", class7_8: "Urdu", class9: "Urdu", class10: "Urdu" },
  { date: "15 Feb", class1_2: "Science", class3_4: "Science", class5_6: "Science", class7_8: "Science", class9: "Physics", class10: "Physics" },
  { date: "16 Feb", class1_2: "S.Studies", class3_4: "S.Studies", class5_6: "S.Studies", class7_8: "S.Studies", class9: "Chemistry", class10: "Chemistry" },
  { date: "17 Feb", class1_2: "Islamiat", class3_4: "Islamiat", class5_6: "Islamiat", class7_8: "Islamiat", class9: "Biology", class10: "Biology" },
  { date: "18 Feb", class1_2: "Computer", class3_4: "Computer", class5_6: "Computer", class7_8: "Computer", class9: "Computer", class10: "Computer" },
  { date: "19 Feb", class1_2: "-", class3_4: "-", class5_6: "-", class7_8: "-", class9: "Pak Studies", class10: "Pak Studies" },
  { date: "20 Feb", class1_2: "-", class3_4: "-", class5_6: "-", class7_8: "-", class9: "Islamiat", class10: "Islamiat" }
];

const ExamSchedule = () => {
  
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Exam Schedule (Feb 2025)", 20, 10);

    const tableColumn = ["Date", "Class 1-2", "Class 3-4", "Class 5-6", "Class 7-8", "Class 9", "Class 10"];
    const tableRows = examSchedule.map(row => [
      row.date, row.class1_2, row.class3_4, row.class5_6, row.class7_8, row.class9, row.class10
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });

    doc.save("Exam_Schedule_Feb_2025.pdf");
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: "auto", marginTop: "20px", padding: "20px", borderRadius: "10px", boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#166534", marginBottom: "30px" }}>
        Exam Schedule (Feb 2025)
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1B5E20" }}>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 1-2</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 3-4</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 5-6</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 7-8</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 9</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>Class 10</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {examSchedule.map((exam, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#E8F5E9" : "inherit" }}>
              <TableCell sx={{ color: "green", fontWeight: "bold" }}>{exam.date}</TableCell>
              <TableCell>{exam.class1_2}</TableCell>
              <TableCell>{exam.class3_4}</TableCell>
              <TableCell>{exam.class5_6}</TableCell>
              <TableCell>{exam.class7_8}</TableCell>
              <TableCell>{exam.class9}</TableCell>
              <TableCell>{exam.class10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
  variant="contained"
  onClick={downloadPDF}
  sx={{ 
    marginTop: "20px", 
    display: "block", 
    marginX: "auto",
    backgroundColor: "#1B5E20", 
    color: "white", 
    "&:hover": { backgroundColor: "#166534" } 
  }}
>
  Download PDF
</Button>


      
    </TableContainer>
  );
};

export default ExamSchedule;
