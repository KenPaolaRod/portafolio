import {FaGithubSquare} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFilePresent } from "react-icons/md";





 function Header() {
  return (
    <header>
      <nav>
        <img src="../../public/img/logo.png" alt="logo" />

        <ul>
          <li><a href="https://github.com/KenPaolaRod?tab=repositories" target="blanck_"> <FaGithubSquare /> </a></li>
          <li><a href="https://www.linkedin.com/in/kenyerling-rodriguez/" target="blanck_" ><FaLinkedin /></a></li>
          <li> <a href=""><MdOutlineFilePresent /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
