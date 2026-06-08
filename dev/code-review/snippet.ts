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
