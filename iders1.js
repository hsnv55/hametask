//1. Ədədin kvadratın və kubun, console çıxardın.
let a=4
console.log(a**2,a**3)
//2. Sürət (v) 60 km/saat. Məsafə (s) 180 km. Neçə “dəyqəyə” bütün məsafə qət ediləcək?
let s=180
let v=60
console.log(60*(180/60))
//3. 3 ədəd var. Ədədlərin arasında ən böyük olanı tapıb console çıxardın.
let x=12
let y=14
let z=22
if(x>y && y>z){
    console.log(x)
}
else if(y>x && x>z){
    console.log(y)
}
else{
    console.log(z)
}
//4. Ədədin tək və yaxud cüt olduğunu aşkarlayıb, console çıxardın.
let b=22
if(b%2==0){
    console.log("cutddur")
}
else{
    console.log("tekdir")
}
//5. 1-dən 7-yə kimi bir ədəd daxil etmək olar. Ədədə uyğun olaraq həftənin gününü console çıxardın.
let h=8
switch(h){
    case 1:
        console.log("bazarertesi")
        break

case 2:
    console.log("cersenbe axsami")
    break
    case 3:
    console.log("cersenbe")
    break
    case 4:
    console.log("cume axsami")
    break
    case 5:
    console.log("cume")
    break
    case 6:
    console.log("senbe")
    break
    case 7:
    console.log("bazaar")
    break
    default:
        console.log("bele gun yoxdur")
}
/*7. 0-1000 intervalında olan bir ədədin neçə ədədli olduğunu console çıxardın.
 Məsələn, "76" daxil etdikdə console “iki rəqəmli ədəd” çıxaracağ.*/
 let num=234
 if(num>0 &&num<10){
    console.log("tekreqemli eded")
 }
  else if(num>=10&&num<100){
    console.log("iki reqemli eded")
 }
 else if(num>=100&&num<1000){
    console.log("uc reqemli eded")
 }
 else{
    console.log("yalnis eded")
 }