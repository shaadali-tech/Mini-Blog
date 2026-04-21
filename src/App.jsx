import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Posts />} />

          <Route path="/posts/:id" element={<PostDetail />} />

          <Route path="/create" element={<CreatePost />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
