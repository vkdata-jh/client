<template>
    <div>
        <h2>Add Person</h2>
   <div v-if=this.sent>
        <div v-if=this.success>
            <div class="alert alert-success">Person saved successfully.</div>
        </div>
        <div v-else>
            <div class="alert alert-danger">Error saving person.</div>
        </div>
    </div>
    <form class="container" @submit="handleSubmit">
        <div class="row d-md-inline-flex">
            <div class="col-6 mb-2">
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
            <div class="col-6 mb-2">
                <label for="birthdate">Date of birth:</label>
                <input type="date" class="form-control" required v-model="birthDate" id="birthDate" />
            </div>
        </div>
<div class="row d-md-inline-flex">
        <div class="col-6 mb-2">
            <label for="origin">Country of origin:</label>
            <input
            class="form-control"
            placeholder="Enter the country of origin"
            v-model="country"
            required
            id="origin"
            />
        </div>
        <div class="col-6 mb-2">
            <label>Biography:</label>
            <input
                type="textarea"
                class="form-control"
                name="biography"
                placeholder="Write a biography"
                rows="5"
                cols="10"
                minlength="10"
                spellcheck="false"
                v-model="biography"
                required
            />
        </div>
     </div>
      <div class="row">
            <div class="col-6 mb-2 d-md-inline-flex justify-content-center py-2">
                <label class="my-2 mx-2">Role:</label>
                <div class="mb-2 mx-2">
                    <label class="form-check-label my-2 mx-2" for="director">Director</label>
                    <input
                        class="form-check-input"
                        type="radio"
                        v-model="personRole"
                        value="director"
                        id="director"
                    />
                </div>
                <div class="mb-2 mx-2">
                    <label class="form-check-label my-2 mx-2" for="actor">Actor</label>
                    <input
                        class="form-check-input"
                        type="radio"
                        v-model="personRole"
                        value="actor"
                        id="actor"
                    />
                </div>
            </div>
        </div>

        <div class="col-6">
            <input type="submit" class="btn btn-primary" value="Save" />            
        </div>
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
    handleSubmit:function (e) {
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
    }
  },

    }
</script>

<style lang="scss" scoped>

 .container {
    
    position: relative;
    width:80vw;
    padding:10px;
    margin:5px auto;
    .row {
        width: 95%;
    }
 }
</style>