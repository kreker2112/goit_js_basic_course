import "./style.css";

import gitHubImg from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitHubImg} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
