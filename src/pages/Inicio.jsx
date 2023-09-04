import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Flowbite } from 'flowbite-react'
import { useEffect } from 'react'
import scrollreveal from 'scrollreveal'

const Inicio = () => {
	useEffect(() => {
		const sr = scrollreveal({
			distance: '80px',
			duration: 2000,
			reset: false,
		})
		sr.reveal(`header`, { origin: 'top' })
		sr.reveal(`main`, { origin: 'left' })
		sr.reveal(`footer`, { origin: 'bottom' })
	}, [])

	return (
		<>
			<Flowbite>
				<div className='flex flex-col h-screen w-full'>
					<header>
						<Header />
					</header>
					<main className='flex-grow'>
						<Hero />
					</main>
					<Footer />
				</div>
			</Flowbite>
		</>
	)
}

export default Inicio
