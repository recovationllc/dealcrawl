var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

});

var links = [];

function getLinks() {
    var links = document.querySelectorAll('.b_algo a');


    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

casper.start('http://bing.com/', function() {
    this.fill('form[action="/search"]', {
        q: 'casperjs'
    }, true);
});

casper.then(function() {
    links = this.evaluate(getLinks);
})

// run takes an optional on complete function
casper.run(function() {
    // echo results in a readable fashion
    this.echo(links.length + 'links found');
    this.echo('-' + links.join('\n-')).exit();
});
