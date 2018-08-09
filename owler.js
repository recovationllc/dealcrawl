
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

});

var links = [];

function getLinks() {
    var links = document.querySelectorAll('.g-recaptcha iframe');


    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('src');
    });
};

casper.start('https://www.owler.com/', function() {
    /*
    casper.capture('owl2.png');
    'iframe[title="recaptcha widget"]'
    this.fill('form[action="/search"]', {
        q: 'Crayon'
    }, true);
    */
     this.fill('textarea#g-recaptcha-response', {
        q: '1 2 3 6'
    }, true);
});


casper.then(function() {
    this.mouse.rightclick(200, 200);
    // links = this.evaluate(getLinks);
    casper.wait(2000)
    casper.capture('owl.png');
})

// run takes an optional on complete function
casper.run(function() {
    // echo results in a readable fashion
    this.echo(links.length + 'links found');
    this.echo('-' + links.join('\n-')).exit();
});
