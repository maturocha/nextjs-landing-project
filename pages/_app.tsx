import Script from "next/script";
import type { NextComponentType } from 'next'

import * as ga from "@/helpers/gtag";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

type CustomAppProps = AppProps & {
	Component: NextComponentType & { auth?: boolean }
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: any) => {
			{
				process.env.NODE_ENV === "production" && ga.pageview(url);
			}
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			{process.env.NODE_ENV === "production" && (
				<>
					<Script
						strategy='lazyOnload'
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>

					<Script id='google-analytics' strategy='lazyOnload'>
						{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                  });
                      `}
					</Script>

					{/* <!-- Hotjar Tracking Code for https://www.trcsports.com --> */}


					<Script id='Hotjar-analytics' strategy='lazyOnload'>
						{`
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:2871688,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                      `}
					</Script>
				</>
			)}

			
			<Component {...pageProps} />
			

			
		</>
	);
}

export default MyApp;
