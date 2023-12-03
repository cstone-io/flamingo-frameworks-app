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
	const { sendMessage, setCurrentMessage } = useChat()

	const handleSend = (text: string): void => {
		// Call your API here
		// Then send the message
		console.log('text: ' + text)
		setCurrentMessage(value)
		setValue('')
	}

	const updateSetValueState = (text: string): void => {
		const regex = /<br>/g
		const result = text.replace(regex, '')
		console.log(result)
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
