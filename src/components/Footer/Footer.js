import React from "react";
import './style.css'


export default () => {
  return (
    <footer className="footer">{window.location.host} {new Date().getFullYear()}</footer>
  )
}
