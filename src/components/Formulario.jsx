import useClima from '../hooks/useClima'
import { useState } from 'react'

const Formulario = () => {
	const [alerta, setAlerta] = useState('')
	const { busqueda, datosBusqueda, consultarClima } = useClima()

	const { ciudad, pais } = busqueda

	const handleSubmit = (e) => {
		e.preventDefault()

		if (Object.values(busqueda).includes('')) {
			setAlerta('Todos los campos son obligatorios')
			return
		}
		setAlerta('')
		consultarClima(busqueda)
	}

	return (
		<div className='px-6 py-12 md:px-12'>
			<div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
				<h1 className='text-3xl font-medium'>Consulta el clima de tu ciudad</h1>
				<p className='text-slate-500 pt-5'>Hola, bievenido. 👋</p>

				<form className='my-10' onSubmit={handleSubmit}>
					<div className='flex flex-col space-y-5'>
						<label htmlFor='email'>
							<p className='font-medium text-slate-700 pb-2'>Ciudad</p>
							<input
								type='text'
								id='ciudad'
								name='ciudad'
								onChange={datosBusqueda}
								value={ciudad}
								className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
								placeholder='Ingresa el nombre de tu ciudad'
							/>
						</label>

						<label htmlFor=''>
							<p className='font-medium text-slate-700 pb-2'>Pais</p>
							<select
								name='pais'
								id='pais'
								onChange={datosBusqueda}
								value={pais}
								className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
								placeholder='Ingresa el nombre de tu ciudad'
							>
								<option value=''>Seleccione un pais</option>
								<option value='US'>Estados Unidos</option>
								<option value='MX'>México</option>
								<option value='CAD'>Canada</option>
								<option value='AR'>Argentina</option>
								<option value='CL'>Chile</option>
								<option value='CO'>Colombia</option>
								<option value='CR'>Costa Rica</option>
								<option value='ES'>España</option>
								<option value='PE'>Perú</option>
							</select>
						</label>

						<div className='flex flex-row justify-between'></div>
						<button
							type='submit'
							className='w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								/>
							</svg>
							<span>Buscar</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Formulario
