
let number;
let check;
let ceil;
let floor;


document.getElementById("btn_ceil").onclick = function (){

number =    document.getElementById("ceil_flr_ipt").value;
number = Number(number);
check = Boolean(number);
if(check){
    ceil = Math.ceil(number);

    document.getElementById("demo").innerHTML = ceil;
    
    
}else{
    document.getElementById("demo").innerHTML = "please enter a correct number";
    
}
};
document.getElementById("btn_flr").onclick = function (){

number =    document.getElementById("ceil_flr_ipt").value;
number = Number(number);
check = Boolean(number);
if(check){
    floor = Math.floor(number);

    document.getElementById("demo").innerHTML = floor;
    
    
}else{
    document.getElementById("demo").innerHTML = "please enter a correct number";
    
}
};




