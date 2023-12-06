import {
	ChatContainer,
	MainContainer,
	Message,
	MessageGroup,
	MessageInput,
	MessageList
} from '@chatscope/chat-ui-kit-react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { useChat } from '@chatscope/use-chat'
import { ReactElement, useState } from 'react'

export default function ChatWindow(): ReactElement {
	const [value, setValue] = useState('')
	const { sendMessage, setCurrentMessage, currentMessages } = useChat()

	const handleSend = (text: string): void => {
		// Call your API here
		// Then send the message
		// const input = new ChatMessage<MessageContentType>({
		// 	id: '1',
		// 	contentType: 0,
		// 	senderId: '123',
		// 	direction: MessageDirection.Outgoing,
		// 	content: MessageContentTypeTextContent,
		// 	createdTime: ,
		// })
		setCurrentMessage(text)
		console.log('prompt that was submitted to API: \n' + text)
		setValue('')
	}

	const updateSetValueState = (text: string): void => {
		const regex = /<br>/g
		const result = text.replace(regex, '')
		setValue(result)
	}

	return (
		<div className='absolute bottom-0 w-full'>
			<MainContainer>
				<ChatContainer className='h-[5000px]'>
					<MessageList>
						{currentMessages.map(group => (
							<MessageGroup key={group.id} direction={group.direction}>
								{group.messages.map(message => (
									<Message
										key={message.id}
										model={{
											type: 'text',
											payload: message.content,
											direction: 'outgoing',
											position: 'last'
										}}
									/>
								))}
							</MessageGroup>
						))}
					</MessageList>
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
