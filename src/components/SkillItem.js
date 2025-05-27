import React from "react";
import "./SkillItem.css";

function SkillItem({ icon }) {
  return (
    <div className="skill-item">
      <p target="_blank" rel="noreferrer">
        {icon}
      </p>
    </div>
  );
}

export default SkillItem;
