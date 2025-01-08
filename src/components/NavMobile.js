import React from "react";
import "../styles/nav.css";
import { HiOutlineMenu } from "react-icons/hi";

export default function Nav() {
  return (
    <div>
      <div
        className="menu"
        onClick={() => {
          document.querySelector(".mobile_nav").classList.toggle("visible");
        }}
      >
        <HiOutlineMenu />
      </div>

      <div className="mobile_nav">
        <a href="https://unresolvedcase7.github.io/puzzle1/">الرئيسية</a>
        <a
          href="https://unresolvedcase7.github.io/puzzle1_dark/"
          style={{ color: "#c22735" }}
        >
          مهمة 1
        </a>
        <a href="https://unresolvedcase7.github.io/puzzle2/">مهمة 2</a>
        <a href="https://unresolvedcase7.github.io/puzzle3/">مهمة 3</a>
      </div>
    </div>
  );
}
