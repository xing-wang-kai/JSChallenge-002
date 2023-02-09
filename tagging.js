
/**
 * Assim que a página carregar
 */
document.addEventListener('DOMContentLoaded', function(){
    
    /** Pega todos dados que estão no span */
    var $ = document.querySelectorAll.bind(document);

    var arrayBox = $('span')

    /** Printa no terminal todos dados do span */
    arrayBox.forEach(function(item){
        console.log(item.innerText)
    })
    
    /** Ao clicar em um dos link o item sera impresso no terminal do valor do item dentro do span correpondente ao index */
    $('a').forEach( function(item, index){
        item.addEventListener('click', function(){
            console.log(arrayBox[index].innerText);
        })
    })
})