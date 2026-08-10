class TopPageLoader {
  constructor() {
    this.loader = null;
    this.bar = null;
  }
}

if (!window.topPageLoader) {
  window.topPageLoader = new TopPageLoader();
}

