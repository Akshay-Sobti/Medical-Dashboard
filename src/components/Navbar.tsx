import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        bgcolor: "#F5F8FC",
      }}
    >
      <Typography variant="h6">DASHBOARD</Typography>
    </Box>
  );
};

export default Navbar;

