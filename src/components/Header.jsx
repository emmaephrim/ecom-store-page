import React from "react";
import shop_Logo from "../images/Plenuu_logo_main.png";

function Header({ mobile, setMobile }) {
  function myFunction(event) {
    // var x = document.getElementById("myTopnav");
    // const class_name = event.target.className;
    // if (class_name === "topnav") {
    //   class_name += " responsive";
    // } else {
    //   x.className = "topnav";
    // }
    setMobile(!mobile);
  }
  return (
    <React.Fragment>
      {/* <header>
        <div className="sub-head-one">
          <img src={shop_Logo} alt="" />
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Vendor</li>
            <li>
              <i className="bi bi-list"></i>
            </li>
          </ul>
        </div>
        <div className="sub-head-two">
          <form>
            <input type="search" placeholder="Search..." name="search" />
            <button type="submit" className="btn btn-outline">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul>
            <li style={{ marginLeft: "-10px" }}>
              <i className="bi bi-cart2"></i>
            </li>
            <li style={{ marginLeft: "20px", marginRight: "5px" }}>
              <i className="bi bi-person"></i>
            </li>
          </ul>
        </div>
      </header> */}

      <div className="nav">
        <div
          className={mobile ? "topnav responsive" : "topnav"}
          id="myTopnav"
          style={{
            display: mobile && "flex",
            flexDirection: mobile && "column",
            alignItems: mobile && "flex-start",
            height: mobile && "100vh",
            width: mobile && "50%",
            paddingLeft: mobile && "5px",
            // transition: mobile && "all 0.8s ease-in",
            position: mobile && "absolute",
          }}
        >
          <a
            href="#"
            className="icon"
            onClick={myFunction}
            style={{ color: "black", fontSize: "30px" }}
          >
            {mobile ? (
              <i class="bi bi-x-lg"></i>
            ) : (
              <i className="fa fa-bars bi bi-list"></i>
            )}
          </a>
          <a href="logo" className="logo  active">
            <img
              src={shop_Logo}
              alt=""
              // style={{ width: "80px", height: "40px" }}
            />
          </a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#vendor">Vendor</a>
        </div>
        <div
          className="sub-head-two"
          // style={{ display: mobile ? "none" : "flex" }}
        >
          <span className="search_icon">
            <i className="bi bi-search"></i>
          </span>
          <form>
            <input type="search" placeholder="Search..." name="search" />
            <button type="submit" className="bg-transparent  border-0 pe-3">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul>
            <li>
              {/* < style={{ marginLeft: "-10px" }}> */}
              <i className="bi bi-cart2"></i>
            </li>
            <li>
              {/* < style={{ marginLeft: "20px", marginRight: "5px" }}> */}
              <i className="bi bi-person"></i>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
