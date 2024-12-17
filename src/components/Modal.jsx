import React, { useState, useEffect } from "react";
import styles from "../styles/Modal.module.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setModal(true);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* <button onClick={toggleModal} className={styles["btn-modal"]}>
        xxx
      </button> */}
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles["modal-content"]}>
            <div className={styles["close-modal-container"]}>
              <button onClick={toggleModal} className={styles["close-modal"]}>
                x
              </button>
            </div>
            <h1> GET 15% OFF</h1>
            <h3>SITEWIDE SALE</h3>
            <p>
              Enter your email and get a discount on your
              <br></br>
              purchase of $60 or more
            </p>
            <form action="">
              <input type="Email " placeholder="Email" />
              <br></br>
              <br></br>
              <button className={styles["submit-btn"]} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
