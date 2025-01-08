import React from "react";
import "../styles/footer.css";
import mask from "../images/mask.png";
import youtube from "../images/social/youtube.png";
import insta from "../images/social/insta.png";
import twitter from "../images/social/twitter.png";
import snap from "../images/social/snap.png";
import tictok from "../images/social/tictok.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer_list">
        <ul>
          <li>
            <span></span>
            <a href="https://unresolvedcase7.github.io/puzzle1/">الرئيسية</a>
          </li>
          <li>
            <span></span>
            <a
              href="https://unresolvedcase7.github.io/puzzle1_dark/"
              style={{ color: "#c22735" }}
            >
              مهمة 1
            </a>
          </li>
          <li>
            <span></span>
            <a href="https://unresolvedcase7.github.io/puzzle2/">مهمة 2</a>
          </li>
          <li>
            <span></span>
            <a href="https://unresolvedcase7.github.io/puzzle3/">مهمة 3</a>
          </li>
        </ul>
      </div>

      <p className="footer_p_mb">
        الإهتمام بالتفاصيل الصغيرة هو السبيل الوحيد لحل اصعب القضايا
      </p>
      <div className="social_container_mb">
        <p>تابعنا عبر مواقع التواصل الإجتماعي</p>
        <div className="social_links">
          <a
            href="https://youtube.com/channel/UCppzhcAxtubamEPzfKEnHSg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="" />
          </a>
          <a
            href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="" />
          </a>
          <a
            href="https://twitter.com/unresolved_cass?s=11&t=UK-0AXfs2xWnbqe16c5y2g"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
          <a
            href="https://www.snapchat.com/add/unresolved_cass?share_id=QTg2ODRBQjktMTdDOC00NTJCLTg2QUItMEI0N0Y5NUVDMDIw&locale=en_SA@calendar=gregorian"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snap} alt="" />
          </a>
          <a
            href="https://vt.tiktok.com/ZSdwBjnbk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tictok} alt="" />
          </a>
        </div>
        <p className="public_mb">جميع الحقوق محفوظة لموقع قضية لم تحل 2022</p>
      </div>

      <div className="mid_col">
        <p className="footer_p">
          الإهتمام بالتفاصيل الصغيرة هو السبيل الوحيد لحل اصعب القضايا
        </p>
        <div className="social_container">
          <p>تابعنا عبر مواقع التواصل الإجتماعي</p>
          <div className="social_links">
            <a
              href="https://youtube.com/channel/UCppzhcAxtubamEPzfKEnHSg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="" />
            </a>
            <a
              href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="https://twitter.com/unresolved_cass?s=11&t=UK-0AXfs2xWnbqe16c5y2g"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://www.snapchat.com/add/unresolved_cass?share_id=QTg2ODRBQjktMTdDOC00NTJCLTg2QUItMEI0N0Y5NUVDMDIw&locale=en_SA@calendar=gregorian"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snap} alt="" />
            </a>
            <a
              href="https://vt.tiktok.com/ZSdwBjnbk/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tictok} alt="" />
            </a>
          </div>
          <p className="public">جميع الحقوق محفوظة لموقع قضية لم تحل 2022</p>
        </div>
      </div>
      <div className="footer_image">
        <img src={mask} alt=" " />
      </div>
    </footer>
  );
}
