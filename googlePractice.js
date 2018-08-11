
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

    });

var links = [];
var text;

function getLinks() {
    // var links = document.querySelectorAll('.g a');
    // return Array.prototype.map.call(links, function(e) {
    //     return e.getAttribute('href');
    // });
    var text = document.querySelector('kno-ecr-pt.kno-fb-ctx span');

    // console.log(text.innerHTML);
    return text;
    // return Array.prototype.map.call(links, function(e) {
    //     return e.getAttribute('href');
    // });
};

casper.start('http://www.google.com/', function() {
    this.fill('form[action="/search"]', {
        q: '2u'
    }, true);
});

casper.then(function() {
    text = this.evaluate(getLinks);
    console.log(text.innerHTML);
    casper.capture('goog.png');
});

// casper.thenClick('.g a');

// casper.then(function() {
//     casper.capture("goog2.png")
// })

// run takes an optional on complete function
casper.run(function() {
    // echo results in a readable fashion
    // this.echo(links.length + 'links found');
    // this.echo('-' + links.join('\n-')).exit();

    // this.echo('text: ' + Object.getOwnPropertyNames(text));
    this.echo('text: ' + text.length);
});