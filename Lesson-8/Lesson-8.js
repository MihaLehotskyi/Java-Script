 buttonFunc.onclick = function(){
     var element = document.getElementById('text');
     element.classList.add('block2');
 }

 buttonFunc2.onclick = function(){
     var element = document.getElementById('buttonFunc2');
     element.classList.add('block2');
 }

 clickable.onclick = function(){
    var elements = document.getElementsByClassName('lil');
    for (let index = 0; index < elements.length; index++) {
        var element = elements[index];
        if(element.classList.contains('block2')){
            element.classList.remove('block2');
        }else
        element.classList.add('block2');
    }
 }