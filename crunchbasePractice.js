var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

});

casper.userAgent('Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/5.0)');

var links = [];

function getLinks() {
    var links = document.querySelectorAll('.component--grid-body a');


    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

casper.start('http://www.crunchbase.com/', function() {
    this.fill('form[class="component--top-search ng-untouched ng-pristine ng-valid"]', {
        q: 'crayon'
    }, true);
});

casper.then(function() {
    links = this.evaluate(getLinks);
    casper.capture('cb.png');
})

// run takes an optional on complete function
casper.run(function() {
    // echo results in a readable fashion
    this.echo(links.length + 'links found');
    this.echo('-' + links.join('\n-')).exit();
});
