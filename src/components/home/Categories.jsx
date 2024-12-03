import React from "react";
import { Link } from "react-router-dom";
import Category1 from "../../assets/categories/Grocery.png";
import Category2 from "../../assets/categories/Dairy.png";
import Category3 from "../../assets/categories/Oil.png";
import Category4 from "../../assets/categories/Sweet.png";
import Category5 from "../../assets/categories/Frozen.png";
import Category6 from "../../assets/categories/Personalcare.png";
import Category7 from "../../assets/categories/Cleaning.png";

const Categories = () => {
  const categories = [
    {
      name: "Grocery Essentials",
      path: "fresh-vegetables-fruits",
      image: Category1 // placeholder for generic image
    },
    {
      name: "Dairy & Fresh Foods",
      path: "indian-grocery",
      image: Category2 // placeholder for generic image
    },
    {
      name: "Oils & Condiments",
      path: "puja-needs-idols",
      image: Category3 // placeholder for generic image
    },
    {
      name: "Snacks & Sweets",
      path: "personal-care",
      image: Category4 // placeholder for generic image
    },
    {
      name: "Frozen & Beverages",
      path: "cleaning-household",
      image: Category5 // placeholder for generic image
    },
    {
      name: "Health & Personal Care",
      path: "handlooms",
      image: Category6 // placeholder for generic image
    },
    {
      name: "Cleaning & Household",
      path: "handlooms",
      image: Category7 // placeholder for generic image
    }
  ];  

  return (
    <section>
      <div className="product__grid">
        {categories.map((Category) => (
            <Link key={Category.name} to={`/category/${Category.path}`} className="categories__card">
            <img src={Category.image} alt={Category.name}/>
            <p className="mt-2 text-sm leading-relaxed">{Category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
