import { useState } from "react";

import styles from "./Comment.module.css";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments([...comments, comment]);
  };
  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };
  return (
    <div className={styles.positionCommentForm}>
      <div className={styles.comment_flexbox}>
        <h3 className={styles.comment_text}>Laissez un commentaire !</h3>
        <textarea
          maxLength={250}
          value={comment}
          onChange={onChangeHandler}
          className={styles.input_box}
        />
        <div className={styles.buttonPosition}>
          <button
            type="submit"
            onClick={onClickHandler}
            className={styles.comment_button}
          >
            Poster
          </button>
        </div>
      </div>
      <div className={styles.main_container}>
        {comments.map((text) => (
          <div key={text} className={styles.commentCard}>
            <div className={styles.comment_container}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
