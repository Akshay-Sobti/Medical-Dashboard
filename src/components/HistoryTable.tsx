import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, Typography, Grid, Paper, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import dayjs from "dayjs"; // Importing dayjs for date handling

const columns = [
  { 
    field: "avatar", 
    headerName: " ", 
    width: 50, 
    renderCell: (params) => <Avatar src={params.value} alt="Patient Avatar" /> 
  },
  { field: "name", headerName: "Patient", width: 150 },
  { field: "treatment", headerName: "Treatment", width: 150 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "status", headerName: "Status", width: 100 },
];

const today = dayjs().format("MM/DD/YY");
const futureDate = dayjs().add(3, "day").format("MM/DD/YY"); // Example: Appointment in 3 days

const initialRows = [
  { id: 1, avatar: "https://randomuser.me/api/portraits/women/1.jpg", name: "Suzana R.", treatment: "Heart failure", date: "10/21/22", status: "Active" },
  { id: 2, avatar: "https://randomuser.me/api/portraits/women/2.jpg", name: "Barbara C.", treatment: "Conjunctivitis", date: "10/21/22", status: "Completed" },
  { id: 3, avatar: "https://randomuser.me/api/portraits/men/3.jpg", name: "John H.", treatment: "Diabetes", date: "10/21/22", status: "Active" },
  { id: 4, avatar: "https://randomuser.me/api/portraits/men/4.jpg", name: "Mark T.", treatment: "Flu", date: today, status: "New" },
  { id: 5, avatar: "https://randomuser.me/api/portraits/women/5.jpg", name: "Emily J.", treatment: "Allergy", date: futureDate, status: "New" },
  { id: 6, avatar: "https://randomuser.me/api/portraits/men/6.jpg", name: "Kevin M.", treatment: "Asthma", date: "01/15/24", status: "Completed" },
  { id: 7, avatar: "https://randomuser.me/api/portraits/women/7.jpg", name: "Sophia L.", treatment: "Migraine", date: "02/01/24", status: "Pending" }
];

const HistoryTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredRows(
      initialRows.filter(
        (row) =>
          row.name.toLowerCase().includes(query) ||
          row.treatment.toLowerCase().includes(query) ||
          row.status.toLowerCase().includes(query)
      )
    );
  };

  const allPatients = initialRows.length;
  const completedPatients = initialRows.filter(row => row.status === "Completed").length;
  const pendingPatients = initialRows.filter(row => row.status === "Active").length;
  const newPatients = initialRows.filter(row => row.status === "New").length;

  return (
    <Box p={2}>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: "center", backgroundColor: "#e3f2fd" }}>
            <Typography variant="subtitle1">All Patients</Typography>
            <Typography variant="h6">{allPatients}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: "center", backgroundColor: "#c8e6c9" }}>
            <Typography variant="subtitle1">Completed</Typography>
            <Typography variant="h6">{completedPatients}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: "center", backgroundColor: "#fff9c4" }}>
            <Typography variant="subtitle1">Pending</Typography>
            <Typography variant="h6">{pendingPatients}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: "center", backgroundColor: "#ffcdd2" }}>
            <Typography variant="subtitle1">New</Typography>
            <Typography variant="h6">{newPatients}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Search Bar */}
      <Box mb={2}>
        <TextField
          fullWidth
          placeholder="Search Patients"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
      </Box>
      
      <DataGrid rows={filteredRows} columns={columns} pageSizeOptions={[5]} autoHeight rowHeight={60} />
    </Box>
  );
};

export default HistoryTable;

