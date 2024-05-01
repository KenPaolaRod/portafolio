import {FaGithubSquare, FaLinkedin} from "react-icons/fa"
import { MdOutlineFilePresent } from "react-icons/md";
import * as FileSaver from 'file-saver';

function Footer() {
  const handleDownload = () => {
    const fileUrl = 'public/img/projects/resume-2024.pdf'; 
    FileSaver.saveAs(fileUrl, 'my-resume.pdf');
  };
  
  return (
   <footer>
    <img src="img/logo.png" alt="logo"/>
    <ul>
      <li><a href="https://github.com/KenPaolaRod?tab=repositories" target="blanck_"> <FaGithubSquare /> </a></li>
      <li><a href="https://www.linkedin.com/in/kenyerling-rodriguez/" target="blanck_" ><FaLinkedin /></a></li>
      <li><button onClick={handleDownload}><MdOutlineFilePresent /></button> </li>
    </ul>
    <p> &#169; Copyright kenpaola.com</p>
   </footer>
  )
}

export default Footer