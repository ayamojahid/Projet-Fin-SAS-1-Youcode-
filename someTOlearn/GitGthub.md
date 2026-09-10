
 # 🧠 D'abord : comment fonctionne Git ?

 Imagine que tu travailles sur un projet :

```
Ton ordinateur
     ↓
   Git
     ↓
   GitHub
```

 Git permet de **sauvegarder les différentes versions de ton projet** et de les envoyer sur GitHub.

 Il y a 3 étapes principales :

```
1. Je modifie mes fichiers
          ↓
2. Je prépare les modifications
          ↓
3. Je crée une sauvegarde (commit)
          ↓
4. J'envoie sur GitHub
```

---

 # 1\. `git status` — Qu'est-ce qui se passe ?

```
git status
```

 👉 C'est probablement **la commande que tu dois utiliser le plus souvent**.

 Elle te dit :

 - Sur quelle branche tu es.
- Quels fichiers ont été modifiés.
- Quels fichiers sont nouveaux.
- Quels fichiers sont prêts pour un commit.
- S'il n'y a aucun changement.

 Par exemple :

```
On branch main

Changes not staged for commit:
  modified: src/App.js
```

 Ça signifie :

 > J'ai modifié `App.js`, mais je ne l'ai pas encore préparé pour le commit.

 Si tu obtiens :

```
nothing to commit, working tree clean
```

 Ça signifie :

 > Git ne trouve aucune modification.

---

 # 2\. `git add` — Préparer les modifications

 Quand tu as terminé tes modifications :

```
git add .
```

 Le `.` signifie :

 > Ajoute toutes mes modifications.

 Par exemple, tu as modifié :

```
App.js
Login.js
style.css
```

 Tu fais :

```
git add .
```

 Les trois fichiers sont maintenant **préparés pour le prochain commit**.

 Tu peux vérifier avec :

```
git status
```

 Tu verras quelque chose comme :

```
Changes to be committed:
  modified: App.js
  modified: Login.js
  modified: style.css
```

 ### Ajouter seulement un fichier

```
git add App.js
```

 Ici, seul `App.js` sera préparé.

---

 # 3\. `git commit` — Créer une version

 Après `git add`, tu fais :

```
git commit -m "Ajout de la page login"
```

 Un **commit**, c'est une sauvegarde de l'état de ton projet à un moment précis.

 Imagine :

```
Version 1
   ↓
Version 2
   ↓
Version 3
   ↓
Version 4
```

 Chaque commit représente une étape.

 Par exemple :

```
git commit -m "Création de la page accueil"
```

 Puis plus tard :

```
git commit -m "Ajout du formulaire de connexion"
```

 Puis :

```
git commit -m "Correction du formulaire"
```

 Les messages doivent expliquer **ce que tu as fait**.

---

 # 4\. `git push` — Envoyer sur GitHub

 Après ton commit :

```
git push
```

 Ça envoie tes commits de ton ordinateur vers GitHub.

```
PC
 │
 │ git push
 ↓
GitHub
```

 Par exemple :

```
git add .
git commit -m "Ajout du formulaire"
git push
```

 Maintenant, ton changement est également sur GitHub.

---

 # 5\. `git pull` — Récupérer les changements

 C'est l'inverse de `push`.

```
git pull
```

 Ça récupère les changements qui sont sur GitHub et que tu n'as pas encore sur ton ordinateur.

```
GitHub
 │
 │ git pull
 ↓
PC
```

 ### Exemple

 Ton collègue a modifié le projet et a fait :

```
git push
```

 Toi, avant de commencer à travailler, tu fais :

```
git pull
```

 Tu récupères son travail.

 👉 Une bonne habitude quand tu travailles en équipe :

```
git pull
```

 avant de commencer à travailler.

---

 # 6\. `git log` — Voir l'historique

```
git log
```

 Ça permet de voir les commits précédents.

 Version plus simple :

```
git log --oneline
```

 Exemple :

```
a82f31a Ajout du formulaire
72bc91d Création de la page login
19ac442 Initialisation du projet
```

 Tu peux donc voir **qui a fait quoi et quand**.

---

 # 7\. `git diff` — Voir ce que tu as modifié

 Supposons que tu modifies :

```
App.js
```

 Mais tu ne sais plus exactement ce que tu as changé.

 Tu peux faire :

```
git diff
```

 Git va te montrer les différences entre ton fichier actuel et la dernière version enregistrée.

 C'est très utile avant de faire :

```
git add .
```

---

 # 8\. `git branch` — Les branches

 Une branche permet de travailler sur une fonctionnalité **sans modifier directement la branche principale**.

 Tu as par exemple :

```
main
 │
 ├── login
 │
 ├── paiement
 │
 └── dashboard
```

 Pour voir tes branches :

```
git branch
```

 Tu peux créer une branche :

```
git branch login
```

 Mais généralement, on fait directement :

```
git switch -c login
```

 Cela signifie :

 > Crée une branche `login` et place-moi dessus.

---

 # 9\. `git switch` — Changer de branche

 Si tu as :

```
main
login
dashboard
```

 Tu peux aller sur `login` :

```
git switch login
```

 Pour revenir à `main` :

```
git switch main
```

---

 # 10\. `git merge` — Fusionner une branche

 Supposons :

```
main
  │
  └── login
```

 Tu as terminé la fonctionnalité `login`.

 Tu veux maintenant mettre le travail de `login` dans `main`.

 Tu vas sur `main` :

```
git switch main
```

 Puis :

```
git merge login
```

 Git va essayer de fusionner les modifications.

---

 # 🔥 Les commandes que tu dois vraiment retenir

 Si tu es débutante, **ne cherche pas à mémoriser 50 commandes**.

 Commence par celles-ci :

```
git status
```

 👉 Voir ce qui a changé.

```
git add .
```

 👉 Préparer les changements.

```
git commit -m "message"
```

 👉 Créer une version.

```
git push
```

 👉 Envoyer vers GitHub.

```
git pull
```

 👉 Récupérer depuis GitHub.

```
git log --oneline
```

 👉 Voir l'historique.

```
git switch -c nom-branche
```

 👉 Créer une branche et travailler dessus.

```
git switch nom-branche
```

 👉 Changer de branche.

---

 # 🎯 Exemple réel de travail

 Tu arrives le matin sur ton projet.

 ### Étape 1 — récupérer le travail récent

```
git pull
```

 ### Étape 2 — créer ta branche

```
git switch -c ajout-login
```

 ### Étape 3 — tu travailles

 Tu modifies :

```
Login.jsx
style.css
```

 ### Étape 4 — vérifier

```
git status
```

 ### Étape 5 — préparer

```
git add .
```

 ### Étape 6 — sauvegarder

```
git commit -m "Ajout de la page login"
```

 ### Étape 7 — envoyer sur GitHub

```
git push
```

 Et voilà. 🎉

 Le cycle principal est donc :

```
              ┌──────────────┐
              │   git pull   │
              └──────┬───────┘
                     ↓
                 Je travaille
                     ↓
              ┌──────────────┐
              │  git status  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │   git add .  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │    commit    │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │   git push   │
              └──────────────┘
                     ↓
                  GitHub
```

Oui 👍 Juste les **commandes Git vraiment importantes** :

 | Commande | Signification |
| --- | --- |
| `git status` | Voir ce qui a changé |
| `git add .` | Préparer les changements |
| `git commit -m "message"` | Enregistrer les changements |
| `git push` | Envoyer les changements sur GitHub |
| `git pull` | Récupérer les changements depuis GitHub |
| `git log --oneline` | Voir l'historique |
| `git switch -c nom` | Créer une nouvelle branche |
| `git switch nom` | Changer de branche |

### ⭐ Le cycle principal

```
git pull
git status
git add .
git commit -m "mon changement"
git push
```

 👉 **Ces 5 commandes sont les plus importantes à retenir.**