import { Box, Typography, Divider } from "@mui/material";
import Sidebar from "../components/Sidebar";
import HistoryTable from "../components/HistoryTable";
import TestsTable from "../components/TestsTable";
import Schedule from "../components/Schedule";
import Chart from "../components/Chart";
import PatientsByDepartment from "../components/PatientsByDepartment";

const Dashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#BBDEFB", // 🔹 Light Blue Background for the Outer Area
        display: "flex",
      }}
    >
      {/* Sidebar (Fully Stretched to Cover Left Side) */}
      <Box sx={{ width: "250px", height: "100vh", backgroundColor: "#E3F2FD", display: "flex", flexDirection: "column" }}>
        <Sidebar />
      </Box>

      {/* Divider between Sidebar and Dashboard Content */}
      

      <Box flex={1} display="flex">
        {/* Left Side: Dashboard Content */}
        <Box
          flex={0.8}
          pr={3}
          sx={{
            backgroundColor: "#E3F2FD",
            borderRadius: "10px 0 0 10px",
            padding: "20px",
            overflowY: "auto",
            scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" }
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            DASHBOARD
          </Typography>

          <PatientsByDepartment />
          <Chart />
          <Schedule />
        </Box>

        {/* Divider Line - Now a Plane Line Without Scrollbar */}
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, height: "100vh", backgroundColor: "#000000" }} />

        {/* Right Side: Tests & History */}
        <Box flex={1.2} pl={3} sx={{ overflowY: "auto", backgroundColor: "#FFFFFF", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}> {/* Right side background set to white */}
          

          

          <Typography variant="h5" fontWeight="bold" mt={3} mb={1}>
            HISTORY
          </Typography>

          

          <HistoryTable />

          <TestsTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

