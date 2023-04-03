import React from 'react';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Open_Sans} from 'next/font/google';

const ibmFont = Open_Sans({subsets: ['latin'], weight: ['400']});

export default function App({Component, pageProps}: AppProps) {
	return (
		<main className={ibmFont.className} >
			<Component {...pageProps} />
		</main>
	);
}
