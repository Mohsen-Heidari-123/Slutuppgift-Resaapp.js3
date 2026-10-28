
# Reseapp – Länder och information

## 1. Om projektet

Det här projektet är en webbapplikation där användaren kan utforska olika länder och ta del av information om dem. Syftet med projektet var att utveckla en fungerande och användarvänlig app och samtidigt mer om React, TypeScript, komponenter och hur en webbapplikation byggs upp.

Jag har själv arbetat med att utveckla projektet, organisera koden och förstå hur de olika delarna fungerar. Under arbetets gång har jag även använt AI som ett stöd när jag behövde förklaringar, felsökning eller hjälp att förstå vissa delar av koden.

## 2. Funktioner

Appen innehåller följande funktioner:

- Visa en lista över länder.
- Söka efter länder med hjälp av ett sökfält.
- Filtrera länder efter region.
- Visa en separat sida med information om ett land.
- Visa laddningsindikator medan information hämtas.
- Hantera fel om information inte kan hämtas.
- Visa ett meddelande när inga länder matchar sökningen.
- Navigera mellan sidor i applikationen.
- Dela upp landlistan i sidor med paginering.

Appen innehåller även komponenter för att visa väderinformation och information från Wikipedia där dessa funktioner är implementerade.

## 3. Tekniker

Följande tekniker och verktyg har använts i projektet:

- React – för att bygga användargränssnittet med komponenter.
- TypeScript – för att skriva mer strukturerad kod och använda typer.
- Tailwind CSS och CSS – för att utforma gränssnittet.
- Vite – för utveckling och byggning av applikationen.
- Git och GitHub – för versionshantering och lagring av källkod.

## 4. Projektstruktur

Projektet är organiserat i flera mappar och filer för att göra koden lättare att förstå och underhålla.

- `src/components/` – innehåller återanvändbara komponenter, exempelvis sökfält, regionfilter och paginering.
- `src/hooks/` – innehåller egna hooks för att samla och återanvända logik.
- `src/lib/` – innehåller hjälpfunktioner och gemensam logik.
- `src/Pages/` – innehåller sidorna för landlistan, landdetaljer och sidan som visas när en adress inte hittas.
- `src/schemas/` – innehåller scheman för projektets data där dessa används.
- `App.tsx` – hanterar appens övergripande struktur och sidnavigering.
- `main.tsx` – startar React-applikationen.
- `App.css` och `index.css` – innehåller stilar för gränssnittet.

## 5. Hur appen fungerar

På startsidan hämtas information om länder och visas i en lista. Användaren kan söka efter ett land eller välja en region för att begränsa resultatet.

När användaren ändrar sökning eller filter uppdateras listan så att den visar de länder som matchar kriterierna. Paginering används för att dela upp resultaten i mindre delar.

Om informationen håller på att hämtas visas en laddningsindikator. Om något går fel visas ett felmeddelande, och användaren kan försöka hämta informationen igen.

Genom att dela upp applikationen i mindre komponenter blir det enklare att förstå, testa och ändra enskilda funktioner.

## 6. Installation och körning

För att köra projektet lokalt behöver Node.js vara installerat.

1. Klona projektet från GitHub.
2. Öppna projektmappen i terminalen.
3. Installera beroendena:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```

5. Öppna den lokala adress som visas i terminalen.

## 7. Publicerad app

Appen ska publiceras så att den kan användas via en publik URL.

- **Publik URL: http://localhost:5173/
- **GitHub-repository: https://github.com/Mohsen-Heidari-123/Slutuppgift-Resaapp.js3/tree/feature-branch


## 8. Versionshantering och Git

Under utvecklingen används Git för att följa projektets förändringar och GitHub för att lagra koden.

En separat feature-branch används för att utveckla en funktion. När funktionen är färdig granskas ändringarna och mergas till `main` via en pull request på GitHub.

## 9. AI-redovisning

Jag har främst arbetat själv med projektet och använt AI som ett hjälpmedel under utvecklingen. AI har fungerat som ett stöd för att förstå kod, få förklaringar av React och TypeScript, felsöka problem och få förslag på hur vissa delar kan förbättras.

Jag har använt hjälpen för att lära mig mer och komma vidare när jag fastnat. Jag har också behövt gå igenom koden och förstå hur komponenterna samverkar, så att jag kan förklara mina lösningar och val.

AI har alltså varit ett stöd i arbetsprocessen, men målet har varit att själv förstå projektet och kunna arbeta vidare med koden.

## 10. Reflektion

Under projektet har jag fått mer erfarenhet av att bygga en webbapplikation med React och TypeScript. Jag har lärt mig mer om hur man delar upp en app i komponenter, hanterar data, använder sökning och filtrering samt visar laddnings- och felmeddelanden.

En utmaning har varit att förstå hur de olika komponenterna och funktionerna samverkar. Genom att läsa koden, testa lösningar och använda AI som stöd har jag kunnat utveckla min förståelse och komma vidare.

Om jag skulle fortsätta utveckla projektet skulle jag vilja förbättra designen ytterligare, testa fler situationer där data saknas och kontrollera att alla funktioner fungerar bra på både mobil och dator.

## 11. Slutsats

Projektet har gett mig praktisk erfarenhet av webbutveckling och hjälpt mig att förstå hur man bygger en applikation med flera sidor och återanvändbara komponenter.

Mitt mål har varit att skapa en fungerande och tydlig reseapp och samtidigt utveckla mina kunskaper inom React, TypeScript, versionshantering och strukturerad kod.

