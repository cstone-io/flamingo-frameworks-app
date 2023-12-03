import ChatPageContent from 'components/ChatPageContent'
import ChatWindow from 'components/ChatWindow'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import type { ReactElement } from 'react'

export default function ChatPage(): ReactElement {
	return (
		<div className='flex-column h-full w-full'>
			<Head title='FPL | Edi' />
			<Navbar />
			<ChatPageContent />
			<ChatWindow />
		</div>
	)
}
