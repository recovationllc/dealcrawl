
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
    // clientScripts: []

});

var links = [];
var url = 'https://www.linkedin.com/';

casper.userAgent('Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B141 Safari/8536.25');

casper.start(url, function() {
        this.echo("started...");
        casper.capture("li1.png");
    this.fill('form[action="https://www.linkedin.com/uas/login-submit"]', {
        'session_key': 'kristen_mashikian@brown.edu',
        'session_password': 'Jul1e1998!'
    }, true);
casper.capture("li2.png");
});

casper.thenClick('#login-submit');

casper.wait(5000, function() {
        casper.capture('l3.png');
    });

/*
casper.waitFor(function check() {
    return casper.exists('form#extended-nav-search');
}, function then() {    // step to execute when check() is ok
    console.log("it exists!");
    this.fill('form#extended-nav-search', {
            q: 'Jim Oneill'
            }, true); 
    casper.capture('li.png');
}, function timeout() { // step to execute if check has failed
    this.echo("timed out").exit();
}, 60000);

casper.then(function() {
    if (casper.exists('form#extended-nav-search.nav-search')) {

}
    console.log("waiting...")
    this.wait(15000, function() {
        casper.capture('li.png');
    });
    casper.waitForUrl('https://www.linkedin.com/feed/', function() {
        console.log("waiting for url");
    });
    casper.capture('li5.png');
});


casper.waitForUrl('https://www.linkedin.com/feed/', function() {
        console.log("waiting for url");
        casper.capture('before.png');
        this.fill('form#extended-nav-search.nav-search', {
            q: 'Jim Oneill'
            }, true); 

});
*/

// run takes an optional on-complete function
casper.run(function() {
    this.echo('exited').exit();
});
