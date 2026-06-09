# AI Developer Challenge „Strom-Wächter"

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Schön, dass du dabei bist. Das hier ist kein Trick-Test. Es ist ein kleines, echtes Stück von dem, was wir im Venture Studio und n8n CoE täglich tun: mit KI schnell etwas Lauffähiges bauen, das Mehrwert schafft.

Es gibt keine Musterlösung, die du treffen musst. Wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Die Mission

Energieintensive KMU in Österreich (Bäckereien, Kühlhäuser, Druckereien) zahlen Strom zu Day-ahead-Preisen, die sich stündlich stark unterscheiden: nachts oft halb so teuer wie zur Abendspitze. Wer verschiebbare Last (Teigkühlung, Gefrierzyklen, Druckläufe) in die günstigen Stunden legt, spart 5–15 % der Stromkosten, verpasst sie aber meist, weil niemand die Preiskurve im Blick hat.

Bau einen „Strom-Wächter": ein kleines CLI-Tool, das eine Tages-Preiskurve und ein Verbrauchsprofil nimmt und in Sekunden einen Alert-Report ausgibt: die günstigsten Lastfenster, die geschätzte Ersparnis und eine klare Handlungsempfehlung („Lauf um 03:00–06:00, nicht um 18:00").

**Wir liefern dir:** ein Seed-Dataset mit einer 24-Stunden-Preis-Zeitreihe (JSON + CSV, Felder dokumentiert) und 3 Beispiel-Verbrauchsprofile. Kein Domänenwissen nötig: alles, was du brauchst, steckt im Dataset und in dieser Aufgabe.

> 📂 **Im Repo:** [`../data/`](../data/), also `prices.json` + `prices.csv` + Beispiel-Profile (Feld-Doku: [`../data/README.md`](../data/README.md)).
> Muster „fetch → score → act": eine Preisliste laden, Fenster bewerten, eine Empfehlung ausgeben.

### Teil A: Bau den PoC
- **Input:** ein Verbrauchsprofil (`branche`, `verschiebbare_last_kwh`, `flexibilitaet_stunden`, `region`/`bundesland`) plus eine Preis-Zeitreihe (`ts`, `preis_eur_mwh`). Dein Tool soll mindestens eines der mitgelieferten Beispiel-Profile verarbeiten. *Wie* du Profile reinreichst (hardcoded, Datei, CLI-Argument), ist dir überlassen.
- **Output:** ein Alert-Report mit den günstigsten Lastfenstern für die verschiebbare Last (Länge = `flexibilitaet_stunden`), je mit Zeitraum und Durchschnittspreis, plus einer Ersparnis-Schätzung (was kostet die Last im günstigen Fenster gegenüber einem sinnvollen Vergleichswert) und einer kurzen Handlungsempfehlung.
- **Form:** lauffähiges Git-Repo mit echtem Code plus ein README, das uns das Ding in unter 5 min zum Laufen bringt. Stack ist dir überlassen (TypeScript-CLI ist das naheliegende, aber nichts ist vorgeschrieben).

> **Die interessante Design-Entscheidung:** Was genau ist „das günstigste Fenster"? Der niedrigste Durchschnittspreis über `flexibilitaet_stunden` zusammenhängende Stunden? Oder zählst du auch nicht-zusammenhängende Stunden? Wie definierst du den Vergleichswert für die Ersparnis (Tagesmittel, Tageshoch, Abendspitze)? Diese Entscheidungen sind bewusst dir überlassen. Wir achten auf die Begründung, nicht auf eine vorgegebene Formel. Genau hier sehen wir dein Urteil.

> Ein echter LLM-Call ist erlaubt, aber nicht Pflicht: eine deterministisch oder templatebasiert erzeugte Handlungsempfehlung ist völlig okay. Kein API-Key nötig, falls du keinen hast. (Optionaler Stretch: Live-Anbindung an die Energy-Charts-API für AT-Preise, kein Key nötig, aber kein Muss.)

### Teil B: Code-Review (~15 min)
Wir geben dir ein kurzes, KI-generiertes Code-Snippet (TypeScript, keine TS-Erfahrung nötig, der Bug ist sprachunabhängig verständlich). **Tipp:** vergleiche, was der Doc-Kommentar *verspricht*, mit dem, was der Code *tut*, und führe den Code im Kopf an einem kleinen Beispiel durch. Es gibt einen zentralen funktionalen Bug: finde *den*, fixe ihn, und begründe in 3–5 Sätzen, warum es einer ist. Sag uns auch, was dir sonst auffällt (fehlende Edge-Cases, fragwürdige Annahmen, Typ-Modellierung, fehlende Tests). Diese weiterführende Kritik zählt für uns genauso wie der Fix selbst. Wir wollen sehen, ob du KI-Output beurteilen kannst, nicht nur erzeugen.

> Das Snippet liegt als Datei unter [`code-review/snippet.ts`](./code-review/snippet.ts) und ist unten in **Anhang A** abgedruckt.

## Spielregeln

- **Aufwand: ~4–6 fokussierte Stunden.** Du hast eine Woche; die ist für *Flexibilität*, nicht zum Durchgrinden. Bitte nicht überinvestieren: wir bewerten Denken und Urteil, nicht Politur. *(Die 4–6 h schließen Walkthrough + Decision-Log ein. Loom: 1 Take, 3–5 min; Decision-Log: 5–10 Zeilen Stichworte.)*
- **Nutze jede KI, jede Library, google frei.** Wird erwartet, nicht nur erlaubt. Cursor, Claude, Copilot, Coding-Agents: leg los.
- **Der Kern (A + B) ist die Latte.** Dazu gehören auch ein paar sinnvolle Tests (kein Coverage-Theater; zählen mit 10 %). Echte Stretch-Goals (UI, Eval-Set, historische Preise, Live-API-Anbindung, Alert-E-Mail, Deployment) sind zum Glänzen, komplett optional.

> **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Wir meinen das ernst, bitte nicht überinvestieren. Mehr Stunden bedeuten bei uns nicht mehr Punkte; wir bewerten das Kern-Ergebnis, nicht den Zeitaufwand.

AI Factory Austria steht für Chancengleichheit. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid, wir helfen. Ob Uni, Bootcamp oder self-taught: es zählt, wie du denkst und mit KI arbeitest.

## Was du abgibst

1. **Repo-Link** (GitHub/GitLab) mit Code + README.
2. **Code-Review-Antwort** (Teil B): als Datei im Repo oder kurzes Doc.
3. **Walkthrough (1 Take, 3–5 min, max. 5):** ein Loom/Screen-Recording. Zeig dein Ergebnis und erklär *wie* du gebaut hast, vor allem die KI-Schritte. *(Kein Video möglich oder gewünscht? Ein knappes schriftliches Walkthrough-Skript zählt als gleichwertig, sag einfach Bescheid.)*
4. **Kurzes Decision-Log + Schlüssel-Prompts:** 5–10 Zeilen Entscheidungen/Trade-offs plus die KI-Prompts, die den Unterschied gemacht haben. Zeig uns, *wie du mit KI zusammenarbeitest*: das ist genau die Fähigkeit, für die wir die Rolle besetzen.
5. **Selbst-Report:** wie viele Stunden hast du investiert? (Ehrlich, kein Maluspunkt.)

## So bewerten wir (transparent)

| Dimension | Gewicht |
|---|---|
| Funktionalität (läuft es, erfüllt es den Kern) | 20% |
| Decomposition & Urteil (Ambiguität sinnvoll gelöst, gute Trade-offs) | 20% |
| AI-Collaboration / Prozess (wie du KI gehebelt & geprüft hast) | 20% |
| Code-Qualität & Taste (lesbar, wartbar, KI-„Slop" erkannt) | 15% |
| Kommunikation / Doku (README, Decision-Log, Walkthrough) | 15% |
| Tests (sinnvolle Tests, kein Coverage-Theater) | 10% |

> Teil B (Code-Review) fließt nicht in die obige Gewichtung ein. Es ist ein separates Signal mit besonders hohem Informationsgehalt über dein Urteil zu KI-Code und kann bei knappen Entscheidungen den Ausschlag geben.

## Abgabe & Zeitplan

- **Deadline:** die Begleit-E-Mail nennt das verbindliche Abgabedatum (Richtwert: 7 Kalendertage ab Erhalt).
- **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- **Rückmeldung:** Wir melden uns innerhalb von ~10 Werktagen, mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

> Die konkreten Daten (Abgabedatum, ggf. Upload-Link) findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer **Live-Walkthrough (30–45 min)**: du zeigst dein Ergebnis, wir setzen *live eine neue Anforderung* drauf und schauen, wie du deinen eigenen Code erweiterst. Die neue Anforderung ist bewusst klein. Es geht darum, wie du laut denkst, nicht um ein perfektes Ergebnis in 10 Minuten. Deine gewohnten KI-Tools darfst du dabei nutzen, genau wie beim Bauen. Danach zeigen wir dir unsere eigene Lösung und reden ehrlich darüber. Jede und jeder bekommt Feedback, egal wie's ausgeht.

> **Fair und transparent.** Diese Challenge ist unbezahlt. Dafür zeigen wir dir nach dem Debrief unsere eigene Lösung, mit echten Entscheidungen, Prompts und Trade-offs. Das ist unser „Learn"-Versprechen in Aktion. Und: strukturiertes, ehrliches Feedback für jede und jeden, egal wie der Prozess ausgeht. Kein Ghosting. Nie.

## Spielregeln zu den Daten

> Das Seed-Dataset ist synthetisch / vereinfacht (Stand 2026-06), keine offizielle AI:AT-Position. Die Preisverläufe sind an reale österreichische Day-ahead-Marktpreise angelehnt, aber vereinfacht und gerundet. Jeder JSON-Eintrag trägt ein `_hinweis`-Feld. Behandle die Zahlen als Spielmaterial, nicht als Marktdaten.

## Datenschutz

> **Datenschutz.** Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens **sechs Monate** nach Abschluss des Auswahlverfahrens (oder früher auf deinen Wunsch), gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. Was du erstellst, bleibt deins: wir verwenden es nur zur Bewertung, nie produktiv. Dein Repo kannst du auch privat halten und uns Zugriff geben; deinen Walkthrough sehen nur wir intern. Von dir gewählte Hosting-Dienste (z.B. GitHub, Loom) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.

## Anhang A: Code-Snippet (Teil B)

Das ist das Snippet für Teil B: finde den Bug, fixe ihn, kritisiere kurz. (Auch als Datei: [`code-review/snippet.ts`](./code-review/snippet.ts).)

```ts
/**
 * findeGuenstigsteFenster: Gibt die günstigsten zusammenhängenden Zeitfenster
 * einer bestimmten Länge (in Stunden) aus einer Preisliste zurück.
 *
 * Gibt alle Fenster zurück, deren Durchschnittspreis unter dem angegebenen
 * Schwellenwert liegt, sortiert aufsteigend nach Durchschnittspreis.
 * Ein Fenster ist ein zusammenhängender Block von `fensterStunden` Stunden.
 */

interface PreisEintrag {
  ts: string;
  preis_eur_mwh: number;
}

interface Fenster {
  start: string;
  ende: string;
  durchschnitt_eur_mwh: number;
  eintraege: PreisEintrag[];
}

function findeGuenstigsteFenster(
  preise: PreisEintrag[],
  fensterStunden: number,
  schwellenwert_eur_mwh: number
): Fenster[] {
  const ergebnisse: Fenster[] = [];

  for (let i = 0; i <= preise.length - fensterStunden; i++) {
    const fenster = preise.slice(i, i + fensterStunden);
    const summe = fenster.reduce((acc, e) => acc + e.preis_eur_mwh, 0);
    const durchschnitt = summe / fensterStunden;

    if (durchschnitt < schwellenwert_eur_mwh) {
      ergebnisse.push({
        start: preise[i].ts,
        ende: preise[i + fensterStunden].ts,   // liefert das Ende-Zeitfenster
        durchschnitt_eur_mwh: Math.round(durchschnitt * 100) / 100,
        eintraege: fenster,
      });
    }
  }

  return ergebnisse.sort((a, b) => a.durchschnitt_eur_mwh - b.durchschnitt_eur_mwh);
}

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

const preise: PreisEintrag[] = [
  { ts: "2026-06-08T00:00:00+02:00", preis_eur_mwh: 42.10 },
  { ts: "2026-06-08T01:00:00+02:00", preis_eur_mwh: 38.50 },
  { ts: "2026-06-08T02:00:00+02:00", preis_eur_mwh: 34.20 },
  { ts: "2026-06-08T03:00:00+02:00", preis_eur_mwh: 31.80 },
  { ts: "2026-06-08T04:00:00+02:00", preis_eur_mwh: 29.50 },
  { ts: "2026-06-08T05:00:00+02:00", preis_eur_mwh: 33.70 },
  { ts: "2026-06-08T06:00:00+02:00", preis_eur_mwh: 52.40 },
  { ts: "2026-06-08T07:00:00+02:00", preis_eur_mwh: 68.90 },
];

const fenster = findeGuenstigsteFenster(preise, 3, 45.0);

console.log("Günstige 3-Stunden-Fenster (Schwelle: 45 EUR/MWh):");
if (fenster.length === 0) {
  console.log("  (keine Treffer)");
} else {
  fenster.forEach((f) => {
    console.log(`  • ${f.start} – ${f.ende}: Ø ${f.durchschnitt_eur_mwh} EUR/MWh`);
  });
}
```
