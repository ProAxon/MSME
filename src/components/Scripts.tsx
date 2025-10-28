'use client'

import Script from 'next/script'

export default function Scripts() {
  return (
    <>
      <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/plugins/swup.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/swiper.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/fancybox.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/gsap.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/smooth-scroll.js" strategy="afterInteractive" />
      <Script src="/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/ScrollTo.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  )
}
