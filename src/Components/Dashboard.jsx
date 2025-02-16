import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Collapse } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { Routes, Route } from 'react-router-dom';
import StudentList from '../Screens/Student/StudentList';
import StudentRegistration from '../Screens/Student/StudentRegistration';
import Edit from '../Screens/Student/Edit';
import TeacherList from '../Screens/Student/Teacher/TeacherList';
import TeacherRegistration from '../Screens/Student/Teacher/TeacherRegistration';
import TeacherEdit from '../Screens/Student/Teacher/TeacherEdit';
import SubjectList from "../Screens/Subject/SubjectList";
import AddSubject from '../Screens/Subject/AddSubject';
import SyllabusForm from '../Screens/Syllabus/SyllabusForm';
import SyllabusList from '../Screens/Syllabus/SyllabusList';
import ClassForm from '../Screens/Class/ClassForm';
import ClassList from '../Screens/Class/ClassList';
import FeeStructure from '../Screens/Fees/FeeStructure';
import FeeVoucher from '../Screens/Fees/FeeVoucher';
import FeePayment from '../Screens/Fees/FeePayment';
import ExamSchedule from '../Screens/Exam/ExamSchedule';
import ExamResult from '../Screens/Exam/ExamResult';
import Profile from '../Screens/Profile/Profile';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { LayoutDashboard, UserCheck, ListOrdered, FilePlus, Book, ClipboardList, FileText, Coins, CalendarCheck, FileCheck2, UserCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MainContent from './MainContent';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState({});
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const toggleDropdown = (section) => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const data = [
    { name: 'Students', count: 120 },
    { name: 'Teachers', count: 30 },
    { name: 'Classes', count: 15 },
    { name: 'Subjects', count: 20 },
  ];

  const pages = [
    {
      name: 'Students',
      icon: <LayoutDashboard />,
      subPages: [
        { name: 'Student Registration', icon: <UserCheck />, path: "/dashboard/StudentRegistration/:id" },
        { name: 'Student List', icon: <ListOrdered />, path: "/dashboard/StudentList/:id" },
      ],
    },
    {
      name: 'Teachers',
      icon: <LayoutDashboard />,
      subPages: [
        { name: 'Teacher Registration', icon: <UserCheck />, path: "/dashboard/TeacherRegistration/:id" },
        { name: 'Teacher List', icon: <ListOrdered />, path: "/dashboard/TeacherList/:id" },
      ],
    },
    {
              name: 'Subject',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Subject Add',icon: <FilePlus />,path:"/dashboard/AddSubject/:id" },
                { name: 'Subject List', icon: <Book />,path:"/dashboard/SubjectList/:id" },
              ],
            },
            {
              name: 'Syllabus',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Syllabus Form', icon:  <ClipboardList />,path:"/dashboard/SyllabusForm/:id" },
                { name: 'Syllabus List', icon:  <FileText />,path:"/dashboard/SyllabusList/:id" },
              ],
            },
            {
              name: 'School',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Student Registration', icon: <UserCheck />, path: "/dashboard/StudentRegistration/:id" }, 
                { name: 'Teacher Registration', icon: <ClipboardList />, path: "/dashboard/TeacherRegistration/:id" }, 
            ],
            },
            {
              name: 'Classes',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Class Form', icon: <FilePlus />,path:"/dashboard/ClassForm/:id" },
                { name: 'Class List', icon: <ListOrdered />,path:"/dashboard/ClassList/:id" },
              ],
            },
            {
              name: 'Fees',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Fee Structure', icon:  <Coins />,path:"/dashboard/FeeStructure/:id" },
                { name: 'Fee Voucher', icon: <FileCheck2 />,path:"/dashboard/FeeVoucher/:id" },
                { name: 'Fee Payment', icon: <CalendarCheck />, path: "/dashboard/FeePayment/:id" },
            ]
        },
            {
              name: 'Admission',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Admission Form', icon: <FilePlus />,path:"/dashboard/ClassForm/:id"},
              ],
            },
            {
              name: 'Exams',
              icon: <LayoutDashboard />,
              subPages: [
                { name: 'Exam Schedule', icon: <CalendarCheck />,path:"/dashboard/ExamSchedule/:id" },
                { name: 'Exam Result', icon: <FileText />,path:"/dashboard/ExamResult/:id" },
              ],
            },
            {
                name: 'Profile',
                icon: <LayoutDashboard />,
                subPages: [
                { name: 'UserProfiile', icon: <UserCircle2 />,path:"/dashboard/Profile/:id" },
              ],
                
              }

  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((obj, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleDropdown(obj.name.toLowerCase())}>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.name} />
                <ExpandMoreIcon />
              </ListItemButton>
            </ListItem>

            <Collapse in={open[obj.name.toLowerCase()]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {obj.subPages.map((subPage, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} component={Link} to={subPage.path}>
                      <ListItemIcon>{subPage.icon}</ListItemIcon>
                      <ListItemText primary={subPage.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
      <Divider />
    </div>
  );

  const isDashboard = location.pathname === '/dashboard';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  
      position="fixed" 
    //   fullWidth
      sx={{background: "linear-gradient(to top right, #ffffff 10%, #673AB7 47%)",color:"black",width:"100%" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component={Link} to="/dashboard" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <DashboardIcon sx={{ mr: 1 }} /> Learning Management System
          </Typography>

        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': {boxSizing:"border-box",width:drawerWidth ,marginTop:"65px" }  }}
          open
        >
          {drawer}
        </Drawer>
        
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          
          {/* dashboard msg */}
       {/* <Typography color='black' textAlign={"center"} variant="h4">Dashboard </Typography> */}
          {/* dashboard msg */}

        </motion.div>

    

        <Routes>

          <Route path="/" element={<MainContent />} />
          <Route path="StudentList/:id" element={<StudentList />} />
          <Route path="StudentRegistration/:id" element={<StudentRegistration />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="TeacherList/:id" element={<TeacherList />} />
          <Route path="TeacherRegistration/:id" element={<TeacherRegistration />} />
          <Route path="TeacherEdit/:id" element={<TeacherEdit />} />
          <Route path="SubjectList/:id" element={<SubjectList />} />
          <Route path="AddSubject/:id" element={<AddSubject />} />
          <Route path="SyllabusForm/:id" element={<SyllabusForm />} />
          <Route path="SyllabusList/:id" element={<SyllabusList />} />
          <Route path="ClassList/:id" element={<ClassList />} />
          <Route path="ClassForm/:id" element={<ClassForm />} />
          <Route path="FeeStructure/:id" element={<FeeStructure />} />
          <Route path="FeeVoucher/:id" element={<FeeVoucher />} />
          <Route path="FeePayment/:id" element={<FeePayment />} />
          <Route path="ExamSchedule/:id" element={<ExamSchedule />} />
          <Route path="ExamResult/:id" element={<ExamResult />} />
          <Route path="Profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = { window: PropTypes.func };
export default Dashboard;