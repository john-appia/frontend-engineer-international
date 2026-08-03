//  Exemple

//  Exemple 1

console.log(a);

var a = 1;

console.log(b);

let b = 2;

/**
Dans ce code ci-dessus, pendant la Creation phase, javascript va créer la variable "a" en mémoire et va l'assigner à undefined
"b" aussi sera créé en mémoire mais contrairement à "a", il sera mit en Temporal Dead Zone. Pendant l'Execution phase, 1 sera assigné à "a" (a = 1) et console.log(b) lèvera ReferenceError
*/

//  Exemple 2

console.log(greet());

function greet() {
    return "Hello";
}

/**
Ce code marche correctement, pendant la Creation phase la fonction sera créé en mémoire et initialisé à Object function (donc utilisable avant déclaration)
 */

//  Exemple 3

"Les variables let n'existent pas avant leur déclaration."

/**
Cette phrase est fausse, les variables let existent avant leur déclaration sauf qu'elle ne peuvent pas être utilisé avant leur déclaration. En javascript il y'a deux étapes, la Creation phase et l'Execution phase. Pendant la Creation phase, la variable sera créé en mémoire puis elle sera mise en Temporal Dead Zone (TDZ) et lors de l'éxécution de la ligne let x =..., javascript initialise la variable et lui assigne sa valeur. donc les varaibles let existent bien avant leur déclaration.
 */