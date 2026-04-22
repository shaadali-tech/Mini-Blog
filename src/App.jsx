import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import PostDetail from "./pages/PostDetail";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/Createpost";
import Login from "./pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/posts/:id" element={<PostDetail />} />

          <Route path="/create" element={<CreatePost />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
