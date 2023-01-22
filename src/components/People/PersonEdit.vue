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
    <h1>Add Person</h1>
    <hr />
    <div v-if="this.sent">
      <div v-if="this.success">
        <div class="alert alert-success">Person saved successfully.</div>
      </div>
      <div v-else>
        <div class="alert alert-danger">Error saving person.</div>
      </div>
    </div>
    <form @submit="handleSubmit">
      <div class="form-group mb-2">
        <label for="name">Name:</label>
        <input
          class="form-control"
          type="text"
          placeholder="Enter the full name"
          v-model="personName"
          required
          id="name"
        />
      </div>
      <div class="form-group mb-2">
        <label for="birthdate">Date of birth:</label>
        <input
          type="date"
          class="form-control"
          required
          v-model="birthDate"
          id="birthDate"
        />
      </div>
      <div class="form-group mb-2">
        <label for="origin">Country of origin:</label>
        <input
          class="form-control"
          placeholder="Enter the country of origin"
          v-model="country"
          required
          id="origin"
        />
      </div>
      <div class="form-group mb-2">
        <label>Biography:</label>
        <input
          type="textarea"
          class="form-control"
          name="biography"
          placeholder="Write a biography"
          rows="5"
          minlength="10"
          spellcheck="false"
          v-model="biography"
          required
        />
      </div>
      <div class="form-group mb-2">
        <label>Role:</label>
        <div class="form-check mb-2">
          <label class="form-check-label" for="director">Director</label>
          <input
            class="form-check-input"
            type="radio"
            v-model="personRole"
            value="director"
            id="director"
          />
        </div>
        <div class="form-check mb-2">
          <label class="form-check-label" for="actor">Actor</label>
          <input
            class="form-check-input"
            type="radio"
            v-model="personRole"
            value="actor"
            id="actor"
          />
        </div>
      </div>

      <input type="submit" class="btn btn-primary" value="Save" />
    </form>
  </div>
</template>

<script>
import { ApiPost } from "../common/Api.js";

export default {
  data() {
    return {
      personName: "",
      birthDate: "",
      country: "",
      biography: "",
      personRole: "",

      sent: false,
      success: false,
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      const body = {
        name: this.personName,
        birthDate: this.birthDate,
        country: this.country,
        biography: this.biography,
        role: this.personRole,
      };

      ApiPost("/api/people/", body)
        .then((data) => {
          console.log(data);
          this.sent = true;
          this.success = true;
        })
        .catch((error) => {
          console.error(error);
          this.sent = true;
          this.success = false;
        });
    },
  },
};
</script>
<style></style>