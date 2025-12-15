import React, { useContext } from "react";
import styles from "./Header.module.css";
import { DataContext } from "../dataProvider/DataProvider";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import amazonLogo from "../../assets/amazon_logo.png"; // ✅ local asset

function Header() {
  const {
    state: { basket },
  } = useContext(DataContext);

  return (
    <section className={styles.fixed}>
      <header className={styles.header}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {/* Logo */}
          <Link to="/" className={styles.logoLink}>
            <img src={amazonLogo} alt="amazon logo" className={styles.logo} />
          </Link>

          {/* Delivery */}
          <div className={styles.delivery}>
            <span role="img" aria-label="location">
              📍
            </span>
            <div>
              <p className={styles.deliveryText}>Delivery to</p>
              <span className={styles.deliveryCountry}>Ethiopia</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <select className={styles.searchSelect}>
              <option value="all">All</option>
            </select>
            <input
              type="text"
              placeholder="Search product"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>🔍</button>
          </div>

          {/* Language */}
          <div className={styles.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              className={styles.flag}
            />
            <select className={styles.languageSelect}>
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightLinks}>
          <Link to="/signin" className={styles.link}>
            <p className={styles.smallText}>Hello, Sign In</p>
            <span className={styles.boldText}>Account & Lists</span>
          </Link>
          <Link to="/orders" className={styles.link}>
            <p className={styles.smallText}>Returns</p>
            <span className={styles.boldText}>& Orders</span>
          </Link>
          <Link to="/cart" className={`${styles.link} ${styles.cart}`}>
            <BiCart size={35} />
            <span className={styles.cartCount}>{basket.length}</span>
          </Link>
        </div>
      </header>

      {/* ✅ Lower nav bar only once */}
      <LowerHeader />
    </section>
  );
}

export default Header;
