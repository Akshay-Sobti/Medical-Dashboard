import { useState, useEffect } from "react";
import { 
  Box, Switch, Typography, Snackbar, Alert, Card, CardContent, IconButton 
} from "@mui/material";
import { DarkMode, LightMode, Notifications } from "@mui/icons-material";

const Settings = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [notification, setNotification] = useState<boolean>(false);

  // Apply dark mode class to body when enabled
  useEffect(() => {
    document.body.style.transition = "background 0.3s ease, color 0.3s ease";
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const handleNotification = () => {
    setNotification(true);
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: "400px", p: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Settings
          </Typography>

          {/* Dark Mode Toggle */}
          <Box mt={4} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton>
                {darkMode ? <DarkMode sx={{ color: "#fbc02d" }} /> : <LightMode sx={{ color: "#fbc02d" }} />}
              </IconButton>
              <Typography variant="h6">Dark Mode</Typography>
            </Box>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>

          {/* Enable Notifications Toggle */}
          <Box mt={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton>
                <Notifications color="primary" />
              </IconButton>
              <Typography variant="h6">Enable Notifications</Typography>
            </Box>
            <Switch onChange={handleNotification} />
          </Box>
        </CardContent>
      </Card>

      {/* Notification Popup */}
      <Snackbar
        open={notification}
        autoHideDuration={3000}
        onClose={() => setNotification(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          You enabled notifications!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Settings;

