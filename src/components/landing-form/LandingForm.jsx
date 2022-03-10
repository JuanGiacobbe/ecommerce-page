import './landingform.css'

export default function LandingForm() {
	return(
		<div className='container landing-form'>
			<h2 className='dark-txt'>Let's get started</h2>

			<form className='container form'>
				<input type='text' placeholder='First name' className='input name'/>
				<input type='text' placeholder='Last name' className='input name'/>
				<input type='e-mail' placeholder='Your email' className='input mail'/>

				<input type='submit' value='submit' className='btn submit'/>

			</form>
		</div>
	)
}