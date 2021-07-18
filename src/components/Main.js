import React from "react";
import LinkCaret from "./LinkCaret";

const Main = () => (
  <main className="container">
    <div className="main-hero">
      <div className="hero-link-group">
        <LinkCaret link={"#"} label="Desktop" />
        <LinkCaret link={"#"} label="Laptop" />
        <LinkCaret link={"#"} label="Men's Watch" />
        <LinkCaret link={"#"} label="Microwave Oven" />
        <LinkCaret link={"#"} label="Motor Bike" />
        <LinkCaret link={"#"} label="Refrigerator" />
        <LinkCaret link={"#"} label="Smart Phone" />
        <LinkCaret link={"#"} label="Smart TV" />
        <LinkCaret link={"#"} label="Speaker" />
        <LinkCaret link={"#"} label="Split AC" />
      </div>
      <div className="hero-carousel-container">
        <div className="hero-carousel"></div>
        <div className="priority-store">
          <p>Evaly Priority Store</p>
          <p>Evaly Priority Store Priority Services</p>
        </div>
      </div>
    </div>
    <div className="shop-slider">
      <div className="slider-header">
        <div className="slider-title">Evaly Express</div>
        <div className="slider-buttons">
          <a href="#">See All</a>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              size="24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            </svg>
          </button>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              size="24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="slider-item-group">
        <div className="slider-item">
          <img src={require("../assets/express-img/1.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/2.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/3.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/4.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/5.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/6.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/express-img/7.jpeg").default} />
        </div>
      </div>
    </div>
    <div className="shop-slider">
      <div className="slider-header">
        <div className="slider-title">Shops - Cash on Delivery</div>
        <div className="slider-buttons">
          <a href="#">See All</a>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              size="24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            </svg>
          </button>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              size="24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="slider-item-group">
        <div className="slider-item">
          <img src={require("../assets/shop-img/1.jpg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/2.jpg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/3.jpeg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/4.png").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/5.jpg").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/6.png").default} />
        </div>
        <div className="slider-item">
          <img src={require("../assets/shop-img/7.png").default} />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
