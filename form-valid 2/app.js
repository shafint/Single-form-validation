const username=document.getElementById('username');
const email=document.getElementById('Email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirm_password');
const from=document.getElementById('form');

//username 
const CheckUsername=(input)=>{
    const value=input.value.trim();
    const prnt=input.parentElement;
    const smalls=prnt.querySelector('small');
    if(value.length<=0){
        prnt.className="single_box error";
        smalls.innerHTML="username must requerd";
    }else if(value.length>=1&&value.length<3){
        prnt.className="single_box error";
        smalls.innerHTML="username must be 3 Charcter";
    }else if(value.length>=3 && value.length<15){
        prnt.className="single_box success";
    }else{
        prnt.className="single_box error";
        smalls.innerHTML="username must be 15 Charcter";
    }
};
// email  check
const checkEmail=(input)=>{
    const value=input.value.trim();
    const prnt=input.parentElement;
    const smalls=prnt.querySelector('small');
    if(value.length<3){
        prnt.className="single_box error";
        smalls.innerHTML="Email is requerd";
    }else{
        prnt.className="single_box success";
    }
}
//Phone check
const checkPhone=(input)=>{
    const value=input.value.trim();
    const prnt=input.parentElement;
    const smalls=prnt.querySelector('small');
    if(value.length<=0){
        prnt.className="single_box error";
        smalls.innerHTML="Phone Number is requerd";
    }else if(value.length>=1&&value.length<10){
        prnt.className="single_box error";
        smalls.innerHTML="Phone Number must be 11 Charcter";
    }else if(value.length>11){
        prnt.className="single_box error";
        smalls.innerHTML="Phone Number must be 11 Charcter";
    }else{
        prnt.className="single_box success";
    }
}
//password check
const checkPassword=(input)=>{

    const value=input.value.trim();
    const prnt=input.parentElement;
    const smalls=prnt.querySelector('small');
    if(value.length<=0){
        prnt.className="single_box error";
        smalls.innerHTML="Password must be requerd";
    }else if(value.length>=1&&value.length<6){
        prnt.className="single_box error";
        smalls.innerHTML="Password must be 6 cherecter";
    }else if(value.length>25){
        prnt.className="single_box error";
        smalls.innerHTML="Password must less then 25 cherecter";
    }else if(input.value!==confirm_password.value){
        prnt.className="single_box error";
        smalls.innerHTML="Password is not Match";
    }else{
        prnt.className="single_box success";
    }

}
//checkpass
const checkcpass=(input)=>{

    const value=input.value.trim();
    const prnt=input.parentElement;
    const smalls=prnt.querySelector('small');
    if(value.length<=0){
        prnt.className="single_box error";
        smalls.innerHTML="Password must be requerd";
    }else if(value.length>=1&&value.length<6){
        prnt.className="single_box error";
        smalls.innerHTML="Password must be 6 cherecter";
    }else if(value.length>25){
        prnt.className="single_box error";
        smalls.innerHTML="Password must less then 25 cherecter";
    }else if(input.value!==password.value){
        prnt.className="single_box error";
        smalls.innerHTML="Password is not Match";
    }else{
        prnt.className="single_box success";
    }

}




/*form submit listener */
from.addEventListener('submit',(e)=>{
    e.preventDefault();
    CheckUsername(username);
    checkEmail(email);
    checkPhone(phone);
    checkPassword(password);
    checkcpass(confirm_password)
});