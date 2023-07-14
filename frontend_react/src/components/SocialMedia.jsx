import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { images } from "../constants";

const SocialMedia = () => {
  return (
    <div className="app__social">
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
        <a href="" target="_blank">
          <BsPerson />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
