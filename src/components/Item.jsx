import styles from "../styles/Items.module.css";
import Star from "../components/Star";
export default function Product() {
  return (
    <>
      <div className={styles.body}>
        {/* <h1>Welcome to the Shopping Website</h1> */}
      </div>
      <div className={styles.container}>
        <div className={styles.somethingContainer}></div>
        <div className={styles.ratingContainer}>
          <h2>Title</h2>
          <Star className={styles["starB"]}></Star>
          <div className={styles.container2}>
            <div className={styles.smallbox}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                exercitationem repudiandae nemo temporibus modi quidem sapiente
                tenetur odio, possimus est veniam unde sit, ducimus vitae cumque
                placeat quisquam, corporis assumenda?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.fakeImage}></div>
        {/* <br />
        <div className={styles.smallbox}>small box 3</div> */}
      </div>

      {/* <div className={styles.containerbig}>
        <div className={styles.bigbox}>big box picture</div>
      </div> */}
    </>
  );
}
