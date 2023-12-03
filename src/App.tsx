import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Chat = lazy(async () => import('pages/Chat'))
const LandingPage = lazy(async () => import('pages/LandingPage'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/chat' element={<Chat />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
