import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { post } = location;

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const fetchedComments = await response.json();
      setComments(fetchedComments);
      setLoading(false);
    };
    fetchComments();
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post?.title}</h1>
          <h3>{post?.body}</h3>
          <div className="commentSection">
            <h4>{comments?.length} Comments:</h4>
            {loading ? (
              <div>loading...</div>
            ) : (
              <ul className="commentListSection">
                {comments?.map((comment) => {
                  return (
                    <li key={comment.id} className="listComment">
                      <div>
                        <span className="avatar">{comment.name[0].toUpperCase()}</span>
                      </div>
                      <div className="comment">
                        <div>
                          <span className="name">{comment.name}</span>
                          <span>{comment.email}</span>
                        </div>

                        <p>{comment.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>Oops, something went wrong. Return to posts page.</div>
      )}
    </div>
  );
};

export default PostDetails;
