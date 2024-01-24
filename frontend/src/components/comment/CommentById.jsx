import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CommentById() {
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${id}/comment`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [id]);

  return (
    <section>
      {comments !== null &&
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
    </section>
  );
}
