# Comment fonctionne JavaScript ?

## Date

27/07/2026

---

## Ce que j'ai appris

JavaScript n'est pas exécuté directement.

Il passe par plusieurs étapes :

- Parser
- AST
- Bytecode
- JIT Compiler

---

## Ce que je retiens

Le parser vérifie uniquement la syntaxe.

Il ne vérifie pas que les variables existent.

---

## Ce que je ne comprenais pas avant

Je pensais que

console.log(a)

var a = 5

générait une erreur de syntaxe.

En réalité :

- le parser crée correctement l'AST ;
- l'erreur (ou le comportement) dépend de l'exécution.

---

## Questions restantes

Pourquoi let se comporte différemment de var ?

Pourquoi undefined ?

---

## Ressources

https://developer.mozilla.org/

https://v8.dev/