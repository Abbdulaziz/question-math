// 1-misol
// let a = 5;
// for(let i= 0; i<10; i++){
//     console.log( a);
// }
// 2-misol

// let a = 1;
// for(let i=0; i<=10; i++){
//     console.log(i)
// }

// 3-misol

// for (let i=10 ;i>0 ;i--){
//     console.log(i)
// }

// 4-misol
// let a = 10000;
// for(let i = 1; i<=10; i++){
//     console.log(i*a);
// }
// 5-misol
// let a = 1000;
// for(let i = 1; i<=10; i++){
//     console.log(i*a);
// }

// 6-misol

// let a =1000;
// for(let i = 10; i<=20; i++){
//     if( i%2==0){
//         console.log(i*a);
//     }
// }

// 7-misol
// let b = 0;
// for(let i =0; i<=10; i++){
//     b = i+b;
// }
// console.log(b);

// 8-misol
// let b = 1;
// for (let i = 1; i <= 10; i++) {
//     b = b * i;

// }
// console.log(b);


// 9-misol

// let b = 1;
// for (let i = 1; i <= 10; i++) {
//     b = (i * i)+b ;

// }
// console.log(b);

// 10-misol
// let j = 0;
// let q = 0;
// for (let i = 1; i <= 10; i++) {
//     q = 1 / i;
//     j = j + q;
//     console.log(q);
// }
// console.log(j);
// 11-misol
// for(let i=0; i<=10;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }
// 12-misol

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// 13-misol


// var primos = [];
// for (var i = 0; i <= 100; i++) {
//     var fake = true;
//     for (var j = 2; j <= i; j++) {
//         if (i%j==0 && j!=i) {
//             fake =false;
//         }
//     }
//     if (fake === true) {
//         // primos.push(i);
//         console.log(i);
//     }
// }
// // primos = primos.reverse();
// for(i = primos.length; i > 0; i--) {
//     console.log(primos[i]);
// }


// 14-misol


// for (var i = 0; i <= 100; i++) {
//     var fake = true;
//     for (var j = 2; j <= i; j++) {
//         if (i%j==0 && j!=i) {
//             fake =false;
//         }
//     }
//     if (fake === false) {
//         console.log(i);
//     }
// }

// 15-misol

// for(let i=0; i<=100; i++){
//     console.log(i*i);
// }

// 16-misol


// for(let i=100; i>0;i--){
//     console.log(i);
// }

// 17-misol

// for(i=0; i<=100; i++){
//     let b =false;
//     if(i%5==0){
//         b=true;
//     }else{
//         console.log(i);
//     }
// }

// 18-misol
// let b=0;
// for(i=0; i<=100; i++){
//     b=(i*i)+b;

// }
// console.log(b);



// eng oxirgi misol

let b =0;
for(let i=0;i<=10;i++ ){
    for(let j =0; j<=100; j++ ){
        b = j+b;
    }
    b = i*b;
    console.log(b);
}

console.log(b);
