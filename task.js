//let words = ["grapefruit","banana","banana","grapefruit","banana","orange","banana"]
// output ["banana","grapefruit","orange"]

//Գրել ֆունկցիա որը մուտքում ստանում է մասիվ, և վերադրաձնում է 
//նոր մասիվ որոնց էլեմենտները ունիկալ են և դասավորված են 
//ըստ ավելի հաճախ հանդիպածԻ տրամաբանությամբ։












// const arr = ["grapefruit","banana","banana","grapefruit","banana","orange","banana"]
// const obj = {};
// for(let i = 0; i < arr.length; i++){
//   if(obj[arr[i]] === undefined){
//     obj[arr[i]] = 1
//   }else 
//     obj[arr[i]] ++  // obj[arr[i]] = obj[arr[i]] + 1

// }
// console.log(obj)




// function mySuperSort(arr){

//     const obj = {};
//     for(let i = 0; i < arr.length; i++){
//       if(obj[arr[i]] === undefined){
//         obj[arr[i]] = 1
//       }else 
//         obj[arr[i]] ++  // obj[arr[i]] = obj[arr[i]] + 1

//     }
//     const arr1 = Object.entries(obj)
//     arr1.sort((a,b)=>b[1] - a[1])

//   return arr1.map((val)=>val[0])
//   }
//    console.log(mySuperSort(words))


//console.log(Object.entries({x:5,y:7,z:8}))


//=============================================

//գրել ֆունկցիա, որը ընդունում է անհայտ քանակությամբ արգումենտներ
// և վերադարձնում է այդ թվերի քառակուսիները նոր մասիվում




// function multiplyByTwo(...res){

//        return res.map((val) => val**2);
// }

//  console.log(multiplyByTwo(10,20,30,20,30,40)); //res = [10,20,30,20,30,40]




//=====================================================

// const x = {a:1,b:2}
// const y = {b:3,c:4}
// const z = {...x,...y}
// console.log(z)




// a = {

//     toString(){
//         if(this.b){
//             this.b = false
//             return false
//         }else {
//             this.b = true
//             return true
//         }
//     }
// }
// console.log(a == true && a == false);
// let a = {}
// let b = false
// a.__proto__.toString = function(){
//     if(b){
//         b = false;
//         return false
//     }else {
//         b = true;
//         return true
//     }
// }

// console.log(a == true && a == false)




// Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական թվերը, 
// որոնք առանց մնացորդի բաժանվում են իրենց թվանշանների գումարի վրա:

// 8. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝ 
// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում, 
// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:


// function sumOfDigit(n) {
//    let sum = 0
//    while (n > 0) {
//       sum += n % 10
//       n = Math.floor(n / 10)
//    }
//    return sum;
// }
// let n = 50
// for (let i = 1; i <= n; i++) {
//    if (i % sumOfDigit(i) === 0) {
//       console.log(i);
//    }
// }


// function isDublicate(arr){
//    let arr1 = []
//    for(let i = 0; i < arr.length; i++){
//       if(arr1.includes(arr[i]) === true){
//          return true
//       }else {
//          arr1.push(arr[i])
//       }
//    }
//    return false
// }
// console.log(isDublicate([2,3,4,5,6,12,9]))


// function f(arr){
//    let arr1 = [];
//    let obj = {}

//    for(let i = 0; i < arr.length; i++){
//       if(obj[arr[i]] === undefined){
//          obj[arr[i]] = 1;
//       }else{
//          obj[arr[i]]++
//       }
//    }

//    for(let key in obj){
//       if(obj[key] === 1){
//          arr1.push(key)
//       }
//    }
//    return arr1
// }
// // console.log(f([2,3,4,5,6,12,6]))

