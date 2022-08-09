import React, {useState} from 'react';

import "./ThemeSwitch.css";

const ThemeSwitch = ({theme, changeTheme}) => {
  return (
    <label className="switch">
      <input
        defaultChecked
        onClick={(e) => e.target.value = theme === "dark" ? changeTheme("light") : changeTheme("dark")}
        type="checkbox"
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitch;
