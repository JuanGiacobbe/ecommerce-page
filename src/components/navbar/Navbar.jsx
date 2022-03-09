import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='nav'>
			<NavLink to="/" className='link'>logo</NavLink>

			<ul className='list'>
				
				<li>
					<NavLink to="/products" className='link'>products</NavLink>
				</li>
				
				<li>
					<NavLink to="/about" className='link'>about us</NavLink>
				</li>
				
				<li>
					<NavLink to="/colections" className='link'>colections</NavLink>
				</li>
				
				<li>
					<NavLink to="/contact" className='link'>contact</NavLink>
				</li>

			</ul>
		</nav>
	)
}