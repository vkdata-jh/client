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
  <div>
    <div>
      <p>{{ this.label }} {{ this.people.length }}</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in this.people" :key="index"
          :id="row.id"
          :role="row.role">
            <td>{{ index + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>
              <div class="btn-group">
                <a class="btn btn-dm btn-info">Display</a>
                <a class="btn btn-dm btn-warning">Edit</a>
                <button 
                class="btn btn-dm btn-danger"
                @click="delete(this.id,this.role)">Remove</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["people", "label", "role", "reloadData"],

  methods: {
    delete(id,role) {
      e.preventDefault();
      console.log('delete e=>',e);
    }
  },
};
</script>

<style></style>