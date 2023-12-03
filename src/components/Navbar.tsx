import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import type { ReactElement } from 'react'
import fplLogo from '../../public/fpl_icon.png'

const navigation = [
	{ name: 'Services', href: '/', current: true },
	{ name: 'Explore', href: '/', current: false },
	{ name: 'Support', href: '/', current: false },
	{ name: 'AI Chat Support', href: 'chat', current: false }
]

function namesOfClasses(...classes: string[]): string {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar(): ReactElement {
	return (
		<Disclosure as='nav' className='w-full bg-white'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='text-black-400 relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<img
										className='h-8 w-auto'
										src={fplLogo}
										alt='Your Company'
									/>
								</div>
								<div className='after:mx-auto after:my-2 after:block after:h-10 after:w-[1px] after:bg-black'></div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										{navigation.map(item => (
											<a
												key={item.name}
												href={item.href}
												className={namesOfClasses(
													item.current
														? 'bg-black-900 text-black'
														: 'text-black-300 text-black hover:bg-gray-700 hover:text-black',
													'text-sm rounded-md px-3 py-2 font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'></Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
