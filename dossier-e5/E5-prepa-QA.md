# E5 — Guide de révision Q&A (les 30 minutes d'entretien)

> Source : grille officielle **Annexe VI-3** + **référentiel BTS SIO**. Pour chaque compétence : **ce que le jury coche** · **les savoirs à savoir citer** · **les questions probables** · **mes points d'ancrage** (tirés de mes réalisations).
>
> **Règle d'or** : mener par le **pourquoi** (pas le quoi), **double registre** (technique pour le prof SLAM / valeur métier-utilisateur pour le pro IT), et toujours distinguer **ma contribution personnelle**.

---

## ⭐ Les 3 réponses fragiles à sécuriser en priorité

L'écart entre « Bonne maîtrise » (~13) et « Excellente maîtrise » (~17) se joue ici. À blinder en premier.

1. **C5 — tests & rapport.** Savoir distinguer **test unitaire / test d'intégration / test d'acceptation (recette)** et montrer un **rapport de test concret** (ex. recette Reciproq avec le PO, tests d'intégration Concieragent / Hoppy). Ne pas dire juste « j'ai testé ».
2. **C4 — contribution personnelle + prédictif.** Une **phrase d'ouverture de contribution perso par projet d'équipe** (voir plus bas), ET connaître l'**approche prédictive (cycle en V, Gantt)** en plus de l'agile, et savoir **quand choisir l'une vs l'autre**.
3. **C1 — inventaire outillé + restauration testée.** Nommer un **outil de gestion des actifs** (Git + manifests K8s/Helm versionnés côté Verana ; inventaire structuré hébergement/domaines/comptes côté PKBA) et décrire une **restauration testée** (pas seulement « je fais des sauvegardes »).

---

## C1 — Gérer le patrimoine informatique

**Le jury coche :** inventaire exhaustif **réalisé avec un outil** de gestion des actifs · normes/standards mobilisés · droits = habilitations des acteurs · continuité/reprise vérifiées (PCA/PRA) · sauvegardes conformes au plan · **restaurations testées et opérationnelles** · écarts d'usage détectés et signalés.

**Savoirs à citer :** outils de gestion des actifs · gestion utilisateurs/habilitations/droits (RBAC) · disponibilité d'un service (enjeux technique/éco/juridique) · PCA/PRA · techniques de sauvegarde & restauration et supports · **licences logicielles** (open source vs proprio, tarification) · charte informatique (valeur juridique), obligations de conservation/archivage · normes (W3C DID, VC Data Model).

**Questions probables → mes ancrages :**
- *Quel outil d'inventaire ?* → Verana : tout le patrimoine technique est versionné dans Git (manifests Kubernetes, charts Helm, IaC) = inventaire vivant et traçable. PKBA : inventaire structuré des ressources (hébergement, noms de domaine, comptes réseaux sociaux, accès).
- *Restauration testée ?* ⚠️ → PKBA : sauvegarde du site + base, **et test de restauration** sur environnement de secours. (À cadrer honnêtement selon ce qui a été fait.)
- *Droits par rôle ?* → PKBA : habilitations président / trésorier / communication (RBAC associatif).
- *PCA/PRA ?* → Verana : multi-cloud + rollback K8s ; PKBA : hébergement + plan de reprise simple.
- *Licences ?* → `@credat/sdk` en **Apache 2.0** (choix vs MIT : clause brevets, vs proprio : adoption communautaire).

## C2 — Répondre aux incidents et aux demandes d'assistance et d'évolution

**Le jury coche :** demande prise en compte, **diagnostiquée**, traitée conformément aux attentes · réponse conforme à la procédure et adaptée à l'utilisateur · **méthode de diagnostic** (cause racine) · solution mise en œuvre · **maîtrise d'un logiciel de gestion de parc/incidents** · compte rendu clair, communication adaptée.

**Savoirs à citer :** outils & méthodes de gestion des incidents (ITIL implicite) · méthodologie cause racine · base de connaissances helpdesk · **SLA & contrat d'assistance** (savoir éco/juridique) · bases réseau · scripts/commandes OS.

**Questions probables → mes ancrages :**
- *Montre un ticket résolu + diagnostic cause racine* → Klyx/Reciproq : GitHub Issues / Linear, démarche de repro → isolation → fix → vérif.
- *SLA avec tes clients Klyx ?* → notion d'engagement de niveau de service, délais de réponse selon le contrat (savoir éco attendu).
- *Corrective / adaptative / évolutive ?* → un exemple de chaque chez Klyx (bug / mise à jour dépendances / nouvelle feature).
- *Vrai logiciel de parc (GLPI) ou issue tracker ?* → **honnêteté + justification d'échelle** : à l'échelle TPE/asso, GitHub Issues/Linear suffisent ; je connais GLPI/ITIL pour un parc plus grand.
- *Hoppy : monitoring erreurs API + régression ?* → logs/alertes, gestion des régressions après mise à jour LLM/ElevenLabs.

## C3 — Développer la présence en ligne de l'organisation

**Le jury coche :** image valorisée et conforme · **enjeux économiques** identifiés + **obligations juridiques** respectées · **mentions légales** accessibles et conformes · **visibilité mesurée** · site évolué selon le besoin.

**Savoirs à citer :** SEO + mesure d'audience (analytics) · charte graphique · CMS · **e-réputation** · **responsabilité éditeur vs hébergeur** · **mentions légales / CGU / RGPD** (données perso, cookies) · **nom de domaine** (AFNIC/ICANN, conflits).

**Questions probables → mes ancrages :**
- *Comment prouves-tu la visibilité ?* → chiffres : **HHI trafic organique ×3 en 3 mois**, **Klyx +80% trafic / +35% leads**, outils Google Search Console / Lighthouse >95 / Analytics.
- *Conformité RGPD des sites Klyx ?* → mentions légales, politique de confidentialité, gestion cookies — montrables en live.
- *Éditeur vs hébergeur ?* ⚠️ piège juridique → l'éditeur est responsable du contenu, l'hébergeur d'un régime de responsabilité limitée (LCEN).
- *Nom de domaine pkba.vertiflow.fr / AFNIC / conflit ?* → formalisme d'attribution, résolution de conflits.
- *Données perso PKBA (inscriptions, Stripe, dons) ?* → collecte minimale, conservation, sécurité.

## C4 — Travailler en mode projet

**Le jury coche :** objectifs/modalités explicités · analyse besoins/existant · **activités personnelles planifiées** selon une méthodo · découpage réaliste, livrables conformes, projet documenté · compte rendu + **écarts justifiés** · **contribution personnelle clairement mise en évidence** (évalué explicitement).

**Savoirs à citer :** **planification prédictive (cycle en V, Gantt)** ET **agile (Scrum/Kanban, sprints, backlog, rétro)** — le référentiel exige **les deux** · outil de gestion de projet (Trello/Notion/GitHub Projects/Linear).

**Questions probables → mes ancrages :**
- *Ta contribution perso vs l'équipe ?* → **phrase d'ouverture par projet** (voir section dédiée plus bas). LE différenciateur transversal.
- *Prédictif vs agile, quand choisir ?* ⚠️ → agile pour le produit incrémental incertain (Klyx, Reciproq) ; prédictif/cycle en V pour un périmètre figé et contractuel. **Ne pas ne connaître que l'agile.**
- *Découpage en tâches + gestion des écarts chez Klyx ?* → sprints, backlog priorisé, écarts justifiés en rétro.
- *Coordination équipe full remote Verana ?* → async, code reviews, fuseaux, specs partagées.

## C5 — Mettre à disposition des utilisateurs un service informatique

**Le jury coche :** **tests d'intégration ET d'acceptation** rédigés et effectués (pas que unitaires) · outils de test appropriés · **rapport de test produit** · **support d'information** + modalités d'accompagnement · service opérationnel et **satisfaisant pour l'utilisateur**.

**Savoirs à citer :** service informatique (prestations, rôles) · architecture d'un service · protocoles réseau · **outils de déploiement (CI/CD GitHub Actions, Docker, K8s/Helm, Vercel)** = mon point fort · outils de test · **distinction unitaire / intégration / acceptation**.

**Questions probables → mes ancrages :**
- *Tests d'intégration/acceptation + rapport ?* ⚠️ → recette Reciproq avec le PO (acceptation), tests d'intégration Concieragent/Hoppy ; **avoir un rapport concret à montrer**.
- *Pipeline de déploiement Verana ?* → CI/CD GitHub Actions → Docker → K8s/Helm, rollback. **Point fort, dérouler avec assurance.**
- *Accompagnement utilisateurs + support d'info ?* → doc/README/runbook, FAQ. (souvent oublié — le préparer)
- *Hoppy 28k annonces 24/7 — satisfaction & charge ?* → indicateurs de charge, monitoring, dispo.
- *Architecture Concieragent (6 MCP/DIDComm) + gestion erreurs/retry ?* → orchestration, sélection LLM, retry.

## C6 — Organiser son développement professionnel *(point fort → finir l'oral là-dessus)*

**Le jury coche :** besoins de formation identifiés · **environnement d'apprentissage délimité et expliqué** · **veille régulière** (techno émergentes, recherche approfondie, montée en compétences) · **identité pro visible sur un réseau social pro**.

**Savoirs à citer :** identité numérique pro (CV, réseaux pro, atouts/risques) · veille & curation (sources, stratégies, outils, cadence) · panorama des métiers IT.

**Questions probables → mes ancrages :**
- *Stratégie de veille (sources + outils + cadence) + exemple appliqué ?* → **OpenClaw** (agrégateur IA quotidien), **GDG Bordeaux** (15+ meetups), sources W3C/Vercel/Anthropic. Exemple concret : une veille → appliquée à un projet.
- *Identité pro visible où ?* → **LinkedIn** (à jour), GitHub AirKyzzZ, X @maximecodes, portfolio public.
- *Projet professionnel ?* → **alternance Hop Hop Immo 09/2026** + vision **entrepreneur tech IA** (faire grossir Klyx + approfondir IA/SSI chez Verana).
- *Besoins de formation identifiés + réponse ?* → CS50x, EFSET C2, lecture de specs W3C.

---

## 🗣️ Ma contribution personnelle — une phrase par projet d'équipe

À dégainer dès qu'on parle d'un projet collaboratif (C4 transversal, le différenciateur n°1) :

- **Hop Hop Immo** *(équipe produit + marketing)* : « Ma contribution : j'ai conçu et développé Hoppy (intégration ElevenLabs + LLM sur 28k+ annonces) et refait le SEO de la homepage ; l'équipe produit/marketing a défini les besoins et le positionnement. »
- **Verana / 2060.io** *(équipe distribuée full remote)* : « Ma contribution : j'ai développé le Visualizer (Next.js/React/TS) et mis en place l'infra de déploiement (Docker/K8s/Helm, CI/CD) ; l'équipe lead a porté les specs et les code reviews. »
- **Concieragent** *(POC interne)* : « Ma contribution : j'ai architecturé l'orchestration multi-LLM des 6 serveurs MCP via DIDComm chiffré. »
- **Klyx** *(seul, en relation client directe)* : « Klyx, c'est moi seul de bout en bout — du devis à la livraison — donc 100% ma contribution, en relation directe avec les clients. »
- **PKBA** *(bureau associatif)* : « Ma contribution : co-fondateur & trésorier, j'ai géré le SI (site, patrimoine, droits, sauvegardes) et la communication ; le bureau gère le sportif et l'administratif global. »
- **Reciproq** *(équipe pluridisciplinaire)* : « Ma contribution : développement frontend des pages clés + résolution de bugs en recette ; le design venait de l'équipe design, les specs du produit. »

## ⚖️ Cheat sheet savoirs juridiques / économiques (le terrain où un jury piège un profil « pur dev »)

- **RGPD** : licéité, minimisation, durée de conservation, droits des personnes, cookies/consentement.
- **Mentions légales / LCEN** : obligatoires, contenu (éditeur, hébergeur, contact).
- **Responsabilité éditeur vs hébergeur** : éditeur = responsable du contenu ; hébergeur = responsabilité allégée (retrait sur signalement).
- **Nom de domaine** : AFNIC (.fr) / ICANN, attribution, conflits (cybersquatting), résolution.
- **SLA / contrat d'assistance** : engagement de niveau de service, délais, pénalités, responsabilités.
- **Licences logicielles** : open source (MIT, Apache 2.0, GPL — copyleft) vs propriétaire, implications et tarification.

## ✅ Actions prioritaires (J-3 → jour J)

**HIGH**
- [ ] **Confirmer salle + heure exacte** de l'E5 du 01/06 auprès du **centre d'examen / rectorat de Bordeaux** (date fixée localement, pas de pilote externe).
- [x] Cyclades « J'ai fourni toutes mes pièces » **validé** (confirmé par Maxime).
- [ ] **Tester l'accessibilité** de `https://e5.maximemansiet.fr` depuis un **réseau externe** (4G, navigation privée, sans login). **-10 pts si inaccessible.**
- [ ] **Fallback offline** : PDF complet du portfolio + fiches projet + **tableau de synthèse .xlsx imprimé** + copie locale du site + **partage 4G**.
- [ ] **Drill des 3 réponses fragiles** (C5 tests/rapport · C4 contribution + prédictif · C1 inventaire outillé + restauration testée).

**MEDIUM**
- [ ] Réviser la **cheat sheet juridique/éco** ci-dessus.
- [ ] Préparer **C6 comme clôture forte** (veille → montée en compétences → projet pro).
- [ ] (Sans éditer — dossier figé) Vérifier mentalement que page de garde + attestations sont signées/visées → savoir le défendre si question.

**LOW**
- [ ] Répéter pour tenir **sous 10 min** (plafond ferme), support = portfolio en live.
- [ ] **Démo vidéo de Hoppy** prête (le jury n'aura pas le téléphone).
- [ ] Vérifier **tous les liens/démos 48h avant**.
