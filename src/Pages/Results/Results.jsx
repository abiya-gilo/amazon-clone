import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import classes from "./Results.module.css";

function Results() {
  const { categoryName } = useParams(); // ✅ get category from URL
  const [products, setProducts] = useState([]); // ✅ store products
  const [isLoading, setIsLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>

        <p style={{ padding: "30px" }}>Category / {categoryName}</p>

        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product__container}>
            {products.map((singleProduct) => (
              <ProductCard
                key={singleProduct.id}
                renderAdd={true}
                product={singleProduct}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
