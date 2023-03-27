function taboada(){
    var barras = window.document.getElementById('num1')
    var end = window.document.getElementById('num2')
if( num1.value.length == 0 || num2.value.length == 0 ){
window.alert('digite os valores')
}
     var n = Number (num1.value)
     var e = Number (num2.value)
     var x = 0
     var r = ''
     var res = window.document.getElementById('resposta')
res.innerHTML = `A taboada de ${n} é igual a: <br>`
 do{
   r = n*x 
   res.innerHTML  += `${x} x ${n} = ${r} <br>`
   x++
 } while (x <=e )
    

}