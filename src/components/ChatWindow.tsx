import {
	ChatContainer,
	MainContainer,
	MessageInput,
	MessageList
} from '@chatscope/chat-ui-kit-react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'

import type { ReactElement } from 'react'

export default function ChatWindow(): ReactElement {
	return (
		<div className='absolute bottom-0 w-full'>
			<MainContainer>
				<ChatContainer className='h-[5000px]'>
					<MessageList>{/* Your messages here */}</MessageList>
					<MessageInput />
				</ChatContainer>
			</MainContainer>
		</div>
	)
}
