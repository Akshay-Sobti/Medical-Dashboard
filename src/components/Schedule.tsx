import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent, Button, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 }
];

const scheduleData = [
  { date: 20, month: "January", type: "Physician", time: "10:00 - 11:00", doctor: "Dr. Mark P." },
  { date: 12, month: "February", type: "Orthopedic", time: "14:30 - 16:00", doctor: "Dr. Emma J." },
  { date: 20, month: "March", type: "Physician", time: "10:00 - 11:00", doctor: "Dr. Mark P." },
  { date: 12, month: "April", type: "Orthopedic", time: "14:30 - 16:00", doctor: "Dr. Emma J." },
  { date: 5, month: "May", type: "Dentist", time: "09:00 - 11:00", doctor: "Dr. Richard B." },
  { date: 10, month: "June", type: "Cardiologist", time: "13:00 - 14:00", doctor: "Dr. Jeniffer A." },
  { date: 3, month: "July", type: "Proctologist", time: "10:00 - 10:30", doctor: "Dr. Barbara C." },
  { date: 13, month: "August", type: "Surgeon", time: "12:00 - 13:50", doctor: "Dr. Ann K." },
  { date: 7, month: "September", type: "Dermatologist", time: "14:00 - 15:00", doctor: "Dr. Sam T." },
  { date: 15, month: "October", type: "Neurologist", time: "11:00 - 12:30", doctor: "Dr. Olivia R." },
  { date: 25, month: "November", type: "Ophthalmologist", time: "09:30 - 10:30", doctor: "Dr. Lisa W." },
  { date: 18, month: "December", type: "Endocrinologist", time: "11:00 - 12:00", doctor: "Dr. Kevin M." }
];

const Schedule = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 0 ? months.length - 1 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev === months.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box p={3} sx={{ bgcolor: "#EAF2FB", borderRadius: "12px", maxWidth: "700px", margin: "auto" }}>
      <Typography variant="h6" fontWeight="bold">📅 SCHEDULE</Typography>

      {/* Scrollable Months */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={2}>
        <Button onClick={handlePrevMonth}>{"<"}</Button>
        <Box display="flex" overflow="auto" width="100%">
          {months.map((month, index) => (
            <Typography
              key={month.name}
              variant="body1"
              fontWeight={index === currentMonthIndex ? "bold" : "normal"}
              sx={{
                cursor: "pointer",
                opacity: 1,
                whiteSpace: "nowrap",
                padding: "0 8px",
                textDecoration: index === currentMonthIndex ? "underline" : "none"
              }}
              onClick={() => setCurrentMonthIndex(index)}
            >
              {month.name.toUpperCase()}
            </Typography>
          ))}
        </Box>
        <Button onClick={handleNextMonth}>{">"}</Button>
      </Box>

      {/* Calendar Days */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2} gap={2}>
        {Array.from({ length: months[currentMonthIndex].days }, (_, i) => i + 1).map((day) => {
          const event = scheduleData.find(e => e.date === day && e.month === months[currentMonthIndex].name);
          return (
            <Tooltip
              key={day}
              title={event ? `${event.type} \n ${event.time} \n ${event.doctor}` : ""}
              arrow
            >
              <Box
                onClick={() => setSelectedDate(day)}
                sx={{
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  backgroundColor: selectedDate === day ? "#003366" : "transparent",
                  color: selectedDate === day ? "#fff" : "#000",
                  fontWeight: selectedDate === day ? "bold" : "normal",
                  position: "relative"
                }}
              >
                {day}
                {event && (
                  <Box
                    sx={{
                      width: "6px",
                      height: "6px",
                      bgcolor: "red",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-3px",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  />
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      {/* Event Details */}
      <Grid container spacing={2} mt={2}>
        {scheduleData
          .filter(event => event.date === selectedDate && event.month === months[currentMonthIndex].name)
          .map((event, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ borderRadius: "12px", bgcolor: "#fff", boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{event.type}</Typography>
                  <Typography variant="body2">{event.month} {event.date}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon color="action" />
                    <Typography variant="body2">{event.time}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PersonIcon color="action" />
                    <Typography variant="body2">{event.doctor}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Schedule;

