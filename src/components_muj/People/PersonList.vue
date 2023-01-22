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
          <tr v-for="(row, index) in this.people" :key="index" :id="row._id" :role="row.role">
            <td>{{ index + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>
              <div class="btn-group">
                <a class="btn btn-dm btn-info" >Display</a>
                <a class="btn btn-dm btn-warning">Edit</a>
                <button 
                class="btn btn-dm btn-danger" 
                @click="removePerson">Remove</button>
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
       props: ["people", "label", "role", "reloadData","handleDeletePerson"],
       data() {
        return {
          id: '',
          role:'',
        }
       },
           
           methods: {
        removePerson:function(e) {

          e.preventDefault();
          console.log('e=>',e);
                this.handleDeletePerson(this._id,this.role);                
            }
           },
        }
</script>

<style lang="scss" scoped>

</style>