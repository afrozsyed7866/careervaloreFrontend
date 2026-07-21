'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

function DesktopBannerAd({ adId, width = '300px', height = '250px' }) {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="desktop-ad-container"
      style={{
        width,
        height,
        display: 'block',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <Script
        id={`${adId}`}
        strategy="lazyOnload"
        async
        referrerPolicy="no-referrer-when-downgrade"
        dangerouslySetInnerHTML={{
          __html: `
            (function(pmhgqq){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = pmhgqq || {};
              s.src = "//laphagrito.com/b/XuV.sddjGKlG0AYUWbcQ/Xejml9/uqZgUclHkkP/TPYYyxNGz/c_w/MzjkQztgNcjdIg3ENkzIALy/NuQ_";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `,
        }}
      />
      <div id={adId}></div>
      
      
    </div>
  );
}

export default DesktopBannerAd;
// 'use client';

// import Script from 'next/script';
// import { useEffect, useState } from 'react';

// function DesktopBannerAd({ adId, width = '160px', height = '600px' }) {
//   const [isClient, setIsClient] = useState(false);

//   // Ensure client-side rendering to avoid hydration mismatch
//   useEffect(() => {
//     setIsClient(true);

//     // Debug: Log when the ad script runs and check the DOM
//     console.log(`DesktopBannerAd rendered with adId: ${adId}`);
//     const adContainer = document.getElementById(adId);
//     if (adContainer) {
//       console.log(`Ad container found for adId: ${adId}`, adContainer);
//     } else {
//       console.error(`Ad container NOT found for adId: ${adId}`);
//     }

//     // Optional: Observe DOM changes to detect ad script behavior
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.addedNodes.length) {
//           mutation.addedNodes.forEach((node) => {
//             if (node.nodeName === 'IFRAME' || node.id === adId) {
//               console.log('Ad content added to DOM:', node);
//             }
//           });
//         }
//       });
//     });
//     observer.observe(document.body, { childList: true, subtree: true });

//     return () => observer.disconnect();
//   }, [adId]);

//   if (!isClient) return null;

//   return (
//     <div
//       className="desktop-ad-container"
//       style={{
//         width,
//         height,
//         display: 'block',
//         margin: '20px auto', // Add margin to ensure visibility
//         overflow: 'hidden',
//         position: 'relative', // Ensure the container respects its parent
//         background: '#f0f0f0', // Temporary background for debugging
//       }}
//     >
//       <div id={adId} style={{ width, height }} />
//       <Script
//         id={`desktop-ad-${adId}`}
//         strategy="lazyOnload"
//         async
//         referrerPolicy="no-referrer-when-downgrade"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(pmhgqq){
//               var d = document,
//                   s = d.createElement('script'),
//                   l = d.scripts[d.scripts.length - 1];
//               s.settings = pmhgqq || {};
//               s.src = "//laphagrito.com/b/XuV.sddjGKlG0AYUWbcQ/Xejml9/uqZgUclHkkP/TPYYyxNGz/c_w/MzjkQztgNcjdIg3ENkzIALy/NuQ_";
//               s.async = true;
//               s.referrerPolicy = 'no-referrer-when-downgrade';
//               l.parentNode.insertBefore(s, l);
//             })({ adId: "${adId}" })
//           `,
//         }}
//       />
//     </div>
//   );
// }

// export default DesktopBannerAd;