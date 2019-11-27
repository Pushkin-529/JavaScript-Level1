
var A;
var B;

console.log("---------------------------------------Задание №1-------------------------------------------");
var a = 1, b = 1, c, d;
console.log("var a = 1, b = 1, c, d;");
c = ++a; console.log("c = ++a -> " + c+ " -> префикс"); 
d = b++; console.log("d = b++ -> "+d+" -> постфикс, в результат попадает предыдущее значение");
c = (2+ ++a); console.log("c = (2+ ++a) -> "+c+" -> 2 + 3 (префикс(2 на предыдущем шаге))");
d = (2+ b++); console.log("d = (2+ b++) -> "+d+" -> 2 + 2 (постфикс(2 на предыдещем шаге))");   
console.log("console.log(a) -> "+a+" -> значение вычислилось на предыдущем шаге");                    
console.log("console.log(b) -> "+b+" -> сработал постфикс, обновился результат предыдущего шага");                    
console.log("---------------------------------------Задание №2-------------------------------------------");
console.log("var a = 2");
console.log("var x = 1 + (a *= 2) -> 5");
console.log("---------------------------------------Задание №3-------------------------------------------");
console.log("Смотри формы.");
A=Number(prompt("Задание №3.\r\nВведите число А:\r\n"));
B=Number(prompt("Задание №3.\r\nВведите число B:\r\n"));
if ((A>=0)&&(B>=0)) {alert("Задание №3.\r\nРезультат:"+(A-B));}
else if ((A<0)&&(B<0)) {alert("Задание №3.\r\nРезультат:"+(A*B));}
else alert("Задание №3.\r\nРезультат:"+(A+B));
console.log("---------------------------------------Задание №4-------------------------------------------");
let num=Number(prompt("Задание №4\r\nВведите число от 0 до 15\r\n"));
switch (num) {
    case 0:console.log(num++);
    case 1:console.log(num++);
    case 2:console.log(num++);
    case 3:console.log(num++);
    case 4:console.log(num++);
    case 5:console.log(num++);
    case 6:console.log(num++);
    case 7:console.log(num++);
    case 8:console.log(num++);
    case 9:console.log(num++);
    case 10:console.log(num++);
    case 11:console.log(num++);
    case 12:console.log(num++);
    case 13:console.log(num++);
    case 14:console.log(num++);
    case 15:console.log(num++);break;
    default:console.log("Error");
}
console.log("---------------------------------------Задание №5-------------------------------------------");
function MathAdd(x,y)
{
    return (Number(x)+Number(y));
}
function MathSub(x,y)
{
    return (Number(x)-Number(y));
}
function MathMult(x,y)
{
    return (Number(x)*Number(y));
}
function MathDiv(x,y)
{
    return (Number(x)/Number(y));
}
console.log("Сложение 23+22= "+MathAdd(22,23)+"; Вычитание 2-3= "+MathSub(2,3)+"; Умножение 3 на 3= "+MathMult(3,3)+"; Деление 18 на 2= "+MathDiv(18,2));
console.log("---------------------------------------Задание №6-------------------------------------------");
console.log("Смотри формы.");
function mathOperation(x,y,operation)
{
    switch (operation)
    {
        case '+':alert("Результат сложения:"+MathAdd(x,y));break;
        case '-':alert("Результат вычитания:"+MathSub(x,y));break;
        case '*':alert("Результат умножения:"+MathMult(x,y));break;
        case 'x':alert("Результат умножения:"+MathMult(x,y));break;
        case '/':alert("Результат деления:"+MathDiv(x,y));break;
    }
}
mathOperation(Number(prompt("Задание №6.\r\nЗадайте аргумент №1:\r\n")),Number(prompt("Задание №6.\r\nЗадайте аргумент №2:\r\n")),prompt("Задание №6.\r\nЗадайте операцию (варианты: + - *[x] /):\r\n"));
console.log("---------------------------------------Задание №7-------------------------------------------");
console.log("сравним нестрого Null и 0:"+(null==0)+" -> разные типы");
console.log("сравним строго Null и 0:"+(null===0)+" -> разные типы");
console.log("---------------------------------------Задание №8-------------------------------------------");
function power(val, pow)
{
    if (Number(pow)<1) return 1;
    else if (Number(pow)==1) return val;
    else return val*power(Number(val),(Number(pow)-1));
}
console.log("Возведение в степень:"+power(prompt("Задание №8.\r\nЗадайте аргумент значение:\r\n"),prompt("Задание №8.\r\nЗадайте степень и смотри консоль:\r\n")));