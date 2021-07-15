function f (){
    var elements = document.querySelectorAll('ul>li');
    var counter = 0;
    for (let index = 0; index < elements.length; index++) {
        var element = elements[index];
        counter++;
        element.innerHTML = 'Custom text';
    }
    alert(counter + ' li елементів заповняться текстом');
}

function f1(){
    var elements = document.querySelectorAll('ul>li>a');
    var lis = document.querySelectorAll('ul>li');
    var counter = 0;
    for (let index = 0; index < elements.length; index++) {
        var li = lis[counter];
        var string = elements[index];
        if(!(string.innerHTML.slice(0,19) == 'http://internal.com')){
            if(string.innerHTML.slice(0,7) == ('http://') || string.innerHTML.slice(0,6) == ('ftp://')){
             li.className += 'external-red';
            }
        }
        counter++;
    }
}