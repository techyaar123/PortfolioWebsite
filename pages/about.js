import NavBar from "../components/navbar";
import Image from "next/image";
function About() {
  return (
    <>
      <NavBar />
      <h1 className="headerAbout">About </h1>
      <div className="About">
        <div className="ProfilePhoto">
          <Image
            src="/Profile Photo.svg"
            height="900px"
            width="100px"
            alt="Profile Photo"
          />
        </div>
        <div className="AboutContent">
          <div className="Content1">
            <p>Name: Abhinav Katiyar</p>
            <p>Role: Full Stack Developer/Mobile Developer</p>
            <p>
              College: National Institue of Science and
              Technology,Berhampur,Odisha
            </p>
            <p>Degree: BTECH(ECE)</p>
            <p>Hobbies: Learning New Things and Building them</p>
            <p>Dream Job: FAANG</p>
            <div className="Content2">
              <button className="Linkedin">Linkedin</button>
              <button className="Facebook">FaceBook</button>
              <button className="Github">Github</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Space"></div>
    </>
  );
}
export default About;
