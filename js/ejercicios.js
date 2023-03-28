// Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al 
// usuario (indicando que los valores posibles son 1, 2, 3, 4)
//
//   1. Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.
//   2. Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.
//   3. Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.
//   4. Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.
//   5. Si el tipo de motor es 4, mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.
//   6. Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”.

function dimeTipoMotor() {

  const tipoMotor = Number(document.getElementById('tipoMotor').value)
  let resultado = document.getElementById('resultado-motor')

  switch (tipoMotor) {
    case 0:
      resultado.innerHTML = 'No hay establecido un valor definido para el tipo de bomba'
      break
    case 1:
      resultado.innerHTML = 'La bomba es una bomba de agua'
      break
    case 2:
      resultado.innerHTML = 'La bomba es una bomba de gasolina'
      break
    case 3:
      resultado.innerHTML = 'La bomba es una bomba de hormigón'
      break
    case 4:
      resultado.innerHTML = 'La bomba es una bomba de pasta alimenticia'
      break
    default:
      resultado.innerHTML = 'No existe un valor válido para tipo de bomba'
      break
  }
}

// Escribir un programa que me pida un número entero y validar si el número es impar.

function esParImpar() {
  const numero = Number(document.getElementById('numero').value)
  let resultado = document.getElementById('resultado-par-impar')

  if (isNaN (numero)) {
    resultado.innerHTML = 'El valor introducido no es un número entero.'
  } else if (numero % 2 === 0) {
    resultado.innerHTML = 'El número introducido es par.'
  } else {
    resultado.innerHTML = 'El número introducido es impar.'
  }
}

// Añadir un nuevo elemento <p> con nombre de clase “miParrafo“ 
// y con el texto que ponga tu nombre y apellidos y sea hijo del body.

function elementoP() {
  
  const texto = document.createElement('p')
  texto.classList.add('miParrafo')
  texto.textContent = 'Manuel Antelo Pereira'
  const body = document.querySelector('body')
  body.appendChild(texto)

}

// Calcular el área de un triángulo y mostrar por pantalla el resultado. 
// El área de un triángulo se calcula por medio de la siguiente fórmula: a=(b*h)/2

function calcularAreaTriangulo(base, altura) {
  
  const area = (base * altura) / 2;
  const resultado = document.getElementById('area-triangulo');
  resultado.innerHTML = `El área del triángulo es ${area}`;

}
