import {
	ChatContainer,
	MainContainer,
	MessageInput,
	MessageList
} from '@chatscope/chat-ui-kit-react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { useChat } from '@chatscope/use-chat'
import { ReactElement, useState } from 'react'

export default function ChatWindow(): ReactElement {
	const [value, setValue] = useState('')
	const { sendMessage } = useChat()

	const handleSend = (text: any): void => {
		// Call your API here
		// Then send the message
		sendMessage(text)
	}

	const updateSetValueState = (text: any): void => {
		const regex = /<br>/g
		const result = text.replace(regex, '')
		setValue(result)
	}

	return (
		<div className='absolute bottom-0 w-full'>
			<MainContainer>
				<ChatContainer className='h-[5000px]'>
					<MessageList>{/* Your messages here */}</MessageList>
					<MessageInput
						value={value}
						onSend={handleSend}
						onChange={updateSetValueState}
					/>
				</ChatContainer>
			</MainContainer>
		</div>
	)
}
