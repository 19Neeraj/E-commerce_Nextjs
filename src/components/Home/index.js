
import React, { useState } from "react";
import "./Home.css";
import about from "../images/car11.jpg";
import Netlify from "../images/Netlify.png";
import Connectgroup from "../images/Connect-group.png";
import Blender from "../images/Blender.png";
import Biocon from "../images/Biocon.png";
import PulteGroup from "../images/PulteGroup.png";
import car6 from "../images/car6.jpg";
import car2 from "../images/car2.jpg";
import car1 from "../images/car1.jpg";
import car4 from "../images/car4.jpg";
import car5 from "../images/car5.jpg";
import google from "../images/google.png";
import amazon from "../images/amazon.png";
import cocacola from "../images/coca-cola.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faGroupArrowsRotate,
  faMedal,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import mem1 from "../images/user1.jpg";
import mem2 from "../images/user2.jpg";
import mem3 from "../images/user3.jpg";
import mem4 from "../images/img-1.jpg";
import mem5 from "../images/img-3.jpg";
import mem6 from "../images/img-2.jpg";
import rev1 from "../images/1.png";
import rev2 from "../images/2.png";
import rev3 from "../images/3.png";
import logo from "../images/logo.png";
// import Header from "../Component/Header";

// import HandshakeIcon from "@mui/icons-material/Handshake";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import Diversity2Icon from "@mui/icons-material/Diversity2";
// import GroupsIcon from "@mui/icons-material/Groups";
export default function Home() {
  const seemore = () => {
    const service4 = document.getElementById("service-4");
    const service5 = document.getElementById("service-5");
    const seemoreSpan = document.getElementById("seemore-span");
    if (service4.classList.contains("lg:hidden")) {
      service4.classList.remove("lg:hidden");
      service5.classList.remove("lg:hidden");
      seemoreSpan.innerText = "See Less";
    } else {
      service4.classList.add("lg:hidden");
      service5.classList.add("lg:hidden");
      seemoreSpan.innerText = "See All";
    }
  };
  let isteamVisible = false;

  const seeall = () => {
    const Team2 = document.getElementById("team-2");

    isteamVisible = !isteamVisible;

    if (isteamVisible) {
      Team2.classList.remove("lg:hidden");
    } else {
      Team2.classList.add("lg:hidden");
    }
  };

  const Btn1 = () => {
    const Button1 = document.getElementById("Btn-1");
    const Button2 = document.getElementById("Btn-2");
    const Button3 = document.getElementById("Btn-3");
    const Button4 = document.getElementById("Btn-4");
    if (Button1.classList.contains("lg:w-3")) {
      Button1.classList.add("lg:w-6");
      Button2.classList.remove("lg:w-6");
      Button3.classList.remove("lg:w-6");
      Button4.classList.remove("lg:w-6");
    } else {
      Button1.classList.remove("lg:w-6");
    }
    document.getElementById("review1").style.transform = "translateX(0%)";
    document.getElementById("review2").style.transform = "translateX(0%)";
    document.getElementById("review3").style.transform = "translateX(0%)";
    document.getElementById("review4").style.transform = "translateX(0%)";
    document.getElementById("review5").style.transform = "translateX(0%)";
    document.getElementById("review6").style.transform = "translateX(0%)";
    document.getElementById("review7").style.transform = "translateX(0%)";
    document.getElementById("review8").style.transform = "translateX(0%)";
  };

  const Btn2 = () => {
    const Button1 = document.getElementById("Btn-1");
    const Button2 = document.getElementById("Btn-2");
    const Button3 = document.getElementById("Btn-3");
    const Button4 = document.getElementById("Btn-4");
    if (Button2.classList.contains("lg:w-3")) {
      Button1.classList.remove("lg:w-6");
      Button2.classList.add("lg:w-6");
      Button3.classList.remove("lg:w-6");
      Button4.classList.remove("lg:w-6");
    } else {
      Button2.classList.remove("lg:w-6");
    }
    document.getElementById("review1").style.transform = "translateX(720%)";
    document.getElementById("review2").style.transform = "translateX(720%)";
    document.getElementById("review3").style.transform = "translateX(-262%)";
    document.getElementById("review4").style.transform = "translateX(-262%)";
    document.getElementById("review5").style.transform = "translateX(-262%)";
    document.getElementById("review6").style.transform = "translateX(-262%)";
    document.getElementById("review7").style.transform = "translateX(-262%)";
    document.getElementById("review8").style.transform = "translateX(-262%)";
  };

  const Btn3 = () => {
    const Button1 = document.getElementById("Btn-1");
    const Button2 = document.getElementById("Btn-2");
    const Button3 = document.getElementById("Btn-3");
    const Button4 = document.getElementById("Btn-4");
    if (Button3.classList.contains("lg:w-3")) {
      Button1.classList.remove("lg:w-6");
      Button2.classList.remove("lg:w-6");
      Button3.classList.add("lg:w-6");
      Button4.classList.remove("lg:w-6");
    } else {
      Button3.classList.remove("lg:w-6");
    }
    document.getElementById("review1").style.transform = "translateX(524%)";
    document.getElementById("review2").style.transform = "translateX(524%)";
    document.getElementById("review3").style.transform = "translateX(524%)";
    document.getElementById("review4").style.transform = "translateX(524%)";
    document.getElementById("review5").style.transform = "translateX(-524%)";
    document.getElementById("review6").style.transform = "translateX(-524%)";
    document.getElementById("review7").style.transform = "translateX(-524%)";
    document.getElementById("review8").style.transform = "translateX(-524%)";
  };

  const Btn4 = () => {
    const Button1 = document.getElementById("Btn-1");
    const Button2 = document.getElementById("Btn-2");
    const Button3 = document.getElementById("Btn-3");
    const Button4 = document.getElementById("Btn-4");
    if (Button4.classList.contains("lg:w-3")) {
      Button1.classList.remove("lg:w-6");
      Button2.classList.remove("lg:w-6");
      Button3.classList.remove("lg:w-6");
      Button4.classList.add("lg:w-6");
    } else {
      Button4.classList.remove("lg:w-6");
    }
    document.getElementById("review1").style.transform = "translateX(265%)";
    document.getElementById("review2").style.transform = "translateX(265%)";
    document.getElementById("review3").style.transform = "translateX(265%)";
    document.getElementById("review4").style.transform = "translateX(265%)";
    document.getElementById("review5").style.transform = "translateX(265%)";
    document.getElementById("review6").style.transform = "translateX(265%)";
    document.getElementById("review7").style.transform = "translateX(-786%)";
    document.getElementById("review8").style.transform = "translateX(-786%)";
  };

  return (
    <>
      {/* <Header /> */}
      {/* ------------------------------------------------------
------------------------Home section----------------------------------
----------------------------------------------------------
         */}
      <section
        className=" lg:h-full lg:w-full lg:relative lg:top-0 lg:flex lg:flex-col lg:justify-evenly lg:bg-blue-950
         ss:w-full ss:h-full ss:bg-blue-950 ss:flex ss:flex-col "
        id="home"
      >
        <div
          className="lg:flex lg:flex-row lg:justify-around lg:items-center lg:mx-2 lg:relative lg:top-0 lg:h-screen 
        ss:flex ss:flex-row ss:justify-center ss:item-center ss:relative ss:top-0 ss:w-full ss:left-32px ss:h-96"
        >
          <div
            className="lg:flex lg:flex-col lg:justify-center lg:relative lg:top-0 lg:left-10 lg:items-start lg:border-l-neutral-950 lg:w-2/5   ss:flex ss:flex-col ss:w-72 ss:relative ss:top-16 ss:left-0 ss:h-3/4 ss:justify-center ss:items-start"
            id="heading"
          >
            <h1 className="lg:text-white lg:text-6xl lg:font-bold lg:relative lg:left-4 lg:top-0 lg:tracking-wider lg:leading-tight ss:text-white ss:text-4xl ss:tracking-normal ss:leading-tight ss:space-x-2 ss:font-medium">
              Perfect Place For Your Business Promotion
            </h1>
            <p className="lg:text-white lg:relative lg:left-4 lg:top-4 lg:tracking-wide lg:leading-relaxed ss:text-white ss:text-lg ss:font-medium ss:tracking-normal ss:mt-2">
              Howart Compliance is leading Nordic regtect{" "}
              <br className="ss:hidden lg:block" />
              and compliance conusmingfirm.
            </p>
            <button className="lg:bg-sky-500 lg:px-2 lg:py-1 lg:text-xl lg:text-white lg:rounded-full lg:w-40 lg:h-14 lg:relative lg:top-8 lg:left-2 ss:text-white ss:mt-2 ss:bg-sky-500 ss:w-32 ss:rounded-full ss:h-12 ss:font-medium ss:tracking-wider">
              Our Services
            </button>
          </div>
          <div
            className="lg:w-50 lg:h-80 lg:flex lg:justify-center lg:items-center lg:relative lg:top-0 ss:hidden"
            id="image"
          >
            <img
              src={about}
              alt=""
              className="lg:max-w-xl lg:rounded-3xl lg:relative lg:top-0 lg:-left-4"
            />
          </div>
        </div>
      </section>
      <div
        className="lg:bg-slate-50 lg:shadow-lg lg:shadow-slate-500 lg:relative lg:-top-16 lg:left-14 lg:border-orange-600 lg:z-1 lg:w-11/12 lg:h-40 lg:rounded-lg
        lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:justify-around lg:items-center
        
        ss:w-11/12 ss:h-20  ss:bg-slate-50 ss:shadow-lg ss:shadow-slate-500 ss:relative ss:-top-2 ss:left-2 ss:border-orange-600 ss:z-1 ss:rounded-ss ss:flex ss:flex-row ss:justify-evenly ss:items-center ss:rounded-md
        "
        id="partners"
      >
        <img
          src={Netlify}
          alt=""
          className="lg:max-w-none lg:w-3/4   lg:ml-7 ss:max-w-none ss:w-1/6"
        />
        <img
          src={Connectgroup}
          alt=""
          className="lg:max-w-none lg:w-3/4 lg:mx-7 ss:max-w-none ss:w-1/6"
        />
        <img
          src={Blender}
          alt=""
          className="lg:max-w-none  lg:w-3/4  lg:mx-7 ss:max-w-none ss:w-1/6"
        />
        <img
          src={Biocon}
          alt=""
          className="lg:max-w-none  lg:w-3/4  lg:mx-7 ss:max-w-none ss:w-1/6"
        />
        <img
          src={PulteGroup}
          alt=""
          className="lg:max-w-none  lg:w-3/4  lg:mx-7 ss:max-w-none ss:w-1/6"
        />
      </div>
      {/* ------------------------------------------------------
------------------------service section----------------------------------
----------------------------------------------------------
         */}
      <section
        id="service"
        className="lg:w-full lg:h-full lg:bg-white  lg:border-md lg:relative lg:top-12 lg:grid lg:grid-cols-1 lg:gap-y-4 lg:justify-center lg:items-center

        ss:w-full ss:h-full ss:bg-white ss:relative ss:top-12 ss:grid ss:grid-cols-1 ss:gap-y-4 ss:justify-center ss:items-center

        "
      >
        <div
          id="serviceheading"
          className="lg:w-full lg:h-24 lg:flex lg:flex-col lg:justify-center lg:items-center ss:relative ss:top-0
          ss:w-full ss:h-24 ss:flex ss:flex-col ss:justify-center ss:items-center"
        >
          <h2
            className="lg:text-black lg:text-5xl lg:font-bold lg:pr-44 lg:relative lg:tracking-wide  
                           ss:text-black ss:text-xl ss:font-bold  ss:relative ss:left-0 ss:flex ss:justify-center ss:items-center
          
          
          "
          >
            All the services that we provide
          </h2>
          <p
            className="lg:grid lg:justify-center lg:items-center lg:tracking-wide lg:text-xl   lg:pt-4 lg:pr-4
                        ss:justify-center ss:items-center ss:text-sm ss:text-16px ss:px-5"
          >
            At Howart Compliance we work actively to optimise business processes
            for you anabling compliance with new{" "}
            <br className="ss:hidden lg:block" />{" "}
            <span className="lg:pl-28">
              regulatory frameworks. Test prctice and ---------- ---------- By
              comaining practical
            </span>
          </p>
        </div>
        {/* ------------------------------------------------------
------------------------service 1----------------------------------
----------------------------------------------------------
         */}
        <div
          id="serivce-1"
          className="lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:h-full lg:w-full lg:relative lg:left-0 lg:top-20 lg:space-y-4      
          
          ss:flex ss:flex-col ss:justify-evenly ss:items-center ss:h-full ss:w-full ss:relative ss:left-0 ss:top-8 ss:space-y-4
          
          "
        >
          <img
            src={car1}
            alt=""
            className=" lg:max-w-none lg:w-5/12 lg:relative lg:top-2 lg:left-0 lg:rounded-3xl
            ss:max-w-none ss:w-72 ss:relative ss:top-0 ss:left-0 ss:rounded-3xl ss:mx-2"
          />
          <div
            className=" lg:grid lg:gap-y-3 lg:grid-row-3 lg:grid-cols-1 lg:h-72 lg:w-2/5 lg:relative lg:-top-6   lg:left-0
            ss:flex ss:flex-col ss:h-70 ss:top-0 ss:relative  ss:w-full ss:h-72 ss:px-1 "
            id="row1"
          >
            <h3 className="lg:text-2xl lg:font-bold  ss:text-2xl ss:w-4/6 ss:font-bold lg:w-2/5 ss:pl-2">
              FSA Application
            </h3>
            <p className="lg:w-11/12 lg:text-lg ss:w-80 ss:text-sm ss:px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              omnis veritatis illo velit totam. Maxime, facilis, atque ea
              quisquam voluptas est quibusdam repellendus perferendis veniam,
              architecto soluta. Voluptatem, eligendi saepe?
            </p>
            <div
              className="lg:grid lg:grid-cols-1 lg:grid-flow-row-4 lg:gap-y-1  lg:w-96
              ss:flex ss:flex-col"
              id="as-use-in"
            >
              <h5
                className="lg:text-lg lg:text-sky-900 lg:font-bold lg:relative lg:top-1   lg:w-72
              ss:text-base ss:pl-2  ss:text-sky-900 ss:font-bold ss:relative ss:top-1 ss:h-8"
              >
                As use in_
              </h5>
              <div
                className="lg:grid lg:grid-cols-4 lg:gap-x-2 lg:grid-row-1 lg:justify-between lg:items-center lg:w-96 lg:mt-2
                ss:flex ss:flex-row ss:justify-around ss:items-center ss:w-80 ss:px-2 "
                id="brands-images"
              >
                <img
                  src={google}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={amazon}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={cocacola}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/5"
                />{" "}
                <strong className="ss:-ml-1">+1200</strong>
              </div>
              <button
                className="lg:border-sky-500 lg:text-sky-500 lg:border-2 lg:rounded-full lg:w-38 lg:h-12 lg:font-bold  lg:text-lg
              ss:border-sky-500 ss:text-sky-500 ss:border-2 ss:rounded-full ss:w-28 ss:h-8 ss:font-bold ss:mt-1 ss:ml-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------
-----------------------------service 2-----------------------------
----------------------------------------------------------
         */}
        <div
          id="serivce-2"
          className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center lg:h-full lg:w-full lg:relative lg:left-0 lg:top-20 lg:my-8   
          
          ss:flex ss:flex-col ss:justify-around ss:items-center ss:h-180vh ss:w-81 ss:relative ss:left-0 ss:top-8 ss:space-y-4
          
          "
        >
          <img
            src={car2}
            alt=""
            className=" lg:max-w-none lg:w-5/12 lg:relative lg:top-2 lg:-left-8 lg:rounded-3xl
            ss:max-w-none ss:w-72 ss:relative ss:top-0 ss:left-0 ss:rounded-3xl ss:mx-2"
          />
          <div
            className=" lg:grid lg:gap-y-3 lg:grid-row-3 lg:grid-cols-1 lg:h-72 lg:w-2/5 lg:relative lg:-top-6   lg:left-8
            ss:flex ss:flex-col ss:h-70 ss:top-0 ss:relative  ss:w-full ss:h-72 ss:px-1 "
            id="row1"
          >
            <h3 className="lg:text-2xl lg:font-bold  ss:text-2xl ss:w-4/6 ss:font-bold lg:w-2/5 ss:pl-2">
              FSA Application
            </h3>
            <p className="lg:w-11/12 lg:text-lg ss:w-80 ss:text-sm ss:px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              omnis veritatis illo velit totam. Maxime, facilis, atque ea
              quisquam voluptas est quibusdam repellendus perferendis veniam,
              architecto soluta. Voluptatem, eligendi saepe?
            </p>
            <div
              className="lg:grid lg:grid-cols-1 lg:grid-flow-row-4 lg:gap-y-1  lg:w-96
              ss:flex ss:flex-col"
              id="as-use-in"
            >
              <h5
                className="lg:text-lg lg:text-sky-900 lg:font-bold lg:relative lg:top-1   lg:w-72
              ss:text-base ss:pl-2  ss:text-sky-900 ss:font-bold ss:relative ss:top-1 ss:h-8"
              >
                As use in_
              </h5>
              <div
                className="lg:grid lg:grid-cols-4 lg:gap-x-2 lg:grid-row-1 lg:justify-between lg:items-center lg:w-96 lg:mt-2
                ss:flex ss:flex-row ss:justify-around ss:items-center ss:w-80 ss:px-2 "
                id="brands-images"
              >
                <img
                  src={google}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={amazon}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={cocacola}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/5"
                />{" "}
                <strong className="ss:-ml-1">+1200</strong>
              </div>
              <button
                className="lg:border-sky-500 lg:text-sky-500 lg:border-2 lg:rounded-full lg:w-38 lg:h-12 lg:font-bold  lg:text-lg
              ss:border-sky-500 ss:text-sky-500 ss:border-2 ss:rounded-full ss:w-28 ss:h-8 ss:font-bold ss:mt-1 ss:ml-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------
-------------------------service 3-------------------------------
----------------------------------------------------------
         */}
        <div
          id="serivce-3"
          className="lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:h-full lg:w-full lg:relative lg:left-0 lg:top-20 lg:my-8      
          
          ss:flex ss:flex-col ss:justify-around ss:items-center ss:h-180vh ss:w-81 ss:relative ss:left-0 ss:top-12 ss:space-y-4
          
          "
        >
          <img
            src={car6}
            alt=""
            className=" lg:max-w-none lg:w-5/12 lg:relative lg:top-2 lg:left-0 lg:rounded-3xl
            ss:max-w-none ss:w-72 ss:relative ss:top-0 ss:left-0 ss:rounded-3xl ss:mx-2"
          />
          <div
            className=" lg:grid lg:gap-y-3 lg:grid-row-3 lg:grid-cols-1 lg:h-72 lg:w-2/5 lg:relative lg:-top-6   lg:left-0
            ss:flex ss:flex-col ss:h-70 ss:top-0 ss:relative  ss:w-full ss:h-72 ss:px-1 "
            id="row1"
          >
            <h3 className="lg:text-2xl lg:font-bold  ss:text-2xl ss:w-4/6 ss:font-bold lg:w-2/5 ss:pl-2">
              FSA Application
            </h3>
            <p className="lg:w-11/12 lg:text-lg ss:w-80 ss:text-sm ss:px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              omnis veritatis illo velit totam. Maxime, facilis, atque ea
              quisquam voluptas est quibusdam repellendus perferendis veniam,
              architecto soluta. Voluptatem, eligendi saepe?
            </p>
            <div
              className="lg:grid lg:grid-cols-1 lg:grid-flow-row-4 lg:gap-y-1  lg:w-96
              ss:flex ss:flex-col"
              id="as-use-in"
            >
              <h5
                className="lg:text-lg lg:text-sky-900 lg:font-bold lg:relative lg:top-1   lg:w-72
              ss:text-base ss:pl-2  ss:text-sky-900 ss:font-bold ss:relative ss:top-1 ss:h-8"
              >
                As use in_
              </h5>
              <div
                className="lg:grid lg:grid-cols-4 lg:gap-x-2 lg:grid-row-1 lg:justify-between lg:items-center lg:w-96 lg:mt-2
                ss:flex ss:flex-row ss:justify-around ss:items-center ss:w-80 ss:px-2 "
                id="brands-images"
              >
                <img
                  src={google}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={amazon}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={cocacola}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/5"
                />{" "}
                <strong className="ss:-ml-1">+1200</strong>
              </div>
              <button
                className="lg:border-sky-500 lg:text-sky-500 lg:border-2 lg:rounded-full lg:w-38 lg:h-12 lg:font-bold  lg:text-lg
              ss:border-sky-500 ss:text-sky-500 ss:border-2 ss:rounded-full ss:w-28 ss:h-8 ss:font-bold ss:mt-1 ss:ml-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------
-----------------------------service 4 & 5 are hidden under lg:  when seemore button is clicked thse two are  visible and inder ss: these two are completly hidden-----------------------------
----------------------------------------------------------
         */}
        <div
          id="service-4"
          className="lg:hidden lg:flex-row-reverse lg:justify-evenly lg:items-center lg:h-full lg:w-full lg:relative lg:left-0 lg:top-20 lg:my-8      
          
          ss:flex ss:flex-col ss:justify-around ss:items-center ss:h-180vh ss:w-81 ss:relative ss:left-0 ss:top-4 ss:space-y-4
          
          "
        >
          <img
            src={car4}
            alt=""
            className=" lg:max-w-none lg:w-5/12  lg:relative lg:top-2 lg:-left-8 lg:rounded-3xl
            ss:max-w-100 ss:relative ss:left-0 ss:rounded-2xl "
          />
          <div
            className=" lg:grid lg:gap-y-3 lg:grid-row-3 lg:grid-cols-1 lg:h-72 lg:w-2/5 lg:relative lg:-top-6   lg:left-8
            ss:flex ss:flex-col ss:h-70 ss:top-0 ss:relative  ss:w-full ss:h-72 ss:px-1 "
            id="row1"
          >
            <h3 className="lg:text-2xl lg:font-bold  ss:text-2xl ss:w-4/6 ss:font-bold lg:w-2/5 ss:pl-2">
              FSA Application
            </h3>
            <p className="lg:w-11/12 lg:text-lg ss:w-80 ss:text-sm ss:px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              omnis veritatis illo velit totam. Maxime, facilis, atque ea
              quisquam voluptas est quibusdam repellendus perferendis veniam,
              architecto soluta. Voluptatem, eligendi saepe?
            </p>
            <div
              className="lg:grid lg:grid-cols-1 lg:grid-flow-row-4 lg:gap-y-1  lg:w-96
              ss:flex ss:flex-col"
              id="as-use-in"
            >
              <h5
                className="lg:text-lg lg:text-sky-900 lg:font-bold lg:relative lg:top-1   lg:w-72
              ss:text-base ss:pl-2  ss:text-sky-900 ss:font-bold ss:relative ss:top-1 ss:h-8"
              >
                As use in_
              </h5>
              <div
                className="lg:grid lg:grid-cols-4 lg:gap-x-2 lg:grid-row-1 lg:justify-between lg:items-center lg:w-96 lg:mt-2
                ss:flex ss:flex-row ss:justify-around ss:items-center ss:w-80 ss:px-2 "
                id="brands-images"
              >
                <img
                  src={google}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={amazon}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={cocacola}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/5"
                />{" "}
                <strong className="ss:-ml-1">+1200</strong>
              </div>
              <button
                className="lg:border-sky-500 lg:text-sky-500 lg:border-2 lg:rounded-full lg:w-38 lg:h-12 lg:font-bold  lg:text-lg
              ss:border-sky-500 ss:text-sky-500 ss:border-2 ss:rounded-full ss:w-28 ss:h-8 ss:font-bold ss:mt-1 ss:ml-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------
-------------------------service 5 -------------------------------
----------------------------------------------------------
         */}
        <div
          id="service-5"
          className="lg:hidden lg:flex-row lg:justify-evenly lg:items-center lg:h-full lg:w-full lg:relative lg:left-0 lg:top-20 lg:mt-8      
          
          ss:flex ss:flex-col ss:justify-around ss:items-center ss:h-180vh ss:w-81 ss:relative ss:left-0 ss:top-4 ss:space-y-4
          
          "
        >
          <img
            src={car5}
            alt=""
            className=" lg:max-w-none lg:w-5/12  lg:relative lg:top-2 lg:left-0 lg:rounded-3xl
            ss:max-w-100 ss:relative ss:left-0 ss:rounded-2xl "
          />
          <div
            className=" lg:grid lg:gap-y-3 lg:grid-row-3 lg:grid-cols-1 lg:h-72 lg:w-2/5 lg:relative lg:-top-6   lg:left-0
            ss:flex ss:flex-col ss:h-70 ss:top-0 ss:relative  ss:w-full ss:h-72 ss:px-1 "
            id="row1"
          >
            <h3 className="lg:text-2xl lg:font-bold  ss:text-2xl ss:w-4/6 ss:font-bold lg:w-2/5 ss:pl-2">
              FSA Application
            </h3>
            <p className="lg:w-11/12 lg:text-lg ss:w-80 ss:text-sm ss:px-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              omnis veritatis illo velit totam. Maxime, facilis, atque ea
              quisquam voluptas est quibusdam repellendus perferendis veniam,
              architecto soluta. Voluptatem, eligendi saepe?
            </p>
            <div
              className="lg:grid lg:grid-cols-1 lg:grid-flow-row-4 lg:gap-y-1  lg:w-96
              ss:flex ss:flex-col"
              id="as-use-in"
            >
              <h5
                className="lg:text-lg lg:text-sky-900 lg:font-bold lg:relative lg:top-1   lg:w-72
              ss:text-base ss:pl-2  ss:text-sky-900 ss:font-bold ss:relative ss:top-1 ss:h-8"
              >
                As use in_
              </h5>
              <div
                className="lg:grid lg:grid-cols-4 lg:gap-x-2 lg:grid-row-1 lg:justify-between lg:items-center lg:w-96 lg:mt-2
                ss:flex ss:flex-row ss:justify-around ss:items-center ss:w-80 ss:px-2 "
                id="brands-images"
              >
                <img
                  src={google}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={amazon}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/4"
                />
                <img
                  src={cocacola}
                  alt=""
                  className="lg:max-w-none lg:w-2/3 ss:max-w-none  ss:w-1/5"
                />{" "}
                <strong className="ss:-ml-1">+1200</strong>
              </div>
              <button
                className="lg:border-sky-500 lg:text-sky-500 lg:border-2 lg:rounded-full lg:w-38 lg:h-12 lg:font-bold  lg:text-lg
              ss:border-sky-500 ss:text-sky-500 ss:border-2 ss:rounded-full ss:w-28 ss:h-8 ss:font-bold ss:mt-1 ss:ml-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------
-------------------------seeMore and seeLess button controlling the visiblity of service 4 & 5-------------------------------
----------------------------------------------------------
         */}
        <button
          id="seemoreBTN"
          className=" lg:block lg:z-2  lg:bg-sky-500  lg:text-white lg:w-32 lg:font-bold lg:relative lg:top-20 lg:left-2/4 lg:py-1 lg:rounded-full
          ss:bg-sky-500  ss:text-white ss:w-11 ss:font-bold ss:relative ss:top-80px ss:left-0 ss:py-1 ss:rounded-full ss:hidden "
          onClick={seemore}
        >
          <span id="seemore-span">See All</span>{" "}
          <KeyboardArrowDownIcon id="arrow-icon" className="lg:block" />
        </button>
      </section>
      {/* ------------------------------------------------------
-----------------------------features section-----------------------------
----------------------------------------------------------
         */}
      <section
        className="lg:w-full lg:h-64 lg:bg-blue-950 lg:relative lg:top-52 lg:flex lg:flex-row lg:grid-cols-4 lg:justify-around lg:items-center lg:z-0 

        ss:w-full ss:h-72 ss:bg-blue-950 ss:relative ss:top-20 ss:grid ss:grid-cols-2 ss:grid-rows-2 ss:justify-around ss:items-center ss:z-0  ss:px-4"
        id="features"
      >
        <div
          className="lg:bg-blue-950 lg:w-52 lg:h-36 lg:rounded-3xl lg:shadow-lg lg:shadow-black lg:flex lg:flex-col lg:justify-center lg:items-center  lg:text-white

          ss:bg-blue-950 ss:w-32 ss:h-28 ss:rounded-3xl ss:shadow-lg ss:shadow-black ss:flex ss:flex-col ss:justify-center ss:items-center  ss:text-white"
          id="feature1"
        >
          <FontAwesomeIcon
            icon={faHandshake}
            className="lg:text-5xl ss:text-lg"
          />
          <span className="lg:text-xl ss:text-24px">500 +</span>
          <p className="lg:text-base ss:text-12px">Trusted Partners</p>
        </div>
        <div
          className="g:bg-blue-950 lg:w-52 lg:h-36 lg:rounded-3xl lg:shadow-lg lg:shadow-black lg:flex lg:flex-col lg:justify-center lg:items-center  lg:text-white

          ss:bg-blue-950 ss:w-32 ss:h-28 ss:rounded-3xl ss:shadow-lg ss:shadow-black ss:flex ss:flex-col ss:justify-center ss:items-center  ss:text-white"
          id="feature2"
        >
          <FontAwesomeIcon
            icon={faGroupArrowsRotate}
            className="lg:text-5xl  ss:text-32px"
          />
          <span className="lg:text-xl ss:text-24px">50 +</span>
          <p className="lg:text-base ss:text-12px ss:pl-4">
            Qualified Team Members
          </p>
        </div>
        <div
          className="g:bg-blue-950 lg:w-52 lg:h-36 lg:rounded-3xl lg:shadow-lg lg:shadow-black lg:flex lg:flex-col lg:justify-center lg:items-center  lg:text-white

          ss:bg-blue-950 ss:w-32 ss:h-28 ss:rounded-3xl ss:shadow-lg ss:shadow-black ss:flex ss:flex-col ss:justify-center ss:items-center  ss:text-white"
          id="feature3"
        >
          <FontAwesomeIcon
            icon={faMedal}
            className="lg:text-5xl ss:text-32px"
          />
          <span className="lg:text-xl ss:text-24px">120 +</span>
          <p className="lg:text-base ss:text-12px ">Winning Prizes</p>
        </div>
        <div
          className="g:bg-blue-950 lg:w-52 lg:h-36 lg:rounded-3xl lg:shadow-lg lg:shadow-black lg:flex lg:flex-col lg:justify-center lg:items-center  lg:text-white

          ss:bg-blue-950 ss:w-32 ss:h-28 ss:rounded-3xl ss:shadow-lg ss:shadow-black ss:flex ss:flex-col ss:justify-center ss:items-center  ss:text-white"
          id="feature4"
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="lg:text-5xl ss:text-32px"
          />
          <span className="lg:text-xl ss:text-24px">320 +</span>
          <p className="lg:text-base ss:text-12px ss:pl-5">
            Our Certified Colleague
          </p>
        </div>
      </section>

      {/* -----------------------------------------------------
-----------------------------our team section-----------------------------
----------------------------------------------------------
         */}
      <section
        className="lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-between lg:relative lg:top-72

        ss:w-full ss:h-full ss:flex ss:flex-col  ss:relative ss:top-32"
        id="meet-our-team"
      >
        <div
          className="lg:h-28 lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-start lg:relative lg:left-4 
          
          ss:h-40 ss:w-full ss:flex ss:flex-col ss:justify-center ss:items-start ss:relative ss:left-0
          "
          id="team-heading"
        >
          <h1
            className="lg:text-5xl lg:text-black lg:font-bold lg:w-full lg:pl-20
          
                        ss:text-3xl ss:text-black ss:font-bold ss:w-full ss:pl-4"
          >
            {" "}
            Meet Our Team
          </h1>
          <p
            className="lg:text-lg lg:text-black lg:w-full ss:pl-4
          
                        ss:text-base ss:text-black ss:w-full lg:pl-20"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eligendi cupiditate ea quia odio nam{" "}
            <br className="ss:hidden lg:block" /> atque earum dolore, tenetur
            non quaerat molestias sit corrupti aliquid ducimus.
          </p>
        </div>
        <div
          className="lg:w-full lg:h-full lg:flex lf:flex-row lg:gap-y-2 lg:justify-evenly lg:items-start lg:relative lg:left-4 lg:top-8  
          
          ss:w-26 ss:h-200vh ss:grid ss:grid-cols-coustom5 ss:grid-rows-coustom4 ss:gap-y-2 ss:justify-evenly ss:items-start ss:relative ss:left-2 ss:top-4
          "
          id="team"
        >
          {/* ----member1---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member1"
          >
            <img
              src={mem1}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
          {/* ----member2---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member2"
          >
            <img
              src={mem2}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
          {/* ----member3---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member3"
          >
            <img
              src={mem3}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
        </div>
        {/* --------------------below three are hidden under lg: when see all button is clicked these three are visible and these three are completly hidden under ss: ----------------- */}
        <div
          className="lg:hidden lg:w-full lg:h-full lf:flex-row lg:gap-y-2 lg:justify-evenly lg:items-start lg:relative lg:left-4   
          lg:top-12
          ss:w-26 ss:h-200vh ss:flex ss:grid-cols-coustom5 ss:grid-rows-coustom4 ss:gap-y-2 ss:justify-evenly ss:items-start ss:relative ss:left-2 ss:top-4
          "
          id="team-2"
        >
          {/* ----member4---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member4"
          >
            <img
              src={mem4}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
          {/* ----member5---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member5"
          >
            <img
              src={mem5}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
          {/* ----member6---- */}
          <div
            className="lg:h-96 lg:w-72 lg:flex lg:flex-col 
            
            ss:h-28 ss:w-72 ss:flex ss:flex-row 
            ss:bg-gradient-to-r ss:from-blue-900 ss:to-black ss:rounded-lg 
            "
            id="member6"
          >
            <img
              src={mem6}
              alt=""
              className="lg:max-w-none lg:w-72  lg:h-72 lg:rounded-t-lg ss:rounded-lg ss:max-w-none ss:w-32 ss:h-28"
            />
            <div
              className="lg:h-32 lg:w-72 lg:bg-gradient-to-r lg:from-blue-900 lg:to-black lg:flex lg:flex-col lg:justify-between lg:items-start rounded-b-lg ss:h-28 ss:w-40 ss:flex ss:flex-col ss:justify-around ss:items-center lg:pl-4"
              id="details"
            >
              <h2 className="lg:text-2xl lg:text-white lg:mt-2 lg:ml-0 ss:text-xl ss:text-white ss:mt-0 ss:ml-7 ">
                Cammeron Williamson
              </h2>
              <span className="lg:mt-0 lg:ml-0 ss:ml-0 ss:mb-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2 
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:text-3xl lg:text-white lg:mt-1 lg:mx-2  
                  ss:text-2xl ss:text-white ss:mt-1 ss:mx-1"
                />
              </span>
            </div>
          </div>
        </div>
        <button
          className=" lg:block  lg:bg-sky-500  lg:text-white lg:w-24 lg:font-bold lg:absolute lg:top-4 lg:left-3/4 lg:ml-32 lg:py-1 lg:rounded-full ss:hidden"
          onClick={seeall}
        >
          See All
        </button>
      </section>
      {/* ------------------------------------------------------
-----------------------------what our client syays-----------------------------
----------------------------------------------------------
         */}
      <section
        className="lg:flex lg:flex-col lg:relative lg:top-96 lg:w-full lg:h-screen lg:bg-sky-50 
        ss:flex ss:flex-col ss:relative ss:top-48 ss:w-full ss:h-screen ss:bg-sky-50 "
        id="what-our-client-says"
      >
        <div
          className="lg:flex lg:flex-col lg:w-full lg:items-center  lg:relative lg:top-12 lg:h-1/4
          ss:flex ss:flex-col ss:w-full ss:justify-center ss:items-center  ss:relative ss:top-2 "
          id="wocs-heading"
        >
          <h1 className="lg:text-5xl lg:text-black lg:font-bold lg:h-20 ss:text-2xl ss:text-black ss:font-bold">
            What Our Client Says
          </h1>
          <p className="lg:text-black lg:text-xl lg:px-48 lg:h-24  lg:w-full ss:text-black ss:text-16px ss:pl-4 ss:w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
            saepe quidem iusto, suscipit dolores{" "}
            <br className="ss:hidden lg:block" />{" "}
            <span className="lg:ml-3 ss:ml-3">
              vero quasi, nisi quae earum porro. In eius recusandae dolores
              accusamus, sint tempore quod{" "}
            </span>
          </p>
        </div>
        <div
          className=" lg:flex lg:flex-row  lg:relative lg:top-20 lg:left-32 lg:w-10/12 lg:h-2/4  lg:gap-x-24 lg:overflow-x-auto lg:overflow-y-hidden lg:overflow-hidden overscroll-hidden lg:justify-between

           ss:relative ss:top-10 ss:left-0 ss:w-11/12 ss:h-72  ss:flex ss:flex-row ss:gap-x-24 ss:overflow-x-auto ss:overflow-y-hidden ss:overflow-hidden overscroll-hidden ss:px-0"
          id="review-row"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review1"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev1}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 1
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review2"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev2}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 2
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review3"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev3}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 3
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review4"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev1}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 4
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review5"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev2}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 5
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review6"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev3}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 6
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review7"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev1}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 7
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>

          <div
            className="lg:flex lg:flex-col lg:gap-y-1 lg:w-5/12 lg:h-80 lg:bg-white rounded-lg 

            ss:flex ss:flex-col ss:gap-y-1 ss:w-64 ss:h-64 ss:bg-white ss:ml-8"
            id="review8"
          >
            <div
              className="lg:flex lg:flex-row lg:ml-3 lg:mt-2 lg:w-96
             ss:flex ss:flex-row ss:ml-3 ss:mt-2 ss:w-64"
              id="image"
            >
              <img
                src={rev2}
                alt=""
                className="lg:max-w-none lg:w-24 ss:max-w-none ss:w-20 lg:relative lg:left-4 lg:top-2"
              />
              <h3
                className="lg:flex lg:flex-col lg:font-semibold lg:text-2xl lg:relative lg:left-8 lg:top-2 
              ss:flex ss:flex-col ss:font-semibold ss:text-lg ss:ml-2 ss:mt-4"
              >
                Leslie Alexender 8
                <span className="lg:font-light lg:text-base ss:font-light ss:text-base">
                  Senior UI Designer
                </span>
              </h3>
            </div>
            <p
              className="lg:text-base lg:w-96 lg:relative lg:left-4 lg:top-4 lg:px-0 ss:mt-0 ss:text-xs ss:pl-4 ss:pr-16 ss:w-64"
              id="text"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              tempora provident, earum architecto enim perferendis tempore
              itaque culpa optio harum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi.
            </p>
            <div
              className="lg:flex lg:flex-row lg:justify-between lg:w-96 lg:mx-3 lg:relative lg:left-4 lg:top-8 lg:pr-4
              ss:flex ss:flex-row ss:justify-around ss:mx-0 ss:my-0 ss:w-64"
              id="stares"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-0
                     ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffa200" }}
                  className="lg:font-bold lg:text-lg lg:ml-1
                  ss:font-bold  ss:text-sm  ss:ml-0.5"
                />
              </span>
              <p className="lg:text-lg ss:text-sm ss:mt-0.5">
                Friday, September, 31
              </p>
            </div>
          </div>
        </div>

        <span className="lg:relative lg:top-28 lg:ml-32  lg:left-1/3 lg:flex lg:w-32 lg:justify-evenly ss:hidden">
          <button
            className=" carousel-btn lg:w-3 lg:h-3 lg:rounded-full lg:bg-sky-600 lg:border-2"
            onClick={Btn1}
            id="Btn-1"
          ></button>
          <button
            className=" carousel-btn lg:w-3 lg:h-3 lg:rounded-full lg:bg-sky-600 lg:border-2"
            onClick={Btn2}
            id="Btn-2"
          ></button>
          <button
            className=" carousel-btn lg:w-3 lg:h-3 lg:rounded-full lg:bg-sky-600 lg:border-2"
            onClick={Btn3}
            id="Btn-3"
          ></button>
          <button
            className=" carousel-btn lg:w-3 lg:h-3 lg:rounded-full lg:bg-sky-600 lg:border-2"
            onClick={Btn4}
            id="Btn-4"
          ></button>
        </span>
      </section>
      {/* ------------------------------------------------------
-----------------------------footer-----------------------------
----------------------------------------------------------
         */}
      <footer
        className="lg:w-full lg:h-96 lg:bg-blue-950 lg:relative lg:top-96 lg:mt-40
        ss:w-full ss:h-96 ss:bg-blue-950 ss:relative ss:top-72"
        id="footer"
      >
        <section
          className=" lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-10/12 lg:h-36 lg:bg-sky-400 lg:relative lg:-top-16 lg:left-24 rounded-xl
          ss:w-11/12 ss:h-36 ss:bg-sky-400 ss:relative ss:-top-16 ss:left-3 ss:flex ss:flex-col ss:justify-between ss:items-center"
          id="email"
        >
          <h1
            className="lg:text-4xl lg:tracking-wide lg:text-white lg:font-bold lg:ml-10
           ss:text-xl ss:tracking-wide ss:text-white ss:font-bold ss:pl-4 ss:pt-2"
          >
            Feeling comfortable and feel <br className="ss:hidden lg:block" />{" "}
            free get in touch
          </h1>
          <div
            className="lg:w-96 lg:relative lg:left-4 lg:top-4 lg:m-0 lg:mr-4 ss:mr-0 ss:relative ss:top-3 ss:w-64"
            id="email-div"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="lg:w-80 lg:h-10 lg:rounded-xl lg:pl-2 lg:pr-28 lg:outline-offset-8 lg:outline-sky-600 
              ss:w-64 ss:h-10 ss:rounded-xl ss:pl-2 ss:pr-20 ss:outline-offset-8 ss:outline-sky-600"
              id="email"
            />
            <button
              className="lg:bg-blue-600 lg:w-20 lg:h-8 lg:tracking-wide lg:text-white lg:font-bold rounded-lg lg:relative lg:left-56 lg:-top-9
            ss:bg-blue-600 ss:w-16 ss:h-8 ss:tracking-wide ss:text-white ss:font-bold ss:mx-0 ss:relative ss:-top-9 ss:left-44"
            >
              Send
            </button>
          </div>
        </section>
        <div
          id="footer-content"
          className="lg:flex lg:flex-row lg:justify-around lg:-mt-2 lg:w-full lg:h-56
        ss:flex ss:flex-col ss:justify-evenly ss:w-full ss:h-56 ss:mt-0 ss:space-y-1 lg:space-x-0"
        >
          <div
            className="lg:flex lg:flex-col ss:flex ss:flex-col lg:ml-0 lg:mt-0 ss:ml-6 ss:-mt-12"
            id="col1"
          >
            <img
              src={logo}
              alt=""
              className="lg:max-w-none lg:w-52 ss:max-w-none ss:w-40"
            />
            <span
              className="lg:text-lg lg:font-medium lg:text-white lg:justify-between lg:items-center hover:underline lg:mt-2
             ss:font-medium ss:text-white ss:justify-between ss:items-center "
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
                className=" lg:text-2xl lg:mr-2 ss:text-sm ss:mr-2 "
              />
              example@gmail.com
            </span>
            <span
              className="lg:text-lg lg:font-medium lg:text-white lg:justify-between lg:items-center lg:mt-2
            ss:font-medium ss:text-white ss:justify-between ss:items-center hover:underline"
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#ffffff" }}
                className="lg:text-2xl lg:mr-2 ss:text-sm ss:mr-2 "
              />
              +91-XXXXXXXXXX
            </span>
          </div>
          <div
            className="lg:flex lg:flex-row lg:justify-between ss:flex ss:flex-row lg:mb-2 lg:w-96 lg:ml-0 ss:justify-around ss:ml-0 lg:space-x-4"
            id="only-apply-css-on-media"
          >
            <div
              className="lg:flex lg:flex-col lg:items-center
           ss:flex ss:flex-col ss:items-center ss:ml-2"
              id="col2"
            >
              <h3
                className="lg:font-medium lg:text-4xl lg:text-white
             ss:font-medium ss:text-2xl ss:text-white "
              >
                About
              </h3>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
            </div>
            <div
              className="lg:flex lg:flex-col lg:items-center
          ss:flex ss:flex-col ss:items-center"
              id="col3"
            >
              <h3
                className="lg:font-medium lg:text-4xl lg:text-white
            ss:font-medium ss:text-2xl ss:text-white"
              >
                Address
              </h3>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
              <span
                className="lg:font-lighter lg:text-white lg:text-lg hover:underline
            ss:font-medium ss:text-white ss:text-sm"
              >
                your text
              </span>
            </div>
          </div>
          <div
            className="lg:flex lg:flex-col lg:justify-start  lg:mt-0
          ss:flex ss:flex-row ss:justify-around ss:items-center  ss:-mt-4"
            id="col4"
          >
            <h3
              className="lg:font-medium lg:text-4xl lg:text-white
            ss:font-medium ss:text-2xl ss:text-white"
            >
              Contact Us_
            </h3>
            <span className=" lg:ml-2 lg:relative lg:top-4 ss:ml-0 ss:mt-0">
              <FontAwesomeIcon
                icon={faFacebook}
                className="lg:text-3xl lg:text-white lg:mt-2 lg:mx-1 
                  ss:text-xl ss:text-white ss:mt-1 ss:mx-1"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="lg:text-3xl lg:text-white lg:mt-2 lg:mx-1  
                  ss:text-xl ss:text-white ss:mt-1 ss:mx-1"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lg:text-3xl lg:text-white lg:mt-2 lg:mx-1  
                  ss:text-xl ss:text-white ss:mt-1 ss:mx-1"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="lg:text-3xl lg:text-white lg:mt-2 lg:mx-1  
                  ss:text-xl ss:text-white ss:mt-1 ss:mx-1"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="lg:text-3xl lg:text-white lg:mt-2 lg:mx-1  
                  ss:text-xl ss:text-white ss:mt-1 ss:mx-1"
              />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

