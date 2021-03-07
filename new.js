//challenge 1: your age in days

function ageInDays(){
var birthYear = prompt(' Enter your age year');
// console.log(birthYear);

if(birthYear == 0 || birthYear==null){
    var h = document.createElement('h');

    var anss = document.createTextNode('Enter correct year of birth');

    h.setAttribute('id','days');
    h.appendChild(anss);
    document.getElementById('flex-box-result').appendChild(h);
}else{
var days = (2020 - birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' +days+ ' days old');

h1.setAttribute('id','days');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
}

function reset(){
    document.getElementById('days').remove();
}
