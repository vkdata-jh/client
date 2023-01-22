<template>
    <div>
<h2>People</h2>
        <hr />
    <person-filter :handleSubmit="this.handleSubmit" />

    <div class="row">
      <div class="col">
        <person-list
                     :id="this.actors._id"
                :people="this.actors"
                :label="this.actorLabel"
                :role="this.actorRole"
                    
                :deletePerson="this.handleDeletePerson"

        />
      </div>
      <div class="col">
        <person-list
        :id="this.directors._id"
        :people="this.directors"
          :label="this.directorLabel"
          :role="this.directorRole"
          
          :deletePerson="this.handleDeletePerson"
        />
      </div>
    </div>
    <router-link :to="{ name: 'PeopleCreate' }" class="btn btn-success">Add person</router-link>
    </div>
</template>

<script>
        import { ApiGet } from '../common/Api';
        import { ApiDelete } from '../common/Api';
        import PersonList from './PersonList.vue';
        import PersonFilter from './PersonFilter.vue';

    export default {

        
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
                
                reloadedData:false
            }
        },
        components: {
            PersonFilter,PersonList
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
        handleDeletePerson(id,role){
                const personId=this.id;
                const personRole=this.role;
                console.log('deletePerson=>',this.id,this.role);
                 ApiDelete(`/api/${this.personRole}s?id=${this.id}`).then((data)=>{
                        this.directors=data;
                    console.log(`${this.personRole}s`,data);
                    this.reloadedData=true;
                                      
                })
        },
        
        mounted () {
            ApiGet("/api/directors").then((data)=>{
                this.directors=data;
                console.log('directors=>',data);
            });
            ApiGet("/api/actors").then((data)=>{
                this.actors=data;
                console.log('actors=>',data);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>