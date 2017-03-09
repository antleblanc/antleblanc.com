'use strict';

(document => {
  class MyApp {
    constructor() {
      this.document = document;
      this.header = this.document.querySelector('#header');
      this.navigation = this.document.querySelector('#navigation');
    }

    handleHeader() {
      const headroom = new Headroom(this.navigation, {
        offset: this.header.offsetHeight - 120,
        tolerance: 5
      });

      return headroom.init();
    }

    initServiceWorker() {
      const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
      );
      if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
        navigator.serviceWorker.register('sw.js').then(registration => {
          registration.onupdatefound = () => {
            if (navigator.serviceWorker.controller) {
              let installingWorker = registration.installing;

              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case 'installed':
                    break;

                  case 'redundant':
                    throw new Error('The installing service worker became redundant.');

                  default:
                }
              };
            }
          };
        }).catch(err => console.error('Error during service worker registration:', err));
      }
    }

    run() {
      document.querySelector('html').classList.remove('no-js');
      document.querySelector('html').classList.add('js');
      this.handleHeader();
      this.initServiceWorker();
    }
  }

  const app = new MyApp();
  document.addEventListener('DOMContentLoaded', () => app.run());
})(document);
