var num=0;
console.log("---------------------------------------Задание №1-------------------------------------------");
num=Number(prompt("Задание №1\r\nПоиск простых чисел\r\nВведите число от 0 до 100:\r\n"));
for(i=0;i<=num;i++)
{
    if (checkSimple(i)) console.log(i);
}

function checkSimple(num)
{
    if (num>2) {
        for(j=2;j<=num;j++)
        {
            if((num%j==0)&&(j<num)) {return(false);}
        }
        return(true);
    }
    else if(num==2) return(true);
    else return(false);
}

console.log("---------------------------------------Задание №4-------------------------------------------");
for(i=0;i<=9;console.log(i++)){}

console.log("---------------------------------------Задание №4-------------------------------------------");
let pattern='x';
for (i=1;i<=20;i++)
{
    console.log(pattern);
    pattern+='x';
}
