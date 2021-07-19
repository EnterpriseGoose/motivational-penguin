import Image from 'next/image'
import Link from 'next/link'

const Index = props => {
	return (
		<div className="static flex flex-col w-screen h-screen overflow-hidden">
			<script type="text/javascript" src="/scripts/index.js" />
			<div className="absolute w-full h-full bg-blue-400 bg" />
			<div className="absolute inset-0 flex flex-row h-full w-full place-items-center place-content-center">
				<div className="flex flex-col h-full justify-self-center place-items-center place-content-center">
					<div className="flex pb-16 img-div">
						<img
							className="spinner"									
							src='/loader.svg'
							width="50"
							height="50"
						/>
					</div>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 overflow-hidden">
				<div className="flex flex-row text-md place-content-center place-items-center space-x-10 mt-10">
					<Link href="https://twitter.com/intent/tweet?url=https://www.motivationalpengu.in/&text=I%20just%20got%20motivated%20by%20a%20penguin!">
						<div className="bg-white pt-2 px-3 pb-36 -mb-36 rounded-3xl text-center place-content-center hover:bg-gray-200 active:bg-gray-400 cursor-pointer transform transition hover:scale-105 hover:-translate-y-4">
							<i className="fab fa-twitter text-brand-1 w-full h-full text-8xl"></i>
						</div>
					</Link>
					<Link href="https://www.facebook.com/sharer/sharer.php?u=https://www.motivationalpengu.in/">
						<div className="bg-white py-1.5 px-3 pb-36 -mb-36 rounded-3xl text-center place-content-center hover:bg-gray-200 active:bg-gray-400 cursor-pointer transform transition hover:scale-105 hover:-translate-y-4">
							<i className="fab fa-facebook-square text-brand-2 w-full h-full text-8xl"></i>
						</div>
					</Link>
				</div>
			</div>
			<div className="bg-blue-400 bg-yellow-400 bg-green-500 bg-indigo-400 bg-purple-400"/>
		</div>
	)
}

export default Index