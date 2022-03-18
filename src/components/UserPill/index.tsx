import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

type UserProps = {
	name: string;
	email: string;
	image: string;
};

export const UserPill = ({ name, email, image }: UserProps) => {
	return (
		<div className='flex items-center justify-between w-full px-4 py-2'>
			<div className='inline-flex w-full items-center min-w-max'>
				<img
					className='object-cover rounded-full h-10 w-10 bg-black'
					src={image}
					alt='User'
				/>
				<div className='mx-4'>
					<p className='text-gray-900 text-base font-semibold'>
						{name}
					</p>
					<p className='text-gray-400 text-sm'>{email}</p>
				</div>
			</div>
			<MdKeyboardArrowUp size='24' className='text-gray-400' />
		</div>
	);
};
