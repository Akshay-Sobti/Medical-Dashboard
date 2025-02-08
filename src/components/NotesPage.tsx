import { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

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
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Notes
      </Typography>
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          label="Add a new note"
          variant="outlined"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddNote}>
          Add
        </Button>
      </Box>
      <List sx={{ mt: 3 }}>
        {notes.map((note, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" color="error" onClick={() => handleDeleteNote(index)}>
                <Delete />
              </IconButton>
            }
            sx={{ backgroundColor: "#fff", borderRadius: 1, mb: 1 }}
          >
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotesPage;

