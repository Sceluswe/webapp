"use strict";

var m = require("mithril");

module.exports = {
    view: function() {
        // Create a virtual DOM node, "vnode", it turns into a DOM element when we mount or render it.
        return [
            m("h1", "Redovisningar"),
            m("p", "Nedan följer mina redovisningar av kursens moment."),

            m("h2", "Kmom01: En mobil webapp i mithril"),
            m("h4", "Är du sedan tidigare bekant med utveckling av mobila appar?"),
            m("p", "Mobil appar har jag inte utvecklat förut men däremot har jag utvecklat hemsidor som även fungerar i mobil appar. Att lösa problemet med det stora antalet plattformar igenom att skapa en hybrid app är intressant eftersom det tillåter en enskild individ att nå fler kunder. Det jag tror ställer till flest problem (utöver de olika plattformar som finns) är alla olika skärmstorlekar som finns på marknaden och det löser vi igenom att hålla oss till responsiv design."),
            m("h4", "Är du bekant med Mithril?"),
            m("p", "Mithril har jag inte arbetat med tidigare men det har varit intressant att se hur man kan använda ett så litet ramverk för att göra så mycket. Det går att skapa nästan vilka taggar som helst med en funktion. Funktionen heter ”m” och returnerar ett objekt som kan liknas vid ett HTML element objekt. Det objektet innehåller alla sina barn samt vad den själv är för sorts tag och vad den har för attribut. Alla objektets barn innehåller även de sina barn.  ”m.route” bestämmer troligen vilken av de olika vyerna som ska skrivas ut baserat på vad som står i URLen och använder sig möjligtvis därefter av en underliggande funktion som skapar samtliga HTML element med hjälp av det tidigare nämnda objektet. Slutligen skrivs de genererade elementen ut till DOM:en i den dokument tag som man angett som första argument (detta är min teori). CSS klasser går även de att skapa med Mithril men jag väljer att hålla mig till den ökade läsbarheten som kommer av att separera kod."),
            m("h4", "Hur känns det att jobba i Mithril?"),
            m("p", "Det känns strukturerat och bekvämt att dela in sin kod i vyer och routes, det tillåter mig att ha bättre koll på min kod eftersom den är uppdelad. Däremot undrar jag om det inte finns ett smidigare sätt att hantera sina redovisningar på, men det får bli till nästa gång."),
            m("h4", "Var det något som krånglade eller tog extra mycket tid?"),
            m("p", "Till en början försökte jag starta emulatorn med en äldre AMD processor vilket enligt Google själva tar 10 gånger längre tid än om jag skulle haft en Intel processor. När mobilappen var igång tog det mellan 30-40 sekunder mellan varje knapptryck innan någonting hände. Som tur var kunde jag lägga händerna på en intel i7 och aktivera HAXM i BIOS, nu tar det mindre än 1 sekund mellan varje knapptryck och emulatorn startar nästan direkt. I övrigt gick allting annat bra."),
            m("h2", "Reflektion"),
            m("h4", "Lärdomar och erfarenheter"),
            m("p", "Jag lärde mig av Emil Folino hur man kan koppla bort cordova ifrån appen för att sedan helt köra den i webbläsaren igenom att ta bort eventlyssnaren för ”deviceready” och endast kalla funktionen ”onDeviceReady” i ”initialize” funktionen."),
            m("h4", "Problem och lösningar"),
            m("p", "Jag fick problem när jag skulle använda bilder i min mobilapp. Det fungerade inte att använda sig av Mithril ramverkets sätt att implementera en img tag, bilden dök inte upp. Istället fick jag använda vanliga div taggar och ge dem bilden som backgrundsbild igenom CSS istället."),
            m("p", "Att har lärt sig bash hjälpte mig även inom denna kurs. För att slippa behöva hoppa ut och in mellan mappar för att köra kommandot ”npm start” och ”cordova emulate browser/android” så skapade jag ett mindre skript som kör cordova emulate browser som default och med argumentet ”1” kör den ”cordova emulate android.”"),
            m("h4", "Resultat"),
            m("p", "Resultatet blev en hybrid mobilapp som än så länge fungerar i samtliga storlekar och som i framtiden kommer fungera som en grund för vidareutveckling. Momentet kändes lagom och som en bra början till kursen. Nöjd."),

            m("h2", "Kmom02"),
            m("h4", "Hur känns det att jobba med modeller och hämta data från api’er med m.request? "),
            m("p", "Det var enkelt att använda sig av en request funktion för att hämta data eftersom allt mithril krävde var att man skickade in rätt URL och placerade källan i sin content-policy. APIet tillhandahöll sedan sin data i JSON (eller annat) format."),
            m("h4", "Hur känns det att jobba i mithril, fördelar och nackdelar? "),
            m("p", "Min åsikt är att mithril fungerar bra på både stora och små webbplatser.  Fördelarna är att man slipper skriva HTML-kod, koden blir lättläst då allting hålls simpelt och det finns en tutorial som hjälper en att komma in i ramverket. En fördel och en nackdel är att mycket sker i bakgrunden. Som användare behöver man inte ha koll på vad som sker så länge det funkar. Skulle det dyka upp en bugg kan det bli svårare att förstå samt lösa eftersom buggen kan ligga i ramverket. Men samtidigt är det en del av livet som mjukvaruutvecklare (att hitta felen). Det var enkelt att sätta sig in i mithril men det känns som ett ramverk som är lätt att använda och svårt att förstå hur det fungerar i bakgrunden (än så länge iallafall)."),
            m("h4", "Så här långt, känner du att du har koll på koden? Är det något särskilt du funderar på? "),
            m("p", "En sak jag funderar över är varför jag behövde tömma min array av data innan jag fyllde på den med datan ifrån ett annat årtal i Nobel-appen. Som jag förstått det skapas en ny model varje gång vyn kallas men efter första årtalet (om jag inte tömde arrayen) samlade den bara mer och mer data. Det antyder för mig att modellen inte skapas om. Min hypotes är att den sparas i cachen. "),
            m("h4", "Var det något som krånglade eller tog extra mycket tid?"),
            m("p", "En windows uppdatering gjorde att jag tvingades installera om mitt OS och jag valde då Ubuntu. Det som tog längst tid var att få android emulatorn att fungera. Det krävdes att jag arbetade flitigt i kommandotolken och fixade min path samt en ANDROID_PATH variabel i min .profile. Därefter behövde jag flytta det nedladdade paketet till den plats ANDROID_PATH pekade på så att cordova kunde hitta den. ”Cordova emulate android” kommandot fungerande inte för mig då en requirement inte fungerade (trots att allt var på plats). Lösningen kom ifrån stackOverflow: det gick att köra ”cordova build” för att bygga projektet, sedan göra en ändring i filen ”platforms/android/cordova/lib/emulator.js” det verkar som att den nya versionen av Android SDK inte är kompatibel med cordova emulation."),
            m("h2", "Reflektion"),
            m("h4", "Erfarenhet och lärdomar"),
            m("p", "Det jag tar med mig ifrån detta moment är hur man kan använda andras API:er och vad som krävs för att strukturera deras data: for-loopar för att skapa HTML strukturer, debuggning när man tänkt fel och hur man mappar en model efter ett JSON objekt."),
            m("h4", "Problem och lösningar"),
            m("p", "Ett problem dök upp när jag skulle visa bilder på android emulatorn. Att använda sig av img-taggar fungerade inte. Istället fick det bli en div och CSS kod, där bakgrundsbilden blev bakgrunden till min div. Lösningen hittade jag på dbwebb."),
            m("p", "Ett annat problem var hur man skulle föra över vilket årtal som valts till modellen för att sedan hämta informationen om det årtalet ifrån API:et. Efter att ha sökt igenom mithrils tutorial förstod jag att man kan skicka in ett attrs objekt som man sedan kommer åt igenom vnode.attrs i vyn. "),
            m("h4", "Resultat"),
            m("p", "Resultatet är jag nöjd med. Som design till min Nobel-app tänkte jag mig något med en äldre men samtidigt modern stil. Dessutom utnyttjade den Nobel-hemsidans klassiska färger (guld och rojal blå, svart uteblev) för att liva upp appen och för att skapa en sorts harmoni med hemsidan. Appen blev även en hyllning till Nobel själv."),

            m("h2", "Kmom03"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),
            m("h2", "Reflektion"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),

            m("h2", "Kmom04"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),
            m("h2", "Reflektion"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),

            m("h2", "Kmom05"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),
            m("h2", "Reflektion"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),

            m("h2", "Kmom06"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),
            m("h2", "Reflektion"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),

            m("h2", "Kmom07"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga"),
            m("h2", "Reflektion"),
            m("h4", "Fråga1"),
            m("p", "Svar på fråga")
        ];
    }
};
