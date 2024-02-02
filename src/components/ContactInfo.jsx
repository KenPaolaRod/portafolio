import {FaGithubSquare, FaLinkedin} from "react-icons/fa"

function ContactInfo() {
  return (
    <article className='contact-container'>
      <h2>Contact Info</h2>
      <a href="mailto:kenpaorin@gmail.com">Kenpaorin@gmail.com</a>
      <a href="tel:+13322075494">+1(332)207-5494</a>
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