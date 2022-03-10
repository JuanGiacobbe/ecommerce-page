import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './home.css'


export default function Home() {
	return(
		<div>
			<Navbar />

			<main className='container home'>

				<Header />

			</main>


			<Footer />

		</div>
	)
}