import Head from 'components/Head'
import Navbar from 'components/Navbar'
import type { ReactElement } from 'react'

export default function GalleryPage(): ReactElement {
	return (
		<>
			<Head title='FPL | Homepage' />
			<Navbar />
		</>
	)
}
