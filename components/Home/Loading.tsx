import ReactLoading from "react-loading";
import styles from "../../styles/Home.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div style={{ marginTop: "40vh" }}>
        <ReactLoading type={"bars"} color="#fff" className={styles.centered} />
        loading
      </div>
    </div>
  );
}
