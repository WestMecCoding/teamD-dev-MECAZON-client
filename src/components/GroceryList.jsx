import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <h2><Link to="/Item">{i.name}</Link></h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
        </div>
      ))}
    </div>
  );
}
