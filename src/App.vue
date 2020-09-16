<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped dark src="@/assets/bg--1.jpg">
      <v-list dense>
        <v-list-item class="get--bg">
          <v-list-item-content>
            <v-list-item-title class="title">Adwords</v-list-item-title>
            <v-list-item-subtitle>Partnerfirmen</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/agb">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>AGB</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/agbundlb">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>AGBundLB</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/aagbundlb">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>150AGBundLB</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/impressum">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Impressum</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="get--bg">
          <v-list-item-content>
            <v-list-item-title class="title">360</v-list-item-title>
            <v-list-item-subtitle>Partnerfirmen</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark src="@/assets/bg--1.jpg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>AGB und Impressum Generator V1</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="12">
            <CompanyForm />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-btn color="primary" @click="print()">Generate</v-btn>
      </v-container>
      <v-container ref="printMe" id="printMeCont">
        <router-view></router-view>
      </v-container>
      <v-container id="output--container" class="d-none">
        <v-row>
          <v-col cols="12" sm="12">
            <h3>Generated File</h3>
            <hr />
          </v-col>
          <v-col cols="12" sm="12">
            <canvas>
              <img :src="output" />
            </canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
var FileSaver = require("file-saver");
import CompanyForm from "./components/CompanyForm.vue";
export default {
  name: "App",
  components: {
    CompanyForm
  },
  data: () => ({
    drawer: null,
    output: null
  }),
  methods: {
    showCaptureRef() {
      console.log("this.$refs.capture: " + this.$refs.capture);
      let vc = this;
      return vc.$refs.capture;
    },
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: "dataURL"
      };
      this.output = await this.$html2canvas(el, options);

      FileSaver.saveAs(this.output, "2019-" + this.currentRouteName + ".png");
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
<style>
#output--container {
  background: #fff;
}
.get--bg {
  background: rgba(0, 0, 0, 0.11);
}
.v-navigation-drawer .v-list {
  padding-top: 0;
}
</style>