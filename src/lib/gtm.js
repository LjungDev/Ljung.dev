// @ts-nocheck
import { PUBLIC_GTM_ID } from '$env/static/public';

export function initGTM() {
	if (typeof window !== 'undefined') {
		/* Google Tag Manager */
		(function (w, d, s, l, i) {
			console.log('running gtm thing');
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
			console.log('running gtm thing done');
		})(window, document, 'script', 'dataLayer', PUBLIC_GTM_ID);
		/* End Google Tag Manager */
	}
}
