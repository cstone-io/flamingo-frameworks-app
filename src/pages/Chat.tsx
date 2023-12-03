import { AutoDraft, BasicStorage, ChatProvider } from '@chatscope/use-chat'
import { ExampleChatService } from '@chatscope/use-chat/dist/examples'
import ChatPageContent from 'components/ChatPageContent'
import ChatWindow from 'components/ChatWindow'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import { nanoid } from 'nanoid'
import type { ReactElement } from 'react'

// Storage needs to generate id for messages and groups
const messageIdGenerator = () => nanoid()
const groupIdGenerator = () => nanoid()

// Create serviceFactory
const serviceFactory = (storage: any, updateState: any) => {
	return new ExampleChatService(storage, updateState)
}

const chatStorage = new BasicStorage({ groupIdGenerator, messageIdGenerator })

export default function ChatPage(): ReactElement {
	return (
		<div className='flex-column h-full w-full'>
			<ChatProvider
				serviceFactory={serviceFactory}
				storage={chatStorage}
				config={{
					typingThrottleTime: 250,
					typingDebounceTime: 900,
					debounceTyping: true,
					autoDraft: AutoDraft.Save | AutoDraft.Restore
				}}
			>
				<Head title='FPL | Edi' />
				<Navbar />
				<ChatPageContent />
				<ChatWindow />
			</ChatProvider>
		</div>
	)
}
;``
