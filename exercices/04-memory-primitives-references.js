// Exercice 1

// Sans exécuter le code, donne le résultat et Explique pourquoi:

/** 
 * le résultat sera 5 et 10, car la variabe a est de type primitif number, donc elle est stockée en mémoire par valeur.
 * Quand on fait b = a, on copie juste la valeur de a dans b. donc la modification de la valeur de b (b = 10) n'affecte pas la valeur de a.
*/

let a = 5;
let b = a;

b = 10;

console.log(a);
console.log(b);

//  *****************************************************************

// Exercice 2

/**
 * le résultat sera David, David et true, car les variables user1 et user2 contiennent la même référence vers un unique objet.
 * Quand on fait user2 = user1, on copie la référence de user1 dans user2. donc quand on modifie une propriété de user2, cela affecte
 * aussi user1, car les deux objets ont la même référence. Ce qui impplique aussi que leur comparaison est true, parce qu'ils ont la même référence en mémoire.
 */
const user1 = {
  name: "John",
};

const user2 = user1;

user2.name = "David";

console.log(user1.name);
console.log(user2.name);
console.log(user1 === user2);

//  *****************************************************************

// Exercice 3
/**
 * le résultat sera false, car les constantes product1 et product2 sont stockées en mémoires avec des références différentes 
 * même si elles sont initialisées avec le même contenu.
 */
const product1 = {
  name: "Phone",
};

const product2 = {
  name: "Phone",
};

console.log(product1 === product2);

//  *****************************************************************

// Exercice 4 — Niveau React

/**
 * la constante state est créé et stockée en mémoire par référence, ensuite une copie de la référence de state est affecté 
 * à une nouvelle constante nextState. on réaffecte une nouvelle valeur à la propriété profile.name de nextState
 * comme nextState et State pointent vers la même référence, alors la propriété profile.name de state aura la même valeur.
 * et donc on aura comme résultat: David et true, car les deux constantes pointent vers la même référence en mémoire.
 */
const state = {
  profile: {
    name: "John",
  },
};

const nextState = state;

nextState.profile.name = "David";

console.log(state.profile.name);
console.log(nextState === state);

// Explique ce qui s’est produit.

//  *****************************************************************

// Exercice 5 — Piège sur const

/**
 * Le code A fonctionne et le code B lèvera un TypeError. dans le code A on modifie la propriété de l'objet user, c'est la mutation de l'objet.
 * dans le code B on essaie de réaffcter une nouvelle valeur à la constante user, ce qui n'est pas autorisé en javascript.
 */

// Code A
{const user = {
  name: "John",
};

user.name = "David";}

// Code B
{const user = {
  name: "John",
};

user = {
  name: "David",
};}
