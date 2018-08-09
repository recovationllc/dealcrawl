var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

    });

var links = [];

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36');

casper.start('http://www.google.com/');

casper.then(function() {
    this.mouse.rightclick(500, 500);
    casper.capture("inspect.png");
});

casper.run(function() {
    this.echo('exited').exit();
});
