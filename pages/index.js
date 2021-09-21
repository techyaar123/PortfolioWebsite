import NavBar from "../components/navbar";

import Image from "next/image";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <div className="homeContent">
          <h1>Hi , I am Abhinav</h1>
          <h3>I am Full Stack and Mobile Developer</h3>
        </div>

        <Image
          src="/Home Pic.svg"
          height="370px"
          width="1000px"
          alt="Home"
          className="contentLogo"
        />
      </div>
    </div>
  );
}

export default Home;
