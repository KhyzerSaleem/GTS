"use client";

import Script from "next/script";

export default function ThanksLayout({ children }) {
  return (
    <>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16768438691/9_AoCKyZsOcZEKOj6Ls-"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16768438691/9_AoCKyZsOcZEKOj6Ls-');
        `}
        </Script>

        {/* Trigger conversion event */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
          gtag('event', 'conversion', {'send_to': 'AW-16768438691/9_AoCKyZsOcZEKOj6Ls-'});
        `}
        </Script>
        {/* Event snippet for Request quote conversion page */}
        <script id="request-quote-conversion" strategy="afterInteractive">
          {`
    gtag('event', 'conversion', {'send_to': 'AW-16768438691/9_AoCKyZsOcZEKOj6Ls-'});
         `}
        </script>
      </head>
      {children}
    </>
  );
}
