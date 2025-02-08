import { Box, List, ListItemButton, ListItemText, Avatar, Divider, Popover, Typography, Button, TextField } from "@mui/material";
import { SettingsOutlined, Person, Dashboard as DashboardIcon, NotificationsActive, FiberManualRecord, NoteAdd } from "@mui/icons-material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const handleNotificationsClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const id = open ? "notifications-popover" : undefined;

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        width: expanded ? "250px" : "60px",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        transition: "width 0.3s ease-in-out",
        overflow: "hidden",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: expanded ? "2px 0px 5px rgba(255, 255, 255, 0.2)" : "none",
        "&:hover": { width: "250px" },
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <MedicalServicesIcon sx={{ fontSize: 40, color: "#fff" }} />
      </Box>

      <List>
        <ListItemButton onClick={() => navigate("/")}> 
          <Avatar sx={{ width: 32, height: 32, mr: expanded ? 1 : "auto", bgcolor: "#2196F3" }}>
            <DashboardIcon />
          </Avatar>
          {expanded && <ListItemText primary="Dashboard" sx={{ color: "#fff" }} />}
        </ListItemButton>

        <ListItemButton onClick={handleNotificationsClick}> 
          <Avatar sx={{ width: 32, height: 32, mr: expanded ? 1 : "auto", bgcolor: "#FF9800" }}>
            <NotificationsActive />
          </Avatar>
          {expanded && <ListItemText primary="Notifications" sx={{ color: "#fff" }} />}
        </ListItemButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Box p={2} sx={{ width: "200px", backgroundColor: "#333", color: "#fff" }}>
            <Typography variant="h6">Notifications</Typography>
            {["You have to visit the doctor on 2025-02-15", "Visit the dentist on 2025-02-20", "Go for a complete body check-up", "Your lab results are available"].map((text, index) => (
              <Box key={index} display="flex" alignItems="center" gap={1} mt={1}>
                <FiberManualRecord sx={{ fontSize: 8, color: "#FF5722" }} />
                <Typography variant="body2">{text}</Typography>
              </Box>
            ))}
          </Box>
        </Popover>

        <ListItemButton onClick={() => navigate("/notes")}> 
          <Avatar sx={{ width: 32, height: 32, mr: expanded ? 1 : "auto", bgcolor: "#673AB7" }}>
            <NoteAdd />
          </Avatar>
          {expanded && <ListItemText primary="Notes" sx={{ color: "#fff" }} />}
        </ListItemButton>
      </List>

      <Divider sx={{ my: 1, backgroundColor: "#555" }} />

      <List sx={{ marginTop: "auto", marginBottom: "20px" }}> 
        <ListItemButton onClick={() => navigate("/settings")}> 
          <Avatar sx={{ width: 32, height: 32, mr: expanded ? 1 : "auto", bgcolor: "#4CAF50" }}>
            <SettingsOutlined />
          </Avatar>
          {expanded && <ListItemText primary="Settings" sx={{ color: "#fff" }} />}
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/profile")}> 
          <Avatar sx={{ width: 32, height: 32, mr: expanded ? 1 : "auto" }} src="https://randomuser.me/api/portraits/men/50.jpg" />
          {expanded && <ListItemText primary="Profile" sx={{ color: "#fff" }} />}
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;

