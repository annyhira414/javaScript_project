const result = document.getElementById("result");
const submit = document.getElementById("submit");

function converter(e){
    e.preventDefault();
    const number = document.getElementById("number").value;
    
    if (number === ''){
        alert("Enter Your Number");
    }
    else if (number < 0 ){
        alert("Enter positive Number")
    }
    else{
        result.style.visibility = 'visible';
    }

     binaryNumber = Number(number).toString(2);
    
     result.innerHTML = binaryNumber;

  
    
}

submit.addEventListener("click", converter);