import React from "react";
import styles from "./Header.module.css"; // import modular CSS

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <a href="/" className={styles.logoLink}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          className={styles.logo}
        />
      </a>

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

      {/* Right Side Links */}
      <div className={styles.rightLinks}>
        <a href="/signin" className={styles.link}>
          <p className={styles.smallText}>Hello, Sign In</p>
          <span className={styles.boldText}>Account & Lists</span>
        </a>
        <a href="/orders" className={styles.link}>
          <p className={styles.smallText}>Returns</p>
          <span className={styles.boldText}>& Orders</span>
        </a>
        <a href="/cart" className={`${styles.link} ${styles.cart}`}>
          🛒
          <span className={styles.cartCount}>0</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
