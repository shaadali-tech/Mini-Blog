import { useState } from "react";
import { createPost } from "../services/api";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createPost({ title, body });
    console.log(res.data);
    alert("Post Created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
