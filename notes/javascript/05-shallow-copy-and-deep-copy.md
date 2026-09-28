# JavaScript Shallow copy and Deep copy

## Date 

28/09/2026

---

## Shallow copy

la shallow copy copie le premier niveau d'un objet et conserve les références des objets imbriqués

---

## Exemples de shallow copy

const copy = { ...object }
const copy2 = Object.assign({}, object)

---

## Deep copy

En plus de copier le premier niveau, elle recrée les objets imbriqués

---

## Exemples de Deep copy

const deepCopy = structuredClone(object)

---

## Gestion du state dans un framework comme react

dans la gestion du state dans les framework comme react, on copie généralement le niveau concerné, ce qui va créer automatique une nouvelle référence d'objet et nous éviter une mauvaise surprise

---
