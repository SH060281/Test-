/* Inhalte des Lernpfads „Basiskonto und P-Konto“
   BBZ Schleswig – Bankwirtschaft
   Rechtsstand: November 2026 (Pfändungsfreigrenzen gültig 01.07.2026 – 30.06.2027)

   Fragetypen:
   - mc:        Multiple Choice, eine richtige Antwort (richtig = Index)
   - tf:        Richtig/Falsch (richtig = true/false)
   - zuordnen:  Aussagen Kategorien zuordnen (paare[].k = Index der Kategorie)
   - fall:      Fallbeispiel mit Multiple Choice
   - zahl:      Rechenaufgabe; Eingabe in Euro (richtig = Zahl, toleranz = erlaubte Abweichung)

   Stationen: pflicht = true (●) oder false (○ Wahlstation); niveau = "Basis" | "Standard" | "Experte"
*/

/* Werte für den P-Konto-Rechner – jedes Jahr zum 1. Juli prüfen!
   (Pfändungsfreigrenzenbekanntmachung, § 850c Abs. 4 ZPO; P-Konto: § 899 ZPO, aufgerundet auf volle 10 Euro) */
const WERTE = {
  gueltig: "1. Juli 2026 bis 30. Juni 2027",
  grundfreibetrag: 1590.00,      // P-Konto-Sockelbetrag pro Kalendermonat
  ersteUnterhalt: 597.42,        // Erhöhung für die erste unterhaltsberechtigte Person
  weitereUnterhalt: 332.83,      // Erhöhung für die 2. bis 5. unterhaltsberechtigte Person
  kindergeld: 259.00             // Kindergeld je Kind und Monat (2026)
};

const STATIONEN = [
  /* ------------------------------------------------------------ 1 */
  {
    id: "recht-auf-konto",
    titel: "Das Recht auf ein Konto: Basiskonto",
    kurz: "Wer hat Anspruch – und warum?",
    pflicht: true, niveau: "Basis", zeit: "15 Min.",
    text: `
      <p>Ohne Girokonto geht im Alltag fast nichts: Lohn, Miete, Strom, Handyvertrag – alles läuft
      über Überweisungen und Lastschriften. Deshalb hat seit 2016 <strong>jeder Verbraucher</strong> mit
      rechtmäßigem Aufenthalt in der EU einen <strong>Anspruch auf ein Basiskonto</strong>. Geregelt ist
      das im <strong>Zahlungskontengesetz (ZKG)</strong>, das eine EU-Richtlinie (Zahlungskontenrichtlinie)
      umsetzt.</p>
      <h3>Wer hat Anspruch?</h3>
      <ul>
        <li>Verbraucher mit rechtmäßigem Aufenthalt in der EU – auch <strong>Wohnungslose</strong>,</li>
        <li><strong>Asylsuchende</strong> und Menschen mit <strong>Duldung</strong> (also auch Personen, die nicht abgeschoben werden können).</li>
        <li><em>Nicht</em>: Unternehmen und Selbstständige für ihr Geschäftskonto.</li>
      </ul>
      <h3>Wer muss ein Basiskonto anbieten?</h3>
      <p>Alle Institute, die Zahlungskonten für Verbraucher anbieten – also auch jede Volksbank
      Raiffeisenbank. Ein Basiskonto ist ein ganz normales <strong>Zahlungskonto auf Guthabenbasis</strong>.</p>
      <h3>Was muss ein Basiskonto können?</h3>
      <div class="tabelle-scroll"><table class="tabelle">
        <tr><th>Pflicht-Leistung</th><th>Beispiel</th></tr>
        <tr><td>Ein- und Auszahlungen</td><td>Bargeld am Schalter oder Geldautomaten</td></tr>
        <tr><td>Lastschriften</td><td>Miete, Strom, Handyvertrag</td></tr>
        <tr><td>Überweisungen – auch Daueraufträge</td><td>monatliche Rate an den Vermieter</td></tr>
        <tr><td>Zahlungen mit einer Zahlungskarte</td><td>Debitkarte (z. B. girocard) im Geschäft und online</td></tr>
      </table></div>
      <p>Diese Leistungen müssen genauso angeboten werden wie bei den anderen Girokonten der Bank
      – also z. B. auch im Online-Banking, wenn die Bank das sonst anbietet.</p>
      <p><strong>Kein Anspruch</strong> besteht auf eine <strong>Überziehungsmöglichkeit</strong>
      (Dispositionskredit) oder eine Kreditkarte.</p>
      <p class="hinweis">Abgrenzung: Das <strong>Basiskonto</strong> regelt den <em>Zugang</em> zu einem Konto.
      Das <strong>P-Konto</strong> (ab Station 4) regelt den <em>Schutz</em> von Guthaben bei einer Pfändung.
      Ein Basiskonto kann auch als P-Konto geführt werden.</p>
    `,
    merk: [
      "Rechtsgrundlage: Zahlungskontengesetz (ZKG), seit 2016.",
      "Anspruch hat jeder Verbraucher mit rechtmäßigem Aufenthalt in der EU – auch Wohnungslose, Asylsuchende und Geduldete.",
      "Basiskonto = Zahlungskonto auf Guthabenbasis mit Ein-/Auszahlung, Lastschrift, Überweisung (inkl. Dauerauftrag) und Zahlungskarte.",
      "Kein Anspruch auf Dispositionskredit oder Kreditkarte.",
      "Basiskonto = Zugang zum Konto; P-Konto = Schutz des Guthabens vor Pfändung."
    ],
    fragen: [
      {
        typ: "tf",
        frage: "Ein wohnungsloser Mann ohne feste Meldeadresse hat grundsätzlich einen Anspruch auf ein Basiskonto.",
        richtig: true,
        erklaerung: "Richtig. Gerade für Wohnungslose wurde das Basiskonto geschaffen. Für die Identifizierung nach GwG kann die Bank z. B. eine Postanschrift (etwa einer Beratungsstelle) erfassen."
      },
      {
        typ: "mc",
        frage: "Welche Leistung gehört NICHT zum Pflichtumfang eines Basiskontos?",
        optionen: [
          "Einrichten eines Dauerauftrags",
          "Bezahlen mit einer Debitkarte",
          "Dispositionskredit von 500 Euro",
          "Einlösen einer Lastschrift"
        ],
        richtig: 2,
        erklaerung: "Das Basiskonto wird auf Guthabenbasis geführt. Einen Anspruch auf eine Überziehungsmöglichkeit gibt es nicht."
      },
      {
        typ: "zuordnen",
        frage: "Hat die Person einen Anspruch auf ein Basiskonto?",
        kategorien: ["Anspruch", "kein Anspruch"],
        paare: [
          { text: "Asylsuchende Frau mit Ankunftsnachweis", k: 0 },
          { text: "Geduldeter Mann aus Afghanistan", k: 0 },
          { text: "GmbH, die ein Geschäftskonto braucht", k: 1 },
          { text: "Rentnerin mit negativen SCHUFA-Einträgen", k: 0 }
        ],
        erklaerung: "Anspruch haben Verbraucher mit rechtmäßigem Aufenthalt in der EU – unabhängig von SCHUFA-Einträgen. Unternehmen haben keinen Anspruch nach dem ZKG."
      },
      {
        typ: "mc",
        frage: "Warum hat der Gesetzgeber das Basiskonto eingeführt?",
        optionen: [
          "Damit Banken mehr Kontoführungsentgelte einnehmen.",
          "Damit alle Verbraucher am bargeldlosen Zahlungsverkehr teilnehmen können (finanzielle Teilhabe).",
          "Damit Gläubiger leichter pfänden können.",
          "Damit nur noch eine Bank Konten für Geflüchtete führt."
        ],
        richtig: 1,
        erklaerung: "Ziel ist die finanzielle Teilhabe: Ohne Konto ist es kaum möglich, eine Wohnung zu mieten, Lohn zu erhalten oder Verträge abzuschließen."
      }
    ]
  },

  /* ------------------------------------------------------------ 2 */
  {
    id: "antrag-ablehnung",
    titel: "Antrag, Frist und Ablehnungsgründe",
    kurz: "10 Geschäftstage – und wann darf die Bank Nein sagen?",
    pflicht: true, niveau: "Standard", zeit: "20 Min.",
    text: `
      <h3>Ablauf</h3>
      <ol>
        <li>Die Kundin stellt einen <strong>Antrag</strong> – dafür gibt es ein einheitliches
        <strong>Antragsformular</strong> für das Basiskonto. Der Antrag kann in der Filiale oder auf
        anderem Weg gestellt werden, den die Bank für Kontoeröffnungen anbietet.</li>
        <li>Die Bank <strong>identifiziert</strong> die Person nach dem Geldwäschegesetz (GwG) und
        prüft die Legitimation nach § 154 AO – wie bei jeder Kontoeröffnung.</li>
        <li>Die Bank muss den Kontovertrag <strong>unverzüglich, spätestens innerhalb von
        10 Geschäftstagen</strong> nach Eingang des vollständigen Antrags abschließen oder ablehnen.</li>
      </ol>
      <h3>Ablehnung nur in Ausnahmefällen</h3>
      <p>Die Bank darf ein Basiskonto nur aus den <strong>im Gesetz genannten Gründen</strong> ablehnen, z. B.:</p>
      <ul>
        <li>Die Person hat bereits ein <strong>Zahlungskonto bei einer Bank in Deutschland</strong>, das sie
        nutzen kann (mit Ausnahmen, z. B. wenn ihr dieses Konto gekündigt wurde).</li>
        <li>Die Person hat innerhalb der letzten drei Jahre eine <strong>vorsätzliche Straftat gegen die
        Bank</strong>, ihre Mitarbeitenden oder Kunden begangen (z. B. Betrug zulasten der Bank).</li>
        <li>Die Bank würde mit der Kontoeröffnung gegen das <strong>Geldwäschegesetz</strong> verstoßen
        (z. B. Identifizierung nicht möglich).</li>
        <li>Die Bank hat einen früheren Basiskontovertrag mit der Person <strong>innerhalb des letzten
        Jahres</strong> wegen <strong>Zahlungsverzugs</strong> berechtigt gekündigt.</li>
      </ul>
      <p><strong>Keine</strong> Ablehnungsgründe sind: negative <strong>SCHUFA-Einträge</strong>,
      geringes oder kein Einkommen, Bezug von Bürgergeld, fehlender fester Wohnsitz,
      eine laufende Pfändung.</p>
      <h3>Wenn die Bank ablehnt</h3>
      <p>Die Ablehnung erfolgt <strong>schriftlich</strong> (Textform) und <strong>kostenlos</strong>, mit
      Begründung (außer das GwG verbietet es) und dem Hinweis, dass sich die Person an die
      <strong>BaFin</strong> (Verwaltungsverfahren) oder eine <strong>Schlichtungsstelle</strong> wenden kann.
      Die BaFin kann die Bank verpflichten, das Konto zu eröffnen.</p>
    `,
    merk: [
      "Antrag mit einheitlichem Antragsformular; Identifizierung nach GwG und § 154 AO wie üblich.",
      "Entscheidung unverzüglich, spätestens 10 Geschäftstage nach vollständigem Antrag.",
      "Ablehnung nur aus gesetzlichen Gründen: bereits nutzbares Konto in Deutschland, Straftat gegen die Bank (letzte 3 Jahre), GwG-Verstoß, Kündigung wegen Zahlungsverzugs im letzten Jahr.",
      "SCHUFA-Einträge, fehlendes Einkommen, Pfändungen sind KEIN Ablehnungsgrund.",
      "Ablehnung: schriftlich, kostenlos, mit Hinweis auf BaFin und Schlichtungsstelle."
    ],
    fragen: [
      {
        typ: "fall",
        fall: "Herr Brandt (52) beantragt am Montag ein Basiskonto. Die SCHUFA-Auskunft zeigt drei negative Einträge (Inkasso). Ein anderes Konto hat er nicht.",
        frage: "Wie reagiert die Bank richtig?",
        optionen: [
          "Sie lehnt ab, weil das Ausfallrisiko zu hoch ist.",
          "Sie eröffnet das Basiskonto innerhalb von 10 Geschäftstagen – SCHUFA-Einträge sind kein Ablehnungsgrund.",
          "Sie eröffnet das Konto nur, wenn er eine Bürgschaft bringt.",
          "Sie verweist ihn an die Sparkasse."
        ],
        richtig: 1,
        erklaerung: "Negative SCHUFA-Einträge sind kein gesetzlicher Ablehnungsgrund. Da das Konto auf Guthabenbasis läuft, trägt die Bank kaum Kreditrisiko."
      },
      {
        typ: "tf",
        frage: "Lehnt die Bank einen Basiskonto-Antrag ab, darf sie dafür ein Bearbeitungsentgelt verlangen.",
        richtig: false,
        erklaerung: "Falsch. Die Ablehnung muss unentgeltlich und in Textform erfolgen – mit Hinweis auf die Beschwerdemöglichkeiten."
      },
      {
        typ: "zuordnen",
        frage: "Ist das ein zulässiger Ablehnungsgrund?",
        kategorien: ["zulässig", "nicht zulässig"],
        paare: [
          { text: "Antragsteller hat schon ein nutzbares Girokonto bei einer anderen Bank in Deutschland", k: 0 },
          { text: "Antragstellerin bezieht Bürgergeld", k: 1 },
          { text: "Identifizierung nach GwG ist nicht möglich", k: 0 },
          { text: "Antragsteller hat vor einem Jahr die Bank durch Scheckbetrug geschädigt", k: 0 },
          { text: "Auf dem alten Konto des Antragstellers lag eine Pfändung", k: 1 }
        ],
        erklaerung: "Die Ablehnungsgründe sind im ZKG abschließend geregelt. Einkommen, Sozialleistungen oder Pfändungen gehören nicht dazu."
      },
      {
        typ: "mc",
        frage: "Bis wann muss die Bank spätestens über einen vollständigen Basiskonto-Antrag entscheiden?",
        optionen: [
          "Innerhalb von 3 Geschäftstagen",
          "Innerhalb von 10 Geschäftstagen",
          "Innerhalb von 4 Wochen",
          "Es gibt keine Frist."
        ],
        richtig: 1,
        erklaerung: "Das ZKG verlangt eine Entscheidung unverzüglich, spätestens innerhalb von 10 Geschäftstagen."
      },
      {
        typ: "mc",
        frage: "Eine abgelehnte Antragstellerin meint, die Ablehnung sei unberechtigt. Wohin kann sie sich wenden?",
        optionen: [
          "Nur an das Finanzamt",
          "An die BaFin oder eine Schlichtungsstelle (z. B. Ombudsmann)",
          "An die SCHUFA",
          "An die Deutsche Bundesbank, die das Konto dann selbst führt"
        ],
        richtig: 1,
        erklaerung: "Die BaFin kann in einem Verwaltungsverfahren die Bank zur Eröffnung verpflichten. Außerdem gibt es die außergerichtliche Schlichtung."
      }
    ]
  },

  /* ------------------------------------------------------------ 3 */
  {
    id: "entgelt-kuendigung",
    titel: "Entgelt und Kündigung beim Basiskonto",
    kurz: "Was darf ein Basiskonto kosten?",
    pflicht: false, niveau: "Experte", zeit: "15 Min.",
    text: `
      <h3>Entgelt: angemessen</h3>
      <p>Die Bank darf für das Basiskonto ein Entgelt verlangen. Es muss aber
      <strong>angemessen</strong> sein. Maßstab sind die <strong>marktüblichen Entgelte</strong> und das
      <strong>Nutzerverhalten</strong>.</p>
      <p>Der <strong>Bundesgerichtshof</strong> hat am <strong>30.06.2020 (XI ZR 119/19)</strong> entschieden,
      dass ein Basiskonto-Entgelt von 8,99 Euro im Monat plus 1,50 Euro je beleghafter Überweisung bei
      einer Großbank <strong>unwirksam</strong> war. Begründung: Die Bank darf die Zusatzkosten
      (z. B. für Prüfung und Beratung von Basiskonto-Kunden) nicht allein auf die Basiskonto-Kunden
      umlegen. Diese sind meist finanziell schwach und auf das Konto angewiesen.</p>
      <p class="hinweis">Eine feste Obergrenze gibt es nicht. Faustregel aus der Praxis: Das Basiskonto
      sollte nicht mehr kosten als ein vergleichbares Girokonto der Bank mit ähnlichem Leistungsumfang.</p>
      <h3>Kündigung durch die Bank: nur eingeschränkt</h3>
      <p>Die Bank kann ein Basiskonto nur aus gesetzlich genannten Gründen kündigen, z. B.:</p>
      <ul>
        <li>Über das Konto wurde <strong>mehr als 24 Monate kein Zahlungsvorgang</strong> vom Kunden
        veranlasst (Kündigung mit mindestens <strong>2 Monaten Frist</strong>, wenn das vertraglich vereinbart ist).</li>
        <li>Der Kunde hat inzwischen ein <strong>weiteres Zahlungskonto</strong> in Deutschland eröffnet,
        das er nutzen kann.</li>
        <li>Der Kunde ist mit Entgelten von <strong>mehr als 100 Euro</strong> über mehr als
        <strong>drei Monate im Verzug</strong>.</li>
        <li>Der Kunde nutzt das Konto vorsätzlich für <strong>illegale Zwecke</strong> oder hat eine
        vorsätzliche <strong>Straftat gegen die Bank</strong> begangen.</li>
      </ul>
      <p>Die Kündigung muss schriftlich erfolgen, begründet sein und auf BaFin und Schlichtung hinweisen.</p>
    `,
    merk: [
      "Entgelt für das Basiskonto ist erlaubt, muss aber angemessen sein (marktüblich, Nutzerverhalten).",
      "BGH 30.06.2020 (XI ZR 119/19): 8,99 € Grundentgelt + 1,50 € je Papierüberweisung unwirksam.",
      "Mehrkosten dürfen nicht allein auf Basiskonto-Kunden abgewälzt werden.",
      "Kündigung durch die Bank nur aus gesetzlichen Gründen (z. B. 24 Monate keine Umsätze, zweites Konto, Entgelt-Rückstand > 100 € über 3 Monate).",
      "Kündigung schriftlich, begründet, mit Hinweis auf BaFin und Schlichtung."
    ],
    fragen: [
      {
        typ: "tf",
        frage: "Eine Bank darf für das Basiskonto überhaupt kein Entgelt verlangen.",
        richtig: false,
        erklaerung: "Falsch. Ein Entgelt ist zulässig – es muss aber angemessen sein."
      },
      {
        typ: "mc",
        frage: "Warum hielt der BGH 2020 das Basiskonto-Entgelt der Großbank für unwirksam?",
        optionen: [
          "Weil Basiskonten grundsätzlich kostenlos sein müssen.",
          "Weil die Bank ihren Zusatzaufwand allein auf die Basiskonto-Kunden umgelegt hat.",
          "Weil die Bank kein Online-Banking angeboten hat.",
          "Weil die Bank das Entgelt nicht im Preisaushang genannt hat."
        ],
        richtig: 1,
        erklaerung: "Der Zusatzaufwand (z. B. Prüfung der Anspruchsberechtigung) darf nicht nur auf die besonders schutzbedürftigen Basiskonto-Kunden abgewälzt werden."
      },
      {
        typ: "fall",
        fall: "Auf dem Basiskonto von Frau Kroll gab es seit 26 Monaten keine einzige Buchung außer den Kontoführungsentgelten.",
        frage: "Was darf die Bank tun?",
        optionen: [
          "Nichts – ein Basiskonto ist unkündbar.",
          "Das Konto ordentlich mit mindestens zwei Monaten Frist schriftlich und begründet kündigen.",
          "Das Konto sofort ohne Mitteilung schließen.",
          "Das Guthaben an das Finanzamt abführen."
        ],
        richtig: 1,
        erklaerung: "Mehr als 24 Monate ohne Zahlungsvorgang ist ein gesetzlicher Kündigungsgrund. Die Bank kündigt ordentlich, schriftlich und begründet."
      }
    ]
  },

  /* ------------------------------------------------------------ 4 */
  {
    id: "kontopfaendung",
    titel: "Was passiert bei einer Kontopfändung?",
    kurz: "Gläubiger, Schuldner, Drittschuldner",
    pflicht: true, niveau: "Basis", zeit: "20 Min.",
    text: `
      <p>Zahlt jemand seine Schulden nicht, kann der Gläubiger mit einem
      <strong>Vollstreckungstitel</strong> (z. B. Urteil, Vollstreckungsbescheid) das Konto
      pfänden lassen. Dafür erlässt das Amtsgericht (Vollstreckungsgericht) einen
      <strong>Pfändungs- und Überweisungsbeschluss (PfÜB)</strong>. Behörden wie das Finanzamt
      pfänden selbst mit einer <strong>Pfändungs- und Einziehungsverfügung</strong>.</p>
      <h3>Die drei Beteiligten</h3>
      <div class="tabelle-scroll"><table class="tabelle">
        <tr><th>Rolle</th><th>Wer?</th></tr>
        <tr><td>Gläubiger</td><td>wer Geld bekommen soll (z. B. Versandhändler, Inkassobüro, Finanzamt)</td></tr>
        <tr><td>Schuldner</td><td>der Kontoinhaber, der nicht gezahlt hat</td></tr>
        <tr><td><strong>Drittschuldner</strong></td><td><strong>die Bank</strong> – sie „schuldet“ dem Kunden das Guthaben</td></tr>
      </table></div>
      <h3>Was die Bank tun muss</h3>
      <ol>
        <li>Mit der <strong>Zustellung</strong> des PfÜB an die Bank ist das Guthaben gepfändet. Die Bank
        darf nicht mehr frei an den Kunden auszahlen (<strong>Zahlungsverbot</strong>).</li>
        <li>Die Bank gibt innerhalb von <strong>2 Wochen</strong> die <strong>Drittschuldnererklärung</strong>
        ab (§ 840 ZPO): Erkennt sie die Forderung an? Gibt es Vorpfändungen? Ist das Konto ein P-Konto?</li>
        <li>Die Bank informiert den Kunden.</li>
        <li>Pfändbares Guthaben zahlt die Bank erst nach einer Wartefrist an den Gläubiger aus.</li>
      </ol>
      <h3>Normales Girokonto vs. P-Konto</h3>
      <p>Bei einem <strong>normalen Girokonto</strong> ist bei einer Pfändung grundsätzlich das
      <strong>gesamte Guthaben</strong> blockiert – auch das Geld für Miete und Lebensmittel.
      Nur ein <strong>Pfändungsschutzkonto (P-Konto)</strong> schützt automatisch einen monatlichen
      Freibetrag. Der Schutz gibt es also <em>nur</em> auf einem P-Konto.</p>
    `,
    merk: [
      "Pfändung mit Pfändungs- und Überweisungsbeschluss (Gericht) oder Pfändungs- und Einziehungsverfügung (Behörde).",
      "Gläubiger – Schuldner (Kunde) – Drittschuldner (Bank).",
      "Ab Zustellung: Zahlungsverbot an den Kunden für das gepfändete Guthaben.",
      "Drittschuldnererklärung innerhalb von 2 Wochen (§ 840 ZPO).",
      "Automatischer Pfändungsschutz nur auf einem P-Konto."
    ],
    fragen: [
      {
        typ: "zuordnen",
        frage: "Ordne die Beteiligten bei der Kontopfändung zu.",
        kategorien: ["Gläubiger", "Schuldner", "Drittschuldner"],
        paare: [
          { text: "Inkassobüro eines Onlinehändlers", k: 0 },
          { text: "Kontoinhaber Herr Lindner", k: 1 },
          { text: "Volksbank, die das Konto führt", k: 2 }
        ],
        erklaerung: "Die Bank ist Drittschuldnerin, weil sie dem Schuldner das Kontoguthaben schuldet."
      },
      {
        typ: "mc",
        frage: "Innerhalb welcher Frist muss die Bank die Drittschuldnererklärung abgeben?",
        optionen: ["3 Geschäftstage", "2 Wochen", "1 Monat", "3 Monate"],
        richtig: 1,
        erklaerung: "Nach § 840 ZPO innerhalb von zwei Wochen nach Zustellung des Pfändungsbeschlusses."
      },
      {
        typ: "tf",
        frage: "Auf einem normalen Girokonto (kein P-Konto) bleibt bei einer Pfändung automatisch ein Freibetrag für den Lebensunterhalt frei.",
        richtig: false,
        erklaerung: "Falsch. Den automatischen Schutz gibt es nur auf einem P-Konto. Deshalb ist es so wichtig, das Konto rechtzeitig umzuwandeln."
      },
      {
        typ: "mc",
        frage: "Wer erlässt bei einer Steuerschuld die Kontopfändung?",
        optionen: [
          "Das Amtsgericht mit einem Pfändungs- und Überweisungsbeschluss",
          "Das Finanzamt selbst mit einer Pfändungs- und Einziehungsverfügung",
          "Die SCHUFA",
          "Die Bank selbst"
        ],
        richtig: 1,
        erklaerung: "Behörden wie das Finanzamt können selbst vollstrecken. Der P-Konto-Schutz gilt genauso."
      }
    ]
  },

  /* ------------------------------------------------------------ 5 */
  {
    id: "p-konto-einrichten",
    titel: "Das P-Konto einrichten",
    kurz: "Umwandlung in 4 Geschäftstagen",
    pflicht: true, niveau: "Standard", zeit: "20 Min.",
    text: `
      <p>Ein <strong>Pfändungsschutzkonto (P-Konto)</strong> ist kein eigenes Produkt, sondern ein
      Girokonto (auch ein Basiskonto) mit einer <strong>besonderen Vereinbarung</strong>. Geregelt ist
      es in der <strong>Zivilprozessordnung (ZPO), §§ 850k, 850l und 899 bis 910</strong>.</p>
      <h3>Die wichtigsten Regeln</h3>
      <ul>
        <li>Jeder Kunde kann <strong>jederzeit verlangen</strong>, dass sein bestehendes Girokonto als
        P-Konto geführt wird – auch wenn es schon gepfändet ist.</li>
        <li>Die Bank muss das Konto <strong>spätestens zum Beginn des vierten Geschäftstages</strong>
        nach dem Verlangen als P-Konto führen.</li>
        <li>Jede Person darf <strong>nur ein einziges P-Konto</strong> haben. Der Kunde muss versichern,
        dass er kein weiteres P-Konto führt. Banken dürfen das Bestehen eines P-Kontos an eine
        Auskunftei (z. B. SCHUFA) melden, um Mehrfachkonten zu verhindern – das ist <em>kein</em>
        Negativmerkmal.</li>
        <li><strong>Gemeinschaftskonten</strong> können nicht als P-Konto geführt werden. Wird ein
        Gemeinschaftskonto gepfändet, kann jeder Inhaber verlangen, dass für ihn ein
        <strong>eigenes P-Konto</strong> eingerichtet wird (§ 850l ZPO); das Guthaben wird dann
        aufgeteilt.</li>
        <li>Der Kunde kann die P-Konto-Vereinbarung auch wieder <strong>zurücknehmen</strong>.</li>
      </ul>
      <h3>Was kostet ein P-Konto?</h3>
      <p>Nach der Rechtsprechung des BGH (2012) darf ein P-Konto <strong>nicht mehr kosten</strong> als das
      bisherige Girokonto bzw. ein vergleichbares Konto. Ein Aufpreis „für den Pfändungsschutz“ ist unzulässig.</p>
      <h3>Und der Dispo?</h3>
      <p>Ein P-Konto wird in der Praxis meist <strong>auf Guthabenbasis</strong> geführt. Eine
      eingeräumte Überziehung wird häufig gekündigt, weil Gläubiger sonst auf neue Gutschriften zugreifen
      oder die Bank mit einem Minus nicht verrechnen darf.</p>
    `,
    merk: [
      "P-Konto = Girokonto (auch Basiskonto) mit Pfändungsschutz-Vereinbarung, §§ 850k, 850l, 899 ff. ZPO.",
      "Umwandlung jederzeit möglich, spätestens zum Beginn des 4. Geschäftstages nach dem Verlangen.",
      "Nur ein P-Konto pro Person; Versicherung des Kunden; Meldung an Auskunftei ist kein Negativmerkmal.",
      "Gemeinschaftskonto ≠ P-Konto; jeder Mitinhaber kann ein eigenes P-Konto verlangen (§ 850l ZPO).",
      "Kein Aufpreis für das P-Konto (BGH 2012)."
    ],
    fragen: [
      {
        typ: "fall",
        fall: "Frau Petersen kommt am Dienstag in die Filiale: Ihr Konto wurde gestern gepfändet. Sie möchte es sofort in ein P-Konto umwandeln.",
        frage: "Was gilt?",
        optionen: [
          "Eine Umwandlung ist nach einer Pfändung nicht mehr möglich.",
          "Die Bank muss das Konto spätestens zum Beginn des vierten Geschäftstages nach dem Verlangen als P-Konto führen.",
          "Die Umwandlung dauert 4 Wochen.",
          "Frau Petersen braucht zuerst einen Beschluss des Amtsgerichts."
        ],
        richtig: 1,
        erklaerung: "Das P-Konto kann jederzeit verlangt werden – gerade auch bei einer bestehenden Pfändung. Frist: spätestens Beginn des 4. Geschäftstages."
      },
      {
        typ: "tf",
        frage: "Ein Ehepaar kann sein Gemeinschaftskonto als gemeinsames P-Konto führen lassen.",
        richtig: false,
        erklaerung: "Falsch. Ein P-Konto kann nur als Einzelkonto geführt werden. Jeder Ehepartner kann aber ein eigenes P-Konto verlangen."
      },
      {
        typ: "mc",
        frage: "Ein Kunde möchte bei zwei verschiedenen Banken je ein P-Konto führen, „damit der Schutz doppelt gilt“. Was antwortest du?",
        optionen: [
          "Das ist erlaubt, der Freibetrag verdoppelt sich.",
          "Jede Person darf nur ein P-Konto haben; er muss versichern, kein weiteres P-Konto zu führen.",
          "Das geht nur mit Zustimmung des Gläubigers.",
          "Das ist erlaubt, wenn beide Banken Genossenschaftsbanken sind."
        ],
        richtig: 1,
        erklaerung: "Mehrere P-Konten sind unzulässig. Wer falsch versichert, riskiert, dass der Gläubiger beantragt, dass nur ein Konto geschützt bleibt."
      },
      {
        typ: "mc",
        frage: "Darf die Bank für das P-Konto 5 Euro mehr im Monat verlangen als für das bisherige Girokonto?",
        optionen: [
          "Ja, wegen des Mehraufwands.",
          "Nein, ein P-Konto darf nicht teurer sein als das bisherige bzw. ein vergleichbares Konto.",
          "Ja, wenn es im Preisaushang steht.",
          "Nur bei Kunden mit mehr als einer Pfändung."
        ],
        richtig: 1,
        erklaerung: "Der BGH hat 2012 entschieden, dass ein Aufpreis für das P-Konto unwirksam ist."
      },
      {
        typ: "tf",
        frage: "Auch ein Basiskonto kann als P-Konto geführt werden.",
        richtig: true,
        erklaerung: "Richtig. Das Basiskonto ist ein normales Zahlungskonto – die P-Konto-Vereinbarung kann dazukommen."
      }
    ]
  },

  /* ------------------------------------------------------------ 6 */
  {
    id: "freibetraege",
    titel: "Freibeträge berechnen",
    kurz: "Grundfreibetrag, Erhöhungen, Übertrag",
    pflicht: true, niveau: "Standard", zeit: "30 Min.",
    rechner: true,
    text: `
      <h3>Grundfreibetrag</h3>
      <p>Auf dem P-Konto ist <strong>pro Kalendermonat</strong> automatisch ein Guthaben in Höhe des
      <strong>Grundfreibetrags</strong> geschützt. Er gilt vom <strong>1. Juli 2026 bis 30. Juni 2027</strong>
      und beträgt <strong>1.590,00 Euro</strong>. (Grundlage ist die Pfändungsfreigrenze für Arbeitseinkommen
      von 1.587,40 Euro; für das P-Konto wird auf volle 10 Euro aufgerundet.) Die Beträge werden jedes Jahr
      zum <strong>1. Juli</strong> angepasst.</p>
      <p>Wichtig: Geschützt ist ein <strong>Betrag pro Monat</strong> – egal, woher das Geld kommt
      (Lohn, Rente, Bürgergeld, Geschenk der Oma).</p>
      <h3>Erhöhungsbeträge – nur mit Bescheinigung</h3>
      <p>Der Freibetrag erhöht sich, wenn der Kunde z. B. <strong>Unterhalt</strong> leistet oder
      <strong>Kindergeld</strong> bzw. bestimmte Sozialleistungen für andere Personen erhält:</p>
      <div class="tabelle-scroll"><table class="tabelle">
        <tr><th>Erhöhung</th><th>Betrag pro Monat</th></tr>
        <tr><td>1. unterhaltsberechtigte Person</td><td>+ 597,42 €</td></tr>
        <tr><td>2. bis 5. unterhaltsberechtigte Person (je)</td><td>+ 332,83 €</td></tr>
        <tr><td>Kindergeld (2026: 259 € je Kind)</td><td>+ Höhe des Kindergeldes</td></tr>
      </table></div>
      <p>Die Bank berücksichtigt Erhöhungen nur, wenn der Kunde eine <strong>Bescheinigung</strong>
      vorlegt (§ 903 ZPO). Ausstellen dürfen sie z. B. der <strong>Arbeitgeber</strong>, die
      <strong>Familienkasse</strong>, das <strong>Jobcenter</strong> oder ein anderer Sozialleistungsträger,
      eine anerkannte <strong>Schuldnerberatungsstelle</strong>, Rechtsanwälte oder Steuerberater.
      Die Bank darf eine ordnungsgemäße Bescheinigung nicht zurückweisen. Höhere oder andere Freibeträge
      kann im Einzelfall das <strong>Vollstreckungsgericht</strong> festsetzen.</p>
      <h3>Übertrag in die Folgemonate</h3>
      <p>Wird der geschützte Betrag in einem Monat nicht verbraucht, wird das nicht verbrauchte
      geschützte Guthaben in die <strong>folgenden drei Kalendermonate</strong> übertragen und ist dort
      <strong>zusätzlich</strong> geschützt. So kann ein Kunde z. B. für eine Jahresrechnung ansparen.</p>
      <h3>Wartefrist für den Gläubiger</h3>
      <p>Guthaben über dem Freibetrag zahlt die Bank nicht sofort an den Gläubiger aus, sondern erst
      nach Ablauf des <strong>Kalendermonats, der auf die Gutschrift folgt</strong> (§ 900 ZPO). So
      bleibt Zeit, eine Bescheinigung nachzureichen oder das Geld im Folgemonat zu verbrauchen.</p>
      <div class="karte" style="background:var(--grau-100)">
        <strong>Beispielrechnung:</strong> Herr Lorenzen zahlt Unterhalt für eine Tochter.<br>
        1.590,00 € + 597,42 € = <strong>2.187,42 €</strong> geschützt pro Monat.<br>
        Gehen in einem Monat 2.400,00 € ein, sind 2.400,00 € − 2.187,42 € = <strong>212,58 €</strong> pfändbar.
      </div>
      <p class="hinweis">Der Rechner unten zeigt dir die Freibeträge für beliebige Fälle. Probiere ihn aus,
      bevor du das Quiz startest.</p>
    `,
    merk: [
      "Grundfreibetrag P-Konto (01.07.2026 – 30.06.2027): 1.590,00 € pro Kalendermonat – automatisch.",
      "Erhöhungen: 1. Person + 597,42 €, 2.–5. Person je + 332,83 €, Kindergeld in voller Höhe – nur mit Bescheinigung (§ 903 ZPO).",
      "Bescheinigung von Arbeitgeber, Familienkasse, Jobcenter, Schuldnerberatung, Anwalt oder Steuerberater.",
      "Nicht verbrauchtes geschütztes Guthaben wird in die folgenden 3 Kalendermonate übertragen.",
      "Auszahlung an den Gläubiger erst nach Ablauf des Monats, der auf die Gutschrift folgt (§ 900 ZPO).",
      "Anpassung der Beträge jedes Jahr zum 1. Juli."
    ],
    fragen: [
      {
        typ: "zahl",
        frage: "Frau Jensen ist alleinstehend und hat keine Unterhaltspflichten. In diesem Monat gehen 1.850,00 € Lohn auf ihr P-Konto ein. Wie viel Euro sind pfändbar?",
        richtig: 260.00, toleranz: 0.01,
        erklaerung: "1.850,00 € − 1.590,00 € Grundfreibetrag = 260,00 € pfändbar."
      },
      {
        typ: "zahl",
        frage: "Herr Arslan ist verheiratet (Ehefrau ohne Einkommen) und hat zwei Kinder; er legt eine Bescheinigung über 3 unterhaltsberechtigte Personen und das Kindergeld für 2 Kinder vor. Wie hoch ist sein monatlicher Freibetrag auf dem P-Konto (in Euro)?",
        richtig: 3371.08, toleranz: 0.01,
        erklaerung: "1.590,00 € + 597,42 € + 2 × 332,83 € + 2 × 259,00 € Kindergeld = 3.371,08 €."
      },
      {
        typ: "mc",
        frage: "Wer darf eine Bescheinigung über Erhöhungsbeträge NICHT ausstellen?",
        optionen: [
          "Die Familienkasse",
          "Der Arbeitgeber",
          "Eine anerkannte Schuldnerberatungsstelle",
          "Der Nachbar des Kunden"
        ],
        richtig: 3,
        erklaerung: "Bescheinigungen stellen Arbeitgeber, Familienkassen, Sozialleistungsträger, anerkannte Schuldnerberatungsstellen und bestimmte Berufsträger (z. B. Rechtsanwälte, Steuerberater) aus."
      },
      {
        typ: "fall",
        fall: "Frau Jensen (Freibetrag 1.590 €) hat im August nur 1.300 € von ihrem geschützten Guthaben ausgegeben. Weitere Einzahlungen gibt es im August nicht.",
        frage: "Was passiert mit den restlichen 290 €?",
        optionen: [
          "Sie gehen sofort an den Gläubiger.",
          "Sie werden in die folgenden drei Kalendermonate übertragen und sind dort zusätzlich geschützt.",
          "Sie verfallen.",
          "Die Bank überweist sie an das Vollstreckungsgericht."
        ],
        richtig: 1,
        erklaerung: "Nicht verbrauchtes geschütztes Guthaben wird in die folgenden drei Monate übertragen (§ 899 Abs. 2 ZPO)."
      },
      {
        typ: "tf",
        frage: "Erhöhungsbeträge für Unterhaltspflichten berücksichtigt die Bank automatisch, sobald sie weiß, dass der Kunde Kinder hat.",
        richtig: false,
        erklaerung: "Falsch. Automatisch geschützt ist nur der Grundfreibetrag. Für Erhöhungsbeträge braucht die Bank eine Bescheinigung (§ 903 ZPO)."
      },
      {
        typ: "zahl",
        frage: "Herr Lorenzen (Freibetrag 2.187,42 €) bekommt im Oktober 2.050,00 € Gehalt und 300,00 € Rückzahlung von seinem Stromanbieter. Wie viel Euro sind pfändbar?",
        richtig: 162.58, toleranz: 0.01,
        erklaerung: "Geschützt ist ein Betrag pro Monat, egal woher das Geld kommt: 2.050,00 € + 300,00 € = 2.350,00 €; 2.350,00 € − 2.187,42 € = 162,58 € pfändbar."
      }
    ]
  },

  /* ------------------------------------------------------------ 7 */
  {
    id: "beratung",
    titel: "Das Beratungsgespräch: sensibel und klar",
    kurz: "Richtig formulieren, Hilfe vermitteln",
    pflicht: true, niveau: "Standard", zeit: "25 Min.",
    text: `
      <p>Kunden mit Schulden oder einer Pfändung sind oft <strong>verunsichert, gestresst oder beschämt</strong>.
      Viele kommen erst, wenn die Karte nicht mehr funktioniert. Dein Ziel: <strong>sachlich informieren,
      schnell handeln, Hilfe aufzeigen</strong> – ohne zu bewerten.</p>
      <h3>Gesprächsleitfaden</h3>
      <ol>
        <li><strong>Diskreter Rahmen:</strong> Gespräch im Beratungsraum, nicht am offenen Schalter.</li>
        <li><strong>Sachlich erklären:</strong> Was ist passiert (Pfändung eingegangen, Guthaben gesperrt)?</li>
        <li><strong>Lösung anbieten:</strong> Umwandlung in ein P-Konto – sofort beantragen, Frist nennen.</li>
        <li><strong>Erhöhungsbeträge ansprechen:</strong> Unterhaltspflichten? Kindergeld? → Bescheinigung besorgen.</li>
        <li><strong>Hilfe vermitteln:</strong> Hinweis auf eine kostenlose <strong>Schuldnerberatungsstelle</strong>
        (z. B. Verbraucherzentrale, Wohlfahrtsverbände, Kommune).</li>
        <li><strong>Dokumentieren:</strong> Verlangen des Kunden, Datum, Versicherung „kein weiteres P-Konto“,
        vorgelegte Bescheinigungen.</li>
      </ol>
      <h3>Gute und schlechte Formulierungen</h3>
      <div class="zitat schlecht">✗ „Sie haben Schulden, deshalb ist Ihr Konto gesperrt. Da kann ich nichts machen.“</div>
      <div class="zitat gut">✓ „Bei uns ist eine Pfändung für Ihr Konto eingegangen. Ich zeige Ihnen, wie Sie trotzdem an Ihr Geld für den Lebensunterhalt kommen.“</div>
      <div class="zitat schlecht">✗ „Ein P-Konto? Das ist doch nur für Leute, die pleite sind.“</div>
      <div class="zitat gut">✓ „Mit einem P-Konto sind jeden Monat 1.590 Euro automatisch geschützt. Wir können das heute beantragen.“</div>
      <div class="zitat schlecht">✗ „Wie konnten Sie denn so viele Schulden machen?“</div>
      <div class="zitat gut">✓ „Wenn Sie möchten, gebe ich Ihnen die Adresse einer kostenlosen Schuldnerberatung. Dort hilft man Ihnen auch mit der Bescheinigung.“</div>
      <h3>Bankgeheimnis</h3>
      <p>Über die Pfändung sprichst du nur mit dem Kunden selbst (oder Bevollmächtigten). Gegenüber
      Dritten – auch Familienangehörigen ohne Vollmacht – gilt das <strong>Bankgeheimnis</strong>.
      Gegenüber dem Gläubiger gibt die Bank nur die gesetzlich vorgesehene Drittschuldnererklärung ab.</p>
    `,
    merk: [
      "Diskret, sachlich, ohne Bewertung – Lösung statt Vorwurf.",
      "Sofort auf das P-Konto hinweisen und den Antrag aufnehmen.",
      "Nach Unterhaltspflichten und Kindergeld fragen → Bescheinigung (§ 903 ZPO).",
      "Kostenlose Schuldnerberatung empfehlen.",
      "Dokumentation: Verlangen, Datum, Versicherung „kein weiteres P-Konto“, Bescheinigungen.",
      "Bankgeheimnis auch gegenüber Angehörigen ohne Vollmacht."
    ],
    fragen: [
      {
        typ: "mc",
        frage: "Welche Formulierung ist im Gespräch mit einem Kunden, dessen Konto gepfändet wurde, am besten geeignet?",
        optionen: [
          "„Tja, da hätten Sie Ihre Rechnungen eben bezahlen müssen.“",
          "„Bei uns ist eine Pfändung eingegangen. Mit einem P-Konto bleibt Ihr Geld für den Lebensunterhalt geschützt – das können wir heute beantragen.“",
          "„Rufen Sie am besten Ihren Gläubiger an, ich kann da nichts tun.“",
          "„Ihr Konto ist jetzt leider für immer gesperrt.“"
        ],
        richtig: 1,
        erklaerung: "Sachlich informieren und direkt eine Lösung anbieten – ohne Vorwurf."
      },
      {
        typ: "fall",
        fall: "Die Ehefrau von Herrn Weber (ohne Vollmacht) ruft an und fragt, warum die Karte ihres Mannes nicht mehr funktioniert und wer das Konto gepfändet hat.",
        frage: "Wie reagierst du?",
        optionen: [
          "Du nennst ihr den Gläubiger und den Betrag.",
          "Du gibst keine Auskunft (Bankgeheimnis) und bietest an, dass Herr Weber selbst einen Termin vereinbart.",
          "Du sagst ihr, dass sie das Konto in ein P-Konto umwandeln kann.",
          "Du kündigst das Konto."
        ],
        richtig: 1,
        erklaerung: "Ohne Vollmacht darf die Ehefrau keine Auskünfte erhalten. Herr Weber muss die Umwandlung in ein P-Konto selbst verlangen."
      },
      {
        typ: "zuordnen",
        frage: "Was gehört in die Dokumentation einer P-Konto-Umwandlung?",
        kategorien: ["dokumentieren", "nicht nötig"],
        paare: [
          { text: "Datum des Verlangens", k: 0 },
          { text: "Versicherung, kein weiteres P-Konto zu führen", k: 0 },
          { text: "Grund, warum der Kunde Schulden hat", k: 1 },
          { text: "Vorgelegte Bescheinigung über Erhöhungsbeträge", k: 0 }
        ],
        erklaerung: "Für die Bank sind das Verlangen, die Versicherung und die Bescheinigungen relevant. Der Grund für die Schulden gehört nicht in die Akte."
      },
      {
        typ: "tf",
        frage: "Es ist sinnvoll, Kunden mit Pfändungen auf eine kostenlose Schuldnerberatungsstelle hinzuweisen.",
        richtig: true,
        erklaerung: "Richtig. Schuldnerberatungen helfen beim Ordnen der Finanzen und dürfen auch Bescheinigungen für Erhöhungsbeträge ausstellen."
      }
    ]
  }
];

/* ---------------- Fallspiel ---------------- */
const FALLSPIEL = {
  kunde: "Daniel Lorenzen",
  initialen: "DL",
  einleitung: `Du bist Auszubildende bzw. Auszubildender bei der (fiktiven) <strong>Volksbank Schlei eG</strong>.
    Heute kommt <strong>Daniel Lorenzen</strong> (41) zu dir. Er arbeitet als Lagerist, ist geschieden und
    zahlt Unterhalt für seine Tochter Mia (8). Seine bisherige Bank hat ihm das Girokonto gekündigt.
    Begleite ihn vom Basiskonto bis zum P-Konto. An jeder Stelle triffst du eine Entscheidung.`,
  schritte: [
    {
      titel: "Das Anliegen",
      rede: "Moin. Meine alte Bank hat mir das Konto gekündigt, Ende des Monats ist Schluss. Bei der SCHUFA habe ich wohl ein paar Einträge. Geben Sie mir überhaupt noch ein Konto?",
      akte: ["Alter: 41 Jahre", "Kündigung des bisherigen Girokontos zum Monatsende", "SCHUFA: zwei Negativmerkmale (Inkasso)"],
      frage: "Was antwortest du Herrn Lorenzen?",
      optionen: [
        { text: "„Mit SCHUFA-Einträgen leider nicht.“", richtig: false,
          feedback: "SCHUFA-Einträge sind kein Ablehnungsgrund für ein Basiskonto." },
        { text: "„Ja. Sie haben einen gesetzlichen Anspruch auf ein Basiskonto. SCHUFA-Einträge spielen dafür keine Rolle.“", richtig: true,
          feedback: "Genau. Verbraucher mit rechtmäßigem Aufenthalt in der EU haben Anspruch auf ein Basiskonto (ZKG). Sein gekündigtes Konto steht dem nicht entgegen." },
        { text: "„Nur, wenn Sie Mitglied unserer Genossenschaft werden.“", richtig: false,
          feedback: "Eine Mitgliedschaft ist keine Voraussetzung für ein Basiskonto." }
      ]
    },
    {
      titel: "Antrag und Frist",
      rede: "Super. Und wie lange dauert das? Mein Gehalt kommt am 30.",
      akte: ["Antragsformular Basiskonto ausgefüllt", "Personalausweis liegt vor"],
      frage: "Was ist jetzt zu tun?",
      optionen: [
        { text: "Identifizierung nach GwG und Legitimation nach § 154 AO durchführen; die Bank entscheidet spätestens innerhalb von 10 Geschäftstagen.", richtig: true,
          feedback: "Richtig. Die Pflichten bei der Kontoeröffnung gelten auch beim Basiskonto. Herr Lorenzen kann seinem Arbeitgeber dann rechtzeitig die neue IBAN geben." },
        { text: "Ohne Ausweisprüfung eröffnen, weil es ja „nur“ ein Basiskonto ist.", richtig: false,
          feedback: "Auch beim Basiskonto gelten GwG und § 154 AO ohne Ausnahme." },
        { text: "Die Bank hat 3 Monate Zeit, um die Bonität zu prüfen.", richtig: false,
          feedback: "Eine Bonitätsprüfung entscheidet nicht über das Basiskonto, die Frist beträgt 10 Geschäftstage." }
      ]
    },
    {
      titel: "Wunsch nach einem Dispo",
      rede: "Kann ich auf dem neuen Konto auch einen kleinen Dispo bekommen? So 300 Euro?",
      akte: ["Basiskonto eröffnet (Guthabenbasis)", "Debitkarte bestellt"],
      frage: "Wie antwortest du?",
      optionen: [
        { text: "„Ja, der Dispo gehört zum Basiskonto dazu.“", richtig: false,
          feedback: "Ein Anspruch auf Überziehung besteht beim Basiskonto nicht." },
        { text: "„Das Basiskonto wird auf Guthabenbasis geführt. Einen Anspruch auf einen Dispo gibt es nicht.“", richtig: true,
          feedback: "Richtig. Ob die Bank freiwillig einen Kredit gewährt, wäre eine eigene Kreditentscheidung mit Bonitätsprüfung." },
        { text: "„Ein Dispo ist bei Basiskonten gesetzlich verboten.“", richtig: false,
          feedback: "Verboten ist es nicht – es gibt nur keinen Anspruch darauf." }
      ]
    },
    {
      titel: "Die Pfändung geht ein",
      rede: "(Drei Monate später – Herr Lorenzen ist am Telefon:) Meine Karte geht nicht mehr! Was ist da los?",
      akte: ["Gestern zugestellt: Pfändungs- und Überweisungsbeschluss über 3.480,00 €", "Gläubiger: Inkassobüro", "Konto ist noch kein P-Konto"],
      frage: "Was ist richtig?",
      optionen: [
        { text: "Die Bank zahlt das ganze Guthaben sofort an das Inkassobüro aus.", richtig: false,
          feedback: "Die Bank zahlt nicht sofort aus – es gibt Wartefristen. Zuerst geht es darum, Herrn Lorenzen zu informieren." },
        { text: "Das Guthaben ist gepfändet (Zahlungsverbot). Die Bank gibt binnen 2 Wochen die Drittschuldnererklärung ab und rät Herrn Lorenzen, sofort ein P-Konto zu verlangen.", richtig: true,
          feedback: "Genau. Ohne P-Konto ist das gesamte Guthaben blockiert. Die Umwandlung ist der wichtigste Schritt." },
        { text: "Die Bank kündigt das Basiskonto fristlos, weil eine Pfändung vorliegt.", richtig: false,
          feedback: "Eine Pfändung ist kein Kündigungsgrund für das Basiskonto." }
      ]
    },
    {
      titel: "Umwandlung in ein P-Konto",
      rede: "Ich komme gleich vorbei. Kann ich das Basiskonto überhaupt in so ein P-Konto umwandeln? Und kostet das extra?",
      akte: ["Herr Lorenzen in der Filiale, Verlangen am Mittwoch", "Kein weiteres Konto bei anderen Banken"],
      frage: "Was sagst du?",
      optionen: [
        { text: "„Ja, auch ein Basiskonto kann P-Konto werden. Spätestens zum Beginn des vierten Geschäftstages ist es umgestellt – ohne Aufpreis. Bitte bestätigen Sie mir noch, dass Sie kein weiteres P-Konto haben.“", richtig: true,
          feedback: "Perfekt: Frist, Kosten und die Versicherung „nur ein P-Konto“ – alles drin." },
        { text: "„Ja, das kostet aber 7 Euro mehr im Monat.“", richtig: false,
          feedback: "Ein Aufpreis für das P-Konto ist unzulässig (BGH 2012)." },
        { text: "„Nein, dafür müssen Sie ein neues Konto bei einer anderen Bank eröffnen.“", richtig: false,
          feedback: "Jedes bestehende Girokonto – auch ein Basiskonto – kann umgewandelt werden." }
      ]
    },
    {
      titel: "Unterhalt für Mia",
      rede: "Ich zahle jeden Monat Unterhalt für meine Tochter. Bleibt dafür mehr Geld übrig?",
      akte: ["Unterhaltspflicht für 1 Kind (Mia, 8 Jahre)", "Kindergeld bekommt die Mutter"],
      frage: "Wie geht es weiter?",
      optionen: [
        { text: "„Das erhöht sich automatisch, sobald ich es im System vermerke.“", richtig: false,
          feedback: "Erhöhungsbeträge werden nur gegen Vorlage einer Bescheinigung berücksichtigt." },
        { text: "„Ja, mit einer Bescheinigung – z. B. von Ihrem Arbeitgeber oder einer Schuldnerberatung – erhöht sich Ihr Freibetrag für die erste unterhaltsberechtigte Person.“", richtig: true,
          feedback: "Richtig (§ 903 ZPO). Das Kindergeld zählt bei ihm nicht, weil die Mutter es erhält." },
        { text: "„Für Unterhalt gibt es keinen zusätzlichen Schutz.“", richtig: false,
          feedback: "Doch: Unterhaltspflichten erhöhen den Freibetrag." }
      ]
    },
    {
      titel: "Nachrechnen",
      rede: "Und wie viel ist das dann genau, was mir bleibt?",
      akte: ["Bescheinigung des Arbeitgebers liegt vor: 1 unterhaltsberechtigte Person", "Grundfreibetrag 1.590,00 €; 1. Person + 597,42 €"],
      frage: "Wie hoch ist sein monatlicher Freibetrag?",
      optionen: [
        { text: "1.590,00 €", richtig: false, feedback: "Das ist nur der Grundfreibetrag ohne Erhöhung." },
        { text: "2.187,42 €", richtig: true, feedback: "1.590,00 € + 597,42 € = 2.187,42 € pro Kalendermonat." },
        { text: "2.446,42 €", richtig: false, feedback: "Hier wurde zusätzlich Kindergeld (259 €) addiert – das bekommt aber die Mutter." }
      ]
    },
    {
      titel: "Hilfe anbieten",
      rede: "Ehrlich gesagt wächst mir das alles über den Kopf.",
      akte: ["Mehrere Gläubiger", "Herr Lorenzen wirkt sehr belastet"],
      frage: "Was ist jetzt die beste Reaktion?",
      optionen: [
        { text: "„Wenn Sie möchten, gebe ich Ihnen die Kontaktdaten einer kostenlosen Schuldnerberatung. Dort bekommt man auch Hilfe beim Ordnen der Schulden.“", richtig: true,
          feedback: "Sehr gut – verständnisvoll und mit einem konkreten Hilfsangebot." },
        { text: "„Da hätten Sie früher kommen müssen.“", richtig: false,
          feedback: "Vorwürfe helfen nicht und belasten das Vertrauensverhältnis." },
        { text: "„Nehmen Sie doch einen Ratenkredit auf, dann zahlen Sie alles auf einmal zurück.“", richtig: false,
          feedback: "Bei laufender Pfändung und Negativmerkmalen ist ein neuer Kredit weder realistisch noch eine verantwortungsvolle Empfehlung." }
      ]
    }
  ],
  abschluss: "Herr Lorenzen hat jetzt ein Basiskonto, das als P-Konto geführt wird. Monatlich sind 2.187,42 € geschützt, und er hat die Adresse einer Schuldnerberatung."
};
