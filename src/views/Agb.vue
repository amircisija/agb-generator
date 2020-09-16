<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <v-card-title>AGB</v-card-title>
        <v-card-text>
          <h3 class="mb-4">
            Allgemeine Geschäftsbedingungen {{ getInfoQuery.company_name }} für
            Suchmaschinenoptimierung (SEO), Homepageerstellung /
            Homepagegestaltung, Google Places, und Adwords Optimierung /
            Betreuung Inhaber: {{ getInfoQuery.company_owner }},
            {{ getInfoQuery.company_adress }}, für Geschäftskunden.
          </h3>
          <h4>I. Geltungsbereich</h4>
          <p>
            1. Diese Geschäftsbedingungen sind zur Einsichtnahme auf unserer
            Homepage im Internet veröffentlicht ({{
            getInfoQuery.company_url
            }}
            <span
              v-if="getCheckboxState"
            >/agb.html</span>
            <span v-else>/agb</span>)
          </p>
          <p>
            2. Auf Wunsch werden diese vor Vertragsabschluss zugesandt und sind
            Grundlage für sämtliche Angebote, Verträge, Lieferungen und
            Leistungen, die zwischen {{ getInfoQuery.company_name }},
            {{ getInfoQuery.company_adress }}, nachfolgend Dienstleister und
            deren Kunden, nachfolgend Auftraggeber, bei der Vermarktung des
            Produkts geschlossen werden.
          </p>
          <p>
            3. Die nachfolgenden Bedingungen gelten auch für zukünftige
            Geschäfte mit dem Auftraggeber, auch wenn keine nochmalige
            ausdrückliche Vereinbarung vereinbart wird.
          </p>
          <p>
            4. Der Auftraggeber erklärt seine gewerbliche Tätigkeit sobald er
            diese AGB akzeptiert.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>II./I Vorvertragliche und vertragliche Präsentationen</h4>
          <p>
            Soweit mit dem Ziel eines Vertragsabschlusses Präsentationen mit
            oder ohne Präsentationshonorar erstellt werden, so bedarf jegliche
            auch teilweise Verwendung der erbrachten Arbeiten einer vorherigen
            Zustimmung durch {{ getInfoQuery.company_name }} Entsprechendes gilt
            auch für die den Arbeitsgrundlagen zugrunde liegende Konzepte.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>II./II Leistungsumfang</h4>
          <p>
            1. Der vertragliche geschuldete Leistungsumfang ergibt sich aus den
            Leistungsbeschreibungen sowie den durch
            {{ getInfoQuery.company_name }} erstellten Verhandlungsprotokollen,
            es sei denn, der Auftraggeber widerspricht dem Verhandlungsprotokoll
            unverzüglich.
          </p>
          <p>
            2. Bei der Erstellung einer Homepage wird keine Domain-Recherche
            oder eine Zulässigkeitsprüfung der vom Auftraggeber genutzten Domain
            aus markenrechtlichen, namensrechtlichen Gesichtspunkten oder
            etwaigen sonstigen Rechtsverletzungen vorgenommen, es sei denn, eine
            Prüfung ist ausdrücklich und schriftlich zum Gegenstand des
            Vertrages gemacht worden.
          </p>
          <p>
            3. Sofern {{ getInfoQuery.company_name }} eine Homepage des
            Auftraggebers auf eigenen Servern bereithält, gewährt der
            Auftraggeber der {{ getInfoQuery.company_name }} einfache
            nicht-ausschließliche, räumlich unbegrenzte, zeitlich auf die
            Vertragslaufzeit beschränktes Nutzungsrechte an die Inhalten der
            Homepage (Texte, Bilder etc.) ein. Insbesondere ist die
            {{ getInfoQuery.company_name }} berechtigt, die Inhalte auf
            {{ getInfoQuery.company_name }} eigenen Server zu speichern,
            Back-Up's zu erstellen, die Inhalte in
            {{ getInfoQuery.company_name }} eigenen Netzwerken und im Internet
            zum Abruf bereit zu halten, öffentlich wiederzugeben und für Dritte
            zum Abruf unbeschränkt bereit zu halten.
          </p>
          <p>
            4. Sofern {{ getInfoQuery.company_name }} sich zur
            Suchmaschinenoptimierung (SEO) einer Internetseite des Auftraggebers
            bei Google verpflichtet hat, besteht die Leistung der
            {{ getInfoQuery.company_name }} in der fortlaufenden Überprüfung und
            Verbesserung der vertraglichen Internetseite hinsichtlich der
            Auffindbarkeit bei Suchmaschinen. Hierzu werden die zum
            Vertragszeitpunkt bekannten Bewertungsparameter einer Internetseite
            überprüft und - falls erforderlich - verbessert. Da der
            Suchmaschinenbetreiber Google die genauen Bewertungsparameter und
            deren Bedeutung für das Ranking einer Internetseite nur teilweise
            bekannt gibt und diese ständig ändern, ist weder eine Zusicherung
            für eine bestimmte Platzierung noch eine Verbesserung oder die
            Verhinderung einer Zurückstufung durch
            {{ getInfoQuery.company_name }} zugesichert.
            {{ getInfoQuery.company_name }} bemüht sich eine Platzierung zu den
            vertraglich vereinbarten Suchbegriffen auf der ersten Seite von
            Google zu erreichen.
          </p>
          <p>5. {{ getInfoQuery.company_name }} erbringt keine Rechtsberatung.</p>
          <p>
            6. Gegenstand des Auftrags ist die Durchführung der vereinbarten
            Leistung, nicht ein bestimmter Erfolg.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>III. Verantwortlichkeit des Auftraggebers</h4>
          <p>
            1. Der Auftraggeber verpflichtet sich, sämtliche zur Durchführung
            des Vertrages erforderlichen Informationen rechtzeitig nach
            Vertragsschluss der {{ getInfoQuery.company_name }} zur Verfügung zu
            stellen. Der Auftraggeber versichert mit Vertragsunterzeichnung, zur
            Weitergabe der Daten berechtigt zu sein.
          </p>
          <p>
            2. Der Auftraggeber bestätigt, dass die zu bewerbenden Inhalte und
            die Internetpräsenz nicht gegen deutsches und internationales Recht
            verstößt, insbesondere die Vorschriften zum Jugendschutz beachtet
            werden.
          </p>
          <p>
            3. Falls {{ getInfoQuery.company_name }} im Rahmen seines
            Homepageservices Inhalte des Auftraggebers auf
            {{ getInfoQuery.company_name }} -eigenen Servern zum Abruf
            bereithält, behält sich {{ getInfoQuery.company_name }} das Recht
            vor, Inhalte des Auftraggebers zu sperren, falls der begründete
            Verdacht besteht, dass Inhalte des Auftragsgebers gegen geltendes
            Recht verstoßen. Begründet ist ein Verdacht insbesondere dann, wenn
            {{ getInfoQuery.company_name }} durch Dritte auf eine
            Rechteverletzung hingewiesen wird.
            {{ getInfoQuery.company_name }} wird den Auftraggeber unverzüglich
            über die Sperrung informieren. Der Auftraggeber kann im Fall einer
            Sperrung, die auf dem begründeten Verdacht einer Rechtsverletzung
            beruht, keine Rechte gegenüber {{ getInfoQuery.company_name }} -
            insbesondere fristlose Kündigung oder Schadensersatz - geltend
            machen. Im Fall einer Rechtsverletzung durch Inhalte des
            Auftraggebers behält sich
            {{ getInfoQuery.company_name }} ausdrücklich das Recht zur
            fristlosen Kündigung, Schadensersatz- und oder
            Freistellungsansprüche gegenüber dem Auftraggeber vor.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>IV. Preise</h4>
          <p>1. Die Vergütung wird grundsätzlich individualvertraglich bestimmt.</p>
          <p>
            2. Die im Angebot der {{ getInfoQuery.company_name }} genannten
            Preise gelten unter dem Vorbehalt, dass die der Angebotsabgabe
            zugrunde gelegten Auftragsdaten unverändert bleiben, längstens
            jedoch einen Monat nach Eingang des Angebotes.
          </p>
          <p>
            3. Nachträgliche Änderungen des Auftragsvolumens auf Veranlassung
            des Auftraggebers werden isoliert berechnet.
          </p>
          <p>4. Im Übrigen gilt das konkret erstellte Angebot.</p>
        </v-card-text>
        <v-card-text>
          <h4>V. Auftragsbeteiligung durch Dritte</h4>
          <p>
            {{ getInfoQuery.company_name }} ist berechtigt, Arbeiten über Dritte
            (Erfüllungsgehilfen) ausführen zu lassen, so insbesondere die
            Erstellung von Werbemitteln.
          </p>
        </v-card-text>
        <v-card-text>
          <h4>Vl. Zahlung</h4>
          <p>1. Die Zahlung hat, sofern individualvertraglich keine Vorauszahlungsabrede oder sonstige Regelung getroffen wurde, sofort nach Erhalt der Rechnung ohne jeden Abzug zu erfolgen.</p>
          <p>2. Bei außergewöhnlichen Vorleistungen kann angemessene Vorauszahlung verlangt werden.</p>
          <p>3. Ist die Erfüllung des Zahlungsanspruches wegen einer nach Vertragsschluss eingetretenen oder bekanntgewordenen Verschlechterung der Vermögensverhältnisse des Auftraggebers gefährdet, so kann die {{ getInfoQuery.company_name }} Vorauszahlung verlangen, noch nicht ausgelieferte Ware zurückbehalten, sowie die Weiterarbeit einstellen. Diese Rechte stehen {{ getInfoQuery.company_name }} auch zu, wenn der Auftraggeber sich mit der Bezahlung von Lieferungen in Verzug befindet, die auf demselben rechtlichen Verhältnis beruhen.</p>
          <p>4. Der Auftraggeber kann nur mit einer unbestrittenen oder rechtskräftig festgestellten Forderung aufrechnen.</p>
          <p>5. Kommt der der Auftraggeber mit der Zahlung eines Teilbetrags aus dem Vertrag schuldhaft in Zahlungsverzug, so wird der gesamte bis zum Vertragsende offenstehende Betrag zu sofortigen Zahlung fällig.</p>
          <p>6. Für Mahnungen wir ein zusätzliches Entgelt in Höhe von 10,00 Euro berechnet.</p>
        </v-card-text>
        <v-card-text>
          <h4>VII. Lieferung</h4>
          <p>1. Bei Versandware geht die Gefahr der Versendung auf den Auftraggeber über, sobald die Sendung an ein Transportunternehmen übergeben wird.</p>
          <p>2. Liefertermine sind nur gültig, wenn sie von der {{ getInfoQuery.company_name }} ausdrücklich bestätigt werden.</p>
          <p>3. Die Nichteinhaltung von Lieferfristen ist unschädlich, wenn der Auftraggeber eigene Mitwirkungspflichten wie die Übergabe von Vertragsunterlagen, die Abgabe von Freigabeerklärungen nicht eingehalten hat.</p>
          <p>4. Gerät die {{ getInfoQuery.company_name }} mit der Lieferung in Verzug, so ist zunächst eine angemessene Nachfrist zu gewähren. Nach fruchtlosem Ablauf der Nachfrist kann der Auftraggeber vom Vertrag zurücktreten.</p>
          <p>5. {{ getInfoQuery.company_name }} steht an vom Auftraggeber angelieferten Vorlagen, Rohmaterialien und sonstigen Gegenständen ein Zurückbehaltungsrecht sowie ein vertragliches Pfandrecht zu bis zur vollständigen Erfüllung aller fälligen Forderungen aus dem Vertrag zu.</p>
        </v-card-text>
        <v-card-text>
          <h4>VIII. Eigentumsvorbehalt</h4>
          <p>Die von {{ getInfoQuery.company_name }} gelieferte Ware, Nutzungsrechte, Layoutunterlagen, Konzepte bleiben bis zur vollständigen Bezahlung Eigentum der {{ getInfoQuery.company_name }}.</p>
        </v-card-text>
        <v-card-text>
          <h4>IX. Gewährleistung</h4>
          <p>1. Der Auftraggeber hat die Vertragsgemäßheit von erbrachten Leistungen auf offensichtliche Mängel zu prüfen.</p>
          <p>2. Beanstandungen an bei Prüfung der Arbeit offensichtlicher Mängel sind nur innerhalb von sieben Tagen nach Empfang / Kenntnis der Ware / Leistung zulässig. Versteckte Mängel sind innerhalb der gesetzlichen Gewährleistungsfrist geltend zu machen.</p>
          <p>3. Die Gewährleistungsfrist beträgt ein Jahr.</p>
          <p>4. Schadensersatzansprüche des Auftraggebers aus positiver Forderungsverletzung und aus der Verletzung von Pflichten bei Vertragsverhandlungen sind ausgeschlossen, der Dienstleister haftet nicht für entgangenen Gewinn, ausgebliebene Einsparungen, Schäden aus Ansprüchen Dritter und sonstige mittelbare Schäden und Folgeschäden.</p>
          <p>5. Schadenersatzansprüche des Auftraggebers wegen Verzuges oder Unmöglichkeit der Leistung vom Dienstleister sind beschränkt auf den Wert desjenigen Teils der Leistung, welcher wegen der Unmöglichkeit bzw. des Verzuges nicht wie vertraglich vorgesehen verwendet werden kann.</p>
        </v-card-text>
        <v-card-text>
          <h4>X. Sonstige Haftung</h4>
          <p>1. {{ getInfoQuery.company_name }} haftet grundsätzlich nur, soweit Schäden durch vorsätzliches oder grob fahrlässiges Handeln verursacht wurden.</p>
          <p>2. Im Übrigen gelten für die Haftung der {{ getInfoQuery.company_name }} bei Fahrlässigkeit nachfolgende Regelungen:</p>
          <p>3. Schadensersatzansprüche wegen Unmöglichkeit und Verzug sind beschränkt auf die Höhe des Auftragswertes.</p>
          <p>4. Vorstehende Haftungsbeschränkungen gelten im gleichen Umfang für die Erfüllungs- und Verrichtungsgehilfen der {{ getInfoQuery.company_name }}.</p>
          <p>5. Für Sachaussagen und Produktaussagen, die von dem Auftraggeber {{ getInfoQuery.company_name }} übergeben werden, haftet diese nicht.</p>
        </v-card-text>
        <v-card-text>
          <h4>Xl. Datenschutz</h4>
          <p>Der Auftraggeber erteilt bis auf Widerruf mit der Annahme der Geschäftsbedingungen die Zustimmung zur Speicherung und Verarbeitung der zur Vertragserfüllung notwendigen Daten. Dem Auftraggeber ist bekannt, dass Google Daten außerhalb einer Verantwortlichkeit von {{ getInfoQuery.company_name }} speichert. Für eine nicht ordnungsgemäße Nutzung der Daten durch Google haftet {{ getInfoQuery.company_name }} nicht, außer es liegt ein grob fahrlässiges oder vorsätzliches Verhalten der {{ getInfoQuery.company_name }} vor.</p>
        </v-card-text>
        <v-card-text>
          <h4>XII. Urheberrecht</h4>
          <p>1. Soweit Texte, Fotos oder sonstige dem UrhG unterfallende Werke oder Werkteile durch den Auftraggeber zur Einarbeitung überreicht werden, besteht keine urheberrechtliche Prüfungspflicht der {{ getInfoQuery.company_name }}, es sei denn, ein anderes ist vertraglich vereinbart worden. Werden von dem Auftraggeber Werke oder Werkteile zur Einarbeitung durch die {{ getInfoQuery.company_name }} unter Verstoß gegen das UrhG gestellt, so stellt der Auftraggeber {{ getInfoQuery.company_name }} im Innenverhältnis von Haftungsansprüchen Dritter frei.</p>
          <p>2. Die von {{ getInfoQuery.company_name }} selbst gelieferten Texte, Grafiken, Bilder und sonstige Werkarten sind urheberrechtlich geschützt.</p>
          <p>3. Die Werke werden zur Vertragsdauer im Sinne einer einfachen Lizenz Verfügung gestellt. Soweit individualvertraglich nicht anders geregelt, wird ein nicht ausschließliches Nutzungsrecht eingeräumt, welches auf die Dauer der Werbemaßnahme begrenzt ist. Eine weitergehende Nutzung, Vervielfältigung oder Veränderung ist nur mit schriftlicher Genehmigung durch {{ getInfoQuery.company_name }} gestattet.</p>
          <p>4. {{ getInfoQuery.company_name }} kann auf erstellte Internetpräsenzen in geeigneter Weise auf die eigene Firma hinweisen. Dieses erfolgt durch eine Linksetzung ("powerd by {{ getInfoQuery.company_name }}").</p>
          <p>5. Die vorstehenden Regelungen gelten sinngemäß auch für Erzeugnisse, die eine Werkhöhe im Sinne des UrhG nicht erreichen.</p>
        </v-card-text>
        <v-card-text>
          <h4>XIII. Anwendbares Recht</h4>
          <p>Auf das Vertragsverhältnis findet deutsches Recht Anwendung. UN-Kaufrecht ist ausgeschlossen.</p>
        </v-card-text>
        <v-card-text>
          <h4>XIV. Erfüllungsort, Gerichtsstand, Rechtsform</h4>
          <p>1. {{ getInfoQuery.company_name }} behält sich vor, die Firmierung und / oder die Rechtsform zu ändern. Der Auftraggeber wird hierüber informiert.</p>
        </v-card-text>
        <v-card-text>
          <h4>XV. Vertragslaufzeit</h4>
          <p>1. Die Vertragslaufzeit wird bei Auftragserteilung regelmäßig individuell vereinbart und / oder schriftlich bestätigt.</p>
          <p>2. Die Vertragslaufzeit verlängert sich automatisch um die vereinbarte Vertragslaufzeitdauer, es sei denn, das Vertragsverhältnis wird durch {{ getInfoQuery.company_name }} oder den Auftraggeber schriftlich gekündigt. Ist die vereinbarte Vertragslaufzeit länger als sechs Monate, so beträgt die Kündigungsfrist sechs Monate bis zum Ende der Vertragslaufzeit. Ist die vereinbarte Vertragslaufzeit weniger oder gleich sechs Monate und länger als drei Monate, so beträgt die Kündigungsfrist drei Monate bis zum Ende der Vertragslaufzeit. Beträgt die Vertragslaufzeit weniger als drei Monate, so beträgt die Kündigungsfrist vier Wochen bis zum Ende der Vertragslaufzeit. Bei einer Vertragslaufzeit von einem Monat oder weniger, beträgt die Kündigungsfrist drei Tage bis zum Vertragslaufzeitende.</p>
          <p>3. Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.</p>
        </v-card-text>
        <v-card-text>
          <h4>XVI. Salvatorische Klausel</h4>
          <p>Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die Parteien verpflichten sich, eine unwirksame Bestimmung durch eine wirksame Bestimmung zu ersetzen, die dem wirtschaftlichen Sinn der unwirksamen Bestimmung am nächsten kommt.</p>
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
