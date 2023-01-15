import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [post, setPosts] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <h1>Axios</h1>
      <input
        type="text"
        defaultValue={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p>{post.title}</p>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AxiosDemo;
