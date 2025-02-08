import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const departmentData = [
  { name: "Neurology", percentage: 14, color: "#FFD700" }, // Gold
  { name: "Psychiatry", percentage: 15, color: "#FF69B4" }, // Pink
  { name: "Pediatrics", percentage: 14, color: "#32CD32" }, // Green
  { name: "Therapy", percentage: 12, color: "#87CEEB" }, // Light Blue
  { name: "Surgery", percentage: 45, color: "#FF4500" }, // Orange-Red (highest)
];

const PatientsByDepartment = () => {
  return (
    <Box p={2}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        📊 Number of Patients by Departments
      </Typography>
      <Grid container spacing={2}>
        {departmentData.map((dept, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: dept.color,
                borderRadius: "12px",
                color: "white",
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {dept.name}
                </Typography>
                <Typography variant="h5">{dept.percentage}%</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PatientsByDepartment;

