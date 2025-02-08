import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/profile");
    }
  };

  const handleSocialLogin = (provider: string) => {
    let url = "";
    switch (provider) {
      case "google":
        url = "https://accounts.google.com/signup";
        break;
      case "facebook":
        url = "https://www.facebook.com/login/";
        break;
      case "github":
        url = "https://github.com/login";
        break;
      case "twitter":
        url = "https://twitter.com/i/flow/login";
        break;
    }
    window.location.href = url;
  };

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4" fontWeight="bold">Login / Sign Up</Typography>

      <Box mt={3} maxWidth="400px" mx="auto">
        <TextField 
          label="Email" 
          fullWidth 
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        <Button 
          variant="contained" 
          color="error" 
          sx={{ mb: 2, width: "180px" }} 
          onClick={() => handleSocialLogin("google")}
        >
          Google
        </Button>

        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mb: 2, width: "180px" }} 
          onClick={() => handleSocialLogin("facebook")}
        >
          Facebook
        </Button>

        <Button 
          variant="contained" 
          color="inherit" 
          sx={{ mb: 2, width: "180px" }} 
          onClick={() => handleSocialLogin("github")}
        >
          GitHub
        </Button>

        <Button 
          variant="contained" 
          color="info" 
          sx={{ mb: 2, width: "180px" }} 
          onClick={() => handleSocialLogin("twitter")}
        >
          Twitter
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

