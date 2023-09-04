const NoResultado = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<div className='bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50 mb-10'>
				<div className='flex flex-col'>
					<div className='my-6'>
						<div className='flex flex-row space-x-4 items-center'>
							<div id='icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-20 w-20 text-red-600'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</div>
							<div id='temp'>
								<h4 className='text-2xl text-gray-900'>
									Lo sentimos, no hemos podido
								</h4>
								<h4 className='text-2xl text-gray-900'>
									encontrar lo que buscas.
								</h4>
								<p className='text-xs text-gray-500 pt-2'>
									Hemos buscado por todas partes.
								</p>
								<p className='text-xs text-gray-500'>
									¿Escribiste de forma correcta lo que buscabas?
								</p>
								<p className='text-xs text-gray-500'>
									Vuelve a realizar la busqueda para encontrar un resultado.
								</p>
							</div>
						</div>
					</div>
					<div className='w-full place-items-end text-right border-t-2 border-gray-100 mt-2'>
						<a href='' className='text-indigo-600 text-xs font-medium'>
							View more
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NoResultado
