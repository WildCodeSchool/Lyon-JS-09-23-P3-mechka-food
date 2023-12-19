import style from "./SearchContainer.module.css";

export default function SearcContainer() {
  return (
    <div className={style.container}>
      <input className={style.input} type="text" />
      <button type="button" className={style.button}>
        Search
      </button>
    </div>
  );
}
