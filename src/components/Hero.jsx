import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const Hero = () => {
	return (
		<section>
			<div className='px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left'>
				<div className='container mx-auto xl:px-32'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='mt-12 lg:mt-0'>
							<h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
								Ve el clima
								<p className='pt-2 text-blue-600'>en la mejor</p>
								<p className='pt-2 text-blue-600'>aplicación</p>
							</h1>
							<Link
								className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
								data-mdb-ripple='true'
								data-mdb-ripple-color='light'
								to='/clima'
								role='button'
							>
								Empezar ahora
							</Link>
						</div>
						<div className='mb-12 lg:mb-0'>
							<img
								src={heroImg}
								className='w-full rounded-lg shadow-lg'
								alt='logo'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
