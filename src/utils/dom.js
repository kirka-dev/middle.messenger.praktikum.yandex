const {JSDOM} = require('jsdom');

const dom = new JSDOM('<div class="app"><div>', {url: 'http://localhost'});
global.window = dom.window;
global.document = dom.window.document;
