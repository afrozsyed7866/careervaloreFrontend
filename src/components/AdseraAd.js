'use client';

import Script from 'next/script';

export default function AdseraAd() {
  return (
    <div>
      {/* Iframe Ad */}
      <Script
        id="adsterra-iframe-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.atOptions = {
              'key': '9d78f63022108a076a71f6a8990be2a7',
              'format': 'iframe',
              'height': 250,
              'width': 300,
              'params': {}
            };
          `,
        }}
      />
      <Script
        src="//www.highperformanceformat.com/9d78f63022108a076a71f6a8990be2a7/invoke.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Iframe ad script loaded')}
      />
      
      {/* popup Script Ad */}
      {/* <div
        id="iframe-ad-container"
        style={{ width: '300px', height: '250px', marginBottom: '20px' }}
      />

      <Script
        src="//pl26268277.effectiveratecpm.com/d4/ec/90/d4ec9055f3069a4bfae28f01ffcfa7ca.js"
        strategy="afterInteractive"
        onLoad={() => console.log('First script ad loaded')}
      /> */}
      <div id="ad-container-1" style={{ marginBottom: '20px' }} />

      {/* social Script Ad */}
      {/* <Script
        src="//pl26268910.effectiveratecpm.com/79/85/b3/7985b306433d47d3d920fc269e14f8fb.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Second script ad loaded')}
      /> */}
      <div id="ad-container-2" style={{ marginBottom: '20px' }} />

      {/* Third Script Ad with Container */}
      <Script
        src="//pl26268169.effectiveratecpm.com/f3ae654a2213ba937cbbbfd402e635b9/invoke.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
        onLoad={() => console.log('Third script ad loaded')}
      />
      <div id="container-f3ae654a2213ba937cbbbfd402e635b9" style={{ marginBottom: '20px' }} />
    </div>
  );
}