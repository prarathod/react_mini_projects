// // process.stdin.resume();

// // var i = 0, t = 0;

// // process.stdin.on('data', function (n) {
// //     if (t == 0) {
// //         t = n;
// //     } else {
// //         if (i++ < t) {
// //             process.stdout.write(anagram(n).toString());
// //             if (i == t) {
// //                 process.exit();
// //             }
// //         } else {
// //             process.exit();
// //         }
// //     }
// // });

// // function anagram(n) {
// //     if (n > 1) {
// //         n *= anagram(n - 1);
// //     }
// //     return n;
// // }







// // Sample code to perform I/O:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write("Hi, " + input + ".\n");       

// }