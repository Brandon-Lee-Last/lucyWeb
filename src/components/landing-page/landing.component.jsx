import React from 'react'
import './landing.css'

const LandingPage = () => {
  return (
        <section className="showcase">
			<div className="video-container">
				<video autoPlay muted loop>
                    <source src="assets/videos/radio.mp4" type='video/mp4'/>
                </video>
			</div>
			<div className="content">
				<h1>Lucy Ourique</h1>
				<a href="#about" class="btn">View Projects</a>
			</div>
		</section>
  )
}

export default LandingPage