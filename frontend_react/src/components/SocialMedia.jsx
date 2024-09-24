import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { images } from "../constants";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://drive.google.com/file/d/1sfRRG6g1wxs1F2dKzLgkPOXcPZ7xdfVD/view?usp=sharing" target="_blank">
          <TbFileCv />
        </a>
      </div>
      <div>
        <a href="https://leetcode.com/u/_gauravbhaskar/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
      <div>
        <a href="https://github.com/gauravbhaskar080" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/gaurav-bhaskar-5b1223232/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://gauravb-portfolio.vercel.app" target="_blank">
          <BsPerson />
        </a>
      </div>
      {/* <div>
        <a href="https://gauravb123.netlify.app/" target="_blank">
          <BsPerson />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
