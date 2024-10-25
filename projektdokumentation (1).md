# Projekt-Dokumentation

Gruppe The_Big_B
Ben Müller

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  23.08.24     | 0.0.1     |  Website mit REACT erstellt und an der Seite Home angefangen           |
|  30.08.24     | 0.1.0  |  An der Seite AboutMe und Hobbies gearbeitet                                                             |
| 06.09.24   | 1.0.0   | Alle Seiten grob fertiggestellt (Meilenstein 1)   |
| 13.09.24   | 1.1.0   |   Alle Texte geschrieben  |
| 14.10.24 (18.10.24)   |  1.5.0  | Design von allen Seiten fertig (Meilenstein 2)   |
| 25.10.24   |  2.0.0  | Responsive Design und Seite veröffentlicht (Meilenstein 3)   |

## 1 Informieren

### 1.1 Ihr Projekt

Eine Portfolio-Seite über mich.

Ich möchte eine Portfolio-Seite über mich erstellen. Sie soll einen ersten Überblick über mich als Person verschaffen. 

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ         | Beschreibung                                                                                 |
| ---- | --------------- | ----------- | -------------------------------------------------------------------------------------------- |
| 1    | muss            | funktional  | Als Benutzer möchte ich die Website aufrufen können, damit ich auf die Inhalte der Website zugreifen kann. |
| 2    | muss            | funktional  | Als Benutzer möchte ich die Startseite (Home) und die Kontaktseite aufrufen können, damit ich die wichtigsten Informationen und Kontaktmöglichkeiten finde. |
| 3    | muss            | funktional  | Als Benutzer möchte ich die Seiten „Projekte“ und „Hobbies“ aufrufen können, damit ich mehr über die Aktivitäten und Interessen der Person erfahre. |
| 4    | muss            | funktional  | Als Benutzer möchte ich die „About Me“-Seite aufrufen können, um mehr über die Person hinter der Website zu erfahren. |
| 5    | muss            | rand        | Als Website-Betreiber möchte ich alle Texte und Beschreibungen für die Website schreiben, damit die Inhalte gut strukturiert und informativ sind. |
| 6    | muss            | qualität    | Als Benutzer möchte ich ein ansprechendes Design vorfinden, damit ich eine positive User Experience habe und mich auf der Website wohlfühle. |
| 7    | muss            | qualität    | Als Benutzer möchte ich, dass die Website responsiv ist und auf verschiedenen Geräten gut dargestellt wird, damit ich unabhängig vom Gerät auf die Inhalte zugreifen kann. |



### 1.3 Testfälle

| TC-№ | Ausgangslage                                | Eingabe                              | Erwartete Ausgabe                            |
| ---- | ------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| 1.1  | Die Website ist geöffnet.                   | URL der Website eingeben             | Die Website wird im Browser angezeigt.       |
| 2.1  | Die Startseite ist geladen.                 | Klick auf den Menüpunkt „Home“       | Die Startseite wird angezeigt.               |
| 2.2  | Die Startseite ist geladen.                 | Klick auf den Menüpunkt „Kontakt“    | Die Kontaktseite wird angezeigt.             |
| 3.1  | Die Website ist geöffnet.                   | Klick auf den Menüpunkt „Projekte“   | Die Seite „Projekte“ wird angezeigt.         |
| 3.2  | Die Website ist geöffnet.                   | Klick auf den Menüpunkt „Hobbies“    | Die Seite „Hobbies“ wird angezeigt.          |
| 4.1  | Die Website ist geöffnet.                   | Klick auf den Menüpunkt „About Me“   | Die Seite „About Me“ wird angezeigt.         |
| 5.1  | Die Website ist noch ohne Inhalte.          | Texte und Beschreibungen einfügen    | Die Inhalte sind korrekt sichtbar.           |
| 6.1  | Die Website ist geöffnet.                   | Seite im Browser betrachten          | Ein ansprechendes Design wird angezeigt.     |
| 7.1  | Die Website ist geöffnet.                   | Browserfenstergröße ändern           | Die Website passt sich responsiv an die neue Fenstergröße an. |
| 7.2  | Die Website ist geöffnet.                   | Zugriff über ein Smartphone          | Die Website wird responsiv dargestellt.      |


## 2 Planen

| AP-№ | Frist      | Zuständig | Beschreibung                                         | geplante Zeit |
| ---- | ---------- | --------- | ---------------------------------------------------- | ------------- |
| 1.A  | 23.08.24   | Ben       | Erstellen der Website-Struktur mit REACT             | 5 Stunden     |
| 2.A  | 30.08.24   | Ben       | Implementierung der Seiten „Home“, "About Me" und „Kontakt“      | 5 Stunden     |
| 3.A  | 06.09.24   | Ben       | Implementierung der Seiten „Projekte“ und „Hobbies“  | 5 Stunden     |
| 4.A  | 13.09.24   | Ben       | Schreiben und Einfügen aller Texte und Beschreibungen| 5 Stunden     |
| 5.A  | 14.10.24 (18.10.24)  | Ben       | Gestaltung und Design der Website                    | 5 Stunden     |
| 6.A  | 25.10.24   | Ben       | Umsetzung von Responsive Design und Veröffentlichung | 5 Stunden     |

**Total:** 30 Stunden

## 3 Entscheiden

Bei der Navbar für das Handy habe ich mich für eine Burgernavbar entschieden.

## 4 Realisieren

| AP-№ | Datum      | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ---------- | --------- | ------------- | ----------------- |
| 1.A  | 23.08.24   | Ben       | 5 Stunden     | 5 Stunden         |
| 2.A  | 30.08.24   | Ben       | 5 Stunden     | 5 Stunden         |
| 3.A  | 06.09.24   | Ben       | 5 Stunden     | 5 Stunden         |
| 4.A  | 13.09.24   | Ben       | 5 Stunden     | 5 Stunden         |
| 5.A  | 14.10.24  (18.10.24) | Ben       | 5 Stunden     | 5 Stunden         |
| 6.A  | 25.10.24   | Ben       | 5 Stunden     | 5 Stunden         |



## 5 Kontrollieren

| TC-№ | Datum      | Resultat | Tester |
| ---- | ---------- | -------- | ------ |
| 1.1  | 25.10.24   | ok       | Ben    |
| 2.1  | 25.10.24   | ok       | Ben    |
| 2.2  | 25.10.24   | ok       | Ben    |
| 3.1  | 25.10.24   | ok       | Ben    |
| 3.2  | 25.10.24   | ok       | Ben    |
| 4.1  | 25.10.24   | ok       | Ben    |
| 5.1  | 25.10.24   | ok       | Ben    |
| 6.1  | 25.10.24   | ok       | Ben    |
| 7.1  | 25.10.24   | ok       | Ben    |
| 7.2  | 25.10.24   | ok       | Ben    |



