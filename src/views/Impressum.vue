<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <v-card-title>Impressum</v-card-title>
        <v-card-text></v-card-text>
        <v-card-text>
          <h4>Angaben gemäß § 5 TMD</h4>
          <img :src="previewImage" class="img-fluid" width="300" />
        </v-card-text>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="td-em">{{ getInfoQuery.company_name }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="td-em">Inhaber:</td>
                  <td>{{ getInfoQuery.company_owner }}</td>
                </tr>
                <tr>
                  <td class="td-em">Adresse:</td>
                  <td>{{ getInfoQuery.company_adress }}</td>
                </tr>
                <tr>
                  <td class="td-em">E-Mail:</td>
                  <td>{{ getInfoQuery.company_email }}</td>
                </tr>
                <tr>
                  <td class="td-em">Telefon:</td>
                  <td>{{ getInfoQuery.company_phone }}</td>
                </tr>
                <tr>
                  <td class="td-em">Fax:</td>
                  <td>{{ getInfoQuery.company_fax }}</td>
                </tr>
                <tr>
                  <td class="td-em">Steuernummer:</td>
                  <td>{{ getInfoQuery.company_str }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-text>
          <h4>Haftungsausschluss ( Disclaimer)</h4>
          <h5>Haftung für Inhalte</h5>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <h5>Haftung für Links</h5>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          <h5>Urheberrecht</h5>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
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
import { bus } from "../main.js";
export default {
  data: () => ({
    output: null,
    previewImage: null
  }),
  computed: {
    ...mapGetters(["getInfoQuery"])
  },
  methods: {
    submitQuery() {
      this.$store.dispatch("SET_SEARCH_QUERY", this.getSearchQuery);
    }
  },
  mounted() {
    bus.$on("sendImageEve", previewImage => {
      this.previewImage = previewImage;
    });
  }
};
</script>
<style scoped lang="scss">
.td-em {
  font-weight: 700;
}
.uploading-image {
  display: flex;
}
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
.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,
.theme--light.v-data-table
  tbody
  tr:not(:last-child)
  td:not(.v-data-table__mobile-row) {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.v-data-table td {
  font-size: 14px;
  height: 48px;
  padding-left: 0;
}
h5 {
  font-weight: 700;
  font-size: 1.2em;
  color: #212121;
}
</style>
