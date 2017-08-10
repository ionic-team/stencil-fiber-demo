/*! Built with http://stenciljs.com */

(function (window, document, appNamespace, appCore, appCoreEs5, components, x) {
    'use strict';
    // create global namespace if it doesn't already exist

    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" variable from the args for funzies
    x = document.createElement('style');
    x.innerHTML = (components.map(function (c) {
        return c[0];
    }).join(',') + '{visibility:hidden}.💎{visibility:inherit}').toLowerCase();
    x.innerHTML += 'ion-app:not(.💎){display:none}';
    document.head.appendChild(x);
    // request the core file this browser needs
    x = document.createElement('script');
    x.src = window.customElements ? appCore : appCoreEs5;
    document.head.appendChild(x);
})(window, document, "App","build/app/app.core.js","build/app/app.core.ce.js",[["FIBER-DEMO","fiber-demo",0,[["elapsed",1,2]]],["FIBER-DOT","fiber-demo",0,[["size",1,2],["text",1],["x",1,2],["y",1,2]]],["FIBER-TRIANGLE","fiber-demo",0,[["s",1,2],["seconds",1,2],["x",1,2],["y",1,2]]]]);