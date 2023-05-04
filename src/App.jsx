import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import MainPic from "./assets/onboarding-1.png";
import Aws from "./assets/aws-social.png";
import gitHub from "./assets/github-social.png";
import google from "./assets/google-social.png";
import Sale from "./assets/salesforce-social.png";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      {/* navbar */}
      <div className="main">
        <div className="background">
          <div className="nav-items">
            <img src={Logo} alt="logo" className=" w-24 " />
            {theme === "light" ? (
              <BsFillSunFill size={25} color="white" onClick={handleClick} />
            ) : (
              <BsMoon size={25} color="white" onClick={handleClick} />
            )}
          </div>
        </div>

        {/* main section */}

        <div className="section">
          <div className="section-pic">
            <img src={MainPic} alt="" className="w-[100%] h-[80%]" />
          </div>

          {/* form section */}
          <div className="section-form">
            <form className="form">
              <h1 className="text-2xl">Sign up for a free account!</h1>
              <input type="text" className="input" placeholder="Your email" />
              <input type="text" className="input" placeholder="Phone number" />

              <div>
                <input type="checkbox" className="input-check" />
                <label>
                  I agree with the
                  <span className="font"> Privacy Policy </span> and
                  <span className="font"> Terms of Service</span>
                </label>
              </div>

              <div>
                <input type="checkbox" className="input-check " />
                <label>Get updates from Sqor</label>
              </div>

              <button className="btn">Sign Up</button>

              <p className="allAcc">
                Already have an account?
                <span>
                  <a className="text-cyan-800 font" href="/">
                    Sign In.
                  </a>
                </span>
              </p>
              <p className="allAcc">Or signup with</p>

              {/* logos */}
              <div className="social-logos">
                <img className="border" src={google} alt="" />
                <img className="borderr" src={Sale} alt="" />
                <img className="borderr" src={Aws} alt="" />
                <img className="borderr" src={gitHub} alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
