import React from "react";
import SkillItem from "./SkillItem";
import {
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiJest,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <section id="Skills">
      <h3>Minhas skills</h3>
      <div className="skills-container">
        <SkillItem icon={<FaNodeJs />} />
        <SkillItem icon={<SiTypescript />} />
        <SkillItem icon={<SiExpress />} />
        <SkillItem icon={<SiNestjs />} />
        <SkillItem icon={<FaDatabase />} />
        <SkillItem icon={<SiMongodb />} />
        <SkillItem icon={<SiPostgresql />} />
        <SkillItem icon={<FaDocker />} />
        <SkillItem icon={<FaAws />} />
        <SkillItem icon={<FaGitAlt />} />
        <SkillItem icon={<FaGithub />} />
        <SkillItem icon={<SiJest />} />
      </div>
    </section>
  );
}

export default Skills;
