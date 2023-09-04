import useClima from '../hooks/useClima'

const Resultado = () => {
	const { resultado } = useClima()

	const { name, main } = resultado
	if (!name) return null

	//Grados Kelvin
	const kelvin = 273.15

	return (
		<div className='px-6 py-12 md:px-12'>
			<div className='flex items-center justify-center h-full'>
				<div className='bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50'>
					<div className='flex flex-col'>
						<div>
							<h2
								id='temp'
								className='text-3xl font-bold text-gray-900 text-center'
							>
								El clima de {name}:
							</h2>
						</div>
						<div className='my-6'>
							<div className='flex flex-row space-x-4 items-center'>
								<div id='icon'>
									<span>
										<svg
											className='w-20 h-20 fill-stroke text-yellow-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
											></path>
										</svg>
									</span>
								</div>
								<div id='temp'>
									<h4 className='text-2xl text-gray-900'>
										Temperatura actual:{' '}
										{parseFloat(main.temp - kelvin).toFixed(2)}&deg;C
									</h4>
									<p className='text-xs text-gray-500 pt-2'>
										Temperatura Minima:{' '}
										{parseFloat(main.temp_min - kelvin).toFixed(2)}&deg;C
									</p>
									<p className='text-xs text-gray-500'>
										Temperatura Máxima:{' '}
										{parseFloat(main.temp_max - kelvin).toFixed(2)}&deg;C
									</p>
								</div>
							</div>
						</div>
						<div className='w-full place-items-Footer text-right border-t-2 border-gray-100 mt-2'>
							<a href='#' className='text-indigo-600 text-xs font-medium'>
								View more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resultado
