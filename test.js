process.stdin.resume();

var t = '';

process.stdin.on('data', function (n) {
    if (t == 0) {
        t = n;
    } else {
        if (t != "") {
            let str1 = t.toString().trim();
            let str2 = n.toString().trim();
            process.stdout.write(sum(str1,str2));
        } else {
            process.exit();
        }
    }
});