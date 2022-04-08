import React from 'react'
import './home.css'

import LandingPage from '../../components/landing-page/landing.component'
import Projects from '../../components/projects/projects.component'
import Contact from '../../components/contact/contact.component'

//mock data source
import data from '../../data/mock.data'

const Home = () => {
  return (
    <div className="home" data-scroll-section>
        <LandingPage/>

        <div className="wrapper">
            <Projects projectData={data}/>
        </div>

        <div className="wrapper">
            <Contact/>
        </div>
    </div>
  )
}

export default Home