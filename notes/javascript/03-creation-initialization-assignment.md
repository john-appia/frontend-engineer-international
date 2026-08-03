# Creation vs Initialization vs Assignation

## Date

31/07/2026

---

## Definition

### Creation

C'est l'étape où javascript créé la variable en mémoire, elle se déroule durant la Creation phase.

### Initialization

C'est l'étape où javascript initialise la variable, elle se déroule durant la Creation phase.

### Assignation

C'est l'étape où javascript assigne la valeur à la variable, elle se déroule durant l'Execution phase.

---

## Tableau comparatif

Déclaration     Creation    Initialisation      Utilisable avant déclaration

Var             OUI         OUI (undefined)     OUI

Let             OUI         NON (TDZ)           NON (ReferenceError)

Const           OUI         NON (TDZ)           NON (ReferenceError)

Function        OUI         OUI (Object function)  OUI

---

