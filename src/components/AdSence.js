import Script from 'next/script';

export default function Home() {
  return (
    <div>
{/* Popup Adsera Script <Script src="//pl26268277.effectiveratecpm.com/d4/ec/90/d4ec9055f3069a4bfae28f01ffcfa7ca.js" strategy="lazyOnload" /> */}

      {/* Banner Ad Script */}
      <Script
        strategy="afterInteractive"
        async
        data-cfasync="false"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '9d78f63022108a076a71f6a8990be2a7',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `,
        }}
      />
      <Script
        src="//www.highperformanceformat.com/9d78f63022108a076a71f6a8990be2a7/invoke.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />

      {/* Native Banner Ad Script */}
      <Script
        src="//pl26268169.profitableratecpm.com/f3ae654a2213ba937cbbbfd402e635b9/invoke.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />

      {/* Container for the Native Banner script */}
      <div id="container-f3ae654a2213ba937cbbbfd402e635b9"></div>
    </div>
  );
}
