import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentById from "./CommentById";

import styles from "./Comment.module.css";

export default function Comment() {
  const [comment, setComment] = useState("");
  const { id: CommentRecipeId } = useParams();

  // Hook pour la navigation
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  function refreshPage() {
    window.location.reload();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/recipes/${CommentRecipeId}/comment`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment, CommentRecipeId }),
        }
      );

      if (response.status === 201) {
        console.info("Comment posted successfully!");
        setComment("");
        refreshPage();
      } else {
        console.error("Failed to post comment:", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className={styles.positionCommentForm}>
      <button type="submit" onClick={() => navigate(-1)}>
        back
      </button>
      <section className={styles.comment_flexbox}>
        <h3 className={styles.comment_text}>Laissez un commentaire !</h3>
        <textarea
          maxLength={250}
          value={comment}
          onChange={handleInputChange}
          className={styles.input_box}
          name="comment"
        />
        <div className={styles.buttonPosition}>
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.comment_button}
          >
            Poster
          </button>
        </div>
      </section>
      <section className={styles.main_container}>
        <CommentById />
      </section>
    </div>
  );
}
