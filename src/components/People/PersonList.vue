

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
          >
            <td>{{ index + 1 }}</td>
            <td>{{ row.name }}</td>
            <td >
              <div class="btn-group"         >
                <a class="btn btn-dm btn-info">Display</a>
                <a class="btn btn-dm btn-warning">Edit</a>
                <button 
                class="btn btn-dm btn-danger"
                @click="deletePerson(row._id,row.role)">Remove</button>
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
  props: ["people", "label", "role", "reloadData","deletePerson"],
  data() {
    return {
     
    }
  },

};
</script>

<style></style>