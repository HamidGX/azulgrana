import { Navbar } from "flowbite-react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import faviconImg from "../assets/favicon.png"

const Header = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <header>
        <Navbar fluid={true} rounded={false}>
          <Navbar.Brand href="/">
            <img
              src={faviconImg}
              className="mr-3 h-10 sm:h-12"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              azulgrana
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" active={(url === "/" ? "active" : "")}>Inicio</Navbar.Link>
            <Navbar.Link href="/clima" active={(url === "/clima" ? "active" : "")}>Clima</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
