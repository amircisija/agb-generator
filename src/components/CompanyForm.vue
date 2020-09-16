<template>
  <div>
    <v-card fixed>
      <v-form @submit.prevent="submitQuery">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h4 class="mb-3 info--text">Company Information</h4>
            </v-col>
            <v-col cols="12">
              <v-alert type="info">
                <p>If agb, agbundlb, 150agbundlb files have html extension</p>
                <v-checkbox
                  v-model="company_has_html"
                  :checked="company_has_html"
                  label="has .html extenstion"
                ></v-checkbox>
              </v-alert>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_name" label="Company Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_url" label="Company Url" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_owner" label="Owner" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_adress" label="Adress" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_city" label="City" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h4 class="info--text">For Impressum</h4>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_email" label="E-Mail" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_phone" label="Phone" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_fax" label="Fax" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="getInfoQuery.company_str" label="Steuernummer" required></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col class="mt-3">
              <h4 class="mb-3 info--text">Company Logo</h4>
              <input type="file" ref="myFiles" accept="image/png" @change="uploadImage" />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { bus } from "../main.js";
export default {
  name: "CompanyForm",
  data: () => ({
    valid: false,
    previewImage: null,
    company_info: {
      company_name: "",
      company_url: "",
      company_owner: "",
      company_adress: "",
      company_city: "",
      company_email: "",
      company_phone: "",
      company_fax: "",
      company_str: ""
    }
  }),
  computed: {
    company_has_html: {
      get() {
        return this.$store.state.company_has_html;
      },
      set(value) {
        this.$store.commit("updateCheckbox", value);
      }
    },
    ...mapGetters(["getInfoQuery", "getCheckboxState"])
  },
  methods: {
    submitQuery() {
      console.log(this.getSearchQuery);
      this.$store.dispatch("SET_SEARCH_QUERY", this.company_info);
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        this.sendImage(this.previewImage);
      };
    },
    sendImage(previewImage) {
      bus.$emit("sendImageEve", previewImage);
    }
  }
};
</script>
