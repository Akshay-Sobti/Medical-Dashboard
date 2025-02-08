import { LineChart } from "@mui/x-charts";
import { Box, Typography } from "@mui/material";

const data = [
  { day: "Mon", cardio: 0.5, therapy: 0.7, endo: 0.6 },
  { day: "Tue", cardio: 0.6, therapy: 0.8, endo: 0.7 },
  { day: "Wed", cardio: 0.7, therapy: 0.6, endo: 0.5 },
  { day: "Thu", cardio: 0.8, therapy: 0.7, endo: 0.6 },
  { day: "Fri", cardio: 0.6, therapy: 0.9, endo: 0.7 },
  { day: "Sat", cardio: 0.9, therapy: 0.8, endo: 0.8 },
  { day: "Sun", cardio: 0.7, therapy: 0.6, endo: 0.7 },
];

const Chart = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">NUMBER OF PATIENTS BY DEPARTMENTS</Typography>
      <LineChart
        width={600}
        height={250}
        series={[
          { data: data.map((d) => d.cardio), label: "Cardiology" },
          { data: data.map((d) => d.therapy), label: "Therapy" },
          { data: data.map((d) => d.endo), label: "Endocrinology" },
        ]}
        xAxis={[{ scaleType: "point", data: data.map((d) => d.day) }]}
      />
    </Box>
  );
};

export default Chart;

