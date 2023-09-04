import faviconImg from '../assets/favicon.png'

const Footer = () => {
	return (
		<footer className='p-4 bg-white rounded-none shadow md:px-6 md:py-2 dark:bg-gray-800'>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<a href='/' className='flex items-center mb-4 sm:mb-0'>
					<img
						src={faviconImg}
						className='mr-3 h-10 sm:h-12'
						alt='azulgrana Logo'
					/>
					<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
						azulgrana
					</span>
				</a>
				<span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
					© 2022{' '}
					<a href='/' className='hover:underline'>
						Powered By Hamid Escalera™ All Rights Reserved
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
