function produceRandomNumber() {
    //alert("We are in the worker thread!");
    var result = Math.floor((Math.random() * 3999) + 1);
    self.postMessage(result.toString() );

    setTimeout( produceRandomNumber, 10000 );
}

self.addEventListener('message', function(e) {
    if (e.data === "start") {
        produceRandomNumber();
    }
}, false );