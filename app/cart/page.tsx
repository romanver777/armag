import CartList from "../components/cart-list/cart-list";
import styles from "./page.module.scss";

const PageCart = () => {
  return (
    <>
      <div className={styles.planeta} />
      <div className={styles.content}>
        <CartList />
      </div>
    </>
  );
};

export default PageCart;
