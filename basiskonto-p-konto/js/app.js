/* Lernpfad Basiskonto & P-Konto – Seitenlogik
   Reines JavaScript, keine Server-Technik.
   Gespeichert wird nur der Lernfortschritt (welche Stationen erledigt sind)
   im Browser des eigenen Geräts – keine personenbezogenen Daten. */

(function () {
  "use strict";

  const app = document.getElementById("app");
  const SPEICHER = "bbz-basiskonto-pkonto-fortschritt-v1";
  const ANZAHL_TEST = 12;

  /* ---------- Fortschritt (nur lokal) ---------- */
  function ladeFortschritt() {
    try {
      return JSON.parse(localStorage.getItem(SPEICHER)) || {};
    } catch (e) {
      return {};
    }
  }
  let fortschritt = ladeFortschritt();
  function speichere() {
    try { localStorage.setItem(SPEICHER, JSON.stringify(fortschritt)); } catch (e) { /* egal */ }
    zeigeFortschritt();
  }
  function zeigeFortschritt() {
    const erledigt = STATIONEN.filter(s => fortschritt[s.id]).length;
    const prozent = Math.round((erledigt / STATIONEN.length) * 100);
    document.getElementById("fortschritt-fuellung").style.width = prozent + "%";
    document.getElementById("fortschritt-text").textContent =
      erledigt + " von " + STATIONEN.length + " Stationen erledigt";
    document.getElementById("fortschritt-balken").setAttribute("aria-valuenow", prozent);
  }

  /* ---------- Hilfsfunktionen ---------- */
  function mische(liste) {
    const a = liste.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function el(tag, attrs, inhalt) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (inhalt != null) {
      (Array.isArray(inhalt) ? inhalt : [inhalt]).forEach(c => {
        if (c == null) return;
        e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return e;
  }
  function nachOben() { window.scrollTo(0, 0); }
  function setzeTitel(t) { document.title = t ? t + " – Basiskonto & P-Konto" : "Basiskonto und P-Konto"; }
  function euro(x) { return x.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"; }
  function leseZahl(text) {
    const t = String(text).trim().replace(/[€\s]/g, "").replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", ".");
    return t === "" ? NaN : Number(t);
  }
  function marken(s) {
    const box = el("div");
    box.appendChild(el("span", { class: "marke" + (s.pflicht ? " pflicht" : "") }, s.pflicht ? "● Pflicht" : "○ Wahl"));
    box.appendChild(el("span", { class: "marke" + (s.niveau === "Experte" ? " experte" : "") }, s.niveau));
    box.appendChild(el("span", { class: "marke" }, "⏱ " + s.zeit));
    return box;
  }

  /* ---------- Fragen darstellen ----------
     rendereFrage(frage, nummer, gesamt, fertig)
     fertig(richtig: boolean) wird nach der Auswertung aufgerufen. */
  const TYPNAMEN = { mc: "Multiple Choice", tf: "Richtig oder falsch?", zuordnen: "Zuordnen", fall: "Fallbeispiel", zahl: "Rechenaufgabe" };

  function rendereFrage(f, nr, gesamt, fertig, stationsTitel) {
    const karte = el("div", { class: "karte" });
    let kopf = "Frage " + nr + " von " + gesamt + " · " + TYPNAMEN[f.typ];
    if (stationsTitel) kopf += " · " + stationsTitel;
    karte.appendChild(el("div", { class: "frage-kopf" }, kopf));
    if (f.typ === "fall") karte.appendChild(el("div", { class: "fall" }, f.fall));
    karte.appendChild(el("p", { class: "frage-text" }, f.frage));

    const feedbackBox = el("div", { "aria-live": "polite" });

    function zeigeFeedback(richtig, zusatz) {
      feedbackBox.innerHTML = "";
      const box = el("div", { class: "feedback " + (richtig ? "gut" : "schlecht") });
      box.appendChild(el("strong", null, richtig ? "Richtig!" : "Leider nicht richtig."));
      if (zusatz) box.appendChild(el("div", null, zusatz));
      box.appendChild(el("div", null, f.erklaerung));
      feedbackBox.appendChild(box);
      fertig(richtig);
    }

    if (f.typ === "mc" || f.typ === "fall") {
      const reihenfolge = mische(f.optionen.map((t, i) => i));
      const knoepfe = [];
      reihenfolge.forEach(i => {
        const b = el("button", { class: "option", type: "button" }, f.optionen[i]);
        b.dataset.index = i;
        b.addEventListener("click", () => {
          knoepfe.forEach(k => {
            k.disabled = true;
            if (+k.dataset.index === f.richtig) k.classList.add("richtig");
          });
          if (i !== f.richtig) b.classList.add("falsch");
          zeigeFeedback(i === f.richtig);
        });
        knoepfe.push(b);
        karte.appendChild(b);
      });
    } else if (f.typ === "tf") {
      const reihe = el("div", { class: "tf-reihe" });
      const knoepfe = [];
      [true, false].forEach(wert => {
        const b = el("button", { class: "option", type: "button" }, wert ? "Richtig" : "Falsch");
        b.addEventListener("click", () => {
          knoepfe.forEach(k => { k.disabled = true; });
          const ok = wert === f.richtig;
          b.classList.add(ok ? "richtig" : "falsch");
          if (!ok) knoepfe[f.richtig ? 0 : 1].classList.add("richtig");
          zeigeFeedback(ok);
        });
        knoepfe.push(b);
        reihe.appendChild(b);
      });
      karte.appendChild(reihe);
    } else if (f.typ === "zuordnen") {
      const box = el("div", { class: "zuordnung" });
      const selects = [];
      mische(f.paare).forEach((p, n) => {
        const id = "z" + Math.random().toString(36).slice(2, 8) + n;
        const zeile = el("div", { class: "zuordnung-zeile" });
        zeile.appendChild(el("label", { for: id }, p.text));
        const s = el("select", { id: id });
        s.appendChild(el("option", { value: "" }, "– bitte wählen –"));
        f.kategorien.forEach((k, i) => s.appendChild(el("option", { value: String(i) }, k)));
        s.paar = p;
        s.addEventListener("change", pruefeVollstaendig);
        selects.push(s);
        zeile.appendChild(s);
        box.appendChild(zeile);
      });
      karte.appendChild(box);
      const pruefen = el("button", { class: "btn", type: "button", disabled: "" }, "Zuordnung prüfen");
      function pruefeVollstaendig() {
        pruefen.disabled = selects.some(s => s.value === "");
      }
      pruefen.addEventListener("click", () => {
        let anzahlRichtig = 0;
        selects.forEach(s => {
          s.disabled = true;
          const ok = +s.value === s.paar.k;
          s.classList.add(ok ? "richtig" : "falsch");
          if (ok) anzahlRichtig++;
          else s.parentNode.appendChild(el("div", { class: "korrektur" }, "Richtig wäre: " + f.kategorien[s.paar.k]));
        });
        pruefen.remove();
        zeigeFeedback(anzahlRichtig === selects.length,
          anzahlRichtig + " von " + selects.length + " Zuordnungen richtig.");
      });
      karte.appendChild(pruefen);
    } else if (f.typ === "zahl") {
      const id = "n" + Math.random().toString(36).slice(2, 8);
      const box = el("div", { class: "zahl-eingabe" });
      box.appendChild(el("label", { for: id }, "Deine Lösung in Euro:"));
      const inp = el("input", { id: id, type: "text", inputmode: "decimal", autocomplete: "off", placeholder: "z. B. 1.234,56" });
      box.appendChild(inp);
      const pruefen = el("button", { class: "btn", type: "button", disabled: "" }, "Lösung prüfen");
      inp.addEventListener("input", () => { pruefen.disabled = isNaN(leseZahl(inp.value)); });
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && !pruefen.disabled) pruefen.click(); });
      pruefen.addEventListener("click", () => {
        const wert = leseZahl(inp.value);
        const ok = Math.abs(wert - f.richtig) <= (f.toleranz || 0.01);
        inp.disabled = true;
        inp.classList.add(ok ? "richtig" : "falsch");
        pruefen.remove();
        zeigeFeedback(ok, "Deine Eingabe: " + euro(wert) + " · Lösung: " + euro(f.richtig));
      });
      box.appendChild(pruefen);
      karte.appendChild(box);
    }

    karte.appendChild(feedbackBox);
    return karte;
  }

  /* ---------- Startseite ---------- */
  function startseite() {
    setzeTitel("");
    app.innerHTML = "";
    app.appendChild(el("h1", null, "Basiskonto und P-Konto"));
    app.appendChild(el("div", { class: "situation", html:
      "<strong>Deine Situation:</strong> Du arbeitest am Serviceplatz deiner Genossenschaftsbank. " +
      "Herr Lorenzen (41) kommt zu dir: Seine bisherige Bank hat ihm das Girokonto gekündigt, er hat SCHUFA-Einträge " +
      "– und er befürchtet, dass bald sein Konto gepfändet wird. Er fragt: <em>„Bekomme ich überhaupt noch ein Konto? " +
      "Und was bleibt mir, wenn gepfändet wird?“</em> Am Ende dieses Lernpfads kannst du ihn vollständig beraten."
    }));
    app.appendChild(el("p", { html:
      "<strong>So geht's:</strong> Bearbeite die <strong>● Pflichtstationen</strong> der Reihe nach, die <strong>○ Wahlstation</strong> " +
      "zur Vertiefung. Jede Station hat eine Erklärung, einen <strong>Merkkasten</strong> und ein Quiz. Danach machst du den " +
      "<strong>Checkpoint</strong> (Abschlusstest) und löst im <strong>Fallspiel</strong> den Fall von Herrn Lorenzen."
    }));

    app.appendChild(el("h2", null, "Lernziele"));
    app.appendChild(el("ul", { html:
      "<li>Ich kann erklären, wer einen Anspruch auf ein Basiskonto hat und welche Leistungen es umfasst.</li>" +
      "<li>Ich kann prüfen, ob die Bank einen Basiskonto-Antrag ablehnen darf, und die Frist nennen.</li>" +
      "<li>Ich kann den Ablauf einer Kontopfändung und die Pflichten der Bank als Drittschuldnerin beschreiben.</li>" +
      "<li>Ich kann ein Girokonto in ein P-Konto umwandeln und den monatlichen Freibetrag berechnen.</li>" +
      "<li>Ich kann ein Kundengespräch zur Pfändung sachlich, diskret und hilfreich führen.</li>"
    }));

    app.appendChild(el("h2", null, "Lernpfad"));
    const liste = el("ol", { class: "stationsliste" });
    STATIONEN.forEach((s, i) => {
      const a = el("a", { class: "station-link" + (fortschritt[s.id] ? " erledigt" : ""), href: "#station/" + (i + 1) });
      a.appendChild(el("div", { class: "station-nr" }, el("span", null, String(i + 1))));
      const txt = el("div");
      txt.appendChild(el("div", { class: "station-name" }, s.titel));
      let info = s.kurz;
      if (fortschritt[s.id]) info += " · Quiz: " + fortschritt[s.id].richtig + "/" + fortschritt[s.id].gesamt;
      txt.appendChild(el("div", { class: "station-info" }, info));
      txt.appendChild(marken(s));
      a.appendChild(txt);
      a.appendChild(el("span", { class: "station-pfeil", "aria-hidden": "true" }, "›"));
      liste.appendChild(el("li", null, a));
    });
    app.appendChild(liste);

    app.appendChild(el("h2", null, "Anwenden und testen"));
    const extra = el("ul", { class: "stationsliste" });
    [
      ["#test", "★", "Checkpoint: Abschlusstest", ANZAHL_TEST + " zufällige Fragen aus allen Stationen – unter 8 richtig? Wiederhole die angezeigten Stationen."],
      ["#fallspiel", "▶", "Abschlussaufgabe: Fallspiel Daniel Lorenzen", "Vom Basiskonto bis zum P-Konto – triff die richtigen Entscheidungen"],
      ["#rechner", "€", "P-Konto-Rechner", "Freibetrag für beliebige Fälle berechnen"],
      ["#laufzettel", "☑", "Laufzettel zum Ausdrucken", "Übersicht aller Stationen zum Abhaken"]
    ].forEach(([href, sym, name, info]) => {
      const a = el("a", { class: "station-link extra-link", href: href });
      a.appendChild(el("div", { class: "station-nr" }, el("span", null, sym)));
      const txt = el("div");
      txt.appendChild(el("div", { class: "station-name" }, name));
      txt.appendChild(el("div", { class: "station-info" }, info));
      a.appendChild(txt);
      a.appendChild(el("span", { class: "station-pfeil", "aria-hidden": "true" }, "›"));
      extra.appendChild(el("li", null, a));
    });
    app.appendChild(extra);

    if (Object.keys(fortschritt).length) {
      app.appendChild(el("button", { class: "btn sekundaer", type: "button", onclick: () => {
        if (confirm("Fortschritt auf diesem Gerät wirklich zurücksetzen?")) {
          fortschritt = {};
          speichere();
          startseite();
        }
      } }, "Fortschritt zurücksetzen"));
    }
    app.appendChild(el("p", { class: "fussnote", html:
      "Berufsschule BBZ Schleswig · Bankwirtschaft<br>" +
      "Rechtsstand: November 2026 · Freibeträge gültig " + WERTE.gueltig + "<br>" +
      "Diese Seite speichert keine personenbezogenen Daten. Der Lernfortschritt bleibt nur im Browser auf deinem Gerät.<br>" +
      "<a href=\"../\">Weiterer Lernpfad: Kontoeröffnung Schritt für Schritt</a>"
    }));
  }

  /* ---------- Station ---------- */
  function station(nr) {
    const s = STATIONEN[nr - 1];
    if (!s) return startseite();
    setzeTitel(s.titel);
    app.innerHTML = "";
    app.appendChild(el("a", { href: "#" }, "‹ Zur Übersicht"));
    app.appendChild(el("div", { class: "frage-kopf", style: "margin-top:12px" }, "Station " + nr + " von " + STATIONEN.length));
    app.appendChild(el("h1", null, s.titel));
    app.appendChild(marken(s));
    app.appendChild(el("div", { class: "karte", html: s.text }));
    if (s.rechner) {
      app.appendChild(el("h2", null, "P-Konto-Rechner"));
      app.appendChild(rechnerKarte());
    }

    const merk = el("div", { class: "merkkasten" });
    merk.appendChild(el("h3", null, "Merkkasten"));
    const ul = el("ul");
    s.merk.forEach(m => ul.appendChild(el("li", null, m)));
    merk.appendChild(ul);
    app.appendChild(merk);

    app.appendChild(el("h2", null, "Quiz zur Station"));
    const quizBereich = el("div");
    app.appendChild(quizBereich);
    const startBtn = el("button", { class: "btn", type: "button" }, "Quiz starten");
    startBtn.addEventListener("click", () => { startBtn.remove(); stationsQuiz(s, nr, quizBereich); });
    quizBereich.appendChild(startBtn);

    const nav = el("div", { class: "btn-reihe" });
    if (nr > 1) nav.appendChild(el("a", { class: "btn sekundaer", href: "#station/" + (nr - 1) }, "‹ Station " + (nr - 1)));
    nav.appendChild(el("a", { class: "btn grau", href: "#" }, "Übersicht"));
    app.appendChild(nav);
    nachOben();
  }

  function stationsQuiz(s, nr, bereich) {
    const fragen = s.fragen;
    let i = 0, richtig = 0;
    function naechste() {
      bereich.innerHTML = "";
      if (i >= fragen.length) return auswertung();
      const f = fragen[i];
      const karte = rendereFrage(f, i + 1, fragen.length, ok => {
        if (ok) richtig++;
        const weiter = el("button", { class: "btn", type: "button" }, i + 1 < fragen.length ? "Nächste Frage" : "Auswertung");
        weiter.addEventListener("click", () => { i++; naechste(); bereich.scrollIntoView({ behavior: "smooth" }); });
        karte.appendChild(weiter);
        weiter.focus({ preventScroll: true });
      });
      bereich.appendChild(karte);
    }
    function auswertung() {
      const alt = fortschritt[s.id];
      if (!alt || richtig >= alt.richtig) fortschritt[s.id] = { richtig: richtig, gesamt: fragen.length };
      speichere();
      const k = el("div", { class: "karte ergebnis" });
      k.appendChild(el("div", { class: "punkte" }, richtig + " / " + fragen.length));
      const quote = richtig / fragen.length;
      k.appendChild(el("p", null, quote === 1 ? "Super, alles richtig!" :
        quote >= 0.6 ? "Gut gemacht! Schau dir den Merkkasten noch einmal an." :
        "Lies die Erklärung und den Merkkasten noch einmal und versuche es erneut."));
      bereich.appendChild(k);
      const reihe = el("div", { class: "btn-reihe" });
      reihe.appendChild(el("button", { class: "btn sekundaer", type: "button", onclick: () => { i = 0; richtig = 0; naechste(); } }, "Quiz wiederholen"));
      if (nr < STATIONEN.length) reihe.appendChild(el("a", { class: "btn", href: "#station/" + (nr + 1) }, "Weiter zu Station " + (nr + 1) + " ›"));
      else reihe.appendChild(el("a", { class: "btn", href: "#test" }, "Weiter zum Checkpoint ›"));
      bereich.appendChild(reihe);
    }
    naechste();
  }

  /* ---------- Abschlusstest ---------- */
  function abschlusstest() {
    setzeTitel("Abschlusstest");
    app.innerHTML = "";
    app.appendChild(el("a", { href: "#" }, "‹ Zur Übersicht"));
    app.appendChild(el("h1", null, "Abschlusstest"));
    app.appendChild(el("p", null, ANZAHL_TEST + " Fragen, zufällig aus allen Stationen gemischt. Du bekommst nach jeder Antwort eine Rückmeldung und am Ende deine Punktzahl."));

    const pool = [];
    STATIONEN.forEach((s, si) => s.fragen.forEach(f => pool.push({ f: f, station: si + 1, titel: s.titel })));
    const auswahl = mische(pool).slice(0, ANZAHL_TEST);
    let i = 0, punkte = 0;
    const fehler = {};
    const bereich = el("div");
    app.appendChild(bereich);

    function naechste() {
      bereich.innerHTML = "";
      if (i >= auswahl.length) return ende();
      const eintrag = auswahl[i];
      const karte = rendereFrage(eintrag.f, i + 1, auswahl.length, ok => {
        if (ok) punkte++;
        else fehler[eintrag.station] = eintrag.titel;
        const weiter = el("button", { class: "btn", type: "button" }, i + 1 < auswahl.length ? "Nächste Frage" : "Ergebnis anzeigen");
        weiter.addEventListener("click", () => { i++; naechste(); nachOben(); });
        karte.appendChild(weiter);
      }, "Station " + eintrag.station);
      bereich.appendChild(karte);
    }
    function ende() {
      const prozent = Math.round((punkte / auswahl.length) * 100);
      const k = el("div", { class: "karte ergebnis" });
      k.appendChild(el("div", { class: "frage-kopf" }, "Dein Ergebnis"));
      k.appendChild(el("div", { class: "punkte" }, punkte + " / " + auswahl.length));
      k.appendChild(el("p", null, prozent + " % richtig"));
      k.appendChild(el("p", null,
        prozent >= 90 ? "Hervorragend! Du bist fit für Basiskonto und P-Konto." :
        prozent >= 70 ? "Gut! Ein paar Punkte solltest du noch einmal wiederholen." :
        prozent >= 50 ? "Ausreichend – wiederhole die unten genannten Stationen." :
        "Arbeite die Stationen noch einmal durch und versuche es dann erneut."));
      bereich.appendChild(k);
      const nrn = Object.keys(fehler);
      if (nrn.length) {
        const w = el("div", { class: "karte" });
        w.appendChild(el("h3", { style: "margin-top:0" }, "Diese Stationen solltest du wiederholen:"));
        const ul = el("ul");
        nrn.forEach(n => ul.appendChild(el("li", null, el("a", { href: "#station/" + n }, "Station " + n + ": " + fehler[n]))));
        w.appendChild(ul);
        bereich.appendChild(w);
      }
      if (punkte >= 8) bereich.appendChild(el("a", { class: "btn", href: "#fallspiel" }, "Weiter zur Abschlussaufgabe ›"));
      bereich.appendChild(el("button", { class: "btn sekundaer", type: "button", onclick: abschlusstest }, "Neuen Test starten"));
      bereich.appendChild(el("a", { class: "btn grau", href: "#" }, "Zur Übersicht"));
    }
    naechste();
    nachOben();
  }

  /* ---------- Fallspiel ---------- */
  function fallspiel() {
    setzeTitel("Fallspiel");
    app.innerHTML = "";
    app.appendChild(el("a", { href: "#" }, "‹ Zur Übersicht"));
    app.appendChild(el("h1", null, "Fallspiel: " + FALLSPIEL.kunde));
    const bereich = el("div");
    app.appendChild(bereich);
    let schritt = -1, ersterVersuch = 0;

    function intro() {
      bereich.innerHTML = "";
      bereich.appendChild(el("div", { class: "situation", html: FALLSPIEL.einleitung }));
      bereich.appendChild(el("p", null, "Ist eine Entscheidung falsch, bekommst du eine Erklärung und darfst es noch einmal versuchen. Gezählt wird, wie oft du beim ersten Versuch richtig liegst."));
      bereich.appendChild(el("button", { class: "btn", type: "button", onclick: () => { schritt = 0; ersterVersuch = 0; zeige(); } }, "Los geht's"));
    }

    function zeige() {
      bereich.innerHTML = "";
      if (schritt >= FALLSPIEL.schritte.length) return ende();
      const st = FALLSPIEL.schritte[schritt];
      const karte = el("div", { class: "karte" });
      karte.appendChild(el("div", { class: "frage-kopf" }, "Schritt " + (schritt + 1) + " von " + FALLSPIEL.schritte.length + " · " + st.titel));

      const kundin = el("div", { class: "kundin" });
      kundin.appendChild(el("div", { class: "avatar", "aria-hidden": "true" }, FALLSPIEL.initialen));
      kundin.appendChild(el("div", { class: "sprechblase" }, "„" + st.rede + "“"));
      karte.appendChild(kundin);

      const akte = el("div", { class: "akte" });
      akte.appendChild(el("strong", null, "Kundenakte"));
      const ul = el("ul");
      st.akte.forEach(a => ul.appendChild(el("li", null, a)));
      akte.appendChild(ul);
      karte.appendChild(akte);

      karte.appendChild(el("p", { class: "frage-text" }, st.frage));
      const fb = el("div", { "aria-live": "polite" });
      let versuche = 0;
      const knoepfe = [];
      mische(st.optionen).forEach(o => {
        const b = el("button", { class: "option", type: "button" }, o.text);
        b.addEventListener("click", () => {
          versuche++;
          fb.innerHTML = "";
          const box = el("div", { class: "feedback " + (o.richtig ? "gut" : "schlecht") });
          box.appendChild(el("strong", null, o.richtig ? "Richtige Entscheidung!" : "Das passt nicht."));
          box.appendChild(el("div", null, o.feedback));
          fb.appendChild(box);
          if (o.richtig) {
            if (versuche === 1) ersterVersuch++;
            b.classList.add("richtig");
            knoepfe.forEach(k => { k.disabled = true; });
            const weiter = el("button", { class: "btn", type: "button" }, schritt + 1 < FALLSPIEL.schritte.length ? "Weiter" : "Zum Abschluss");
            weiter.addEventListener("click", () => { schritt++; zeige(); nachOben(); });
            fb.appendChild(weiter);
          } else {
            b.classList.add("falsch");
            b.disabled = true;
          }
        });
        knoepfe.push(b);
        karte.appendChild(b);
      });
      karte.appendChild(fb);
      bereich.appendChild(karte);
    }

    function ende() {
      const n = FALLSPIEL.schritte.length;
      const k = el("div", { class: "karte ergebnis" });
      k.appendChild(el("div", { class: "frage-kopf" }, "Fall gelöst!"));
      k.appendChild(el("div", { class: "punkte" }, ersterVersuch + " / " + n));
      k.appendChild(el("p", null, "Entscheidungen beim ersten Versuch richtig."));
      k.appendChild(el("p", null, FALLSPIEL.abschluss));
      bereich.appendChild(k);
      const r = el("div", { class: "karte" });
      r.appendChild(el("h3", { style: "margin-top:0" }, "Kurz nachdenken"));
      r.appendChild(el("ul", { html:
        "<li>Was kann ich jetzt sicher?</li>" +
        "<li>Bei welchem Schritt war ich unsicher?</li>" +
        "<li>Welche Station schaue ich mir noch einmal an?</li>"
      }));
      bereich.appendChild(r);
      const auftrag = el("div", { class: "karte" });
      auftrag.appendChild(el("h3", { style: "margin-top:0" }, "Schriftlicher Auftrag (für deinen Ordner)"));
      auftrag.appendChild(el("p", { html:
        "<strong>Erstelle</strong> eine kurze Gesprächsnotiz zum Fall Lorenzen: Anliegen, Rechtsgrundlagen (ZKG, ZPO), " +
        "getroffene Maßnahmen mit Fristen, berechneter Freibetrag mit Rechenweg und vereinbarte nächste Schritte. " +
        "<strong>Spielt</strong> anschließend zu zweit das Gespräch aus Schritt 4 bis 6 als Rollenspiel."
      }));
      bereich.appendChild(auftrag);
      bereich.appendChild(el("button", { class: "btn sekundaer", type: "button", onclick: intro }, "Fallspiel neu starten"));
      bereich.appendChild(el("a", { class: "btn grau", href: "#" }, "Zur Übersicht"));
    }

    intro();
    nachOben();
  }

  /* ---------- P-Konto-Rechner ---------- */
  function rechnerKarte() {
    const k = el("div", { class: "karte" });
    k.appendChild(el("p", { class: "hinweis" }, "Werte gültig " + WERTE.gueltig + ". Erhöhungsbeträge nur mit Bescheinigung (§ 903 ZPO)."));
    const form = el("div", { class: "rechner" });
    function feld(label, id, wert, max) {
      form.appendChild(el("label", { for: id }, label));
      const i = el("input", { id: id, type: "number", min: "0", max: String(max), step: id === "r-eingang" ? "0.01" : "1", value: String(wert), inputmode: id === "r-eingang" ? "decimal" : "numeric" });
      form.appendChild(i);
      return i;
    }
    const iU = feld("Anzahl unterhaltsberechtigter Personen (laut Bescheinigung, max. 5)", "r-unterhalt", 0, 5);
    const iK = feld("Anzahl Kinder, für die der Kunde Kindergeld erhält", "r-kinder", 0, 10);
    const iE = feld("Gutschriften im Kalendermonat in Euro (optional)", "r-eingang", 0, 100000);
    k.appendChild(form);
    const aus = el("div", { class: "rechner-ergebnis", "aria-live": "polite" });
    k.appendChild(aus);
    function rechne() {
      const u = Math.max(0, Math.min(5, Math.floor(+iU.value || 0)));
      const kinder = Math.max(0, Math.floor(+iK.value || 0));
      const eingang = Math.max(0, +iE.value || 0);
      const zeilen = [["Grundfreibetrag", WERTE.grundfreibetrag]];
      if (u >= 1) zeilen.push(["1. unterhaltsberechtigte Person", WERTE.ersteUnterhalt]);
      if (u >= 2) zeilen.push([(u - 1) + " × weitere Person à " + euro(WERTE.weitereUnterhalt), (u - 1) * WERTE.weitereUnterhalt]);
      if (kinder) zeilen.push([kinder + " × Kindergeld à " + euro(WERTE.kindergeld), kinder * WERTE.kindergeld]);
      const summe = Math.round(zeilen.reduce((a, z) => a + z[1], 0) * 100) / 100;
      let html = "<table>";
      zeilen.forEach(z => { html += "<tr><td>" + z[0] + "</td><td>" + euro(z[1]) + "</td></tr>"; });
      html += "<tr class=\"summe\"><td>Monatlicher Freibetrag</td><td>" + euro(summe) + "</td></tr>";
      if (eingang > 0) {
        const pf = Math.max(0, Math.round((eingang - summe) * 100) / 100);
        html += "<tr><td>Gutschriften im Monat</td><td>" + euro(eingang) + "</td></tr>";
        html += "<tr class=\"summe\"><td>Davon pfändbar (ohne Übertrag aus Vormonaten)</td><td>" + euro(pf) + "</td></tr>";
      }
      aus.innerHTML = html + "</table>";
    }
    [iU, iK, iE].forEach(i => i.addEventListener("input", rechne));
    rechne();
    return k;
  }
  function rechnerSeite() {
    setzeTitel("P-Konto-Rechner");
    app.innerHTML = "";
    app.appendChild(el("a", { href: "#" }, "‹ Zur Übersicht"));
    app.appendChild(el("h1", null, "P-Konto-Rechner"));
    app.appendChild(rechnerKarte());
    nachOben();
  }

  /* ---------- Laufzettel ---------- */
  function laufzettel() {
    setzeTitel("Laufzettel");
    app.innerHTML = "";
    app.appendChild(el("a", { href: "#", class: "nicht-drucken" }, "‹ Zur Übersicht"));
    app.appendChild(el("h1", null, "Laufzettel: Basiskonto und P-Konto"));
    app.appendChild(el("p", null, "Name: ______________________   Klasse: ________   Datum: ____________"));
    const box = el("div", { class: "tabelle-scroll" });
    const t = el("table", { class: "tabelle laufzettel" });
    t.appendChild(el("tr", { html: "<th>Nr.</th><th>Station</th><th>Pflicht/Wahl</th><th>Niveau</th><th>Zeit</th><th>erledigt</th><th>Selbstkontrolle</th>" }));
    const k = "<span class=\"kaestchen\" aria-hidden=\"true\"></span>";
    STATIONEN.forEach((s, i) => {
      t.appendChild(el("tr", { html: "<td>" + (i + 1) + "</td><td>" + s.titel + "</td><td>" + (s.pflicht ? "● Pflicht" : "○ Wahl") +
        "</td><td>" + s.niveau + "</td><td>" + s.zeit + "</td><td>" + (fortschritt[s.id] ? "✔" : k) + "</td><td>" + k + "</td></tr>" }));
    });
    [["★", "Checkpoint: Abschlusstest (mind. 8 von " + ANZAHL_TEST + ")", "● Pflicht", "Standard", "15 Min."],
     ["▶", "Abschlussaufgabe: Fallspiel + Gesprächsnotiz", "● Pflicht", "Standard", "30 Min."]].forEach(z => {
      t.appendChild(el("tr", { html: "<td>" + z[0] + "</td><td>" + z[1] + "</td><td>" + z[2] + "</td><td>" + z[3] + "</td><td>" + z[4] + "</td><td>" + k + "</td><td>" + k + "</td></tr>" }));
    });
    box.appendChild(t);
    app.appendChild(box);
    const r = el("div", { class: "karte" });
    r.appendChild(el("h3", { style: "margin-top:0" }, "Reflexion"));
    r.appendChild(el("ol", { html: "<li>Was kann ich jetzt?<br>____________________</li>" +
      "<li>Wo bin ich noch unsicher?<br>____________________</li>" +
      "<li>Was übe ich noch?<br>____________________</li>" }));
    app.appendChild(r);
    app.appendChild(el("button", { class: "btn", type: "button", onclick: () => window.print() }, "Laufzettel drucken"));
    nachOben();
  }

  /* ---------- Navigation über die Adresse (#...) ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "");
    const m = h.match(/^station\/(\d+)$/);
    if (m) station(+m[1]);
    else if (h === "test") abschlusstest();
    else if (h === "fallspiel") fallspiel();
    else if (h === "rechner") rechnerSeite();
    else if (h === "laufzettel") laufzettel();
    else { startseite(); nachOben(); }
  }
  window.addEventListener("hashchange", route);
  zeigeFortschritt();
  route();
})();
