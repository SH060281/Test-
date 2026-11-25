/* Inhalte des Lernpfads „Kontoeröffnung Schritt für Schritt“
   BBZ Schleswig – Bankwirtschaft

   Fragetypen:
   - mc:        Multiple Choice, eine richtige Antwort (richtig = Index)
   - tf:        Richtig/Falsch (richtig = true/false)
   - zuordnen:  Aussagen Kategorien zuordnen (paare[].k = Index der Kategorie)
   - fall:      Fallbeispiel mit Multiple Choice
*/

const STATIONEN = [
  /* ------------------------------------------------------------ 1 */
  {
    id: "geschaeftsfaehigkeit",
    titel: "Prüfung der Geschäftsfähigkeit",
    kurz: "Wer darf allein einen Kontovertrag schließen?",
    text: `
      <p>Ein Kontovertrag ist ein Rechtsgeschäft. Deshalb prüfst du zuerst, ob die Person
      überhaupt <strong>wirksam einen Vertrag schließen</strong> kann. Das regelt das
      Bürgerliche Gesetzbuch (BGB).</p>
      <div class="tabelle-scroll"><table class="tabelle">
        <tr><th>Stufe</th><th>Wer?</th><th>Folge für die Kontoeröffnung</th></tr>
        <tr><td>Geschäftsunfähig (§ 104 BGB)</td><td>Kinder unter 7 Jahren; Personen mit dauerhafter krankhafter Störung der Geistestätigkeit</td><td>Willenserklärung ist nichtig. Die gesetzlichen Vertreter (meist beide Eltern) eröffnen das Konto <em>im Namen</em> des Kindes.</td></tr>
        <tr><td>Beschränkt geschäftsfähig (§ 106 BGB)</td><td>Minderjährige von 7 bis 17 Jahren</td><td>Kontovertrag braucht die <strong>Zustimmung der gesetzlichen Vertreter</strong> (bei gemeinsamem Sorgerecht: beide Elternteile). Ohne Zustimmung ist der Vertrag schwebend unwirksam.</td></tr>
        <tr><td>Voll geschäftsfähig</td><td>Ab 18 Jahren (Volljährigkeit, § 2 BGB)</td><td>Darf das Konto allein eröffnen.</td></tr>
      </table></div>
      <p><strong>Warum braucht ein 17-Jähriger die Zustimmung?</strong> Ein Girokonto bringt nicht nur
      Vorteile, sondern auch Pflichten (z. B. Kontoführungsentgelte). Es ist also nicht
      „lediglich rechtlich vorteilhaft“ (§ 107 BGB).</p>
      <p><strong>Betreuung:</strong> Für Volljährige, die ihre Angelegenheiten ganz oder teilweise
      nicht selbst regeln können, bestellt das Betreuungsgericht eine Betreuerin oder einen Betreuer.
      Eine Betreuung macht <em>nicht automatisch</em> geschäftsunfähig. Hat das Gericht aber einen
      <strong>Einwilligungsvorbehalt</strong> (z. B. für Vermögensangelegenheiten) angeordnet, braucht die
      betreute Person für Bankgeschäfte die Einwilligung der Betreuerin bzw. des Betreuers.
      Die Bank lässt sich den <strong>Betreuerausweis</strong> vorlegen und prüft den Aufgabenkreis.</p>
    `,
    merk: [
      "Unter 7 Jahren: geschäftsunfähig – die Eltern handeln für das Kind.",
      "7 bis 17 Jahre: beschränkt geschäftsfähig – Zustimmung beider sorgeberechtigten Elternteile nötig.",
      "Bei Minderjährigen: Konto nur auf Guthabenbasis, keine Überziehung (Kredite für Minderjährige brauchen die Genehmigung des Familiengerichts).",
      "Betreuung ≠ Geschäftsunfähigkeit. Entscheidend sind Aufgabenkreis und ein möglicher Einwilligungsvorbehalt (Betreuerausweis prüfen).",
      "Die Bank legitimiert bei Minderjährigen auch die gesetzlichen Vertreter."
    ],
    fragen: [
      {
        typ: "fall",
        fall: "Herr Müller, 17 Jahre, beginnt eine Ausbildung zum Tischler und möchte ein Girokonto für seine Ausbildungsvergütung eröffnen. Seine Eltern haben das gemeinsame Sorgerecht.",
        frage: "Was ist für die Kontoeröffnung erforderlich?",
        optionen: [
          "Er kann das Konto allein eröffnen, weil er ein eigenes Einkommen hat.",
          "Die Zustimmung beider Elternteile; beide werden ebenfalls legitimiert.",
          "Die Zustimmung eines Elternteils reicht immer aus.",
          "Ein Konto ist erst mit 18 Jahren möglich."
        ],
        richtig: 1,
        erklaerung: "Mit 17 ist Herr Müller beschränkt geschäftsfähig. Ein Girokonto ist nicht lediglich rechtlich vorteilhaft. Bei gemeinsamem Sorgerecht vertreten beide Eltern gemeinsam – also stimmen beide zu und werden legitimiert."
      },
      {
        typ: "tf",
        frage: "Eine Person, für die eine Betreuung eingerichtet ist, ist automatisch geschäftsunfähig.",
        richtig: false,
        erklaerung: "Falsch. Eine Betreuung schränkt die Geschäftsfähigkeit nicht automatisch ein. Nur wenn das Gericht einen Einwilligungsvorbehalt angeordnet hat, braucht die betreute Person für diesen Bereich die Einwilligung der Betreuerin bzw. des Betreuers."
      },
      {
        typ: "zuordnen",
        frage: "Ordne die Personen der richtigen Stufe der Geschäftsfähigkeit zu.",
        kategorien: ["geschäftsunfähig", "beschränkt geschäftsfähig", "voll geschäftsfähig"],
        paare: [
          { text: "Mia, 5 Jahre", k: 0 },
          { text: "Jonas, 15 Jahre", k: 1 },
          { text: "Lena, 18 Jahre", k: 2 },
          { text: "Tim, 7 Jahre (heute Geburtstag)", k: 1 }
        ],
        erklaerung: "Unter 7: geschäftsunfähig. Von 7 bis zur Vollendung des 18. Lebensjahres: beschränkt geschäftsfähig. Ab 18: voll geschäftsfähig."
      },
      {
        typ: "mc",
        frage: "Die 16-jährige Sophie hat ein Girokonto (mit Zustimmung der Eltern). Sie möchte einen Dispositionskredit. Was gilt?",
        optionen: [
          "Kein Problem, wenn die Eltern zustimmen.",
          "Ein Dispositionskredit wird Minderjährigen grundsätzlich nicht eingeräumt; Kredite an Minderjährige bräuchten die Genehmigung des Familiengerichts.",
          "Ein Dispo ist bis 500 Euro ohne Zustimmung erlaubt.",
          "Sophie kann den Dispo allein vereinbaren, weil sie das Konto schon hat."
        ],
        richtig: 1,
        erklaerung: "Konten für Minderjährige werden nur auf Guthabenbasis geführt. Eine Kreditaufnahme durch Minderjährige ist genehmigungspflichtig durch das Familiengericht – in der Praxis vergeben Banken daher keine Dispos an Minderjährige."
      },
      {
        typ: "mc",
        frage: "Ein Vater möchte für seine 4-jährige Tochter ein Sparkonto eröffnen. Wer ist Kontoinhaberin?",
        optionen: [
          "Der Vater, weil er den Vertrag unterschreibt.",
          "Die Tochter; die Eltern handeln als gesetzliche Vertreter in ihrem Namen.",
          "Die Bank, bis das Kind volljährig ist.",
          "Das Konto kann nicht eröffnet werden."
        ],
        richtig: 1,
        erklaerung: "Das Kind ist geschäftsunfähig, kann aber Kontoinhaberin sein. Die gesetzlichen Vertreter (bei gemeinsamem Sorgerecht beide Eltern) schließen den Vertrag im Namen des Kindes."
      }
    ]
  },

  /* ------------------------------------------------------------ 2 */
  {
    id: "legitimation",
    titel: "Legitimationsprüfung nach § 154 AO",
    kurz: "Kontenwahrheit – kein Konto unter falschem Namen",
    text: `
      <p>Die <strong>Abgabenordnung (AO)</strong> ist ein Steuergesetz. § 154 AO soll verhindern,
      dass Geld vor dem Finanzamt versteckt wird. Man spricht vom Grundsatz der
      <strong>formalen Kontenwahrheit</strong>.</p>
      <ul>
        <li>Niemand darf ein Konto auf einen <strong>falschen oder erdichteten Namen</strong> errichten
        oder errichten lassen.</li>
        <li>Die Bank muss sich vor der Kontoeröffnung Gewissheit über die <strong>Person und Anschrift jedes
        Verfügungsberechtigten</strong> verschaffen – also auch über Bevollmächtigte und gesetzliche Vertreter.</li>
        <li>Die Bank muss diese Angaben <strong>aufzeichnen</strong> und so aufbewahren, dass sie
        jederzeit <strong>Auskunft</strong> geben kann, über welche Konten eine Person verfügen darf
        (z. B. bei Anfragen der Finanzbehörden).</li>
        <li>Die Bank erfasst außerdem die <strong>steuerliche Identifikationsnummer</strong> des Kontoinhabers,
        jedes Verfügungsberechtigten und des wirtschaftlich Berechtigten (bei inländischen Personen).</li>
      </ul>
      <p>Die Daten aus der Legitimationsprüfung werden auch für das <strong>Kontenabrufverfahren</strong>
      genutzt: Behörden wie das Bundeszentralamt für Steuern können abfragen, welche Konten eine Person
      hat – nicht aber die Kontostände.</p>
      <p>In der Praxis erledigst du die Legitimationsprüfung nach AO und die Identifizierung nach dem
      Geldwäschegesetz (Station 3) <strong>in einem Arbeitsgang</strong> mit dem Ausweis.</p>
    `,
    merk: [
      "§ 154 AO = formale Kontenwahrheit: kein Konto unter falschem oder erdichtetem Namen.",
      "Zweck: steuerliche Kontrolle (Finanzamt).",
      "Geprüft werden Kontoinhaber UND alle Verfügungsberechtigten (Bevollmächtigte, gesetzliche Vertreter, Betreuer).",
      "Aufzeichnungspflicht: Die Bank muss jederzeit Auskunft geben können, wer über welches Konto verfügen darf.",
      "Steuer-ID wird erfasst; Daten fließen in das Kontenabrufverfahren ein."
    ],
    fragen: [
      {
        typ: "mc",
        frage: "Welches Ziel verfolgt § 154 AO in erster Linie?",
        optionen: [
          "Schutz der Bank vor Kreditausfällen",
          "Sicherung der steuerlichen Kontrolle durch formale Kontenwahrheit",
          "Schutz der Einlagen bei einer Bankinsolvenz",
          "Bekämpfung von unlauterem Wettbewerb"
        ],
        richtig: 1,
        erklaerung: "Die AO ist ein Steuergesetz. Konten sollen nicht unter falschem Namen geführt werden, damit die Finanzbehörden Vermögen einer Person zuordnen können."
      },
      {
        typ: "tf",
        frage: "Bei einer Kontovollmacht muss nur der Kontoinhaber legitimiert werden, nicht die bevollmächtigte Person.",
        richtig: false,
        erklaerung: "Falsch. § 154 AO verlangt Gewissheit über jeden Verfügungsberechtigten – also auch über Bevollmächtigte."
      },
      {
        typ: "fall",
        fall: "Ein Kunde möchte ein Sparkonto unter dem Namen „Max Mustermann“ eröffnen, weil er „nicht möchte, dass jemand von dem Geld erfährt“. Er heißt aber Peter Schulz.",
        frage: "Wie reagierst du?",
        optionen: [
          "Ich eröffne das Konto, weil der Kunde ja anwesend ist.",
          "Ich eröffne das Konto unter „Max Mustermann“ und notiere intern den echten Namen.",
          "Ich lehne ab: Ein Konto unter falschem oder erdichtetem Namen ist nach § 154 AO verboten.",
          "Ich eröffne es, wenn er eine Kopie seines Ausweises dalässt."
        ],
        richtig: 2,
        erklaerung: "Konten auf falsche oder erdichtete Namen sind verboten (formale Kontenwahrheit). Ein Name, der vom Ausweis abweicht, ist nicht zulässig."
      },
      {
        typ: "zuordnen",
        frage: "Muss die Person nach § 154 AO legitimiert werden?",
        kategorien: ["ja, legitimieren", "nein, nicht erforderlich"],
        paare: [
          { text: "Kontoinhaberin", k: 0 },
          { text: "Ehemann mit Kontovollmacht", k: 0 },
          { text: "Mutter als gesetzliche Vertreterin der 12-jährigen Kontoinhaberin", k: 0 },
          { text: "Freundin, die nur bei der Kontoeröffnung mitkommt und keine Vollmacht erhält", k: 1 }
        ],
        erklaerung: "Legitimiert werden alle Personen, die über das Konto verfügen dürfen. Eine bloße Begleitperson ohne Vollmacht ist nicht verfügungsberechtigt."
      }
    ]
  },

  /* ------------------------------------------------------------ 3 */
  {
    id: "geldwaesche",
    titel: "Identifizierung nach dem Geldwäschegesetz",
    kurz: "Sorgfaltspflichten, Ausweis, wirtschaftlich Berechtigter",
    text: `
      <p>Das <strong>Geldwäschegesetz (GwG)</strong> soll verhindern, dass Geld aus Straftaten in den
      legalen Wirtschaftskreislauf gelangt oder Terrorismus finanziert wird. Banken sind
      „Verpflichtete“ und müssen bei Begründung einer Geschäftsbeziehung die
      <strong>allgemeinen Sorgfaltspflichten</strong> erfüllen (§ 10 GwG):</p>
      <ol>
        <li><strong>Identifizierung</strong> des Vertragspartners (und ggf. der für ihn auftretenden Person)</li>
        <li>Abklären, ob es einen <strong>wirtschaftlich Berechtigten</strong> gibt, und diesen identifizieren</li>
        <li>Informationen über den <strong>Zweck und die angestrebte Art</strong> der Geschäftsbeziehung einholen</li>
        <li>Prüfen, ob es sich um eine <strong>politisch exponierte Person (PEP)</strong>, ein Familienmitglied
        oder eine bekanntermaßen nahestehende Person handelt (→ Station 4)</li>
        <li>Die Geschäftsbeziehung <strong>kontinuierlich überwachen</strong></li>
      </ol>
      <h3>Welche Angaben werden erhoben? (natürliche Person)</h3>
      <p>Vorname und Nachname, Geburtsort, Geburtsdatum, Staatsangehörigkeit und Wohnanschrift.</p>
      <h3>Welche Dokumente sind geeignet?</h3>
      <p>Ein <strong>gültiger amtlicher Ausweis mit Lichtbild</strong>, der die Pass- und Ausweispflicht
      erfüllt, z. B. <strong>Personalausweis</strong> oder <strong>Reisepass</strong> (bei Ausländerinnen und Ausländern
      auch anerkannte Pass- oder Passersatzpapiere). Ein <strong>Führerschein</strong> oder ein
      abgelaufener Ausweis reichen <em>nicht</em>. Daneben gibt es zugelassene Online-Verfahren,
      z. B. die Online-Ausweisfunktion (eID).</p>
      <h3>Wirtschaftlich Berechtigter</h3>
      <p>Das ist die <strong>natürliche Person</strong>, in deren Eigentum oder unter deren Kontrolle der
      Vertragspartner letztlich steht oder auf deren Veranlassung die Transaktion durchgeführt wird.
      Bei Gesellschaften zählt u. a., wer <strong>mehr als 25 %</strong> der Kapitalanteile oder Stimmrechte hält
      oder Kontrolle ausübt. Bei Privatkunden fragt die Bank: <em>„Handeln Sie auf eigene Rechnung?“</em></p>
      <h3>Aufzeichnung und Aufbewahrung</h3>
      <p>Die Bank zeichnet die Angaben auf und darf bzw. muss dafür eine <strong>vollständige Kopie des Ausweises</strong>
      anfertigen. Die Unterlagen werden <strong>fünf Jahre</strong> aufbewahrt (höchstens zehn Jahre);
      die Frist beginnt mit dem Schluss des Kalenderjahres, in dem die Geschäftsbeziehung endet.</p>
      <p class="hinweis">Kann die Bank die Sorgfaltspflichten nicht erfüllen (z. B. kein gültiger Ausweis),
      darf sie die Geschäftsbeziehung <strong>nicht begründen</strong>. Bei Verdacht auf Geldwäsche gibt sie eine
      Verdachtsmeldung an die Zentralstelle für Finanztransaktionsuntersuchungen (FIU) ab –
      ohne den Kunden darüber zu informieren.</p>
    `,
    merk: [
      "GwG-Ziel: Geldwäsche und Terrorismusfinanzierung verhindern.",
      "Allgemeine Sorgfaltspflichten: identifizieren, wirtschaftlich Berechtigten abklären, Zweck erfragen, PEP-Status prüfen, laufend überwachen.",
      "Daten: Vor- und Nachname, Geburtsort, Geburtsdatum, Staatsangehörigkeit, Wohnanschrift.",
      "Nur gültiger amtlicher Lichtbildausweis (Personalausweis, Reisepass) – kein Führerschein!",
      "Aufbewahrung: 5 Jahre (max. 10) ab Ende des Kalenderjahres, in dem die Geschäftsbeziehung endet.",
      "Pflichten nicht erfüllbar → keine Kontoeröffnung."
    ],
    fragen: [
      {
        typ: "zuordnen",
        frage: "Ist das Dokument zur Identifizierung einer deutschen Kundin geeignet?",
        kategorien: ["geeignet", "nicht geeignet"],
        paare: [
          { text: "Gültiger Personalausweis", k: 0 },
          { text: "Gültiger Reisepass", k: 0 },
          { text: "Führerschein (Kartenformat)", k: 1 },
          { text: "Personalausweis, seit drei Monaten abgelaufen", k: 1 },
          { text: "Krankenversicherungskarte mit Foto", k: 1 }
        ],
        erklaerung: "Geeignet sind nur gültige amtliche Ausweise mit Lichtbild, die die Pass- und Ausweispflicht erfüllen. Führerschein und Versichertenkarte erfüllen diese Pflicht nicht; abgelaufene Ausweise sind ungültig."
      },
      {
        typ: "mc",
        frage: "Welche Angabe gehört NICHT zu den Pflichtangaben bei der Identifizierung einer natürlichen Person nach GwG?",
        optionen: ["Geburtsort", "Staatsangehörigkeit", "Beruf und Höhe des Einkommens", "Wohnanschrift"],
        richtig: 2,
        erklaerung: "Pflichtangaben sind Vor- und Nachname, Geburtsort, Geburtsdatum, Staatsangehörigkeit und Wohnanschrift. Beruf und Einkommen können für andere Zwecke (z. B. Kredit, Zweck der Geschäftsbeziehung) erfragt werden, gehören aber nicht zu diesen Identifizierungsangaben."
      },
      {
        typ: "tf",
        frage: "Ein wirtschaftlich Berechtigter kann auch eine GmbH sein.",
        richtig: false,
        erklaerung: "Falsch. Wirtschaftlich Berechtigter ist immer eine natürliche Person – also ein Mensch, der hinter dem Vertragspartner steht."
      },
      {
        typ: "fall",
        fall: "Frau Jensen möchte ein Girokonto eröffnen. Ihr Personalausweis ist seit zwei Wochen abgelaufen, einen Reisepass hat sie nicht. Sie bietet ihren Führerschein an.",
        frage: "Was tust du?",
        optionen: [
          "Ich eröffne das Konto mit dem Führerschein.",
          "Ich eröffne das Konto mit dem abgelaufenen Ausweis, weil es nur zwei Wochen sind.",
          "Ich eröffne das Konto noch nicht und bitte sie, mit einem gültigen Ausweisdokument (oder z. B. vorläufigem Personalausweis) wiederzukommen.",
          "Ich eröffne das Konto und lasse sie den Ausweis später nachreichen."
        ],
        richtig: 2,
        erklaerung: "Die Identitätsprüfung muss vor Begründung der Geschäftsbeziehung mit einem gültigen Dokument erfolgen. Kann die Bank ihre Sorgfaltspflichten nicht erfüllen, darf sie das Konto nicht eröffnen."
      },
      {
        typ: "mc",
        frage: "Wie lange sind die Identifizierungsunterlagen nach dem GwG grundsätzlich aufzubewahren?",
        optionen: [
          "1 Jahr ab Kontoeröffnung",
          "5 Jahre ab Ende des Kalenderjahres, in dem die Geschäftsbeziehung endet",
          "5 Jahre ab Kontoeröffnung",
          "30 Jahre"
        ],
        richtig: 1,
        erklaerung: "Die Aufbewahrungsfrist beträgt fünf Jahre (längstens zehn Jahre). Sie beginnt erst mit Schluss des Kalenderjahres, in dem die Geschäftsbeziehung endet – also nicht mit der Eröffnung."
      }
    ]
  },

  /* ------------------------------------------------------------ 4 */
  {
    id: "pep",
    titel: "Politisch exponierte Personen (PEP)",
    kurz: "Wer zählt dazu, und was muss die Bank dann tun?",
    text: `
      <p>Personen mit einem <strong>hochrangigen wichtigen öffentlichen Amt</strong> haben ein erhöhtes
      Risiko, in Bestechung oder Korruption verwickelt zu werden. Deshalb gelten für sie
      <strong>verstärkte Sorgfaltspflichten</strong>. Das gilt für PEP aus dem <strong>Inland und Ausland</strong>.</p>
      <h3>Beispiele für PEP</h3>
      <ul>
        <li>Staats- und Regierungschefs, Ministerinnen und Minister, Staatssekretäre</li>
        <li>Parlamentsabgeordnete (z. B. Mitglieder des Bundestages)</li>
        <li>Mitglieder der Führungsgremien politischer Parteien</li>
        <li>Richterinnen und Richter oberster Gerichte</li>
        <li>Mitglieder der Leitungsorgane von Rechnungshöfen und Zentralbanken</li>
        <li>Botschafter, hohe Offiziere der Streitkräfte</li>
        <li>Mitglieder der Leitungsorgane staatseigener Unternehmen</li>
        <li>Führungsebene internationaler Organisationen</li>
      </ul>
      <p>Mittlere oder untere Funktionen (z. B. Sachbearbeiter im Ministerium) zählen <strong>nicht</strong> dazu.</p>
      <h3>Ebenfalls betroffen</h3>
      <ul>
        <li><strong>Familienmitglieder:</strong> Ehe- oder Lebenspartner, Kinder und deren Ehe- oder Lebenspartner, Eltern</li>
        <li><strong>Bekanntermaßen nahestehende Personen:</strong> z. B. Personen, die mit einer PEP gemeinsam
        wirtschaftlich Eigentümer eines Unternehmens sind oder enge Geschäftsbeziehungen zu ihr haben</li>
      </ul>
      <h3>Verstärkte Sorgfaltspflichten</h3>
      <ul>
        <li>Die Geschäftsbeziehung braucht die <strong>Zustimmung eines Mitglieds der Führungsebene</strong> der Bank.</li>
        <li>Die Bank klärt die <strong>Herkunft der Vermögenswerte</strong> ab.</li>
        <li>Die Geschäftsbeziehung wird <strong>verstärkt kontinuierlich überwacht</strong>.</li>
      </ul>
      <p>Scheidet eine Person aus dem Amt aus, gelten die verstärkten Pflichten noch
      <strong>mindestens zwölf Monate</strong> weiter – danach entscheidet die Bank anhand des Risikos.</p>
      <p class="hinweis">Eine PEP ist <strong>keine verdächtige Person</strong>. Das Konto darf eröffnet werden –
      nur mit erhöhter Sorgfalt. Abgefragt wird der PEP-Status meist per Selbstauskunft im
      Kontoeröffnungsantrag und über Prüflisten im Bankensystem.</p>
    `,
    merk: [
      "PEP = Person mit hochrangigem wichtigem öffentlichem Amt – im In- und Ausland.",
      "Auch Familienmitglieder (Ehe-/Lebenspartner, Kinder und deren Partner, Eltern) und nahestehende Personen sind erfasst.",
      "Verstärkte Sorgfaltspflichten: Zustimmung der Führungsebene, Herkunft der Vermögenswerte klären, verstärkte Überwachung.",
      "Nach Amtsende noch mindestens 12 Monate verstärkte Pflichten.",
      "PEP ≠ Verdacht: Konto wird eröffnet, aber mit mehr Sorgfalt."
    ],
    fragen: [
      {
        typ: "zuordnen",
        frage: "PEP-Bezug oder nicht? Ordne zu.",
        kategorien: ["PEP / Familie / nahestehend", "kein PEP-Bezug"],
        paare: [
          { text: "Bundestagsabgeordnete", k: 0 },
          { text: "Sohn eines Bundesministers", k: 0 },
          { text: "Sachbearbeiterin im Finanzamt", k: 1 },
          { text: "Ehefrau eines ausländischen Botschafters", k: 0 },
          { text: "Schulleiter einer Berufsschule", k: 1 }
        ],
        erklaerung: "PEP sind Personen mit hochrangigen öffentlichen Ämtern sowie deren Familienmitglieder und nahestehende Personen. Mittlere und untere Funktionen im öffentlichen Dienst zählen nicht dazu."
      },
      {
        typ: "mc",
        frage: "Welche Maßnahme gehört zu den verstärkten Sorgfaltspflichten bei einer PEP?",
        optionen: [
          "Das Konto darf nicht eröffnet werden.",
          "Die Kontoeröffnung braucht die Zustimmung eines Mitglieds der Führungsebene der Bank.",
          "Die Kundin muss eine Sicherheitsleistung hinterlegen.",
          "Die Bank muss sofort eine Verdachtsmeldung abgeben."
        ],
        richtig: 1,
        erklaerung: "Bei PEP muss ein Mitglied der Führungsebene zustimmen, die Herkunft der Vermögenswerte wird geklärt und die Geschäftsbeziehung verstärkt überwacht. Ein PEP-Status allein ist kein Verdachtsfall."
      },
      {
        typ: "tf",
        frage: "Nur ausländische Politikerinnen und Politiker gelten als PEP, deutsche nicht.",
        richtig: false,
        erklaerung: "Falsch. Die Regeln gelten auch für inländische PEP, z. B. Mitglieder des Bundestages oder Bundesministerinnen und Bundesminister."
      },
      {
        typ: "fall",
        fall: "Herr Carstensen war bis vor sechs Monaten Bundesminister. Jetzt möchte er bei deiner Volksbank ein Girokonto eröffnen.",
        frage: "Was gilt?",
        optionen: [
          "Er ist kein PEP mehr, weil er nicht mehr im Amt ist.",
          "Die verstärkten Sorgfaltspflichten gelten weiter, weil seit dem Ausscheiden noch keine zwölf Monate vergangen sind.",
          "Er darf kein Konto eröffnen.",
          "Er ist PEP auf Lebenszeit, die Bank darf nie eine Risikoabwägung treffen."
        ],
        richtig: 1,
        erklaerung: "Nach dem Ausscheiden aus dem Amt bleibt die Person mindestens zwölf Monate im Fokus der verstärkten Sorgfaltspflichten. Danach entscheidet die Bank risikoorientiert."
      }
    ]
  },

  /* ------------------------------------------------------------ 5 */
  {
    id: "fatca",
    titel: "FATCA-Abfrage und CRS",
    kurz: "US-Steuerpflicht und internationaler Datenaustausch",
    text: `
      <p><strong>FATCA</strong> (Foreign Account Tax Compliance Act) ist ein US-Gesetz aus dem Jahr 2010.
      Die USA wollen damit verhindern, dass US-Steuerpflichtige Vermögen im Ausland vor dem US-Finanzamt
      (IRS) verstecken.</p>
      <h3>Wer ist in den USA steuerpflichtig („US-Person“)?</h3>
      <ul>
        <li><strong>US-Staatsbürger</strong> – auch mit doppelter Staatsangehörigkeit und auch, wenn sie in Deutschland leben</li>
        <li>Personen mit einer dauerhaften Aufenthaltserlaubnis (<strong>Green Card</strong>)</li>
        <li>Personen mit einem längeren Aufenthalt in den USA (nach US-Regeln)</li>
      </ul>
      <p>Die USA besteuern ihre Bürgerinnen und Bürger <strong>nach der Staatsangehörigkeit</strong>, nicht nur nach dem Wohnsitz.
      Wer in den USA geboren wurde, ist in der Regel US-Staatsbürger.</p>
      <h3>Wie läuft das in Deutschland?</h3>
      <p>Deutschland und die USA haben ein Abkommen geschlossen. Deutsche Banken melden die Daten
      nicht direkt an die USA, sondern an das <strong>Bundeszentralamt für Steuern (BZSt)</strong>,
      das sie weitergibt.</p>
      <ul>
        <li>Bei der Kontoeröffnung gibt der Kunde eine <strong>Selbstauskunft</strong> ab (z. B. „Sind Sie US-Steuerpflichtiger?“).</li>
        <li>Die Bank achtet auf <strong>US-Indizien</strong>: Geburtsort USA, US-Staatsangehörigkeit, US-Anschrift oder -Telefonnummer,
        Daueraufträge auf ein US-Konto.</li>
        <li>Bei einer US-Person wird die US-Steuernummer (TIN) erfasst; das Konto wird gemeldet.</li>
      </ul>
      <h3>CRS – der internationale Informationsaustausch</h3>
      <p>Nach dem Vorbild von FATCA hat die OECD den <strong>Common Reporting Standard (CRS)</strong> entwickelt.
      Über 100 Staaten tauschen damit automatisch Informationen über Finanzkonten aus. Banken fragen
      deshalb bei der Kontoeröffnung auch nach der <strong>steuerlichen Ansässigkeit</strong>
      (in welchem Land ist der Kunde steuerpflichtig?). In Deutschland ist das im
      Finanzkonten-Informationsaustauschgesetz geregelt.</p>
    `,
    merk: [
      "FATCA = US-Gesetz gegen Steuerhinterziehung durch US-Personen mit Konten im Ausland.",
      "US-Person: US-Staatsbürger (auch Doppelstaatler), Green-Card-Inhaber, Personen mit längerem US-Aufenthalt.",
      "Selbstauskunft bei Kontoeröffnung + Prüfung von US-Indizien (z. B. Geburtsort USA).",
      "Meldung über das Bundeszentralamt für Steuern an die US-Steuerbehörde.",
      "CRS (OECD): automatischer Informationsaustausch über Finanzkonten zwischen vielen Staaten – Abfrage der steuerlichen Ansässigkeit."
    ],
    fragen: [
      {
        typ: "fall",
        fall: "Frau Hoffmann ist Deutsche, wurde aber in Boston (USA) geboren, weil ihre Eltern dort ein Jahr gearbeitet haben. Sie hat nie in den USA gelebt. Im FATCA-Fragebogen kreuzt sie „keine US-Person“ an.",
        frage: "Wie gehst du vor?",
        optionen: [
          "Ich übernehme ihre Angabe ohne Rückfrage.",
          "Der Geburtsort USA ist ein US-Indiz. Ich spreche sie darauf an und kläre den Status, z. B. ob sie die US-Staatsbürgerschaft besitzt bzw. aufgegeben hat (Nachweis).",
          "Ich lehne die Kontoeröffnung ab.",
          "Ich melde sie sofort an die US-Steuerbehörde."
        ],
        richtig: 1,
        erklaerung: "Wer in den USA geboren wurde, ist in der Regel US-Staatsbürger. Der Geburtsort ist ein typisches US-Indiz, das die Bank nicht übergehen darf. Die Bank klärt den Widerspruch und lässt sich ggf. Nachweise vorlegen."
      },
      {
        typ: "mc",
        frage: "An wen meldet eine deutsche Bank FATCA-relevante Kontodaten?",
        optionen: [
          "Direkt an die US-Steuerbehörde (IRS)",
          "An das Bundeszentralamt für Steuern (BZSt)",
          "An die SCHUFA",
          "An das örtliche Finanzamt des Kunden"
        ],
        richtig: 1,
        erklaerung: "Nach dem deutsch-amerikanischen Abkommen meldet die Bank an das BZSt, das die Daten an die US-Steuerbehörde weiterleitet."
      },
      {
        typ: "tf",
        frage: "Ein Kunde mit deutscher und US-amerikanischer Staatsangehörigkeit, der seit 20 Jahren in Schleswig wohnt, ist für FATCA eine US-Person.",
        richtig: true,
        erklaerung: "Richtig. Die USA besteuern nach der Staatsangehörigkeit. Doppelstaatler mit US-Pass sind US-Personen, egal wo sie wohnen."
      },
      {
        typ: "mc",
        frage: "Was ist der CRS?",
        optionen: [
          "Ein Kreditscoring-Verfahren der SCHUFA",
          "Ein OECD-Standard für den automatischen internationalen Austausch von Finanzkontendaten",
          "Ein Sicherungssystem für Einlagen",
          "Eine Sonderbedingung für Online-Banking"
        ],
        richtig: 1,
        erklaerung: "Der Common Reporting Standard (CRS) der OECD regelt den automatischen Informationsaustausch über Finanzkonten zwischen vielen Staaten. Deshalb wird die steuerliche Ansässigkeit abgefragt."
      }
    ]
  },

  /* ------------------------------------------------------------ 6 */
  {
    id: "schufa",
    titel: "SCHUFA-Auskunft",
    kurz: "Bonität prüfen – und was ist ein Basiskonto?",
    text: `
      <p>Die <strong>SCHUFA Holding AG</strong> ist eine private Auskunftei. Sie sammelt Daten darüber, wie
      Verbraucherinnen und Verbraucher ihre Zahlungsverpflichtungen erfüllen. Banken nutzen die
      Auskunft, um das <strong>Kreditrisiko</strong> einzuschätzen – beim Girokonto z. B. wegen einer möglichen
      Überziehung oder eines Dispositionskredits.</p>
      <h3>SCHUFA-Klausel bzw. SCHUFA-Hinweis</h3>
      <p>Früher unterschrieb der Kunde eine Einwilligung („SCHUFA-Klausel“). Heute (seit der
      Datenschutz-Grundverordnung) wird der Kunde mit dem <strong>SCHUFA-Hinweis</strong> darüber <strong>informiert</strong>,
      dass die Bank Daten an die SCHUFA übermittelt und dort Auskünfte einholt. Die Datenübermittlung
      stützt sich auf die gesetzlichen Erlaubnisse der DSGVO (Vertragserfüllung bzw. berechtigtes Interesse).
      Der Hinweis ist Teil der Kontoeröffnungsunterlagen.</p>
      <h3>Positiv- und Negativmerkmale</h3>
      <div class="tabelle-scroll"><table class="tabelle">
        <tr><th>Positivmerkmale (vertragsgemäßes Verhalten)</th><th>Negativmerkmale (nicht vertragsgemäßes Verhalten)</th></tr>
        <tr><td>Eröffnung eines Girokontos<br>Kreditkarte<br>Ratenkredit, der planmäßig zurückgezahlt wird<br>Handy- oder Leasingvertrag</td>
        <td>Forderung trotz Mahnung nicht bezahlt (unbestritten, fällig)<br>Kündigung eines Kredits wegen Zahlungsverzug<br>Missbrauch eines Girokontos (z. B. Kartenmissbrauch)<br>Privatinsolvenz, Eintrag im Schuldnerverzeichnis</td></tr>
      </table></div>
      <p>Aus den Daten berechnet die SCHUFA einen <strong>Score</strong> (Wahrscheinlichkeitswert). Jede Person
      kann <strong>kostenlos</strong> eine Selbstauskunft über ihre gespeicherten Daten verlangen (Art. 15 DSGVO).</p>
      <h3>Hinweis: Basiskonto</h3>
      <p>Nach dem <strong>Zahlungskontengesetz (ZKG)</strong> hat jeder Verbraucher mit rechtmäßigem Aufenthalt
      in der EU – auch Wohnungslose, Asylsuchende und Geduldete – Anspruch auf ein <strong>Basiskonto</strong>.
      Ein negativer SCHUFA-Eintrag ist <strong>kein Ablehnungsgrund</strong>. Das Basiskonto wird auf Guthabenbasis
      geführt und bietet die Grundfunktionen (Ein- und Auszahlungen, Überweisungen, Lastschriften,
      Kartenzahlungen). Das Entgelt muss angemessen sein. Abgelehnt werden darf nur aus gesetzlich
      genannten Gründen, z. B. wenn der Kunde bereits ein nutzbares Zahlungskonto in Deutschland hat.</p>
    `,
    merk: [
      "SCHUFA = private Auskunftei; Bank prüft Bonität (Kreditrisiko).",
      "Kunde wird über die Datenübermittlung an die SCHUFA informiert (SCHUFA-Hinweis; früher Einwilligung „SCHUFA-Klausel“).",
      "Positivmerkmale: vertragsgemäßes Verhalten (z. B. Girokonto, planmäßig getilgter Kredit).",
      "Negativmerkmale: z. B. unbezahlte, angemahnte Forderungen, Kreditkündigung, Privatinsolvenz.",
      "Selbstauskunft für Verbraucher kostenlos.",
      "Basiskonto (ZKG): Anspruch für alle Verbraucher mit rechtmäßigem Aufenthalt in der EU – trotz negativer SCHUFA, auf Guthabenbasis."
    ],
    fragen: [
      {
        typ: "zuordnen",
        frage: "Positiv- oder Negativmerkmal?",
        kategorien: ["Positivmerkmal", "Negativmerkmal"],
        paare: [
          { text: "Eröffnung eines Girokontos", k: 0 },
          { text: "Ratenkredit wird planmäßig zurückgezahlt", k: 0 },
          { text: "Kredit wurde wegen Zahlungsverzug gekündigt", k: 1 },
          { text: "Eröffnetes Privatinsolvenzverfahren", k: 1 },
          { text: "Abschluss eines Handyvertrags", k: 0 }
        ],
        erklaerung: "Positivmerkmale zeigen vertragsgemäßes Verhalten und Vertragsbeziehungen. Negativmerkmale zeigen Zahlungsstörungen."
      },
      {
        typ: "fall",
        fall: "Herr Petersen, 34, hat einen negativen SCHUFA-Eintrag wegen eines gekündigten Kredits. Er hat kein Konto in Deutschland und möchte bei deiner Bank ein Konto eröffnen, damit sein neuer Arbeitgeber das Gehalt überweisen kann.",
        frage: "Was ist richtig?",
        optionen: [
          "Er hat keinen Anspruch auf ein Konto, weil die SCHUFA negativ ist.",
          "Er hat Anspruch auf ein Basiskonto auf Guthabenbasis; eine Überziehungsmöglichkeit erhält er nicht.",
          "Er bekommt ein Konto mit Dispo, damit er seine Schulden begleichen kann.",
          "Er muss zuerst seinen SCHUFA-Eintrag löschen lassen."
        ],
        richtig: 1,
        erklaerung: "Nach dem Zahlungskontengesetz hat jeder Verbraucher mit rechtmäßigem Aufenthalt in der EU Anspruch auf ein Basiskonto. Eine negative SCHUFA ist kein Ablehnungsgrund. Das Konto wird auf Guthabenbasis geführt."
      },
      {
        typ: "tf",
        frage: "Verbraucher können einmal im Jahr nur gegen Gebühr Auskunft über ihre SCHUFA-Daten verlangen.",
        richtig: false,
        erklaerung: "Falsch. Nach Art. 15 DSGVO ist die Selbstauskunft (Datenkopie) kostenlos."
      },
      {
        typ: "mc",
        frage: "Warum holt die Bank bei der Eröffnung eines Girokontos eine SCHUFA-Auskunft ein?",
        optionen: [
          "Um die Identität des Kunden festzustellen",
          "Um das Kreditrisiko (z. B. bei Überziehung oder Dispo) einzuschätzen",
          "Um die US-Steuerpflicht zu prüfen",
          "Um die Einlagensicherung zu berechnen"
        ],
        richtig: 1,
        erklaerung: "Die SCHUFA-Auskunft dient der Bonitätsprüfung. Die Identität wird mit dem Ausweis festgestellt (GwG/AO)."
      }
    ]
  },

  /* ------------------------------------------------------------ 7 */
  {
    id: "agb",
    titel: "Allgemeine Geschäftsbedingungen",
    kurz: "Wie werden AGB Teil des Vertrags?",
    text: `
      <p><strong>Allgemeine Geschäftsbedingungen (AGB)</strong> sind vorformulierte Vertragsbedingungen für
      viele Verträge (§ 305 BGB). Sie regeln die Grundlagen der Geschäftsverbindung, z. B.
      Mitwirkungspflichten des Kunden, Bankgeheimnis, Kündigung, Rechnungsabschluss oder Pfandrecht.
      Die Genossenschaftsbanken verwenden einheitliche, vom Verband erarbeitete AGB.</p>
      <h3>Einbeziehung in den Vertrag (§ 305 Abs. 2 BGB)</h3>
      <p>AGB gelten nur, wenn bei Vertragsschluss</p>
      <ol>
        <li>die Bank <strong>ausdrücklich auf die AGB hinweist</strong>,</li>
        <li>der Kunde die <strong>Möglichkeit hat, in zumutbarer Weise vom Inhalt Kenntnis zu nehmen</strong>
        (z. B. AGB werden ausgehändigt oder liegen aus), und</li>
        <li>der Kunde mit der Geltung <strong>einverstanden</strong> ist (Unterschrift im Kontoeröffnungsantrag).</li>
      </ol>
      <p>Weitere Grundsätze: <strong>Individuelle Absprachen haben Vorrang</strong> vor AGB (§ 305b BGB).
      <strong>Überraschende Klauseln</strong> werden nicht Vertragsbestandteil (§ 305c BGB). Klauseln, die den Kunden
      unangemessen benachteiligen, sind <strong>unwirksam</strong> (§ 307 BGB).</p>
      <h3>Sonderbedingungen</h3>
      <p>Für einzelne Geschäftsarten gibt es zusätzlich <strong>Sonderbedingungen</strong>. Sie
      ergänzen die AGB, z. B. Bedingungen für den Überweisungsverkehr, für Lastschriften,
      für die Debitkarte (girocard), für das Online-Banking oder für den Sparverkehr.</p>
      <h3>Preis- und Leistungsverzeichnis</h3>
      <p>Die Entgelte stehen im <strong>Preisaushang</strong> (Regelsätze für das Standardgeschäft) und im
      <strong>Preis- und Leistungsverzeichnis</strong> (vollständige Übersicht). Bei einem Zahlungskonto erhält der Verbraucher
      <strong>vor Vertragsschluss</strong> zusätzlich die <strong>Entgeltinformation</strong> nach dem Zahlungskontengesetz.</p>
      <p class="hinweis"><strong>Änderungen der AGB:</strong> Der Bundesgerichtshof hat 2021 entschieden, dass Banken
      wesentliche AGB- und Preisänderungen nicht einfach durch Schweigen des Kunden („Zustimmungsfiktion“)
      wirksam machen dürfen. Für solche Änderungen braucht die Bank die <strong>aktive Zustimmung</strong> des Kunden.</p>
    `,
    merk: [
      "AGB = vorformulierte Vertragsbedingungen für viele Verträge.",
      "Einbeziehung: ausdrücklicher Hinweis + zumutbare Möglichkeit der Kenntnisnahme + Einverständnis des Kunden.",
      "Individualabrede vor AGB; überraschende Klauseln gelten nicht; unangemessene Klauseln sind unwirksam.",
      "Sonderbedingungen ergänzen die AGB für einzelne Geschäftsarten (Überweisung, Lastschrift, girocard, Online-Banking …).",
      "Entgelte: Preisaushang und Preis- und Leistungsverzeichnis; beim Zahlungskonto zusätzlich die Entgeltinformation vor Vertragsschluss."
    ],
    fragen: [
      {
        typ: "mc",
        frage: "Welche Voraussetzung gehört NICHT zur Einbeziehung von AGB in den Vertrag?",
        optionen: [
          "Ausdrücklicher Hinweis auf die AGB",
          "Möglichkeit der zumutbaren Kenntnisnahme",
          "Einverständnis des Kunden",
          "Der Kunde muss die AGB vollständig vorgelesen bekommen."
        ],
        richtig: 3,
        erklaerung: "Der Kunde muss die Möglichkeit haben, die AGB zur Kenntnis zu nehmen. Ob er sie tatsächlich liest, ist seine Sache. Vorlesen ist nicht erforderlich."
      },
      {
        typ: "zuordnen",
        frage: "Wo ist das geregelt? Ordne zu.",
        kategorien: ["AGB", "Sonderbedingungen", "Preis- und Leistungsverzeichnis"],
        paare: [
          { text: "Grundregeln der gesamten Geschäftsverbindung (z. B. Bankgeheimnis, Kündigung)", k: 0 },
          { text: "Regeln zur Nutzung der girocard", k: 1 },
          { text: "Monatliches Kontoführungsentgelt", k: 2 },
          { text: "Bedingungen für das Online-Banking", k: 1 },
          { text: "Entgelt für eine Ersatzkarte", k: 2 }
        ],
        erklaerung: "Die AGB gelten für die gesamte Geschäftsverbindung. Sonderbedingungen regeln einzelne Geschäftsarten. Entgelte stehen im Preis- und Leistungsverzeichnis."
      },
      {
        typ: "tf",
        frage: "Vereinbart die Kundin mit der Bank mündlich etwas anderes, als in den AGB steht, gilt die individuelle Absprache.",
        richtig: true,
        erklaerung: "Richtig. Individualabreden haben Vorrang vor AGB (§ 305b BGB). Aus Beweisgründen sollten sie trotzdem dokumentiert werden."
      },
      {
        typ: "fall",
        fall: "Ein Kunde unterschreibt den Kontoeröffnungsantrag. Die Bank hat ihn nicht auf die AGB hingewiesen, und sie lagen auch nirgends aus.",
        frage: "Welche Folge hat das?",
        optionen: [
          "Der gesamte Kontovertrag ist nichtig.",
          "Die AGB sind nicht Vertragsbestandteil; der Vertrag gilt im Übrigen, es gelten die gesetzlichen Vorschriften.",
          "Die AGB gelten trotzdem, weil sie bei Banken üblich sind.",
          "Der Kunde muss die AGB nachträglich akzeptieren, sonst wird das Konto gekündigt."
        ],
        richtig: 1,
        erklaerung: "Fehlen die Einbeziehungsvoraussetzungen, werden die AGB nicht Vertragsbestandteil. Der Vertrag bleibt wirksam; an die Stelle der AGB treten die gesetzlichen Vorschriften (§ 306 BGB)."
      }
    ]
  },

  /* ------------------------------------------------------------ 8 */
  {
    id: "einlagensicherung",
    titel: "Informationsbogen für den Einleger",
    kurz: "Einlagensicherung und Institutssicherung",
    text: `
      <p>Wer Geld bei einer Bank anlegt (Giro-, Tagesgeld-, Spar- oder Festgeldkonto), ist
      <strong>Einleger</strong>. Für den Fall, dass eine Bank zahlungsunfähig wird, gibt es die
      <strong>gesetzliche Einlagensicherung</strong> (Einlagensicherungsgesetz, EU-weit einheitlich).</p>
      <ul>
        <li>Gesichert sind <strong>100.000 Euro je Einleger und je Bank</strong>.</li>
        <li>In bestimmten Fällen (z. B. Erlös aus dem Verkauf einer privat genutzten Immobilie) ist
        vorübergehend ein höherer Betrag gesichert – <strong>bis zu 500.000 Euro</strong> für sechs Monate.</li>
        <li>Die Erstattung erfolgt innerhalb von <strong>sieben Arbeitstagen</strong>.</li>
      </ul>
      <h3>Der Informationsbogen</h3>
      <p>Bevor ein Vertrag über eine Einlage geschlossen wird, muss die Bank dem Kunden den
      <strong>„Informationsbogen für den Einleger“</strong> aushändigen (§ 23a KWG). Er ist EU-weit einheitlich aufgebaut
      und enthält u. a.:</p>
      <ul>
        <li>das zuständige <strong>Einlagensicherungssystem</strong> und dessen Kontaktdaten,</li>
        <li>die <strong>Sicherungsobergrenze</strong> (100.000 Euro) und Hinweise zu Gemeinschaftskonten
        (jeder Kontoinhaber ist bis 100.000 Euro geschützt),</li>
        <li>die <strong>Erstattungsfrist</strong> und die <strong>Währung</strong> der Erstattung,</li>
        <li>ggf. zusätzliche Sicherung (z. B. Institutssicherung).</li>
      </ul>
      <p>Der Kunde <strong>bestätigt den Erhalt</strong> des Informationsbogens (meist durch Unterschrift im
      Kontoeröffnungsantrag).</p>
      <h3>Genossenschaftsbanken: Institutssicherung</h3>
      <p>Die Volksbanken und Raiffeisenbanken gehören der <strong>BVR Institutssicherung GmbH</strong> an – einem
      amtlich anerkannten Einlagensicherungssystem. Zusätzlich gibt es die freiwillige
      <strong>Sicherungseinrichtung des BVR</strong>. Das Besondere: Die Institutssicherung schützt nicht nur die
      Einlagen, sondern <strong>die Bank selbst</strong>. Gerät eine Genossenschaftsbank in Schwierigkeiten, wird
      sie gestützt (z. B. saniert oder mit einer anderen Bank verschmolzen), sodass es gar nicht erst zu
      einem Entschädigungsfall kommt. Die Einleger sind damit indirekt umfassend geschützt.</p>
      <p class="hinweis">Zum Vergleich: Sparkassen haben ebenfalls eine Institutssicherung. Private Banken sind der
      Entschädigungseinrichtung deutscher Banken zugeordnet und meist zusätzlich im freiwilligen
      Einlagensicherungsfonds.</p>
    `,
    merk: [
      "Gesetzliche Einlagensicherung: 100.000 Euro je Einleger und Bank; Erstattung in 7 Arbeitstagen.",
      "Sonderfälle (z. B. Immobilienverkauf): bis 500.000 Euro für 6 Monate.",
      "Informationsbogen für den Einleger vor Vertragsschluss aushändigen – Kunde bestätigt den Erhalt.",
      "Inhalt: Sicherungssystem, Obergrenze, Gemeinschaftskonten, Erstattungsfrist, Währung, Kontakt.",
      "Genossenschaftsbanken: BVR Institutssicherung GmbH (gesetzlich anerkannt) + Sicherungseinrichtung des BVR – Schutz der Bank selbst."
    ],
    fragen: [
      {
        typ: "mc",
        frage: "Bis zu welcher Höhe sind Einlagen durch die gesetzliche Einlagensicherung grundsätzlich geschützt?",
        optionen: [
          "50.000 Euro je Konto",
          "100.000 Euro je Einleger und je Bank",
          "100.000 Euro je Konto",
          "Unbegrenzt"
        ],
        richtig: 1,
        erklaerung: "Die Grenze gilt je Einleger und je Bank – nicht je Konto. Mehrere Konten eines Kunden bei derselben Bank werden zusammengerechnet."
      },
      {
        typ: "fall",
        fall: "Herr und Frau Lorenzen haben bei ihrer Volksbank ein Gemeinschaftskonto mit 150.000 Euro Guthaben. Sonst haben sie dort kein Geld.",
        frage: "Wie hoch wäre der Schutz durch die gesetzliche Einlagensicherung?",
        optionen: [
          "100.000 Euro insgesamt",
          "75.000 Euro je Person, also die vollen 150.000 Euro",
          "50.000 Euro je Person",
          "Gemeinschaftskonten sind nicht geschützt."
        ],
        richtig: 1,
        erklaerung: "Bei Gemeinschaftskonten wird das Guthaben anteilig zugerechnet: Jeder hat 75.000 Euro, das liegt unter der Grenze von 100.000 Euro je Einleger. Beide sind voll geschützt. (Zusätzlich greift bei Genossenschaftsbanken die Institutssicherung.)"
      },
      {
        typ: "tf",
        frage: "Der Kunde muss den Erhalt des Informationsbogens für den Einleger bestätigen.",
        richtig: true,
        erklaerung: "Richtig. Der Informationsbogen wird vor Vertragsschluss übergeben, und der Einleger bestätigt den Empfang."
      },
      {
        typ: "mc",
        frage: "Was ist das Besondere an der Institutssicherung der Genossenschaftsbanken?",
        optionen: [
          "Sie schützt nur Einlagen bis 20.000 Euro.",
          "Sie schützt die Bank selbst, sodass es möglichst gar nicht zu einem Entschädigungsfall kommt.",
          "Sie gilt nur für Mitglieder der Genossenschaft.",
          "Sie ersetzt den Informationsbogen für den Einleger."
        ],
        richtig: 1,
        erklaerung: "Die Institutssicherung stützt ein Institut in Schwierigkeiten (z. B. durch Sanierung oder Fusion). Die Einleger sind dadurch indirekt geschützt – auch Nicht-Mitglieder. Der Informationsbogen muss trotzdem übergeben werden."
      }
    ]
  },

  /* ------------------------------------------------------------ 9 */
  {
    id: "kundenstammvertrag",
    titel: "Kundenstammvertrag und Kontoeröffnung",
    kurz: "Unterlagen, Unterschriften, Ablauf bis zum fertigen Konto",
    text: `
      <p>Mit dem <strong>Kundenstammvertrag</strong> (je nach Bank auch „Kundenstammdaten“ oder Teil des
      Kontoeröffnungsantrags) wird die Grundlage der gesamten Geschäftsverbindung gelegt.
      Darauf bauen die einzelnen Produktverträge (Girokonto, Sparkonto, Karte, Online-Banking …) auf.</p>
      <h3>Typischer Inhalt</h3>
      <ul>
        <li>Personalien und Legitimationsdaten, Steuer-ID</li>
        <li>Einbeziehung der AGB (und der Sonderbedingungen für die gewählten Produkte)</li>
        <li>Selbstauskünfte: wirtschaftlich Berechtigter, PEP-Status, FATCA/CRS (steuerliche Ansässigkeit)</li>
        <li>SCHUFA-Hinweis und Datenschutzhinweise</li>
        <li>Bestätigung über den Erhalt des Informationsbogens für den Einleger</li>
      </ul>
      <h3>Weitere Unterlagen und Unterschriften</h3>
      <ul>
        <li><strong>Kontoeröffnungsantrag / Kontovertrag</strong> für das konkrete Konto</li>
        <li><strong>Unterschriftsprobe</strong> (Unterschriftenkarte bzw. digital) – damit Unterschriften später geprüft werden können</li>
        <li>ggf. <strong>Kontovollmacht</strong> (mit Legitimation der bevollmächtigten Person)</li>
        <li>Entgeltinformation, Preis- und Leistungsverzeichnis, AGB und Sonderbedingungen werden ausgehändigt</li>
        <li>ggf. Anträge für girocard, Online-Banking, Freistellungsauftrag</li>
      </ul>
      <p class="hinweis"><strong>Genossenschaftsbank:</strong> Kundinnen und Kunden können zusätzlich
      <strong>Mitglied</strong> werden, indem sie Geschäftsanteile zeichnen. Für die Kontoeröffnung ist das
      aber keine Voraussetzung.</p>
      <h3>Ablauf bis zum fertigen Konto</h3>
      <ol>
        <li>Gespräch: Wunsch und Zweck des Kontos klären</li>
        <li>Geschäftsfähigkeit prüfen</li>
        <li>Legitimation (AO) und Identifizierung (GwG) mit gültigem Ausweis; Kopie anfertigen</li>
        <li>Wirtschaftlich Berechtigten, PEP-Status, FATCA/CRS abfragen</li>
        <li>SCHUFA-Hinweis geben, Auskunft einholen</li>
        <li>AGB, Sonderbedingungen, Preis- und Leistungsverzeichnis, Entgeltinformation übergeben</li>
        <li>Informationsbogen für den Einleger aushändigen, Erhalt bestätigen lassen</li>
        <li>Unterschriften: Kundenstammvertrag, Kontovertrag, Unterschriftsprobe</li>
        <li>Konto im System anlegen → IBAN; girocard und PIN werden <strong>getrennt</strong> zugeschickt,
        Zugangsdaten für Online-Banking ebenfalls gesondert</li>
      </ol>
    `,
    merk: [
      "Kundenstammvertrag = Grundlage der gesamten Geschäftsverbindung; Produktverträge bauen darauf auf.",
      "Unterschriften: Kundenstammvertrag, Kontovertrag, Unterschriftsprobe (ggf. Vollmacht).",
      "Aushändigen: AGB, Sonderbedingungen, Preis- und Leistungsverzeichnis, Entgeltinformation, Informationsbogen für den Einleger.",
      "Karte und PIN werden aus Sicherheitsgründen getrennt versandt.",
      "Mitgliedschaft in der Genossenschaft ist möglich, aber keine Voraussetzung für ein Konto."
    ],
    fragen: [
      {
        typ: "mc",
        frage: "Wozu dient die Unterschriftsprobe?",
        optionen: [
          "Sie ersetzt den Ausweis.",
          "Die Bank kann später Unterschriften auf Aufträgen mit der hinterlegten Unterschrift vergleichen.",
          "Sie ist die Zustimmung zur SCHUFA-Auskunft.",
          "Sie ist nur für Minderjährige nötig."
        ],
        richtig: 1,
        erklaerung: "Mit der Unterschriftsprobe kann die Bank die Echtheit von Unterschriften auf späteren Aufträgen prüfen."
      },
      {
        typ: "tf",
        frage: "Bei einer Genossenschaftsbank muss jede Kundin Mitglied werden, bevor sie ein Girokonto eröffnen kann.",
        richtig: false,
        erklaerung: "Falsch. Die Mitgliedschaft ist ein Angebot, aber keine Voraussetzung für die Kontoeröffnung."
      },
      {
        typ: "mc",
        frage: "Warum werden girocard und PIN getrennt versandt?",
        optionen: [
          "Weil es billiger ist",
          "Damit bei Verlust einer Sendung nicht Karte und PIN zusammen in falsche Hände geraten",
          "Weil die PIN erst nach einem Jahr gültig ist",
          "Weil das die AGB so verlangen, ohne besonderen Grund"
        ],
        richtig: 1,
        erklaerung: "Die getrennte Zusendung ist eine Sicherheitsmaßnahme gegen Missbrauch."
      },
      {
        typ: "zuordnen",
        frage: "Was passiert VOR, was NACH der Unterschrift unter den Kontovertrag?",
        kategorien: ["vorher", "nachher"],
        paare: [
          { text: "Identifizierung mit gültigem Ausweis", k: 0 },
          { text: "Informationsbogen für den Einleger aushändigen", k: 0 },
          { text: "girocard wird per Post verschickt", k: 1 },
          { text: "Hinweis auf die AGB und Möglichkeit der Kenntnisnahme", k: 0 },
          { text: "PIN-Brief wird separat zugestellt", k: 1 }
        ],
        erklaerung: "Identifizierung, AGB-Hinweis und Informationsbogen müssen vor Vertragsschluss erfolgen. Karte und PIN werden erst nach Anlage des Kontos versandt."
      }
    ]
  }
];

/* ------------------------------------------------------------------
   Fallspiel: Lea Hansen eröffnet ein Konto
   Jede Entscheidung hat genau eine richtige Option.
------------------------------------------------------------------- */
const FALLSPIEL = {
  kundin: "Lea Hansen",
  initialen: "LH",
  einleitung: `Du bist Auszubildende bzw. Auszubildender bei der (fiktiven) <strong>Volksbank Schlei eG</strong>.
    Heute kommt <strong>Lea Hansen</strong> zu dir an den Serviceplatz. Begleite sie durch die komplette
    Kontoeröffnung. An jeder Station musst du die richtige Entscheidung treffen.`,
  schritte: [
    {
      titel: "Begrüßung und Anliegen",
      rede: "Moin! Ich bin Lea Hansen, 19 Jahre alt. Ich habe gerade meine Ausbildung zur Pflegefachfrau in Schleswig angefangen und brauche ein Girokonto für mein Gehalt.",
      akte: ["Alter: 19 Jahre", "Zweck: Gehaltskonto"],
      frage: "Lea ist 19. Wie sieht es mit der Geschäftsfähigkeit aus?",
      optionen: [
        { text: "Sie ist voll geschäftsfähig und kann das Konto allein eröffnen.", richtig: true,
          feedback: "Richtig! Mit 18 Jahren ist man volljährig und voll geschäftsfähig. Die Eltern müssen nicht mitwirken." },
        { text: "Sie braucht die Zustimmung ihrer Eltern, weil sie noch in der Ausbildung ist.", richtig: false,
          feedback: "Nein. Die Ausbildung spielt für die Geschäftsfähigkeit keine Rolle. Entscheidend ist das Alter: Ab 18 ist man voll geschäftsfähig." },
        { text: "Sie ist beschränkt geschäftsfähig bis 21.", richtig: false,
          feedback: "Nein. Beschränkt geschäftsfähig ist man nur von 7 bis 17 Jahren." }
      ]
    },
    {
      titel: "Ausweis",
      rede: "Meinen Personalausweis habe ich leider zu Hause liegen lassen. Reicht auch mein Führerschein? Da ist ja ein Foto drauf.",
      akte: ["Vorgelegt: Führerschein"],
      frage: "Wie reagierst du?",
      optionen: [
        { text: "Ich akzeptiere den Führerschein, weil er ein Lichtbild hat.", richtig: false,
          feedback: "Nein. Der Führerschein erfüllt nicht die Pass- und Ausweispflicht und ist deshalb für die Identifizierung nach GwG nicht geeignet." },
        { text: "Ich erkläre freundlich, dass ich einen gültigen Personalausweis oder Reisepass brauche, und vereinbare einen neuen Termin.", richtig: true,
          feedback: "Genau! Ohne gültigen amtlichen Lichtbildausweis kann die Identifizierung nicht erfolgen – und ohne Identifizierung kein Konto." },
        { text: "Ich eröffne das Konto und sie bringt den Ausweis nächste Woche vorbei.", richtig: false,
          feedback: "Nein. Die Identifizierung muss vor Begründung der Geschäftsbeziehung erfolgen." }
      ]
    },
    {
      titel: "Zweiter Termin: Identifizierung",
      rede: "Hier ist mein Personalausweis – gültig bis 2031.",
      akte: ["Personalausweis: gültig", "Geburtsort: San Diego (USA)", "Staatsangehörigkeit: deutsch"],
      frage: "Welche Angaben erfasst du für die Identifizierung nach GwG?",
      optionen: [
        { text: "Name, Geburtsdatum und Telefonnummer", richtig: false,
          feedback: "Unvollständig. Die Telefonnummer ist keine Pflichtangabe; es fehlen Geburtsort, Staatsangehörigkeit und Wohnanschrift." },
        { text: "Vor- und Nachname, Geburtsort, Geburtsdatum, Staatsangehörigkeit, Wohnanschrift – und ich fertige eine Ausweiskopie an.", richtig: true,
          feedback: "Richtig! Das sind die Pflichtangaben für natürliche Personen. Die Ausweiskopie dient der Aufzeichnungspflicht." },
        { text: "Nur die Ausweisnummer, mehr ist nicht nötig.", richtig: false,
          feedback: "Nein. Für die Identifizierung werden die vollständigen Personalien erfasst." }
      ]
    },
    {
      titel: "Wirtschaftlich Berechtigter",
      rede: "Das Konto ist nur für mich. Mein Gehalt geht drauf, und davon bezahle ich meine Miete.",
      akte: ["Eigene Rechnung: ja", "Zweck: Gehalt, Miete, Alltag"],
      frage: "Wer ist hier wirtschaftlich Berechtigter?",
      optionen: [
        { text: "Ihr Arbeitgeber, weil er das Gehalt zahlt.", richtig: false,
          feedback: "Nein. Der Arbeitgeber zahlt nur ein. Wirtschaftlich berechtigt ist, für wessen Rechnung das Konto geführt wird." },
        { text: "Ihr Vermieter, weil die Miete abgeht.", richtig: false,
          feedback: "Nein. Der Vermieter ist nur Zahlungsempfänger." },
        { text: "Lea selbst, da sie auf eigene Rechnung handelt.", richtig: true,
          feedback: "Richtig! Lea handelt auf eigene Rechnung. Das wird im Antrag dokumentiert." }
      ]
    },
    {
      titel: "PEP-Abfrage",
      rede: "Politisch? Na ja, meine Mutter sitzt für unseren Wahlkreis im Bundestag. Ist das wichtig?",
      akte: ["Mutter: Mitglied des Bundestages"],
      frage: "Was bedeutet das für die Kontoeröffnung?",
      optionen: [
        { text: "Nichts, nur die Mutter selbst ist PEP.", richtig: false,
          feedback: "Nein. Auch Familienmitglieder einer PEP – dazu zählen Kinder – sind von den verstärkten Sorgfaltspflichten erfasst." },
        { text: "Lea ist als Kind einer PEP erfasst: verstärkte Sorgfaltspflichten, also u. a. Zustimmung der Führungsebene, Herkunft der Vermögenswerte klären, verstärkte Überwachung.", richtig: true,
          feedback: "Genau! Das Konto kann eröffnet werden – aber erst nach Zustimmung eines Mitglieds der Führungsebene und mit verstärkter Sorgfalt." },
        { text: "Das Konto darf nicht eröffnet werden.", richtig: false,
          feedback: "Nein. Ein PEP-Bezug ist kein Ablehnungsgrund und kein Verdachtsfall. Es gelten lediglich verstärkte Sorgfaltspflichten." }
      ]
    },
    {
      titel: "FATCA",
      rede: "Ach ja, ich bin in San Diego geboren – meine Eltern waren damals beruflich dort. Ein Jahr später sind wir zurück nach Deutschland. Im Fragebogen habe ich „keine US-Steuerpflicht“ angekreuzt.",
      akte: ["Geburtsort USA = US-Indiz", "Selbstauskunft: keine US-Person"],
      frage: "Wie gehst du mit dem Widerspruch um?",
      optionen: [
        { text: "Ich übernehme die Selbstauskunft, Lea wird es schon wissen.", richtig: false,
          feedback: "Nein. Der Geburtsort USA ist ein US-Indiz. Die Bank darf es nicht ignorieren." },
        { text: "Ich kläre den Status: Wer in den USA geboren ist, ist in der Regel US-Staatsbürger. Lea muss entweder eine US-Steuernummer angeben oder nachweisen, dass sie keine US-Person (mehr) ist.", richtig: true,
          feedback: "Richtig! Bei einem US-Indiz wird nachgefragt und dokumentiert. Ist Lea US-Person, wird das Konto über das BZSt gemeldet – eröffnet werden kann es trotzdem." },
        { text: "Ich lehne das Konto ab, weil US-Bürger keine Konten in Deutschland haben dürfen.", richtig: false,
          feedback: "Nein. US-Personen dürfen Konten haben; die Bank muss sie nur melden." }
      ]
    },
    {
      titel: "SCHUFA",
      rede: "Kriegen Sie jetzt Infos über mich von der SCHUFA? Ich hatte mal eine Handyrechnung vergessen, die habe ich aber nach der ersten Mahnung sofort bezahlt.",
      akte: ["SCHUFA-Auskunft: keine Negativmerkmale", "Score: gut"],
      frage: "Was sagst du Lea?",
      optionen: [
        { text: "Ich informiere sie mit dem SCHUFA-Hinweis über die Datenübermittlung. Eine sofort nach der ersten Mahnung bezahlte Rechnung ist kein Negativmerkmal – die Auskunft ist unauffällig.", richtig: true,
          feedback: "Richtig! Der Kunde wird über die Datenübermittlung an die SCHUFA informiert. Ein Negativmerkmal entsteht erst bei unbestrittenen, fälligen und trotz Mahnungen nicht bezahlten Forderungen." },
        { text: "Ohne ihre ausdrückliche Einwilligung darf die Bank gar keine SCHUFA-Auskunft einholen.", richtig: false,
          feedback: "Nicht ganz. Heute stützt sich die Datenübermittlung auf die gesetzlichen Erlaubnisse der DSGVO; der Kunde wird darüber informiert (SCHUFA-Hinweis)." },
        { text: "Wegen der vergessenen Rechnung bekommt sie nur ein Basiskonto.", richtig: false,
          feedback: "Nein. Die Auskunft ist unauffällig. Ein Basiskonto ist nur ein Hinweis für Kunden, die sonst kein Konto bekämen." }
      ]
    },
    {
      titel: "AGB und Preise",
      rede: "Muss ich das ganze Kleingedruckte jetzt lesen?",
      akte: ["AGB, Sonderbedingungen (girocard, Online-Banking, Überweisung)", "Preis- und Leistungsverzeichnis, Entgeltinformation"],
      frage: "Was ist für die wirksame Einbeziehung der AGB nötig?",
      optionen: [
        { text: "Lea muss alles in der Filiale vollständig durchlesen.", richtig: false,
          feedback: "Nein. Lea muss nur die Möglichkeit haben, die AGB zumutbar zur Kenntnis zu nehmen." },
        { text: "Ein ausdrücklicher Hinweis, die zumutbare Möglichkeit der Kenntnisnahme (z. B. Aushändigung) und Leas Einverständnis.", richtig: true,
          feedback: "Richtig! Das sind die drei Voraussetzungen nach § 305 Abs. 2 BGB. Dazu bekommt sie die Sonderbedingungen, das Preis- und Leistungsverzeichnis und die Entgeltinformation." },
        { text: "Gar nichts – AGB gelten bei Banken automatisch.", richtig: false,
          feedback: "Nein. AGB müssen ausdrücklich in den Vertrag einbezogen werden." }
      ]
    },
    {
      titel: "Einlagensicherung",
      rede: "Und wenn die Bank pleitegeht – ist mein Geld dann weg?",
      akte: ["Informationsbogen für den Einleger"],
      frage: "Was erklärst du Lea?",
      optionen: [
        { text: "Einlagen sind gesetzlich bis 100.000 Euro je Einleger geschützt. Ich händige den Informationsbogen aus, Lea bestätigt den Erhalt. Zusätzlich schützt die Institutssicherung der Genossenschaftsbanken die Bank selbst.", richtig: true,
          feedback: "Sehr gut! Genau so – inklusive Bestätigung des Erhalts." },
        { text: "Bei Genossenschaftsbanken gibt es keine gesetzliche Einlagensicherung, nur eine freiwillige.", richtig: false,
          feedback: "Nein. Die BVR Institutssicherung GmbH ist ein amtlich anerkanntes (gesetzliches) Einlagensicherungssystem. Dazu kommt die freiwillige Sicherungseinrichtung des BVR." },
        { text: "Darüber muss ich nur informieren, wenn sie mehr als 100.000 Euro anlegt.", richtig: false,
          feedback: "Nein. Der Informationsbogen ist jedem Einleger vor Vertragsschluss auszuhändigen." }
      ]
    },
    {
      titel: "Unterschriften und Abschluss",
      rede: "Okay, wo soll ich unterschreiben?",
      akte: ["Zustimmung Führungsebene (PEP): erteilt", "FATCA-Status: geklärt"],
      frage: "Welche Unterschriften brauchst du von Lea?",
      optionen: [
        { text: "Nur eine Unterschrift auf dem SCHUFA-Hinweis.", richtig: false,
          feedback: "Nein. Es fehlen u. a. Kundenstammvertrag, Kontovertrag und Unterschriftsprobe." },
        { text: "Kundenstammvertrag/Kontoeröffnungsantrag (inkl. AGB-Einverständnis und Selbstauskünften), Bestätigung des Informationsbogens und Unterschriftsprobe.", richtig: true,
          feedback: "Perfekt! Danach legst du das Konto an, Lea erhält ihre IBAN. girocard und PIN kommen getrennt per Post." },
        { text: "Keine – heute reicht ein Foto des Ausweises.", richtig: false,
          feedback: "Nein. Der Vertrag braucht Leas Unterschrift, und die Unterschriftsprobe wird für spätere Prüfungen hinterlegt." }
      ]
    }
  ]
};
