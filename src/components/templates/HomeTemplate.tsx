import React from 'react'
import './style.scss'

const HomeTemplate: React.FC = () => {
	return (
		<div className='flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-900  to-blue-700'>
			<h1 className='text-6xl text-green-500 border-b-4 pb-4'>Hello World !</h1>
			<h2 className='text-2xl text-gray-300 mt-10'>
				Click{' '}
				<a
					className='text-green-400 underline'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/axibord/react-typescript-starter'
				>
					here
				</a>{' '}
				to read instructions for production optimization
			</h2>
		</div>
	)
}

export default HomeTemplate
