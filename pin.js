function makePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinNum = pin + ""; //make this pin into string for cheack length 
    if(pinNum.length == 4){
        return pin;
    }
    else{
        return makePin();
    }
    
}
function genaratePin(){
    const pin = makePin();
    const pinInput = document.getElementById("show-pin-input").value = pin;

}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const inputShow = document.getElementById("show-key-pad");
    if(isNaN(number)){
        if(number == 'C'){
            inputShow.value = ""
        }
        // if(number == '<'){
        //     inputShow.value--;
        // }
    }
    else{     
    const newNumber = inputShow.value + number;
    inputShow.value = newNumber;
    }
})

function pinVerify(){
    const inputShow = document.getElementById("show-key-pad");
    const pinInput = document.getElementById("show-pin-input");
    const paraOn =  document.getElementById('para-on');
    const paraOff = document.getElementById('para-off');
    if(inputShow.value == pinInput.value){
        paraOn.style.display = 'block';
        paraOff.style.display = "none"
    }
    else{
        paraOff.style.display = "block";
        paraOn.style.display = 'none';
    }
    inputShow.value = ""
    pinInput.value = ""

}