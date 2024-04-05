
// Array onde vou armazena as notas
let notas = []

// capturando o botão calcular
let btn_calcular_media = document.querySelector('#calcular')

// div responsavel por exibi a média
let area_resultado =  document.querySelector('.mostrar-resultado')

// Adicionando evento ao botão calcular 
btn_calcular_media.addEventListener('click', ()=>{

    //Capturando os valores dos inputs 
    let nota1 = document.querySelector('#n1').value
    let nota2 = document.querySelector('#n2').value
    let nota3 = document.querySelector('#n3').value

    //Verifica se os inputs estão preenchidos com valores
    if (nota1 && nota2 && nota3){

        //Verifica se os valores inseridos são maiores ou igual a 0 e menores ou igual a 10
        if((nota1 >= 0 && nota1 <=10 )  &&(nota2 >= 0 && nota2 <=10 )  && (nota3 >= 0 && nota3 <=10 ) ){

            // Adiciona as notas do input no array notas
            notas.push(parseFloat(nota1), parseFloat(nota2), parseFloat(nota3))

            let media = calc_media(notas)
            media = media.toString().replace('.', ',')

            /*
                - Se a nota for maior ou igual a 5 e menor ou igual a 6.99 a cor vai ser amarelo
                - Se a nota for maior ou igual 7 a cor vai ser verder
                - Se a nota for menor que 5 a cor vai ser vermelho
            */

            if (parseFloat(media) >= 5 && parseFloat(media) <= 6.99){

                mostrar_resultado("yellow", media)

            }else if(parseFloat(media) >= 7){

                mostrar_resultado("green", media)

            }else if (parseFloat(media) < 5){

                mostrar_resultado("red", media)
            }
            
            limpar_input()

            notas = []
        }else{
            alert('Só são permitidas notas até 10... 🤚🏻')
            limpar_input()
        }

    }else{
        alert('Informe todas as 3 notas para continuar... 👽')
    }
    
  
})




//Funções auxiliares

const limpar_input = () => {
   
    let nota1 = document.querySelector('#n1').value = ''
    let nota2 = document.querySelector('#n2').value = ''
    let nota3 = document.querySelector('#n3').value = ''
}


const mostrar_resultado = (cor, media)=>{
    area_resultado.style.display = 'flex'
    area_resultado.style.border = 'none'
    area_resultado.style.border = `2px solid ${cor}`
    area_resultado.querySelector('span').innerHTML = `A média do aluno foi de ${media}`
}