<!--
/*
*  _____ _______         _                      _
* |_   _|__   __|       | |                    | |
*   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
*   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
*  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
* |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
*                                _
*              ___ ___ ___ _____|_|_ _ _____
*             | . |  _| -_|     | | | |     |  LICENCE
*             |  _|_| |___|_|_|_|_|___|_|_|_|
*             |_|
*
* IT ZPRAVODAJSTVÍ  <>  PROGRAMOVÁNÍ  <>  HW A SW  <>  KOMUNITA
*
* Tento zdrojový kód je součástí výukových seriálů na
* IT sociální síti WWW.ITNETWORK.CZ
*
* Kód spadá pod licenci prémiového obsahu a vznikl díky podpoře
* našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
* Více informací na http://www.itnetwork.cz/licence
*/
-->

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
      this.handleSubmit(this.directorLimit, this.actorLimit);
    },
  },
};
</script>
<style>
</style>