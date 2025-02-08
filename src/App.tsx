import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotesPage from "./components/NotesPage"; // Updated path
import Sidebar from "./components/Sidebar"; // Sidebar remains persistent

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notes" element={<NotesPage />} /> {/* Notes Page Route */}
      </Routes>
    </Router>
  );
}

export default App;

