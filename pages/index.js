import NavBar from "../components/navbar";

import Image from "next/image";
function Home() {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <Image
          src="/Home Text.svg "
          height="900px"
          width="1100px"
          alt="Home Text"
        />

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
