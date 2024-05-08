import { useState } from 'react'
import {FaGithubSquare} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFilePresent } from "react-icons/md";
import { FaAlignRight } from "react-icons/fa6";
import * as FileSaver from 'file-saver';

 function Header() {
  const [showAside, setShowAside] = useState(false);


  const handleDownload = () => {
    const fileUrl = 'public/img/projects/resume-2024.pdf'; 
    FileSaver.saveAs(fileUrl, 'my-resume.pdf');
  };

  return (
    <header>
      <nav>
        <img src="img/logo.png" alt="logo" />

        <ul className='desktop-menu-links'>
          <li> <a href="#about">About</a></li>
          <li> <a href="#skills">Skills</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>

        <div className="links-header">
          <a href="https://github.com/KenPaolaRod?tab=repositories" target="blanck_"> <FaGithubSquare/></a>
          <a href="https://www.linkedin.com/in/kenyerling-rodriguez/" target="blanck_" ><FaLinkedin /></a>
          <button onClick={handleDownload}><MdOutlineFilePresent /></button>
        </div>

        <button onClick={() => setShowAside(!showAside)} className="burger-menu"> <FaAlignRight /> </button>
      </nav>


      {
          showAside && (
            <aside>
              <ul>
                <li> <a href="#about">About</a></li>
                <li> <a href="#skills">Skills</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
              </ul>

              <div className="aside-icons">
                <a href="" target="blanck_"> </a>
                <a href="https://github.com/KenPaolaRod?tab=repositories" target='blanck_'> <FaGithubSquare/></a>
                <a href="https://www.linkedin.com/in/kenyerling-rodriguez/" target="blanck_" ><FaLinkedin /></a>
                <button onClick={handleDownload}><MdOutlineFilePresent /></button>
             </div>

            </aside>
          )
        }
    </header>
  )
}

export default Header
