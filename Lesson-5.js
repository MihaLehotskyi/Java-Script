function makeBuffer(){
    var arr = [];

    return {
        add : function(string){
            return arr.push(string);
        },
        show : function(){
            var isEmpty = true;
            var newstring = '';
            for (let index = 0; index < arr.length; index++) {
                if(arr[index] == undefined){
                    
                }else
                isEmpty = false;
                newstring = newstring + arr[index];
            }
            if(isEmpty == true){
                return console.log('Буфер є пустим!!!')
            }else
            return console.log(newstring);
        },
        clear : function(){
            for (let index = 0; index < arr.length; index++) {
                delete arr[index];
            }
        }
    }
}

var buffer = makeBuffer();
buffer.add('JavaScript ');
buffer.add('Вчити ');
buffer.add('Потрібно!');
buffer.show();
buffer.clear();
buffer.show();
