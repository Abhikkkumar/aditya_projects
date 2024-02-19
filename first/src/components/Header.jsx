import React from "react";
import menu from "../assets/menu.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={menu} alt="" />
        <span>Analytics</span>
      </div>
      <div className="navlist">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
          alt=""
        />
      </div>
    </div>
  );
}
