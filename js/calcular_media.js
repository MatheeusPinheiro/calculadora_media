
const calc_media = (notas)=>{
    let acumulador = 0

    for(let nota of notas){
       acumulador+= nota
    }

   return (acumulador / notas.length)
}