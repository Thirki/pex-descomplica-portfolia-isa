import React from "react";
import "./Social.css";
import SocialItem from "./SocialItem";
import { FaRegSmile, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Social() {
  return (
    <div id="social">
      <ul>
        <li>
          <SocialItem
            title="Quem sou"
            description="Isaddora Freitas"
            emote={<FaRegSmile />}
            style={{ cursor: "default" }}
          />
        </li>
        <li>
          <SocialItem
            title="GitHub"
            description="Graxz"
            emote={<FaGithub />}
            linkTo="https://github.com/graxz"
          />
        </li>
        <li>
          <SocialItem
            title="Linkedin"
            description="isaddorafreitas"
            emote={<FaLinkedinIn />}
            linkTo="https://www.linkedin.com/in/isaddorafreitas/"
          />
        </li>
        <li>
          <SocialItem
            title="Whatsapp"
            description="+55 (11) 95031-4706"
            emote={<FaWhatsapp />}
            linkTo="https://wa.me/5511950314706"
          />
        </li>
      </ul>
    </div>
  );
}

export default Social;
