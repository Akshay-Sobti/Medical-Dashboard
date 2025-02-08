import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Typography, Box, Paper, TextField, InputAdornment 
} from "@mui/material";
import { Search, TrendingUp, TrendingDown, Remove } from "@mui/icons-material";

const testsData = [
  { test: "Blood Test", result: "Normal", date: "2025-02-05", indicator: "up" },
  { test: "X-Ray", result: "Abnormal", date: "2025-01-30", indicator: "down" },
  { test: "MRI Scan", result: "Pending", date: "2025-02-02", indicator: "neutral" },
  { test: "ECG", result: "Normal", date: "2025-02-04", indicator: "up" },
  { test: "CT Scan", result: "Abnormal", date: "2025-01-28", indicator: "down" },
  { test: "Urine Test", result: "Normal", date: "2025-02-01", indicator: "up" },
  { test: "Liver Function Test", result: "Normal", date: "2025-02-06", indicator: "up" },
  { test: "Kidney Function Test", result: "Abnormal", date: "2025-01-20", indicator: "down" },
  { test: "Thyroid Test", result: "Pending", date: "2025-02-03", indicator: "neutral" },
  { test: "Vitamin D Test", result: "Normal", date: "2025-02-07", indicator: "up" },
  { test: "Cholesterol Test", result: "Abnormal", date: "2025-01-22", indicator: "down" },
  { test: "Diabetes Test", result: "Normal", date: "2025-02-08", indicator: "up" },
  { test: "HIV Test", result: "Pending", date: "2025-02-09", indicator: "neutral" },
  { test: "Dengue Test", result: "Normal", date: "2025-02-10", indicator: "up" },
  { test: "Malaria Test", result: "Abnormal", date: "2025-02-11", indicator: "down" },
  { test: "Allergy Test", result: "Pending", date: "2025-02-12", indicator: "neutral" },
];

const getIndicatorIcon = (status) => {
  switch (status) {
    case "up":
      return <TrendingUp color="success" />;
    case "down":
      return <TrendingDown color="error" />;
    default:
      return <Remove color="warning" />;
  }
};

const TestsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = testsData.filter((test) =>
    test.test.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box mt={6} px={3} sx={{ width: "100%", maxWidth: 800 }}> {/* Increased spacing and width */}
      
      {/* Tests Heading */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
        TESTS
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a test..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2, maxWidth: 500 }} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      {/* Table with Scrollable Box */}
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3, maxHeight: 450, overflowY: "auto" }}> 
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>Test</strong></TableCell>
              <TableCell><strong>Result</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Indicator</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTests.length > 0 ? (
              filteredTests.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.test}</TableCell>
                  <TableCell>{row.result}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{getIndicatorIcon(row.indicator)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No tests found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TestsTable;

