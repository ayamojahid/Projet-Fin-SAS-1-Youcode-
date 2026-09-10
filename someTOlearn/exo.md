
 ## 🧠 Conseils avant les exercices

 ### 1\. Comprends toujours ce que tu dois trouver

 Avant de coder, écris le problème en français.

 Exemple :

 > « Je dois trouver les nombres qui apparaissent deux fois. »

 Puis demande-toi :

 - Qu'est-ce que je dois parcourir ?
- Est-ce que j'ai besoin d'une boucle ?
- De deux boucles ?
- Est-ce que je dois comparer ?
- Est-ce que je dois compter ?
- Est-ce que je dois stocker un résultat ?

---

 ### 2\. Fais un exemple sur papier

 Pour ton exercice précédent :

```
[4, 8, 2, 15, 7, 10, 4, 5]
```

 Tu peux écrire :

```
4 → chercher un autre 4 → trouvé
8 → chercher un autre 8 → rien
2 → chercher un autre 2 → rien
...
```

 Ça permet de comprendre la logique **avant d'écrire le code**.

---

 ### 3\. Fais attention à `i` et `j`

 Avec deux boucles :

```
for (let i = 0; i < nombres.length; i++) {
    for (let j = i + 1; j < nombres.length; j++) {
```

 Demande-toi toujours :

 > Que représente `i` ?\
>  Que représente `j` ?

 Ici :

 - `i` = élément que je suis en train d'étudier
- `j` = éléments que je compare avec `i`

---

 ### 4\. N'utilise pas directement des méthodes compliquées

 Pour apprendre la logique, essaie d'abord de résoudre avec :

```
for
if
else
let
```

 Puis seulement après utilise :

```
includes()
find()
filter()
reduce()
```

 Ça force ton cerveau à comprendre **comment ça fonctionne réellement**.

---

 ### 5\. Utilise `console.log()` pour comprendre

 Par exemple :

```
console.log(i, j);
```

 ou :

```
console.log(nombres[i], nombres[j]);
```

 Tu peux voir exactement ce que fait ton programme.

---

 # 🏋️ Exercices de logique

 Je te donne les exercices **du plus facile au plus difficile**.

 ## 🟢 Niveau 1 — Facile

 ### Exercice 1

 Trouve le **plus grand nombre** :

```
let nombres = [4, 8, 2, 15, 7, 10];
```

 Résultat attendu :

```
15
```

 **Conseil :** utilise une variable `max`.

---

 ### Exercice 2

 Trouve le **plus petit nombre** :

```
let nombres = [4, 8, 2, 15, 7, 10];
```

 Résultat :

```
2
```

 **Conseil :** même logique que `max`, mais avec `min`.

---

 ### Exercice 3

 Compte combien il y a de nombres **pairs** :

```
let nombres = [4, 7, 8, 3, 10, 15, 2];
```

 Résultat :

```
4
```

 Indice :

```
nombres[i] % 2 == 0
```

---

 ## 🟡 Niveau 2 — Moyen

 ### Exercice 4

 Trouve les nombres répétés :

```
let nombres = [4, 8, 2, 15, 7, 10, 4, 5, 8];
```

 Résultat :

```
4
8
```

 👉 Essaie avec **deux `for`**, comme tu viens de faire.

---

 ### Exercice 5

 Compte combien de fois un nombre apparaît.

```
let nombres = [4, 8, 4, 2, 4, 7, 8];
let recherche = 4;
```

 Résultat :

```
3
```

 Parce que `4` apparaît trois fois.

 **Conseil :**

```
compteur = 0

si nombre == recherche
    compteur++
```

---

 ### Exercice 6

 Inverse un tableau **sans utiliser `reverse()`**.

```
let nombres = [1, 2, 3, 4, 5];
```

 Résultat :

```
[5, 4, 3, 2, 1]
```

 👉 Celui-là est très bon pour travailler les indices.

---

 ## 🔴 Niveau 3 — Plus difficile

 ### Exercice 7

 Trouve le **deuxième plus grand nombre**.

```
let nombres = [4, 8, 15, 2, 10, 12];
```

 Résultat :

```
12
```

 ⚠️ Essaie sans `sort()`.

---

 ### Exercice 8

 Trouve les nombres qui apparaissent **exactement deux fois**.

```
let nombres = [4, 8, 4, 2, 8, 8, 5];
```

 Résultat :

```
4
```

 Parce que :

```
4 → 2 fois
8 → 3 fois
2 → 1 fois
5 → 1 fois
```

---

 ### Exercice 9 — Challenge 🔥

 Trouve le nombre qui apparaît **le plus de fois**.

```
let nombres = [4, 8, 4, 2, 8, 8, 5, 8, 4];
```

 Résultat :

```
8
```

 Parce que :

```
4 → 3 fois
8 → 4 fois
2 → 1 fois
5 → 1 fois
```

---

 ## 🎯 Ma recommandation

 Fais-les **dans cet ordre** :

```
1 → maximum
2 → minimum
3 → nombres pairs
4 → nombres répétés
5 → compter un nombre
6 → inverser
7 → deuxième maximum
8 → exactement deux fois
9 → plus fréquent
```

