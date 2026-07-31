// Exercice 1
console.log(a);

var a = 5;

console.log(a);
/*
le code fontionne bien et il afficher undefined en premier lieu avant d'afficher 5 
parce que javascript dans la phase de création va créer la variable "var a = undefined" 
et va ensuite faire "a = 5"
*/

// -------------------------------
// Exercice 2
console.log(name);

let name = "John";
/*
Ici le code lèvera une une erreur ReferenceError, parce que en phase de création javascript va créer la variable
"let name = undefined" mais au moment de l'affiche il va se rendre compte que "name" n'a pas été initialisé alors 
que let oblige l'initialisation d'une variable à sa création.
*/

// -------------------------------------
// Exercice 3
function hello() {
    console.log("Hello");
}

hello();

/*
pendant la Creation phase, javascript créé le context d'exécution de la fonction dans un function execution context 
et va ensuite créer le global execution context. donc le code va bien fonctionner
*/
// --------------------------------------------
// Exercice 4 
var a = 1;

function test() {
    console.log(a);

    var a = 2;

    console.log(a);
}

test();

console.log(a);

/*
Ici la variable "a" est créé et initialisé à "1", le context de la fonction est créé et dans ce context, 
javascript affiche "1" et une nouvelle variable "a" est initialisé et affiché, donc javascript va afficher "2" 
et ensuite le context global est créé et javascript affichera "1" car dans le context global a=1
*/

// -----------------------------------------------------