function colorGenerate (){
    let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    let color = '#';

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.round(Math.random()*15);
        //console.log(randomNumber);
        let number = hexCodes[randomNumber];
        color += number;
        //console.log(color);
    }
 document.getElementById('container').style.backgroundColor = color;
 document.getElementById('button').style.color = color;
 document.getElementById('output').innerHTML = color;


}

