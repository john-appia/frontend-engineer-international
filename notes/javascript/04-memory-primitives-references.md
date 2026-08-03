# JavaScript Memory Model

## Date 

03/08/2026

---

## Stack et Heap

Le Stack est le terme utilisé pour la mémoire qui contient:
-les contextes d'exécution
-les variables locales
-les variables simples
-les références des objets

---

## Valeurs primitives

Chaque langage de programmation possède ces valeurs primitives qu'il reconnait nativement.
en Javascipt comme valeurs primitives:
-string
-number
-boolean
-undefined
-null
-bigInt
-symbol

---

## Objets et références

en javascript les objets tels que

let user = {
    name: "john"
}

et 

let tab = [1, 2, 3]

ne sont pas des valeurs primitives. donc javascript créé une valeur simple qu'il va stocker en mémoire et qui pourra être utiliser pour accéder à l'objet, c'est la référence de l'objet

---

## Comparaison des valeurs

quand on fait la comparaison entre deux varaibles de types primitifs, se sont leurs valeurs en mémoire qui seront comparés.

exemple: 
let a = 10;
let b = 10;

console.log(a === b); // se sont les valeurs de a et b qui seront comparés ce qui donnera true.

---

## Comparaison des références

contrainement aux variables de types primitifs, la comparaison des objets se fait au niveau de leur référence.

exemple:

let user1 = { name: "john" }
let user2 = { name: "john" }

console.log(user1 === user2) // le résultat sera false, javascript compare les références des deux objets. même si ils ont le même contenu, il sont stockés en mémoire avec des référence différentes.
---

## const et mutation

en javascript les constantes n'autorise pas la réaffectation des variables, ce qui créé une petite nuance avec les objets.
en effet, les objets ne sont pas stockés en mémoire, mais c'est plutôt une référence qui pointe vers l'objet qui est stocké en mémoire. ce qui fait que les propriétés de l'objet peuvent être modifié, c'est ce qui est appelé la MUTATION. mais les variables ne peuvent plus être réaffecté.

---

## Lien avec React

---

## Ce que je pensais avant

-je pensais avant qu'une variable contenant un objet affecté à une autre variable, créait une copie bien distinct de l'objet
-je pensais aussi que les constantes peut importe leur types ne pouvait pas être modifié
-je pensais qu'un tableau était un type en javascript

---

## Ce que je comprends maintenant

-quand on affecte la valeur d'une variable contenant un objet à une autre variable, on copie juste la référence de ce objet dans l'autre. les deux variables contiennent maintenant la même référence et pointe vers le même objet. ainsi, modifer les propriétés de l'un modifie aussi l'autre.

-les constantes contenant les objets ne peuvent plus être réaffecté, mais les propriétés peuvent être modifié

-un tableau est considéré comme un objet en javascript

---