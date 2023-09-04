import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flowbite } from 'flowbite-react'
import Formulario from '../components/Formulario'
import Resultado from '../components/Resultado'
import useClima from '../hooks/useClima'
import Spinner from '../components/Spinner'
import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'
import NoResultado from '../components/NoResultado'

const Clima = () => {
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

	const { resultado, cargando, noResultado } = useClima()

	return (
		<>
			<Flowbite>
				<div className='flex flex-col h-screen w-full'>
					<header>
						<Header />
					</header>
					<main className='flex-grow grid lg:grid-cols-2 gap-12 items-center'>
						<Formulario />
						{cargando ? (
							<Spinner />
						) : noResultado ? (
							<NoResultado />
						) : (
							resultado?.name && <Resultado />
						)}
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</Flowbite>
		</>
	)
}

export default Clima
