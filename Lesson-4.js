//Task 1
function alert(arr){
    console.log(arr);
    console.log('--------------------------')
}
var array = [-10,80,-34,20,48,-385,-32,396,39,-54,-35,129,30,495,-3829,4832,
    33782,3829,393,9204,-4739,-394,39032]

function sorting(num1,num2){
    return num1 - num2;
}

var sortedarr = array.sort(sorting);
alert(sortedarr);
var reversearr = sortedarr.reverse();
alert(reversearr);
function filterpositive(val){
    return val >= 0;
}
function filternegative(val){
    return val < 0;
}

var filteredPos = array.filter(filterpositive);
alert(filteredPos);
var filteredNeg = array.filter(filternegative);
alert(filteredNeg);

//Task 2
var Student = {yearOfStuding : 1,facultyName : 'GHMKJ'};
var Student1 = {yearOfStuding : 4,facultyName : 'MSKC'};
var Student2 = {yearOfStuding : 2,facultyName : 'GHDS'};
var Student3 = {yearOfStuding : 3,facultyName : 'FLLR'};
var Student4 = {yearOfStuding : 1,facultyName : 'SELLD'};
var Student5 = {yearOfStuding : 2,facultyName : 'DNKC'};
var Student6 = {yearOfStuding : 4,facultyName : 'PBMKV'};
var Student7 = {yearOfStuding : 3,facultyName : 'MCLDS'};
var Student8 = {yearOfStuding : 2,facultyName : 'RBCJD'};
var Student9 = {yearOfStuding : 1,facultyName : 'IENC'};

var Students = [];
Students.push(Student,Student1,Student2,Student3,Student4,Student5,Student6,Student7,Student8,Student9);
alert(Students);

function getFacName(obj){
    return obj.facultyName;
}

function getSumOfYears(sumofyears, currentyear){
    return sumofyears + currentyear.yearOfStuding;
}

var facultyNames = Students.map(getFacName);
alert(facultyNames);
var yearsOfStuding = Students.reduce(getSumOfYears,0);
alert(yearsOfStuding);