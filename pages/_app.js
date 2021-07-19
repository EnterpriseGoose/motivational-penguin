import Head from "next/head";
import { Fragment } from "react";

import '../styles/global.css'

function App({ Component, pageProps }) {

	return (
		<Fragment>
			<Head>

				<title>Motivational Penguin</title>

				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#6C92FA"/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://www.motivationalpengu.in/"/>
				<meta property="og:title" content="A Wild Motivational Penguin Appeared!"/>
				<meta property="og:description" content="Get motivated in the cutest way possible - by a penguin"/>
				<meta property="og:image" content="https://www.motivationalpengu.in/logos/logo-big.png"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="Description" content="Get motivated in the best and cutest way possible - by a penguin!"/>

				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
				/>

				<link
					rel="stylesheet"
					href="https://use.typekit.net/hkl8uis.css"
				/>

				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
				/>

				<script src="/scripts/jquery.js"></script>

			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default App;