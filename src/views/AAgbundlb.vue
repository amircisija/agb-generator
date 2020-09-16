<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <v-card-title>150AGBundLB</v-card-title>
        <v-card-text>
          <h3 class="mb-4">
            Leistungsbeschreibung und Konditionen für die Google Adwords intelligente Anzeigenschaltung (B2B), {{ getInfoQuery.company_name }}, Inhaber: {{ getInfoQuery.company_owner }},
            {{ getInfoQuery.company_adress }}.
          </h3>
          <h3 class="mb-4">
            Vertragsgegenstand ist die Beauftragung von „{{ getInfoQuery.company_name }}" (Inhaber: {{ getInfoQuery.company_owner }}) mit der Schaltung von kostenpflichtigen Werbeanzeigen, die
            kontextbezogen (abhängig zu Suchanfragen durch Nutzer von Google) zu Suchergebnissen der Suchmaschine Google angezeigt
            (im Folgenden „Google Adwords" genannt) werden.
          </h3>

          <h3 class="mb-4">
            Der Auftraggeber benennt „{{ getInfoQuery.company_name }}" bei der Auftragserteilung die gewünschten Suchbegriffe und die gewünschte Anzeigenposition.
            Wenn keine gesonderte Umkreisreglung vertraglich festgehalten wird, schaltet {{ getInfoQuery.company_name }} die Anzeigen in dem Ort, der ausweislich des
            Auftragsformulars als Kundenort genannt ist; soweit der Kundenort durch Google nicht ausgewiesen wird, gilt die nächstgrößere Sucheinheit,
            die den Kundenort erfasst.
          </h3>

          <h3 class="mb-4">
            {{ getInfoQuery.company_name }} erstellt die sog. Adwords-Kampagne und schaltet die Werbeanzeigen zu den vereinbarten Suchbegriffen im vereinbarten
            Positionierungsbereich und vereinbarten Umkreis. Die Werbeanzeigen erscheinen, wenn einer der Suchbegriffe exakt eingegeben wird.
            Aufgrund des Geschäftsmodells und der technischen Vorgaben durch das Adwords-Programm ist es vereinzelt nicht möglich, den Umkreis
            der Anzeigenschaltung bei jeder einzelnen Anzeigenschaltung genau zu definieren. Da es sich um einen Durchschnittswert handelt, kann auch
            die Einhaltung des Positionierungsbereichs nicht bei jeder einzelnen Anzeigenschaltung gewährleistet werden. Die vertraglich vereinbarte
            Suchanzeigenposition ist eine Durchschnittsposition während der gesamten Vertragslaufzeit.
          </h3>
          <h3 class="mb-4">
            Die Schaltung von Werbeanzeigen ist abhängig vom jeweiligen täglichen Werbebudget, als Kosten für das Budget werden vom Betrag des
            Kunden 150 % investiert. Das Tagesbudget ermittelt sich wie folgt: „Betrag des Kunden + 50 % / Laufzeit / 30,4 Tage = Tagesbudget". Und der
            Anzahl sowie den Kosten für den jeweiligen Klick auf die Werbeanzeige. Im Falle der Erschöpfung des Tagesbudgets werden keine weiteren
            Werbeanzeigen geschaltet. Das eingesetzte Tagesbudget verfällt bei nicht erreichen. Die Auftragnehmerin bemüht sich durch eine intelligente
            Werbeschaltung Anzeigenschaltungen während eines ganzen Tages zu gewährleisten. Dies kann dazu führen, dass Werbeanzeigen nicht bei
            jeder passenden Suchanfrage erscheinen.
          </h3>
          <h3
            class="mb-4"
          >Das Werbeanzeigenbudget ist Teil des Auftragsentgelts und wird dem Auftraggeber nicht gesondert in Rechnung gestellt.</h3>
          <h3
            class="mb-4"
          >Allgemeine Geschäftsbedingungen (AGB) für die intelligente Anzeigenschaltung Google-Adwords (B2B), {{ getInfoQuery.company_name }}, Inhaber: {{ getInfoQuery.company_owner }}, {{ getInfoQuery.company_adress }}.</h3>
        </v-card-text>
        <v-card-text>
          <h4>I. Geltungsbereich</h4>
          <p>
            1. Diese AGB gelten zwischen {{ getInfoQuery.company_name }} und dem Auftraggeber. Aufträge werden ausschließlich auf der Grundlage nachfolgender
            Bedingungen ausgeführt. Abweichende oder entgegenstehende Bedingungen werden von {{ getInfoQuery.company_name }} nicht anerkannt, sofern {{ getInfoQuery.company_name }}
            diesen nicht ausdrücklich zugestimmt hat.
          </p>
          <p>2. Diese AGB sind zur Einsichtnahme auf der Homepage von {{ getInfoQuery.company_name }} im Internet veröffentlicht ({{ getInfoQuery.company_url }}<span v-if="getCheckboxState">/150agbundlb.html</span>
            <span v-else>/150agbundlb</span>).</p>
          <p>3. Der Auftraggeber erklärt seine gewerbliche Tätigkeit, sobald er diese AGB akzeptiert.</p>
        </v-card-text>
        <v-card-text>
          <h4>II. Leistungsumfang</h4>
          <p>
            1. Der vertraglich geschuldete Leistungsumfang sowie die preislichen Konditionen ergeben sich aus der Leistungsbeschreibung im Internet,
            dem schriftlichen Vertrag sowie den mit einbezogenen Allgemeinen Geschäftsbedingungen von {{ getInfoQuery.company_name }}.
          </p>
          <p>
            2. Im Rahmen der Anzeigenschaltung bei der Suchmaschine Google (im Folgenden „Google Adwords-Kampagne" genannt) erklärt sich der
            Auftraggeber bereit, die AGB und sonstige Richtlinien von Google Adwords gelten zu lassen. Im Fall des Verstoßes des Auftraggebers gegen
            die AGB oder Richtlinien stellt der Auftraggeber {{ getInfoQuery.company_name }} gegenüber Dritten frei.
          </p>
          <p>
            3. Im Rahmen der Google Adwords-Kampagne übernimmt {{ getInfoQuery.company_name }} mit Ausnahme von offensichtlichen Rechtsgutverletzungen keine
            Überprüfung der vereinbarten Suchbegriffe und / oder Anzeigentexte auf deren rechtliche Zulässigkeit. Es wird insoweit keine Markenrecherche
            oder Namensrechtsprüfung vorgenommen, es sei denn, entsprechendes ist ausdrücklich durch schriftliche Erklärung zwischen den Beteiligten
            vereinbart worden.
          </p>
          <p>4. Gegenstand des Auftrags ist ausschließlich die Erbringung der vertraglich vereinbarten Leistung, nicht die Erzielung eines bestimmten Erfolges.</p>
          <p>
            5. {{ getInfoQuery.company_name }} bemüht sich, gewünschte Suchbegriffe schalten zu lassen. Soweit Google die Schaltung von Suchbegriffen ablehnt, wird
            {{ getInfoQuery.company_name }} den Auftraggeber umgehend informieren und alternative Vorschläge unterbreiten. Der Bestand des zugrundeliegenden
            Auftragsverhältnisses wird durch die Nichtschaltung von Suchbegriffen durch Google nicht berührt.
          </p>
          <p>6. {{ getInfoQuery.company_name }} erbringt keine Rechtsberatung.</p>
          <p>
            7. Sofern nicht anders vertraglich vereinbart, werden die Werbeanzeigen - kompatibel für Desktop und Tablet - nur auf den deutschen Portalen
            der Werbeplattform (".de"-Domains) auf Deutsch geschaltet.
            Dies gilt nicht für Kunden aus der Schweiz, hier erfolgt die Schaltung auf (".ch"-Domains)
          </p>
          <p>
            8. Der Auftraggeber kann die Erstellung einer kostenlosen Auswertung der laufenden Google Adwords-Kampagne durch {{ getInfoQuery.company_name }} 1x pro
            Monat beantragen. Diese wird binnen 30 Kalendertagen ab Zugang des Antrages erstellt und dem Auftraggeber übersandt.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>III. Verantwortlichkeit des Auftraggebers</h4>
          <p>
            1. Der Auftraggeber verpflichtet sich, sämtliche zur Durchführung des Vertrages erforderlichen Informationen rechtzeitig nach Vertragsschluss
            {{ getInfoQuery.company_name }} zur Verfügung zu stellen. Der Auftraggeber versichert mit Vertragsunterzeichnung, zur Weitergabe der Daten berechtigt zu sein.
            Kommt der Auftraggeber seiner Verpflichtung trotz Mahnung nicht nach, die Suchbegriffe für die Anzeigenschaltung mitzuteilen, so steht
            {{ getInfoQuery.company_name }} das Recht zu, bis zur geschuldeten Mitwirkung des Auftraggebers die gemäß dem Unternehmensbereich des Auftraggebers
            passenden Suchbegriffe selbst festzulegen und zu verwenden.
          </p>
          <p>2. Der Auftraggeber bestätigt, dass die zu bewerbenden Inhalte und die Internetpräsenz nicht gegen deutsches und internationales Recht verstößt, insbesondere die Vorschriften zum Jugendschutz beachtet werden.</p>
          <p>
            3. Der Auftraggeber stellt sicher, dass die für die Werbung genutzte Ziel-URL funktionsfähig ist. Änderungen oder Fehlfunktionen an der URL
            hat der Auftraggeber {{ getInfoQuery.company_name }} unverzüglich schriftlich oder per Email mitzuteilen.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>IV. Verantwortlichkeit von {{ getInfoQuery.company_name }}</h4>
          <p>
            {{ getInfoQuery.company_name }} nutzt die vom Auftraggeber angegebenen Zieldomains für die Google Adwords-Kampagne. Es wird vor Schaltung der Google
            Adwords-Kampagne eine einmalige Funktionsprüfung der Zieldomain vorgenommen. Eine Haftung dafür, dass die Zieldomain über die erste
            Funktionsprüfung hinaus aufrufbar ist, wird nicht übernommen. Der Auftragnehmer bemüht sich um die bestmögliche Positionierung der
            Werbeanzeigentexte. Systembedingt kann jedoch keine Zusicherung erfolgen, dass eine bestimmte Positionierung der Werbeanzeigentexte
            zu einem bestimmten Zeitpunkt erreicht wird.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>V. Zustandekommen des Vertrages / Vertragslaufzeit</h4>
          <p>1. Der Vertrag kommt mit der Unterzeichnung des Bestellformulars durch den Auftraggeber zustande.</p>
          <p>
            2. Die Vertragslaufzeit und deren Beginn werden in dem Bestellformular individuell vereinbart. Sofern jedoch keine individuelle Vereinbarung
            zum Beginn der Vertragslaufzeit getroffen worden sein sollte, beginnt die Laufzeit zwei Wochen nach Unterzeichnung des Bestellformulars
            durch den Kunden. Sollte der Kunde keine Suchbegriffe (diese können dann von {{ getInfoQuery.company_name }} festgelegt werden) übermittelt haben, oder noch
            keine Freigabe der Website erteilt haben, beginnt die gebuchte Laufzeit spätestens eine Laufzeitperiode später, egal ob Leistung von
            {{ getInfoQuery.company_name }} erfolgt ist oder nicht.
          </p>
          <p>
            3. Die Vertragslaufzeit verlängert sich jeweils automatisch um die vereinbarte Vertragslaufzeit, es sei denn, das Vertragsverhältnis wird durch
            {{ getInfoQuery.company_name }} oder den Auftraggeber schriftlich gekündigt. Ist die vereinbarte Vertragslaufzeit länger als sechs Monate, so beträgt die
            Kündigungsfrist sechs Monate zum Ende der jeweiligen Vertragslaufzeit. Ist die vereinbarte Vertragslaufzeit weniger als oder gleich sechs
            Monate und länger als drei Monate, so beträgt die Kündigungsfrist drei Monate zum Ende der jeweiligen Vertragslaufzeit. Beträgt die
            Vertragslaufzeit weniger als oder gleich drei Monate, so beträgt die Kündigungsfrist vier Wochen zum Ende der jeweiligen Vertragslaufzeit.
            Bei einer Vertragslaufzeit von einem Monat oder weniger, beträgt die Kündigungsfrist drei Tage zum jeweiligen Vertragslaufzeitende.
          </p>
          <p>4. Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.</p>
          <p>
            5. Ein Widerrufsrecht besteht nicht, da es sich um einen Vertrag zwischen Unternehmern handelt und das Gesetz bei solchen Verträgen kein
            Widerrufsrecht vorsieht.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>Vl. Preise</h4>
          <p>1. Die Vergütung wird grundsätzlich individualvertraglich bestimmt. Sie ist Teil des Auftragsentgelts, das aus Vergütung und Werbeanzeigenbudget besteht (siehe hierzu näher oben unter „Leistungsbeschreibung").</p>
          <p>
            2. Das Auftragsentgelt stellt {{ getInfoQuery.company_name }} dem Auftraggeber unmittelbar nach Vertragsabschluss in Rechnung. Das Auftragsentgelt ist sofort
            nach Rechnungserhalt im Voraus fällig.
          </p>
          <p>3. Nachträgliche Änderungen des Auftragsvolumens auf Veranlassung des Auftraggebers werden isoliert berechnet.</p>
          <p>
            4. Nach Ablauf der jeweiligen Rechnungsperiode ist {{ getInfoQuery.company_name }} berechtigt, die Preise der allgemeinen Kostenentwicklung anzupassen.
            Erhöht sich der Preis, so ist der Auftraggeber berechtigt, den Vertrag innerhalb von 14 Tagen nach Eingang der Rechnung mit sofortiger Wirkung
            schriftlich zu kündigen.
          </p>
          <p>5. Die Preisangaben sind Nettoangaben.</p>
        </v-card-text>
        <v-card-text>
          <h4>VII. Auftragsbeteiligung durch Dritte</h4>
          <p>
            {{ getInfoQuery.company_name }} ist berechtigt, zur Leistungserbringung Subunternehmer einzusetzen und trägt auch in diesem Falle die alleinige Verantwortung
            für die ordnungsgemäße Vertragserfüllung. {{ getInfoQuery.company_name }} ist nicht verpflichtet, die Dienste in Person zu leisten, sondern kann diese, insbesondere bei Übertragung des Betriebes oder von Betriebsteilen, auf ein anderes geeignetes Unternehmen, das Google Adwords-Kampagnen anbietet, übertragen.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>VIII. Zahlung</h4>
          <p>
            1. Die Zahlung hat sofort nach Erhalt der Rechnung ohne jeden Abzug zu erfolgen. Sofern die Zahlung im Bankeinzugsverfahren erfolgt, so
            erklärt der Auftraggeber ausdrücklich, dass er {{ getInfoQuery.company_name }} zum Bankeinzug von dem mitgeteilten Bankkonto ermächtigt. Bei Rücklastschriften
            ist {{ getInfoQuery.company_name }} berechtigt, eine pauschale Verwaltungsgebühr von 15,00 EUR pro Rücklastschrift zu berechnen. Die Geltendmachung eines
            höheren Bearbeitungsaufwandes bei konkreter Darlegung durch {{ getInfoQuery.company_name }} bleibt vorbehalten.
          </p>
          <p>
            2. Kommt der Auftraggeber mit seinen vertraglichen Zahlungsverpflichtungen in Verzug oder treten Ereignisse ein, die seine Kreditwürdigkeit
            zweifelhaft erscheinen lassen, behält sich {{ getInfoQuery.company_name }} das Recht vor, die Leistungen zurückzubehalten, bis der gesamte Rechnungsbetrag
            ausgeglichen worden ist; ferner kann {{ getInfoQuery.company_name }} nach fruchtloser Zahlungsaufforderung mit Fristsetzung vom Vertrag zurücktreten bzw.
            Schadenersatz wegen Nichterfüllung verlangen.
          </p>
          <p>3. Für Mahnungen wird ein zusätzliches Entgelt von 10,00 EUR pro Mahnung berechnet.</p>
        </v-card-text>
        <v-card-text>
          <h4>IX. Gewährleistung</h4>
          <p>1. Der Auftraggeber hat die Vertragsgemäßheit von erbrachten Leistungen auf offensichtliche Mängel zu prüfen.</p>
          <p>
            2. Offensichtliche Mängel bezüglich der Leistung des Auftraggebers muss der Auftragnehmer innerhalb von sieben Kalendertagen ab deren
            Kenntnis rügen. Versteckte Mängel sind innerhalb der gesetzlichen Gewährleistungsfrist geltend zu machen.
          </p>
          <p>
            3. Soweit aus von Google zu vertretenden Umständen kurzfristig GoogleAdwords-Werbeanzeigen nicht geschaltet werden oder das Kundenkonto
            nicht aufrufbar ist, haftet {{ getInfoQuery.company_name }} dafür nicht.
          </p>
          <p>4. Die Gewährleistungsfrist beträgt ein Jahr.</p>
        </v-card-text>
        <v-card-text>
          <h4>X. Sonstige Haftung</h4>
          <p>1. {{ getInfoQuery.company_name }} haftet grundsätzlich nur, soweit Schäden durch vorsätzliches oder grob fahrlässiges Handeln verursacht wurden.</p>
          <p>2. Im Übrigen gelten für die Haftung von {{ getInfoQuery.company_name }} bei Fahrlässigkeit nachfolgende Regelungen:</p>
          <p>3. Schadensersatzansprüche wegen Unmöglichkeit und Verzug sind beschränkt auf die Höhe des Auftragswertes.</p>
          <p>4. Vorstehende Haftungsbeschränkungen gelten im gleichen Umfang für die Erfüllungs- und Verrichtungsgehilfen von {{ getInfoQuery.company_name }}.</p>
          <p>5. Für Sachaussagen und Produktaussagen, die von dem Auftraggeber {{ getInfoQuery.company_name }} übergeben werden, haftet dieser nicht.</p>
        </v-card-text>
        <v-card-text>
          <h4>Xl. Datenschutz</h4>
          <p>
            Der Auftraggeber erteilt {{ getInfoQuery.company_name }} mit der Annahme dieser Allgemeinen Geschäftsbedingungen bis auf Widerruf die Zustimmung zur
            Speicherung und Verarbeitung der zur Vertragserfüllung notwendigen Daten. Dem Auftraggeber ist bekannt, dass Google Daten außerhalb
            einer Verantwortlichkeit von {{ getInfoQuery.company_name }} speichert. Für eine nicht ordnungsgemäße Nutzung der Daten durch Google haftet {{ getInfoQuery.company_name }}
            nicht, außer es liegt ein grob fahrlässiges oder vorsätzliches Verhalten von {{ getInfoQuery.company_name }} vor.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>XII. Anwendbares Recht</h4>
          <p>Auf das Vertragsverhältnis findet deutsches Recht Anwendung. UN-Kaufrecht ist ausgeschlossen.</p>
        </v-card-text>
        <v-card-text>
          <h4>XIII. Erfüllungsort, Gerichtsstand</h4>
          <p>
            Erfüllungsort und Gerichtsstand ist für alle sich aus dem Vertragsverhältnis ergebenden Streitigkeiten der Vertragspartner {{ getInfoQuery.company_city }},
            sofern es sich bei den Vertragspartnern um Kaufleute, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen
            handelt.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>XIV. Salvatorische Klausel</h4>
          <p>
            Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            Die Parteien verpflichten sich, eine neue wirksame Bestimmung zu verhandeln, die die unwirksame Bestimmung ersetzt und die dem
            wirtschaftlichen Sinn der unwirksamen Bestimmung am nächsten kommt.
          </p>
        </v-card-text>
      </v-card>
      <div id="img--output">
        <img :src="output" class="img-fluid" />
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    output: null
  }),
  computed: {
    ...mapGetters(["getInfoQuery", "getCheckboxState"])
  },
  methods: {
    submitQuery() {
      this.$store.dispatch("SET_SEARCH_QUERY", this.getSearchQuery);
    }
  }
};
</script>
<style scoped lang="scss">
h4 {
  font-size: 1.4em;
  color: #212121;
  margin-bottom: 20px;
}
h3 {
  color: #212121;
}
p {
  color: #212121;
}

#capture {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-right: 300px;
  padding-bottom: 200px;
  margin: 0 auto;
}
</style>
