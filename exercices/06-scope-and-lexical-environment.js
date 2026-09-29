// Exercice 1

// Que va afficher le code ?
// Explique avec :
// - scope chain
// - shadowing

const x = 10;

function outer() {
  const x = 20;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

/**
 * le résultat est 20, parce que la function inner() commence la scope chain à partir de son propre scope et remonte vers l'extérieur
 * et donc elle trouve la variable x dans la fonction outer() et s'arrête là car celle ci a shadowed la variable x globale.
 */

//  *****************************************************************

// Exercice 2

//Pourquoi affiche-t-on Global ?
// Je veux le terme :
// lexical scope

const name = "Global";

function printName() {
  console.log(name);
}

function execute() {
  const name = "Local";

  printName();
}

execute();

/**
 * le code affiche "Global" parce que printName() commence la scope chain à l'endroit où elle a été définie et non pas à l'endroit où elle est appelée,
 * c'est le principe du lexical scope.
 */

//  *****************************************************************

// Exercice 3

// Donne le résultat exact.
// Attention : une erreur peut stopper le reste de l’exécution.

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

test();

/**
 * le code affiche 10, puis une erreur ReferenceError pour b et c, parce que var a est disponible dans le scope de la fonction alors que 
 * let b et const c ne sont disponibles que dans le scope du bloc if.
 */

//  *****************************************************************

// Exercice 4

// Donne les deux sorties.

const value = "global";

function test() {
  const value = "local";

  console.log(value);
}

test();
console.log(value);

/**
 * le code affiche "local" et "global", parce que la const value dans test() shadowed la const value globale
 * donc test() affiche "local" et console.log(value) affiche "global"
 */

//  *****************************************************************

// Exercice 5

// Je veux :
// 1. la valeur affichée ;
// 2. où inner cherche value ;
// 3. pourquoi elle ne prend pas "global" ;
// 4. pourquoi "outer" reste disponible alors que outer() est terminé.

{
  const value = "global";

  function outer() {
    const value = "outer";

    function middle() {
      function inner() {
        console.log(value);
      }

      return inner;
    }

    return middle();
  }

  const fn = outer();

  fn();
}

/**
 * 1. la valeur affichée est "outer"
 * 2. la scope chain de inner() est inner() -> middle() -> outer() -> global
 * 3. inner() trouve la varible value dans outer donc elle s'arrête là, raison pour laquelle elle ne prend pas "global", on dit que la variable 
 * value dans outer() à shadowed la variable value globale.
 * 4. inner() conserve une référence vers l'environnement lexical de outer() parce que inner() a une closure sur le scope de outer(), donc même si outer() est terminé, inner() peut toujours accéder à ses variables.
*/