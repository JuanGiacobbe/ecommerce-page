import './landing.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import LandingForm from '../../components/landing-form/LandingForm';


export default function Landing () {
	return (
		<>
			<Navbar />

			<div className='landing-container'>
				<div className='landing-grid'>
					<div className='container txt-container'>
						<h3>Get the newest information and the posibility to talk with us!</h3>
						<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo libero, 
						bibendum ut blandit vitae, ornare venenatis arcu. Phasellus ac dignissim justo, 
						et faucibus ex. Nunc mattis consectetur orci at interdum. Cras eu diam et erat dapibus
						 semper fringilla vitae tortor. Etiam in pellentesque magna</p>
					</div>

					<div className='container'>
						<LandingForm />
					</div>
				</div>
			</div>
			

			<Footer />

		</>
	)
}