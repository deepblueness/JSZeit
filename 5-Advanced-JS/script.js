// FUnction constructor
/*var john =  {
    name : 'John',
    yearOfBirth : 1990,
    job: 'teacher'
};

var Person  = function (name, yearOfBirth, job) 
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job  = job;
    
}

Person.prototype.calculateEge =  function() {
    console.log(2016 - this.yearOfBirth);}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person( 'Mark', 1948, 'retired');

jane.calculateEge();
john.calculateEge();
mark.calculateEge(); */

//Object.create

var personProto = {
    calculateAge : function() {
        console.log(2016 - this.yearofBirth);
    }

}
var john = Object.create(personProto);
john.name = 'John';
john.yearofBirth = 1998;
john.job = 'teacher';


//method burrowing
//john.presentation.call(emily, params of the presentation method)
// john