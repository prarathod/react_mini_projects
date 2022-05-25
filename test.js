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
            process.exit();
        } else {
            process.exit();
        }
    }
});




function sum(a,b){
    let obj1 ={},obj2={};
    if(a.length!=b.length){
        return "0";
    }else{
        for(var i=0;i<a.length;i++){
            if(obj1[a[i]]==undefined){
                obj1[a[i]]=1;
            }else{
                obj1[a[i]]++;
            }

            if(obj2[b[i]]==undefined){
                obj2[b[i]]=1;
            }else{
                obj2[b[i]]++;
            }
        }
    }
    for(elm in obj1){
        if(obj1[elm]!=obj2[elm]){
            return "0"
        }
    }
    return '1';
}
