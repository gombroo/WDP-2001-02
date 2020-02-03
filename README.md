


# WDP Projekt Zespołowy

## Opis projektu

Aplikacja sklepu z meblami zbudowana na potrzeby nauki programowania w zespole w środowisku **React / Redux**.

Projekt został zrealizowany przy użyciu metody **Kanban**, oprogramowania do zarządzania projektami **Jira** oraz wewnętrznego komunikatora w obsłudze zbliżonego do **Slacka**.

Strukutra katalogów:
- **src** - katalog źródłowy,
  - **/components** - katalog z komponentami podzielony na 4 podkatalogi (common, features, layout, views) pogrupowany według funkcji, jaką pełnią poszczególne elementy,
  - **/redux** - katalog obsługujący store reduxowy,
  - **/styles** - katalog z globalnymi plikami styli.

## Demo

[Bazar Online Shopping](https://nervous-wright-dd8c3a.netlify.com/)

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

1. Pod koniec każdego dnia na kanale zespołu piszemy **DAILY** czyli podsumowanie swoich działań oraz planów na kolejny dzień wg schematu:
```
DAILY 01.01.2020
- zadanie 1
- zadanie 2
- plany
- potrzebuję pomocy (link)
```
2. Zadania w Jirze przydzielamy sobie sami. Maksymalnie moga to być 2 taski.
3. Po przypisaniu tasku, przenosimy je z Backlogu do Queued / kiedy zaczynamy nad nim pracę - do In Progress / po zakończeniu do Review.
4. Link do Pull Requesta (PR) umieszczamy w komentarzu do taska przeniesionego do Review w Jirze.
5. Tworzenie nowego brancha:
```
git checkout master
git pull
git checkout -b nazwa-nowego-brancha
```
6. Nazwa brancha musi być taka sama jak numer zadania w Jira np. `WDP200102-35`.
7. Commity piszemy po angielsku, komentarze do PR po polsku.
8. Przed commitem komendą `git status` sprawdzamy, czy znajdujemy się we właściwym branchu.
9. Rozwiązywanie konflitów w PR:
```
git checkout nazwa-brancha-z-konflitem
git pull origin master
accept incoming change / accept both changes
commit
git push
```
10. Na początku każdego dnia ściągamy aktualną wersję projektu:
```
git checkout master
git pull
```
## Praca w zespole
- W miarę możliwości i nabytych umiejętności pomagamy sobie nawzajem.
- Jeśli chcemy wprowadzić zmianę w projekcie albo przypisać sobie nie istniejące w Jirze zadanie, informujemy najpierw o tym na kanale zespołowym.
- Ze wszystkim problemami i pytaniami zwracamy się do grupy, a nie do mentora na privie.
- Do cotygodniowych video spotkań zespołu przygotowujemy wersję demo projektu. Na jego podstawie omawiamy kod, który napisaliśmy.
