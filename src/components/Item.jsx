import styles from "../styles/Items.module.css";

export default function Product() {
  return (
    <>
      <div className={styles.body}>
        {/* <h1>Welcome to the Shopping Website</h1> */}
      </div>
      <div className={styles.container}>
        <div className={styles.smallbox}>small box 1</div>
        <div id={styles.productImages} className={styles.smallbox}>
          small box 2
        </div>
        <div className={styles.smallbox}>small box 3</div>
        <div className={styles.smallbox}>small box 4</div>
        <div className={styles.smallbox}>small box 5</div>
      </div>

      {/* <div className={styles.containerbig}>
        <div className={styles.bigbox}>big box picture</div>
      </div> */}
    </>
  );
}
