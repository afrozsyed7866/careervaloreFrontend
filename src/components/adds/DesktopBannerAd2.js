'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

function DesktopBannerAd2({ adId, width = '728px', height = '90px' }) {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);

    // Debug: Log when the ad script runs and check the DOM
    console.log(`DesktopBannerAd rendered with adId: ${adId}`);
    const adContainer = document.getElementById(adId);
    if (adContainer) {
      console.log(`Ad container found for adId: ${adId}`, adContainer);
    } else {
      console.error(`Ad container NOT found for adId: ${adId}`);
    }

    // Workaround: Move ad content to the correct container if misplaced
    const checkAdPlacement = () => {
      const adContent = document.querySelector(`iframe[src*='laphagrito.com']`); // Adjust selector based on ad content
      if (adContent && adContainer && !adContainer.contains(adContent)) {
        console.log('Moving ad content to correct container');
        adContainer.appendChild(adContent);
      }
    };

    // Run check after a delay to allow ad script to load
    const timeout = setTimeout(checkAdPlacement, 1000);
    return () => clearTimeout(timeout);
  }, [adId]);

  if (!isClient) return null;

  return (
    <div
      className="desktop-ad-container"
      style={{
        width,
        height,
        display: 'block',
        margin: '20px auto', // Add margin for visibility
        overflow: 'hidden',
        position: 'fixed', // Ensure container respects parent layout
        background: '#f0f0f0', // Temporary background for debugging
        border: '2px solid red', // Temporary border for debugging
      }}
    >
      <div id={adId} style={{ width, height }} />
      <Script
        id={`desktop-ad-${adId}`}
        strategy="lazyOnload"
        async
        referrerPolicy="no-referrer-when-downgrade"
        dangerouslySetInnerHTML={{
          __html: `
            (function(qmf){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = qmf || {};
              s.src = "//laphagrito.com/biXSV/s.d/GclW0dYXWtcz/qe/md9LuIZZU/lZkqPiT/YIyDOCDcED0/NTz/MUtaN/jmIk4/M/TFQQ3FN/AH";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({ adId: "${adId}" })
          `,
        }}
      />
    </div>
  );
}

export default DesktopBannerAd2;