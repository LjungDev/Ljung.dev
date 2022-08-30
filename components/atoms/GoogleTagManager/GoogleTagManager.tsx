import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { reportPageView } from "../../../lib/gtm";

interface GoogleTagManagerProps {
  gtmId?: string;
}

export default function GoogleTagManager({
  gtmId,
}: GoogleTagManagerProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", reportPageView);
    return () => {
      router.events.off("routeChangeComplete", reportPageView);
    };
  }, [router.events]);

  if (!gtmId) {
    console.log("(gtm) No GTM ID provided");
    return <></>;
  }

  return (
    <>
      <Script
        id="gtm-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${gtmId}');console.log("(gtm) loaded");
      `,
        }}
      />
    </>
  );
}

export function FallbackGoogleTagManager({
  gtmId,
}: GoogleTagManagerProps): JSX.Element {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
}
