import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { class: "Class 1", students: 30, teachers: 2 },
  { class: "Class 2", students: 25, teachers: 2 },
  { class: "Class 3", students: 28, teachers: 3 },
  { class: "Class 4", students: 35, teachers: 2 },
  { class: "Class 5", students: 40, teachers: 3 },
];

const DashboardChart = () => {
  return (
    <Card sx={{ p: 3, boxShadow: 4, borderRadius: 4, backgroundColor: "#f8eaff" }}>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 3, fontWeight: "bold", color: "#7b1fa2" }}>
          Students & Teachers Per Class
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e1bee7" opacity={0.5} />
            <XAxis dataKey="class" stroke="#7b1fa2" tick={{ fontSize: 14, fontWeight: "bold" }} />
            <YAxis stroke="#7b1fa2" tick={{ fontSize: 14, fontWeight: "bold" }} />
            <Tooltip contentStyle={{ backgroundColor: "#7b1fa2", color: "#fff", borderRadius: 8 }} cursor={{ fill: "#ede7f6" }} />
            <Legend wrapperStyle={{ fontSize: 14, fontWeight: "bold", color: "#7b1fa2" }} />
            <Bar dataKey="students" fill="url(#studentsGradient)" name="Students" barSize={45} radius={[20, 20, 0, 0]} />
            <Bar dataKey="teachers" fill="url(#teachersGradient)" name="Teachers" barSize={45} radius={[20, 20, 0, 0]} />
            <defs>
              <linearGradient id="studentsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9c27b0" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ce93d8" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="teachersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff4081" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#f48fb1" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;