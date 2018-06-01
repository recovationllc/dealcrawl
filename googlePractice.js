
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

    });

var links = [];

function getLinks() {
    var links = document.querySelectorAll('.g a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

casper.start('http://www.google.com/', function() {
    this.fill('form[action="/search"]', {
        q: 'crayon boston'
    }, true);
});

casper.then(function() {
    links = this.evaluate(getLinks);
    casper.capture('goog.png');
});

casper.thenClick('.g a');

casper.then(function() {
    casper.capture("goog2.png")
})

// run takes an optional on complete function
casper.run(function() {
    // echo results in a readable fashion
    this.echo(links.length + 'links found');
    this.echo('-' + links.join('\n-')).exit();
});