import {FaGithubSquare, FaLinkedin} from "react-icons/fa"

function ContactInfo() {
  return (
    <article className='contact-container' id="contact">
      <h2>Contact Info</h2>
      <a href="mailto:kenpaorin@gmail.com">Kenpaorin@gmail.com</a>
      <div>
        <ul className="contact-icons"> 
          <li className="contact-icon"><a href="https://github.com/KenPaolaRod?tab=repositories" target="blanck_"> <FaGithubSquare /> </a></li>
          <li><a className="contact-icon" href="https://www.linkedin.com/in/kenyerling-rodriguez/" target="blanck_" ><FaLinkedin /></a></li>
         </ul>
      </div>
    </article>
  )
}

export default ContactInfo