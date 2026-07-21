'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

function MobileBannerAd({ adId = 'mobile-banner', width = '320px', height = '50px' }) {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="mobile-ad-container"
      style={{
        width,
        height,
        display: 'block',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <Script
        id={`mobile-ad-${adId}`}
        strategy="lazyOnload"
        async
        referrerPolicy="no-referrer-when-downgrade"
        dangerouslySetInnerHTML={{
          __html: `
            (function(pmhgqq){
            var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = mwlj || {};
          s.src = "\/\/laphagrito.com\/b.XCVAs\/dZGXlE0\/YwWBcV\/Sehms9mu\/ZWUvlLk\/PfTlY_y-NkzNchwtMiz-QOtdNBjSI\/3ONMzzA\/z\/NAQq";
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

export default MobileBannerAd;