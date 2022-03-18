import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdChatbubbles } from 'react-icons/io';

type Props = {
	children?: React.ReactNode;
	title?: string;
	subtitle?: string;
	toggleMenu: () => void;
};

const Header = ({ toggleMenu, title, subtitle }: Props) => {
	return (
		<header className='w-full min-h-20 z-30 py-4'>
			<div className='relative flex flex-col justify-center h-full px-3 mx-auto flex-center'>
				<div className='relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0'>
					<div className='flex left-0'>
						<button
							className='lg:hidden inline-block outline-none text-gray-400 font-semibold bg-transparent border-0'
							onClick={toggleMenu}
						>
							<HiOutlineMenuAlt1 size='24' />
						</button>

						<div className='flex items-center px-4'>
							<>
								<Link to='/' className='font-medium text-base'>
									{title || 'Projects'}
								</Link>
							</>

							<>
								<MdKeyboardArrowRight className='mx-2' />
								<Link
									to='/'
									className='font-medium text-gray-400 text-base'
								>
									{subtitle || 'GSE Banking App'}
								</Link>
							</>
						</div>
					</div>
					<div className='p-1 flex items-center ml-5 mr-4 sm:mr-0 sm:right-auto'>
						<Link to='' className='flex items-center mr-3'>
							<IoMdChatbubbles
								size='20'
								className='text-gray-500'
							/>
						</Link>
						<Link to='' className='flex items-center  mx-3'>
							<FaBell size='20' className='text-gray-500' />
						</Link>
						<div className='h-8 mx-6 w-[1px] bg-[#E5E5E5]' />
						<Link
							to=''
							className='inline-flex w-full items-center min-w-max'
						>
							<img
								className='mx-auto object-cover rounded-full h-8 w-8 bg-black'
								src='https://randomuser.me/api/portraits/med/men/32.jpg'
								alt='User'
							/>
							<p className='text-[#303B54] text-sm font-semibold mx-3'>
								RonasIT
							</p>
							<MdKeyboardArrowDown
								size='24'
								className='text-gray-400'
							/>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
