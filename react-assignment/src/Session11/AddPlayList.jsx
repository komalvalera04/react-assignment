/* 2. Create a React component called AddPlaylist that lets a user enter a playlist name and description, then use Axios to POST this data to https://jsonplaceholder.typicode.com/posts and show a success message when the request completes. */


import axios from 'axios';
import React,{useState} from 'react'


function AddPlayList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        setMessage("Playlist added successfully!");

        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to add playlist.");
      });
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Playlist description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">Add Playlist</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPlayList