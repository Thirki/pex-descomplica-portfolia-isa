import React from "react";
import "./SocialItem.css";

function SocialItem({ title, description, emote, linkTo, style }) {
  return (
    <div className="social-item">
      <a href={linkTo} target="_blank" rel="noreferrer" style={{ ...style }}>
        <div className="social-item-emote" style={{ ...style }}>
          <span>{emote}</span>
        </div>
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SocialItem;
