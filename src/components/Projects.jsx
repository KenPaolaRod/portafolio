import React from 'react'

function Projects() {
  return (
    <article className='project-container' id='projects'>
      <h1>Projects</h1>
      <div className='project-info'>
        <a href="https://kenpaolarod.github.io/Landing-de-ventas/" target='_blank'>
          <img src="img/projects/salesLanding.png" alt="Sales Landing" className='project-skills-img' />
        </a>
        <h2>Sales Lading</h2>
        <div className='project-skills-box'>
          <img src="img/html-logo.png" alt="HTML Logo" />
          <img src="img/css3-logo-png-transparent.png" alt="CSS Logo" />
        </div>
      </div>

      <div>
        <a href="https://medellinrealestate.com.co/" target='_blank'>
          <img src="img/projects/medellinRealEstate.png" alt="Real Estate website" className='project-skills-img'/>
        </a>
        <h2>RealEstate website </h2>
        <div className='project-skills-box'>
          <img src="img/html-logo.png" alt="HTML Logo" />
          <img src="img/css3-logo-png-transparent.png" alt="CSS Logo" />
          <img src="img/javascript-logo.png" alt="CSS Logo" />
        </div>
      </div>

      <div>
        <a href="https://kenpaolarod.github.io/crud-app/" target='_blank'>
          <img src="img/projects/toDo.png" alt="To Do App" className='project-skills-img' />
        <h2>To Do App</h2>
        </a>
        <div className='project-skills-box'>
          <img src="img/html-logo.png" alt="HTML Logo" />
          <img src="img/css3-logo-png-transparent.png" alt="CSS Logo" />
          <img src="img/javascript-logo.png" alt="CSS Logo" />
        </div>
      </div>

      <div>
        <a href="https://kenpaolarod.github.io/dashboard/" target='_blank'>
          <img src="img/projects/stockMarket.png" alt="Stock Market" className='project-skills-img' />
        </a>
        <h2>Dashboard</h2>
        <div className='project-skills-box'>
          <img src="img/html-logo.png" alt="HTML Logo" />
          <img src="img/css3-logo-png-transparent.png" alt="CSS Logo" />
          <img src="img/javascript-logo.png" alt="CSS Logo" />
        </div>
      </div>

      <div>
        <a href="https://kenpaolarod.github.io/restaurant-App/" target='_blank'>
          <img src="img/projects/restaurantApp.png" alt="Restaurant App" className='project-skills-img' />
        </a>
        <h2>Restaurant App</h2>
        <div className='project-skills-box'>
          <img src="img/React-logo.png" alt="HTML Logo" />
        </div>
      </div>

      <div>
        <a href="https://ecommerce-kencool.onrender.com/" target='_blank'>
          <img src="img/projects/ecommerce.png" alt="Ecommerce" className='project-skills-img' />
        </a>
        <h2>Ecommerce</h2>
        <div className='project-skills-box'>
          <img src="img/React-logo.png" alt="HTML Logo" />
          <img src="img/node-logo.png" alt="node Logo" />
          <img src="img/nosql-logo.png" alt="node Logo" />
          <img src="img/expressJs-logoo.png" alt="node Logo" />
          <img src="img/mongodb-logo.png" alt="node Logo" />
        </div>
      </div>

      <div>
        <a href="https://friendsandfamily.com.co" target='_blank'>
          <img src="img/projects/tourapp.png" alt="Ecommerce" className='project-skills-img' />
        </a>
        <h2>Tours Web Applocation</h2>
        <div className='project-skills-box'>
          <img src="img/Wordpress_Blue_logo.png" alt="HTML Logo" />
        </div>
      </div>

    </article>
  )
}

export default Projects