import React from "react";
import "./home.css";
import Card_1 from "./Card_1";
import { cardprop1 } from "../Data";
import Header from "./Header";
import Calendar from "./Calendar";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="sub">
        <div className="home1">
          <div className="home11">
            <Card_1 cardProp={cardprop1} />
            <Card_1 cardProp={cardprop1} />
            <Card_1 cardProp={cardprop1} />
          </div>
        </div>
        <div className="home2">
          <div className="profileCard">
            <img
              className="pc-img"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
              alt=""
            />{" "}
            <div>
              <p>Maya R</p>
              <p>Tayro HQ</p>
              <p>UI/UX designer</p>
            </div>
            <div className="h4">
              <p>
                <img
                  className="profile-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                  alt=""
                />{" "}
                <span> Maya R</span>
              </p>
              <p>
                <img
                  className="profile-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                  alt=""
                />
                <span> Tayro HQ</span>
              </p>
            </div>
            <div className="h5">
              <p>maya@tairo.io</p>
              <img
                className="profile-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-calendar">
            <Calendar />
          </div>
          <div className="followers">
            <div className="foll-img-cnt">
              <img
                className="foll-img"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                alt=""
              />
              <img
                className="foll-img"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                alt=""
              />
              <img
                className="foll-img"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png"
                alt=""
              />
            </div>
            <p className="ooo">Followers</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium id excepturi omnis deleniti accusamus.
            </p>
          </div>
          <div className="notification">
              <p>Notification</p>
              <div className="n1">
                  <div >
                      <p>Personal</p>
                      <div className="circle">12</div>
                  </div>
                  <div >
                      <p>Personal</p>
                      <div className="circle">12</div>
                  </div>
                  <div >
                      <p>Personal</p>
                      <div className="circle">12</div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
