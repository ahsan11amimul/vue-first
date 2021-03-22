<template>
 
  <div class="m-auto">
    <h3 class="text-2xl">Best {{bestplayers}} Players in the world</h3>
    <ul>
      <li class="flex justify-between mt-5" v-for="(value,index) in players" :key="index">
       <div>  {{value.title}} </div> 
       <button @click="removePlayer(index)"> X</button>
      </li>
      <input class="border rounded mt-10" v-model="newPlayer" placeholder="Enter fav player" />
      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-lg ml-4 text-white" @click="addPlayer" type="button">Add Player</button>
    </ul>
  </div>
  
</template>

<script>

export default {

name:'Player',
data()
{
  return{
  newPlayer:"",
  players:[
    {title:"Messi"},
    {title:"Ronaldo"},
    {title:"Neymar"},
  ]
  }
},methods:{
  addPlayer()
  {
      if(this.newPlayer!='')
      {
      this.players.push({title:this.newPlayer});
      this.newPlayer="";
      }else{
          alert("Player name can not be null or empty");
      }
   
  },removePlayer(index)
  {
   this.players=this.players.filter((player,i)=>i!==index);
  }
  },
  computed:{
  bestplayers()
  {
    return this.players.length;
  }
}
}
</script>

<style>

</style>