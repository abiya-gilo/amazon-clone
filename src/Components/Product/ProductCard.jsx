import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { useData } from "../dataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex }) {
  const { image, title, rating, price, id, description } = product;
  const { dispatch } = useData();

  const addToBasket = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      {flex ? (
        <img src={image} alt={title} className={classes.card__image} />
      ) : (
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} className={classes.card__image} />
        </Link>
      )}

      <div className={classes.card__details}>
        <h3 className={classes.card__title}>{title}</h3>

        {/*  Show description only in detail view */}
        {flex && <p className={classes.card__description}>{description}</p>}

        <div className={classes.rating}>
          <Rating
            name="interactive-rating"
            value={rating?.rate || 0}
            precision={0.5}
            readOnly={!flex} // interactive only in detail view
            sx={{
              "& .MuiRating-iconFilled": { color: "#FFD814" },
              "& .MuiRating-iconHover": { color: "#F7CA00" },
              "& .MuiRating-iconEmpty": { color: "#ccc" },
            }}
          />
          <small className={classes.rating__count}>{rating?.count}</small>
        </div>

        <CurrencyFormat amount={price} />

        <button className={classes.button} onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
