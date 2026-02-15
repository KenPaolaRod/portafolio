
import React from 'react'

function Skills() {
  const skills = [
    { img: "img/Figma-1-logo.png", name: "Figma" },
    { img: "img/html-logo.png", name: "HTML5" },
    { img: "img/css3-logo-png-transparent.png", name: "CSS3" },
    { img: "img/javascript-logo.png", name: "Javascript" },
    { img: "img/React-logo.png", name: "React" },
    { img: "img/node-logo.png", name: "Node.js" },
    { img: "img/nosql-logo.png", name: "NoSql" },
    { img: "img/mongodb-logo.png", name: "MongoDB" },
    { img: "img/expressJs-logoo.png", name: "Express.js" },
    { img: "img/Wordpress_Blue_logo.png", name: "Wordpress" },
    { img: "img/adobe-illustrator-logo.png", name: "Illustrator" },
    { img: "img/photoshop.png", name: "Photoshop" }
  ];

  return (
    <div className='skills-container' id='skills'>
      <h2>MY SKILLS</h2>
      <div className='skills-slider'>
        <div className='skills-track'>
          {/* Triplicamos para garantizar loop perfecto */}
          {[...Array(3)].map((_, setIndex) => (
            skills.map((skill, index) => (
              <div className='skill-info' key={`skill-${setIndex}-${index}`}>
                <img src={skill.img} alt={`${skill.name} Logo`} />
                <h3>{skill.name}</h3>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  )
}



export default Skills