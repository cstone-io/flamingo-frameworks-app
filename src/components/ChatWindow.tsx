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
		//FIXME:
		// Call your API here
		// Then send the message
		//sendMessage(): takes in a SendMessageParams type. Build this object,
		//there was missing data, likely needed to be passed down from the provider
		setCurrentMessage(text)
		console.log('prompt that was submitted to API: \n' + text)
		//once this is sent, then this line below clears the textbox
		setValue('')
		//you'll likely want to add another call here to render the cards
	}

	//this helper removes a break tag that is appended to the message you type in
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
								{/* Here I tried to start mapping the messages, but clearly there's nothing in our  currentMessages*/}
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
