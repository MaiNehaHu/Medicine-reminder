import React, { useEffect, useState } from "react";

import DarkMode from "./images/DarkBanner.png";
import LightMode from "./images/Banner.png";

import AlarmWrapper from "./Components/AlarmWrapper";
import DigitalClock from "./Components/DigitalClock";
import TimeSelector from "./Components/TimeSelector";
import Mode from "./Components/Mode";
import PopUp from "./Components/PopUp";

const LS_Key_for_mode = "dark-light-mode";

const getModeStatus = () => {
  let modeStatus = localStorage.getItem(LS_Key_for_mode);
  /**With the help of keyname we are getting the mode Status */

  if (modeStatus) {
    return JSON.parse(localStorage.getItem(LS_Key_for_mode));
    /**localStorage.setItems("key", "value")*/
  } else {
    return [];
  }
};

const Index = () => {
  //to change light mode and dark mode
  const [mode, setMode] = useState(getModeStatus());
  const [bgcolor, setBgColor] = useState("");
  function modeHandler() {
    if (mode === DarkMode) {
      setBgColor("rgb(206, 242, 255)");
      setMode(LightMode);
    } else if (mode === DarkMode) {
      setMode(DarkMode);
      setBgColor("Black");
    } else {
      setMode(DarkMode);
      setBgColor("Black");
    }
  }

 
  //get mode from Local Storage
  useEffect(() => {
    localStorage.setItem(LS_Key_for_mode, JSON.stringify(mode));
  }, [mode]);

  return (
    <div
      id="App"
      style={{
        background: `url(${mode})`,
        backgroundColor:`${bgcolor}`
      }}
    >
      <Mode onClickHandler={modeHandler} modeStatus={mode} />
      <div className="container">
        <AlarmWrapper>
          <DigitalClock />
          <TimeSelector />
        </AlarmWrapper>
      </div>
    </div>
  );
};

export default Index;
