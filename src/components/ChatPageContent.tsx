import type { ReactElement } from 'react'

export default function ChatPageContent(): ReactElement {
	return (
		<div className='flex h-screen flex-col'>
			<div className='flex flex-grow items-center justify-center'>
				<div className='grid grid-cols-3'>
					<div></div>
					<div className='grid grid-rows-3'>
						<div></div>
						<div className='font-bold'>How can I help you today?</div>
						<div></div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
