import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  if (isAuthenticated === null) return null; // Wait for auth check

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <Box p={3} textAlign="center">
      <Typography variant="h3" fontWeight="bold">User Profile</Typography>
      <Typography variant="subtitle1">Manage your account details.</Typography>

      <Box mt={3}>
        <Typography variant="h5">Name: John Doe</Typography>
        <Typography variant="h6">Email: johndoe@example.com</Typography>
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Edit Profile
      </Button>

      <Button 
        variant="contained" 
        color="error" 
        sx={{ mt: 3, ml: 2 }} 
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Profile;

