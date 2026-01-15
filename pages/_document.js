import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<meta
					name="description"
					content="Идеальные путешествия существуют..."
				/>
				<link rel="icon" href="../images/Favicon/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
