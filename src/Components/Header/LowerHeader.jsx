import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"; // same CSS module

function LowerHeader() {
  return (
    <nav className={classes.lower_container}>
      <ul className={classes.navList}>
        <li className={`${classes.navItem} ${classes.all}`}>
          <AiOutlineMenu className={classes.menuIcon} />
          <p>All</p>
        </li>
        <li className={classes.navItem}>Today's Deals</li>
        <li className={classes.navItem}>Customer Service</li>
        <li className={classes.navItem}>Registry</li>
        <li className={classes.navItem}>Gift Cards</li>
        <li className={classes.navItem}>Sell</li>
      </ul>
    </nav>
  );
}

export default LowerHeader;
