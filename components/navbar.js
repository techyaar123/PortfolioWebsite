import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <header className="header">
        <a href="" className="logo">
          <Image src="/Logo.svg" height="50" width="60" alt="Logo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link href="/">
              <a href="#Home">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a href="#Project">Project</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a href="#Skills">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a href="#About">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a href="#Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default NavBar;
