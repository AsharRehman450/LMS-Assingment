import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const examResults = [
  { class: "Class 1", students: [
      { name: "Ali", marks: 85, grade: "A" },
      { name: "Ahmed", marks: 78, grade: "B" },
      { name: "Sara", marks: 92, grade: "A+" },
      { name: "Ayesha", marks: 65, grade: "C" },
      { name: "Hassan", marks: 88, grade: "A" }
    ]
  },
  { class: "Class 2", students: [
      { name: "Bilal", marks: 90, grade: "A+" },
      { name: "Zainab", marks: 72, grade: "B" },
      { name: "Omar", marks: 80, grade: "A" },
      { name: "Fatima", marks: 67, grade: "C" },
      { name: "Usman", marks: 85, grade: "B+" }
    ]
  },
  { class: "Class 3", students: [
      { name: "Hina", marks: 95, grade: "A+" },
      { name: "Saad", marks: 77, grade: "B" },
      { name: "Kamran", marks: 82, grade: "A" },
      { name: "Mehwish", marks: 70, grade: "B" },
      { name: "Tariq", marks: 89, grade: "A" }
    ]
  },
  { class: "Class 4", students: [
      { name: "Maham", marks: 88, grade: "A" },
      { name: "Arham", marks: 79, grade: "B" },
      { name: "Sana", marks: 85, grade: "B+" },
      { name: "Danish", marks: 91, grade: "A+" },
      { name: "Farah", marks: 76, grade: "B" }
    ]
  },
  { class: "Class 5", students: [
      { name: "Iqra", marks: 86, grade: "A" },
      { name: "Hassan", marks: 73, grade: "B" },
      { name: "Rizwan", marks: 89, grade: "A" },
      { name: "Bushra", marks: 82, grade: "A" },
      { name: "Zubair", marks: 70, grade: "B" }
    ]
  },
  { class: "Class 6", students: [
      { name: "Zain", marks: 92, grade: "A+" },
      { name: "Kashif", marks: 74, grade: "B" },
      { name: "Fariha", marks: 87, grade: "A" },
      { name: "Shan", marks: 81, grade: "B+" },
      { name: "Nida", marks: 69, grade: "C" }
    ]
  },
  { class: "Class 7", students: [
      { name: "Yasir", marks: 79, grade: "B" },
      { name: "Tuba", marks: 88, grade: "A" },
      { name: "Junaid", marks: 85, grade: "A" },
      { name: "Areeba", marks: 90, grade: "A+" },
      { name: "Hiba", marks: 76, grade: "B" }
    ]
  },
  { class: "Class 8", students: [
      { name: "Noman", marks: 81, grade: "B+" },
      { name: "Samina", marks: 92, grade: "A+" },
      { name: "Adnan", marks: 84, grade: "A" },
      { name: "Maira", marks: 78, grade: "B" },
      { name: "Shahid", marks: 89, grade: "A" }
    ]
  },
  { class: "Class 9", students: [
      { name: "Rehan", marks: 94, grade: "A+" },
      { name: "Lubna", marks: 76, grade: "B" },
      { name: "Tariq", marks: 80, grade: "B+" },
      { name: "Rameen", marks: 88, grade: "A" },
      { name: "Asif", marks: 71, grade: "C" }
    ]
  },
  { class: "Class 10", students: [
      { name: "Waleed", marks: 85, grade: "A" },
      { name: "Hina", marks: 91, grade: "A+" },
      { name: "Ali", marks: 77, grade: "B" },
      { name: "Saba", marks: 79, grade: "B" },
      { name: "Faisal", marks: 90, grade: "A+" }
    ]
  }
];

const ExamResults = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: "auto", marginTop: "20px", padding: "20px", borderRadius: "10px", boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#1B5E20", marginBottom: "30px" }}>
        Exam Results (2025)
      </Typography>
      {examResults.map((classResult, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D47A1", marginBottom: "10px" }}>
            {classResult.class}
          </Typography>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1B5E20" }}>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Student Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Marks</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classResult.students.map((student, i) => (
                <TableRow key={i} sx={{ backgroundColor: i % 2 === 0 ? "#E8F5E9" : "inherit" }}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.marks}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </TableContainer>
  );
};

export default ExamResults;
