<template>
  <div>
    <h1>People</h1>
    <hr />
    <person-filter :handleSubmit="this.handleSubmit" />

    <div class="row">
      <div class="col">
        <person-list
          :people="this.actors"
          :label="this.actorLabel"
          :role="this.actorRole"
          :deletePerson="this.deletePerson"
        />
      </div>
      <div class="col">
        <person-list
          :people="this.directors"
          :label="this.directorLabel"
          :role="this.directorRole"
          :deletePerson="this.deletePerson"
        />
      </div>
    </div>
    <router-link :to="{ name: 'PeopleCreate' }" class="btn btn-success"
      >Add person</router-link
    >
  </div>
</template>

<script>

import { ApiGet } from "../common/Api.js";
import { ApiDelete } from "../common/Api.js";
import PersonFilter from "./PersonFilter.vue";
import PersonList from "./PersonList.vue";

export default {
  components: {
    PersonFilter,
    PersonList,
  },
  data() {
    return {
      directors: [],
      actors: [],

      directorLimit: [],
      actorLimit: [],

      actorLabel: "Actors:",
      actorRole: "actor",
      directorLabel: "Directors:",
      directorRole: "director",
      deleteId:'',
      role:'',
    };
  },
  mounted() {
    ApiGet("/api/directors").then((data) => {
      this.directors = data;
      console.log("directors => ", data);
    });
    ApiGet("/api/actors").then((data) => {
      this.actors = data;
      console.log("actors => ", data);
    });
  },
  methods: {
    handleSubmit(directorLimit, actorLimit) {
      console.log("directorLimit => ", directorLimit);
      console.log("actorLimit => ", actorLimit);
      this.actorLimit = actorLimit;
      this.directorLimit = directorLimit;
      if (directorLimit) {
        const params = {
          limit: this.directorLimit,
        };

        ApiGet("/api/directors", params).then((data) => {
          this.directors = data;
        });
      }

      if (actorLimit) {
        const params = {
          limit: this.actorLimit,
        };

        ApiGet("/api/actors", params).then((data) => {
          this.actors = data;
        });
      }
    },

    deletePerson (deleteId,role) {
      this.deleteId=deleteId;
      this.role=role;
      console.log('id',this.deleteId);
      console.log('role',this.role);
      ApiDelete(`/api/${role}s/${this.deleteId}`).
      then(
      ApiGet(`/api/${this.role}s`).then((data)=>{
       if (this.role==="actor"){
          this.actors=data;
       }else{
        this.directors=data;
       };
      }));
    }
  },
};
</script>
<style></style>