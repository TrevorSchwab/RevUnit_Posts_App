import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h3>Posts:</h3>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul className="postListSection">
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                to={{
                  pathname: `/details/${post.id}`,
                  post,
                }}
              >
                <li className="listTitle">{post.title}</li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Posts;
