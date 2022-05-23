process.stdin.resume();
var t = '';

process.stdin.on('data', function (n) {
    if(t ==''){
        t = Number(n.toString().trim().split(" ")[0]);
    }else{
        process.stdout.write(sum(t,Number(n.toString().trim().split(" ")[0]))); // console.log()
        process.exit(); // return;
    }
 
});

function sum(a,b){
    let summ = a+b;
    return summ.toString
}