# Seed-Dataset — Felder & Hinweise

> ⚠️ **Das Dataset ist synthetisch und vereinfacht (Stand 2026-06) und keine offizielle AI:AT-Position.** Die Preisverläufe sind an reale österreichische Day-ahead-Marktpreise angelehnt (Nacht-Tal, Morgen- und Abend-Peak); die Werte (Preise, Zeitstempel) sind vereinfacht/gerundet. Kein Domänenwissen nötig — die Felder unten verstehst du ohne Vorwissen. Behandle die Zahlen als Spielmaterial, nicht als Marktdaten.

## `prices.json` / `prices.csv` (24-Stunden-Preiskurve)

`prices.json` und `prices.csv` enthalten dieselben Daten: eine Day-ahead-Preiskurve über einen Tag, stündlich. Die CSV öffnest du bequem in Excel/Sheets; die JSON ist praktisch zum Einlesen im Code.

| Feld | Typ | Bedeutung |
|---|---|---|
| `ts` | string (ISO-8601 + TZ) | Stunden-Zeitstempel, z. B. `2026-06-08T03:00:00+02:00` |
| `preis_eur_mwh` | number | Day-ahead-Preis in EUR/MWh (**Zahl**, kein String) |
| `_hinweis` | string | Synthetik-Disclaimer (Kurzform) |

**Kurve im Überblick:** Tal um ~04:00 (≈ 29,5 EUR/MWh), Abend-Peak um ~18:00 (≈ 88,5 EUR/MWh), Tagesmittel ≈ 57 EUR/MWh — genug Spreizung, damit das Fenster-Scoring sichtbare Ersparnis liefert.

`prices.json` trägt in jedem Eintrag ein `_hinweis`-Feld mit dem Synthetik-Vermerk. *(Die `prices.csv` führt den Hinweis ebenfalls je Zeile — der Disclaimer steht zusätzlich hier im README, damit Excel/Sheets die CSV sauber einlesen.)*

## `examples/profil_*.json` (Beispiel-Verbrauchsprofile)

Ausgangspunkt für deine Arbeit — ein Profil eines energieintensiven KMU:

| Feld | Typ | Bedeutung |
|---|---|---|
| `branche` | string | Branche des KMU (Bäckerei / Kühlhaus / Druckerei) |
| `verschiebbare_last_kwh` | number | In ein günstiges Fenster verschiebbare Last (kWh) |
| `flexibilitaet_stunden` | number | Länge des zusammenhängenden Fensters, das gesucht wird (h) |
| `region` / `bundesland` | string | Standort |
| `_hinweis` | string | Synthetik-Disclaimer (Kurzform) |

Die drei Profile sind bewusst kontrastierend (kurzes 2h- bis breites 6h-Fenster, 80–320 kWh), damit sie unterschiedliche Fenster aus derselben Kurve auswählen.

## Echte Live-Preise (optional, Dev-Stretch)

Brauchst du echte AT-Preise statt des synthetischen Seeds, liefert die **Energy-Charts-API** Day-ahead-Preise in EUR/MWh — **ohne API-Key**:

```
https://api.energy-charts.info/price?bzn=AT&start=…&end=…
```

Das ist ein optionaler Stretch — der mitgelieferte Seed reicht für die Aufgabe vollständig aus.
