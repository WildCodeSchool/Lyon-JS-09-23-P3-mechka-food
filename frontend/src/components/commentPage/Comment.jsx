import { useState } from "react";

import { Rating } from "@mui/material";
import styles from "./Comment.module.css";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    // eslint-disable-next-line no-shadow
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };
  return (
    <div className={styles.positionCommentForm}>
      <div className={styles.comment_flexbox}>
        <h3 className={styles.comment_text}>Laissez un commentaire !</h3>
        <div className={styles.ratingPostion}>
          <Rating defaultValue={0} precision={0.5} size="large" />
        </div>
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
          <div className={styles.comment_container}>{text}</div>
        ))}
      </div>
    </div>
  );
}
