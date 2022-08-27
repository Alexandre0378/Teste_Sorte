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