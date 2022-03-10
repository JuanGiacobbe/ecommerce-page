import { NavLink } from 'react-router-dom';
import './header.css'

 export default function Header () {
	return(
		<header className='header'>
			
			<div className='header-content'>
				<h2>Welcome to my shop!</h2>
				<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					In efficitur diam at ipsum rutrum hendrerit. Integer et dolor dignissim, 
					ullamcorper nulla ac, aliquam risus. Aenean at fermentum risus. 
					Phasellus vulputate facilisis tortor, et commodo nisi luctus non.</p>

				<NavLink 
					to='/account-register'
					className='header-link'
				>
					Explore more
				</NavLink>
			</div>

			<div className='header-img'>
				<img src='https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg' className='img' alt='img' />
			</div>

			
		</header>
	)
}
