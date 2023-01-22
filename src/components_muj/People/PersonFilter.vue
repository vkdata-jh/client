<template>
    <div class="row">
      <div class="col">
        <form @submit="filter">
          <label for="actorLimit">Limit actors:</label>
  
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Not specified"
              v-model.number="actorLimit"
              type="number"
              id="actorLimit"
            />
            <input
              class="btn btn-secondary float-right"
              type="submit"
              value="Filter actors"
            />
          </div>
        </form>
      </div>
      <div class="col">
        <form @submit="filter">
          <label for="directorLimit">Limit directors:</label>
  
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Not specified"
              v-model.number="directorLimit"
              type="number"
              id="directorLimit"
            />
          <input
            class="btn btn-secondary float-right"
            type="submit"
            value="Filter directors"
          />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {

    props: ["handleSubmit"],
  data() {
    return {
      directorLimit: "",
      actorLimit: "",
    };
  },
  methods: {
    filter: function (e) {
      
      e.preventDefault();
      console.log('filter e=>',e);
      this.handleSubmit(this.directorLimit, this.actorLimit);
    },
  },

  }
  </script>
  <style>
  </style>
  