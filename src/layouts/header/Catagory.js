// import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
// import logoWhite from "/img/logo/logo-white.png";
// import logo from "/img/logo/logo.png";

const Catagory = ({ whiteMenu }) => {
  const [catMenu, setCatMenu] = useState(false);
  let category = [
    "furniture",
    "ladies",
    "gent",
    "Clothing",
    "jacket",
    "tshart",
    "lamp",
    "chair",
  ];
  return (
    <Fragment>
      <div className="d-flex">
        <div
          className="basic-bar cat-toggle"
          onClick={() => setCatMenu(!catMenu)}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </div>
      </div>
      <div className="logo mt-2">
        <Link href="/">
          <a>
            <img
              src={
                whiteMenu ? "/img/logo/logo-white.png" : "/img/logo/logo.png"
              }
              alt="Logo"
            />
          </a>
        </Link>
      </div>

      <div className={`category-menu d-block ${catMenu ? "block" : ""}`}>
        <h4>Category</h4>
        <ul>
          {category &&
            category.map((category) => (
              <li key={category}>
                <Link href="/shop">
                  <a className="text-capitalize">
                    <i className="flaticon-shopping-cart-1" /> {category}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Catagory;
