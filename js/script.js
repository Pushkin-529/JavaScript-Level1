var time=10000; //локальная переменная, но в глобальной области видимости
var wait_message='Так и будешь смотреть на эту скучную страницу?';
window.globalOne = 'some value' //Реально глобальная переменная
const constVar=500; //константа
let letvar=100;
var name="Василий";
var admin;
var A=20;
var B=30;
var celsius=30;

//типы данных:
// Numbers - числа
// Strings - строки
// Boolean - логич
// Undefined - неопределенный
// Null - пусто
// Symbol - символ
// Object - объект
// NaN - Not a Number - ошибка сигнализатор
// Array - Массив => Object
admin=name;

setTimeout(function(){
    var localvar="local variable" //локальная переменная
    alert ('Привет!'+'\r\n'+wait_message);
},time)

console.log('admin:'+admin);
console.log(A,B);
A=A+B;
B=A-B;
A=A-B;
console.log(A,B);
console.log('1000+\"108\"='+1000+'108');

function getFarengeht(celsius) {
    return(((9 / 5) * celsius + 32));
}
alert('Конвертер температур (Цельсий/Фарегейт):'+'\r\n'+'Температура C: '+celsius+' градусов'+'\r\n'+'Температура F: '+getFarengeht(celsius)+' градусов');