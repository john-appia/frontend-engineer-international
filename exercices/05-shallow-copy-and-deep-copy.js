// Exercice 1

// Sans exécuter le code, donne le résultat et Explique pourquoi:

{
  const original = {
    profile: {
      name: "John",
    },
  };

  const copy = {
    ...original,
  };

  copy.profile.name = "David";

  console.log(original.profile.name);
  console.log(original === copy);
  console.log(original.profile === copy.profile);
}

/**
 * console.log(original.profile.name) ->  "David", parce que la copie est superficielle, donc les objets imbriqués partagent la même référence.
 * console.log(original === copy) -> false, parce que original et copy sont deux objets différents.
 * console.log(original.profile === copy.profile) -> true, parce que les deux objets partagent la même référence pour l'objet profile.
 */

//  *****************************************************************

// Exercice 2

const original = {
  profile: {
    name: "John",
  },
};

const copy = structuredClone(original);

copy.profile.name = "David";

console.log(original.profile.name);
console.log(original === copy);
console.log(original.profile === copy.profile);

/**
 * console.log(original.profile.name) ->  "John", parce que la copie est profonde avec structuredClone, donc les objets imbriqués ne partagent pas la même référence.
 * console.log(original === copy) -> false, parce que original et copy sont deux objets différents.
 * console.log(original.profile === copy.profile) -> false, parce que les deux objets ne partagent pas la même référence pour l'objet profile à cause de la copie profonde.
 */

//  *****************************************************************

// Exercice 3

// Corrige ce code sans muter l’état
// Tu veux changer seulement : city → Yamoussoukro

const state = {
  user: {
    address: {
      city: "Abidjan",
      country: "CI",
    },
  },
};

const nextState = {
  ...state,
  user: {
    ...state.user,
    address: {
      ...state.user.address,
      city: "Yamoussoukro",
    },
  },
};

