import React from 'react'
import { Button, Paper,TextField, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const FeePayment = () => {
    const navigate = useNavigate();

  return (
    <>
        
         <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>

         <h1 style={{textAlign:"center"}}>Payment Form</h1>
        
            <br />
        
        <label>Name
            <TextField
              fullWidth
            />
            </label>
            <br />
            <br />
        
        <label>Class
            <TextField
              fullWidth
            />
            </label>
            <br />
            <br />
            <label>Amount
            <TextField
              fullWidth
            />
            </label>
           <br/>
           <br/>

           <label> Payment Method
           <TextField
            select
            fullWidth
            variant="outlined"
            >
            <MenuItem         
            sx={{
             "&:hover": 
             { backgroundColor: "lightgreen" },
             }} 
             value="debit">
             Debit Card</MenuItem>
             <MenuItem 
              sx={{
              "&:hover": 
             { backgroundColor: "lightgreen" },
             }}
             value="credit">
            Credit Card</MenuItem>
             <MenuItem 
              sx={{
             "&:hover": 
             { backgroundColor: "lightgreen" },
             }}
             value="paypal">
             PayPal</MenuItem>
             </TextField>
             </label>
           
           <br />
           <br /> 

<div style={{display:"flex",justifyContent:"center",marginTop:12}}>
    
           <Button 
           onClick={()=>{
            navigate("/dashboard/FeeStructure/:id")
                             toast('Fee submission successful! Thank you for your payment.")...', {
                                                          position: "top-right",
                                                          autoClose: 5000,
                                                          hideProgressBar: false,
                                                          closeOnClick: false,
                                                          pauseOnHover: true,
                                                          draggable: true,
                                                          progress: undefined,
                                                          theme: "light",
                                                          });
           }}
           variant="contained" 
           color="success">
           Submit Payment</Button>
           
</div>
           
           
        </Paper>


    
    </>
)
}

export default FeePayment