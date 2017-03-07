'use strict';

class MyApp {
  constructor(document) {
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

  run() {
    document.querySelector('html').classList.remove('no-js');
    document.querySelector('html').classList.add('js');
    this.handleHeader();
  }
}

const app = new MyApp(document);
document.addEventListener('DOMContentLoaded', () => app.run());
