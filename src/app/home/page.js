import React from "react";
import logo from "@/assets/ONESUB/logo.jpg";
import hero from "@/assets/ONESUB/hero.png";
// import feature from "@/assets/ONESUB/feature.png";
import Card from "@/components/Card";
// import mtn from "@/assets/ONESUB/mtn.png";
// import glo from "@/assets/ONESUB/glo.png";
// import airtel from "@/assets/ONESUB/airtel.png";
// import ninemobile from "@/assets/ONESUB/9mobile.png";
import Image from "next/image";


const page = () => {
  let navbar = {
    position: "fixed",
    zIndex: 1,
    top: 0,
    width: "100%",
  };
  let stylee = {
    backgroundColor: "#427DF6",

    // height:'500px'
  };
  let styleee = {
    backgroundColor: "#D9D9D9",
    // opacity:'40%'
  };
  let home = {
    marginLeft: "544px",
    fontSize: "19px",
    fontWeight: 400,
    color: "black",
  };
const cable='/images/cable.png'
const exam='/images/exam.png'
const electricity='/images/electricity.png'
const data='/images/data.png'
const feature='/images/feature.png'

  return (
    <>
      <nav
        className="navbar navbar-expand-lg mb-5 p-4 bg-body-tertiary"
        style={navbar}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={logo.src} alt="" width="120px" /> */}
            <Image src="/images/logo.jpg" alt="logo" width={150} height={50} />
          </a>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5 home">
                <a className="nav-link  " href="#" style={home}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: "19px" }}>
                  Contact Us
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="#" style={{ fontSize: "19px" }}>
                  Login
                </a>
              </li>
              <li className="nav-item " style={{ marginLeft: "620px" }}>
                <a
                  className="text-white text-center nav-link rounded-4 p-2"
                  href="#"
                  style={{
                    fontSize: "20px",
                    width: "200px",
                    backgroundColor: "#394968",
                  }}
                >
                  Get Started
                </a>
              </li>
            </ul>
            {/* <span className="navbar-text">
              <button className="form-control w-100 text-white" style={{backgroundColor:'#394968'}}>Get Started</button>
            </span> */}
          </div>
        </div>
      </nav>
      
      <div className="container-fluid mt-5 mt bg-light">
        <div
          className="col-11 rounded-5 mx-auto p-5"
          style={{
            backgroundColor: "#394968",
            marginTop: "150px",
            height: "720px",
          }}
        >
          <div className="row mb-5">
            <div className="col-8">
              <div
                className="col-10 p-3 rounded-2"
                style={{ marginTop: "200px", backgroundColor: "#5C6571" }}
              >
                <span className="bg-white p-3 rounded-2">Welcome</span>
              </div>
              <div className="mt-5">
                <h1 className="text-white mb-3">Bill Payments Made Easier</h1>
                <p className="text-white fw-bold fs-5 mt-4">
                  Get data, cable, electricity subscriptions at cheaper prices
                </p>
                <button
                  className="btn btn-light mt-3 rounded-pill"
                  style={{ fontSize: "19px" }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-4 ">
              {/* <img src={hero.src} alt="" width="100%" /> */}
              <Image src="/images/hero.png" width={500} height={600} alt="hero" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  "
        style={{ backgroundColor: "#FFFFFF", marginTop: "160px" }}
      >
        <div className="col-11 mx-auto mt-5">
          <div className="mt-5">
            <h1 style={{ color: "#427df6", marginTop: "100px" }}>Services</h1>
            <h1 style={{ fontSize: "50px" }}>Our Services Include:</h1>
          </div>
          <div className="row mt-5">
            <div className="col-3 mt-5">
              <Card
                title="Data"
                content="Purchase airtime and data for MTN, GLO, AIRTEL & 9mobile at cheap prices"
                as={data}
                w="60px"
              />
            </div>
            <div className="col-3 mt-5">
              <Card title="Exam" content=""  w="100px" as={exam} />
            </div>
            <div className="col-3 mt-5">
              <Card
                title="Cable"
                content="Subscribe for DSTV, GOTV and Startimes at cheaper rates"
                as={cable}
                w="60px"
              />
            </div>
            <div className="col-3 mt-5">
              <Card
                title="Electricity"
                content="Pay for electricity bills directly from us whether prepaid or postpaid"
                as={electricity}
                w="60px"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Image src={cable} alt='hello' width={50} height={50} style={{marginTop:"300px"}} /> */}
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="col-11 mx-auto">
          <div>
            <h1
              className="mb-5"
              style={{ color: "#427df6", marginTop: "100px" }}
            >
              Data Pricing
            </h1>
            <h1>Our Data Pricing are:</h1>
          </div>
          <div className="row mt-5">
            <div className="col-3 mt-5  rounded">
              <div className="mt-5 rounded p-3 " style={stylee}>
                {/* <img src={mtn.src} alt="alt" width="90px" /> */}
                <Image
                  src="/images/mtn.png"
                  alt="logo"
                  width={80}
                  height={80}
                />

                <div className="text-center shadow bg-light rounded p-1 mt-3">
                  <p className="fs-4">500MB-#310</p>
                  <p className="fs-4">1GB-#650</p>
                  <p className="fs-4">2GB-#1300</p>
                  <p className="fs-4">3GB-#1950</p>
                  <p className="fs-4">5GB</p>
                  <p className="fs-4">120MB DAILY</p>
                </div>
              </div>
            </div>
            <div className="col-3  mt-5 rounded">
              <div className="mt-5 rounded p-3" style={stylee}>
                {/* <img src={airtel.src} alt="alt" width="90px" /> */}
                <Image
                  src="/images/airtel.png"
                  alt="logo"
                  width={80}
                  height={80}
                />

                <div className="text-center shadow rounded mt-3 p-1 bg-light">
                  <p className="fs-4">500MB-#300</p>
                  <p className="fs-4">1GB-#600</p>
                  <p className="fs-4">2GB-#1200</p>
                  <p className="fs-4">5GB-#2925</p>
                  <p className="fs-4">2GB 2-DAYS(BINGE)-#</p>
                  <p className="fs-4">6GB WEEKLY-#1550</p>
                </div>
              </div>
            </div>
            <div className="col-3 mt-5 rounded">
              <div className="mt-5 rounded p-3 " style={stylee}>
                {/* <img src={ninemobile.src} alt="alt" width="90px" /> */}
                <Image
                  src="/images/9mobile.png"
                  alt="logo"
                  width={80}
                  height={80}
                />

                <div className="text-center shadow rounded p-1 bg-light mt-3">
                  <p className="fs-4">500MB 14days-#88</p>
                  <p className="fs-4">1GB-#190</p>
                  <p className="fs-4">2GB-#340</p>
                  <p className="fs-4">3GB-#500</p>
                  <p className="fs-4">5GB-#800</p>
                  <p className="fs-4">7GB WEEKLY-#</p>
                </div>
              </div>
            </div>
            <div className="col-3 mt-5 rounded">
              <div className="mt-5 shadow rounded p-3 " style={stylee}>
                {/* <img src={glo.src} alt="alt" width="90px" /> */}
                <Image
                  src="/images/glo.png"
                  alt="logo"
                  width={80}
                  height={80}
                />

                <div className="text-center shadow rounded p-1 bg-light mt-3">
                  <p className="fs-4">500MB-#165</p>
                  <p className="fs-4">1GB-#295</p>
                  <p className="fs-4">2GB-#590</p>
                  <p className="fs-4">3GB-#885</p>
                  <p className="fs-4">5GB-#1475</p>
                  <p className="fs-4">10GB #2950</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5" style={{ marginTop: "200px" }}>
        <div className="col-11 mx-auto">
          <div className="mb-5">
            <h1 className="mb-5" style={{ color: "#427df6" }}>
              Features
            </h1>
            <h1>Our Features Include:</h1>
          </div>
          <div className="row">
            <div className="col-7 mt-5">
              <div className="col-8 p-4 rounded-5 mt-5" style={stylee}>
                <h3 className="text-white">
                  Whether you're subscribing for yourself or customers, We have
                  you covered.
                </h3>
                <p className="fs-5 mt-4 text-white">
                  Whether you're subscribing for yourself or customers, We have
                  you covered.
                </p>
              </div>
              <div className="col-8 bg-light p-5 rounded-5" style={styleee}>
                <p className="fs-5">
                  Convert your unused airtime to cash and also purchase WAEC and
                  NECO scratch cards right here on Onesub
                </p>
              </div>
              <div className="col-8 bg-light p-5 rounded-5" style={styleee}>
                <p className="fs-5">Great Support System</p>
              </div>
            </div>
            <div className="col-5">
              {/* <img
                src={feature.src}
                alt="img"
                className=""
                style={{ width: "100%" }}
              /> */}
               <Image  src={feature} width={600} height={700} alt="logo"/>  
              <button className="btn btn-primary fs-5 rounded-2 form-control">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 p-3" style={styleee}>
        <div className="col-11 mx-auto mt-5">
          <div className="row mt-5 p-5">
            <div className="col-4 mt-5">
              <h1>Bill Payments Made easier</h1>
              <p className="" style={{ fontSize: "18px", fontWeight: "bold" }}>
                Get data, cable and electricity subscriptions at cheaper prices
              </p>
            </div>
            <div className="col-2 mt-5">
              <h1>Legal</h1>
              <p>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Privacy
                </a>
              </p>
              <p>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Terms
                </a>
              </p>
              <p>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="col-5 mt-5">
              <h1>Contact</h1>
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  WhatSapp:{" "}
                  <span style={{ fontSize: "20px" }}>+2348168837642</span>
                </a>
              </p>
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Phone Number:{" "}
                  <span style={{ fontSize: "20px" }}>08168837642</span>
                </a>
              </p>
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Email :{" "}
                  <span style={{ fontSize: "20px" }}>oyindamola@gmail.com</span>
                </a>
              </p>
            </div>
            <div className="col-1 mt-5">
            <a className="navbar-brand" href="#">
        
            <Image src="/images/logo.jpg" alt="logo" width={150} height={50} />
          </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
