process.stdin.resume();

var t = '';

process.stdin.on('data', function (n) {
    if (t == 0) {
        t = n;
    } else {
        if (t != "") {
            process.stdout.write(sum(t.toString().trim(), n.toString().trim()));
        } else {
            process.exit();
        }
    }
});