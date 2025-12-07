import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";

function ProductCard({ product }) {
  const { image, title, rating, price } = product;

  return (
    <div className={classes.card__container}>
      <a href="">
        <img src={image} alt={title} className={classes.card__image} />
      </a>

      <div className={classes.card__details}>
        <h3 className={classes.card__title}>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small className={classes.rating__count}>{rating.count}</small>
        </div>

        <CurrencyFormat amount={price} />

        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
