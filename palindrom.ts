let str:string = 'шалаш';
const palindrom : string = str;

let littleStr:string = str.toLocaleLowerCase();
let allstr:string = littleStr.split('').reverse().join('');

if(str == allstr){
  console.log('Получилось!');
  console.log(str);
} else {
  console.log('Это не палиндром');

}

