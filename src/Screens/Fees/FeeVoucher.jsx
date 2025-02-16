import React from "react";
import { Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate} from "react-router-dom";


const FeeVoucher = () => {

        const navigate = useNavigate();
    
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: "80%",
          height: "auto",
          marginX: "auto",
          padding: 3,
          backgroundColor: "#f5f5f5",
        // backgroundColor: "lightblue",
          borderRadius: 2,
          marginBottom: 8,
        }}
      >
     <h1 style={{ textAlign: "center" }}>Fee Voucher</h1>

        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 1</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 1</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>500 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>6000 PKR</p>
            </div>
            <br />
            <div style={{ textAlign: "center", marginTop: 10 }}>
            <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}}variant="contained" color="primary">Submit Fee</Button>
            </div>

          </Paper>
        </motion.div>

        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 2</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 2</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>600 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>7200 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 3</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 3</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>700 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>8400 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 4</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 4</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>800 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>9600 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}}  variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 5</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 5</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>900 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>10800 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 6</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 6</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>1000 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>12000 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 7</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 7</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>1100 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>13200 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 8</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 8</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>1200 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>14400 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>


        <br />
        <br />
        <br />

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              marginBottom:8,

            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 9</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 9</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>1300 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>15600 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10 }} 
        >
          <Paper
            elevation={4}
            sx={{
              width: "80%",
              height: "auto",
              marginX: "auto",
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              marginBottom:8,
            }}
          >
            <h3 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>Class 10</h3>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Class:</p>
              <p style={{ fontWeight: "bold", color: "#1976D2" }}>Class 10</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Monthly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>1400 PKR</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
              <p style={{ fontWeight: "bold" }}>Yearly Fee:</p>
              <p style={{ fontWeight: "bold", color: "green" }}>10068 PKR</p>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
        <Button onClick={()=>{ navigate("/dashboard/FeePayment/:id")}} variant="contained" color="primary">Submit Fee</Button>
      </div>

          </Paper>
        </motion.div>
      </Paper>
    </>
  );
};

export default FeeVoucher;
