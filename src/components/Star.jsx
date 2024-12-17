// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Star.module.css";
export default function Star() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      {/* <h1>Pure CSS Star Rating Widget</h1> */}
      <fieldset className={styles.rating}>
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          onChange={handleChange}
        />
        <label className={styles.full} htmlFor="star5" title="5 stars"></label>
        <input
          type="radio"
          id="star4half"
          name="rating"
          value="4.5"
          onChange={handleChange}
        />
        <label
          className={styles.half}
          htmlFor="star4half"
          title="4.5 stars"
        ></label>
        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          onChange={handleChange}
        />
        <label className={styles.full} htmlFor="star4" title="4 stars"></label>
        <input
          type="radio"
          id="star3half"
          name="rating"
          value="3.5"
          onChange={handleChange}
        />
        <label
          className={styles.half}
          htmlFor="star3half"
          title="3.5 stars"
        ></label>
        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          onChange={handleChange}
        />
        <label className={styles.full} htmlFor="star3" title="3 stars"></label>
        <input
          type="radio"
          id="star2half"
          name="rating"
          value="2.5"
          onChange={handleChange}
        />
        <label
          className={styles.half}
          htmlFor="star2half"
          title="2.5 stars"
        ></label>
        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          onChange={handleChange}
        />
        <label className={styles.full} htmlFor="star2" title="2 stars"></label>
        <input
          type="radio"
          id="star1half"
          name="rating"
          value="1.5"
          onChange={handleChange}
        />
        <label
          className={styles.half}
          htmlFor="star1half"
          title="1.5 stars"
        ></label>
        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          onChange={handleChange}
        />
        <label className={styles.full} htmlFor="star1" title="1 star"></label>
        <input
          type="radio"
          id="starhalf"
          name="rating"
          value="half"
          onChange={handleChange}
        />
        <label
          className={styles.half}
          htmlFor="starhalf"
          title="0.5 stars"
        ></label>
      </fieldset>
      <br />
      {/* <p>{ selectedValue }</p> */}
    </>
  );
}
