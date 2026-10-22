'use client'; // Mark as a client component

import Script from 'next/script';

export default function HilltopAds() {
  return (
    <>
      {/* Mobile Ads Script */}
      <Script
        id="mobile-ads-script" // Unique ID for mobile ads script
        src="//full-copy.com/bMXDVYsOd.G-lk0/YSW/cw/eebmj9zudZzUblxkhPZTAYMygNZzpcWwYMZzfQjtaN/jOI/3iNgzkA/zEN_Qg"
        async
        referrerPolicy="no-referrer-when-downgrade"
        strategy="afterInteractive" // Load after page is interactive
        dangerouslySetInnerHTML={{
          __html: `
            (function(obs){
              window.obs = obs || {};
            })({})
          `,
        }}
      />

      {/* Video Script */}
      <Script
        id="video-script" // Unique ID for video script
        src="//full-copy.com/boX/V.sDdpG/lz0yYZWhcS/aeDmH9iuZZIUclBkBP/TqYUyeNijRQa3/MkzEcHtDNzjiIt2/NwDVcTzqO_A_"
        async
        referrerPolicy="no-referrer-when-downgrade"
        strategy="afterInteractive" // Load after page is interactive
        dangerouslySetInnerHTML={{
          __html: `
            (function(edx){
              window.edx = edx || {};
            })({})
          `,
        }}
      />
    </>
  );
}