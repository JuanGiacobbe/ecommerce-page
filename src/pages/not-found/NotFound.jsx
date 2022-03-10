import { NavLink } from 'react-router-dom';

import './notfound.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


export default function NotFound() {
	return(
		<>
			<Navbar />

			<div className='container'>
				<h1 className='err-num'>404!</h1>
				<h2>Page Not Found</h2>
				
				<div className='err-txt'>
					<p>The page that you're looking for doesn't exist :(</p> 
					<p>Try going back to the <NavLink to='/' className='page-link' >home page</NavLink> or 
					see our help center for more information.</p>
				</div>
				<NavLink to='/' className='btn'>Go to home page</NavLink>

			</div>

			<Footer />
		</>
	)
}