<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/8c52bb265d.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="Sorteador.css">
    <title>Página de Sorteio</title>
</head>
<body>
    <div id="divGanhador"><div id="ganhador"></div></div>
    <div id="divSorteio">
        <h1 id="palavra" data-text="Sorteio">Sorteio</h1>
        <div id="inputSorteio"> 
            <h2 style="grid-area: a3; text-align: center;">Coloque o nome do participante</h2>
            <input type="text" placeholder="Nome do Participante" maxlength="30" >
            <button id="btn-add">Adicionar</button>
        </div>
        <div id="erro" style="color:red; text-shadow: 1px 1px 2px red; padding: 10px;"></div>
        <div id="divParticipantes">
            
        </div>
        <div id="length"></div>
        <button id="btn">Sortear</button>
    </div>
</body>
<script src="Sorteador.js"></script>
</html>
*{
    padding: 0;
    margin: 0;
}
body{
    background-color: brown;
    
}
@keyframes result{
    0%{}
    100%{left: 0;}
}
@keyframes calculo{
    0%{}
    100%{right: -100%;}
}
#divSorteio{
    background-color: rgb(18, 14, 231);
    height: 600px;
    max-width: 600px;
    min-width: 300px;
    width: 100%;
    margin:40px auto;
    color: gray;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    right: 0;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(1, 0.165, 0.82, 0.075);
    animation-fill-mode: forwards;
}
#palavra{
    font-family: Arial, Helvetica, sans-serif;
    position: ;
    font-size: 3rem;
}
#ganhador{
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    text-align: center;
    flex-direction: column;
}
#divGanhador{
    background-color: rgba(21, 37, 189, 0.733);
    height: 600px;
    max-width: 600px;
    min-width: 300px;
    width: 901%;
    margin:40px auto;
    color: violet;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 70px;
    box-sizing: border-box;
    display: none;
    position: relative;
    left: -100%;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}
p{margin: 10px;}
#inputSorteio{
    display: grid;
    grid-template-areas: 
    "a3 a3 a3 a3"
    "a1 a1 a1 a2"
    "a1 a1 a1 a2";
    height: 100px;
    gap: 30px 10px;
    width:60%;
    align-items: center;
}
#btn-add{

    background-color: yellow; 
    border: hidden; 
    grid-area: a2; 
    padding: 20px; 
    cursor: pointer;
    color: black;
    display: block;
    transition: background-color 1s, color 1s;
}
input{
    padding: 20px;
    width: calc(100% - 40px);
    background-color: rgb(86, 104, 207);
    border: none;
    outline: none;
    grid-area: a1;
}
input::placeholder{
    color: black;
}
#divParticipantes{
    height: 200px;
    background-color: rgb(86, 104, 207);
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    overflow-x: hidden;
}
#divParticipantes::-webkit-scrollbar{
    background-color: yellow;
}

#divParticipantes::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 10px;
    border: yellow 1px solid;
}
#btn{
    padding:20px 30px;
    background-color: rgba(43, 255, 0, 0.247);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 800;
}
let input = document.getElementsByTagName("input")[0];
let participantes = document.getElementById("divParticipantes");
let btn = document.getElementById("btn");
let add = document.getElementsByTagName("button")[0];
let pessoas = [];
let result = document.getElementById("divGanhador");
let div = document.getElementById("divSorteio");
let ganhador = document.getElementById("ganhador");
valor = -1;
numero = 0;


add.addEventListener("click",()=>{
  if (input.value === "") {
    document.getElementById("erro").innerHTML = "<p>Insira um nome</p>";
  } else {
    document.getElementById("erro").innerHTML = "";
    pessoas.push(`${input.value}`);
    valor++;
    numero++;
    participantes.innerHTML += `<p>${numero} - ${pessoas[valor]}</p>`;
    input.value = "";
    document.getElementById(
      "length"
    ).innerHTML = `<p>Quantidade de participantes: ${pessoas.length}`;
  }

});

btn.addEventListener("click", () => {
  if (pessoas.length <= 1) {
    document.getElementById(
      "length"
    ).innerHTML = `<p>Insira pelo menos 2 participantes</p>`;
  } else {
    result.style.animationName = "result";
    div.style.animationName = "calculo";
    setInterval(() => {
      result.style.display = "flex";
      div.style.display = "none";
    }, 1500 )
    };
    let numero = parseInt(Math.random() * pessoas.length)
    ganhador.innerHTML = `<H2>O ganhador <br>foi:</H2><h2>${pessoas[numero]}</h2>`;
    console.log(pessoas[numero]);
    console.log(numero)
    console.log(pessoas.length)
  }

);
