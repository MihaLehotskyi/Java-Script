//Task-1
var products = ["product1","product2","product3","product4","product5"];
products.pop();
console.log(products);

//Task-2
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
console.log(styles);
styles.splice(-2,1,"Класика");
console.log(styles);
styles.shift();
console.log(styles);
styles.splice(0,0,"Реп","Реггі");
console.log(styles);

//Task-3
var arr = ["val1","val2","val3","val4","val5"];
function find(arr,value){
    var rezult = false;
        for (let index = 0; index < arr.length; index++) {
            if(value == arr[index]){
                rezult = true;
                console.log(index);
            }
        }
    if(rezult == false){
        console.log(-1);
    }
}
find(arr,"val1");

//Task-4
var array = [1,2,3,4,5,6,7,8,9,10]
function filterRange(array,a,b){
    var arr = []
    for (let index = 0; index < array.length; index++) {
        if(a > array[index]){
            delete array[index];
        }  
    }
    for (let index = 0; index < array.length; index++) {
        if(b < array[index]){
            delete array[index];
        }  
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index] == undefined){
        }else{
                arr.push(array[index]);
             }
    }
    console.log(arr);
}
filterRange(array,4,6);
