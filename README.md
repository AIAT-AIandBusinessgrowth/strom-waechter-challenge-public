# ⚡ Strom-Wächter — AI:AT Challenge

Willkommen! Schön, dass du dabei bist. Dieses Repo enthält **alles, was du zum Loslegen brauchst** — Aufgabenstellung, Daten und (für die Dev-Rolle) das Code-Snippet.

> Das hier ist kein Trick-Test. Es ist ein kleines, echtes Stück Venture-Studio-Arbeit: mit KI schnell etwas Wertvolles bauen bzw. eine Idee auf Marktreife prüfen. **Es gibt keine Musterlösung, die du treffen musst** — wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Das Szenario — „Strom-Wächter"

Energieintensive KMU in Österreich — Bäckereien, Kühlhäuser, Druckereien — zahlen Strom zu **Day-ahead-Preisen, die sich stündlich stark unterscheiden** (nachts oft halb so teuer wie zur Abendspitze). Wer verschiebbare Last (Teigkühlung, Gefrierzyklen, Druckläufe) in die günstigen Stunden legt, spart 5–15 % der Stromkosten — verpasst sie aber meist, weil niemand die Preiskurve im Blick hat. **„Strom-Wächter"** nimmt eine Tages-Preiskurve und ein Verbrauchsprofil und zeigt in Sekunden die **günstigsten Lastfenster**, die **geschätzte Ersparnis** und eine **klare Handlungsempfehlung**.

## 👉 Wähle deine Challenge

| Rolle | Worum geht's | Start hier |
|---|---|---|
| **AI Developer** | Bau den Strom-Wächter-PoC + ein kurzes Code-Review | 📂 [`dev/`](./dev/) |
| **AI Business Analyst & Venture Builder** | Ist das ein Geschäft? Business Case + Go-to-Market | 📂 [`business/`](./business/) |

> Du weißt aus dem Gespräch mit uns, welche Rolle deine ist — leg einfach im passenden Ordner los. **Falls unklar, welche Rolle deine ist, frag kurz per Mail nach.** (Neugierig auf die andere Seite? Gern reinschauen — für deine Abgabe zählt nur dein Ordner.)

## 📊 Die Daten (`data/`)

Beide Rollen teilen sich dieselbe Datengrundlage:

- [`data/prices.json`](./data/prices.json) — eine 24-Stunden-Day-ahead-Preiskurve (Felder dokumentiert in [`data/README.md`](./data/README.md))
- [`data/prices.csv`](./data/prices.csv) — dieselben Daten, bequem in Excel/Sheets zu öffnen
- [`data/examples/`](./data/examples/) — 3 Beispiel-Verbrauchsprofile als Ausgangspunkt

> ⚠️ **Synthetisch / vereinfacht, Stand 2026-06 — keine offizielle AI:AT-Position.** Kein Domänenwissen nötig — die Preiskurve und die Profile sind selbsterklärend. *(Business-Rolle: die Markt-/Preis-Zahlen fürs Sizing stecken **nicht** in den Daten — die recherchierst du frei, siehe deinen Brief.)*

## ⏱️ Das Wichtigste in Kürze

- **Aufwand:** ~4–6 fokussierte Stunden. Du hast **7 Kalendertage ab Erhalt** — das Fenster ist für *Flexibilität*, nicht zum Durchgrinden.
- **KI:** Nutze jede KI, jede Library, google frei — das wird **erwartet**, nicht nur erlaubt.
- **Abgabe:** per E-Mail an **aiandbusinessgrowth@ai-at.eu**. Für deinen Code/deine Doku erstellst du ein **eigenes Repo** (z. B. `git init` in deinem Arbeitsordner oder dieses Repo als Vorlage klonen → zu deinem GitHub/GitLab pushen) und schickst uns den Link. Die konkreten Daten (Abgabedatum, ggf. Upload-Link) stehen in deiner Begleit-E-Mail.
- **Bewertung:** transparent — die Gewichtung findest du in deinem Rollen-Brief.
- **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, oberflächliche Umsetzung. Mehr Stunden bedeuten bei uns **nicht** mehr Punkte.

## 🤝 Fair & transparent

AI Factory Austria steht für Chancengleichheit — ob Uni, Bootcamp oder self-taught, es zählt, *wie* du denkst und mit KI arbeitest. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid. Die Challenge ist unbezahlt — dafür bekommst du echten Gegenwert: **nach dem Debrief zeigen wir dir unsere eigene Lösung** (mit echten Entscheidungen, Prompts und Trade-offs) und **strukturiertes, ehrliches Feedback für jede:n** — kein Ghosting, nie.

> Was du **hier nicht findest**, ist unsere eigene Referenzlösung. Die heben wir bewusst für den gemeinsamen Debrief auf — damit du frei und ohne Anchoring an die Aufgabe gehst.

— *AI:AT Hiring Team* 🚀
