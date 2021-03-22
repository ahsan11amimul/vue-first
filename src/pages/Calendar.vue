<template>
  <div class="m-auto">
      
      <h1 class="text-2xl text-center my-3">Vue Calendar</h1>
     
      <section class="flex justify-between mx-2">
           <h1 class="font-bold">{{currentMonthName}}</h1>
           <h1 class="font-bold">{{currentYear}}</h1>
      </section>
      <section class="flex my-2">
          <p class="text-center" v-for="day in days" :key="day" style="width:14.28%">{{day}}</p>
      </section>
      
      
      <section class="flex flex-wrap my-2">
         <p class="text-center" v-for="i in startDay()" :key="i" style="width:14.28%">
            
          </p>
       <p class="text-center"  v-for="num in daysInMonth(currentYear,currentMonth)" :key="num" style="width:14.28%" :class="currentDateClass(num)">{{num}}</p>
      </section>
      <section class="flex justify-between my-4">
          <button @click="prev" class="px-2 border rounded">Prev</button>
          <button  @click="next" class="px-2 border rounded">Next</button>
      </section>
  </div>
</template>

<script>
export default {
name:"Calendar",
data()
{
    return{
        days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      
        currentMonth:new Date().getMonth(),
        currentYear:new Date().getFullYear(),
    }
},
methods:{
    daysInMonth(year,month)
    {
        return new Date(year,month+1,0).getDate();
    },
    startDay()
    {
        return new Date(this.currentYear,this.currentMonth,1).getDay();
    },
    prev()
    {
         if(this.currentMonth==0)
        {
            this.currentMonth=11;
            this.currentYear--;
        }else{
             this.currentMonth--;
        }
        
    },
    next()
    {  
         if(this.currentMonth==11)
        {
            this.currentMonth=0;
            this.currentYear++;
        }else{
             this.currentMonth++;
        }
       
    },
    currentDateClass(num){
        const calendarFullDate=new Date(this.currentYear,this.currentMonth,num).toDateString();
        const currentFullDate=new Date().toDateString();
        return calendarFullDate === currentFullDate?'text-yellow-800':'';
    }
},computed:{
  currentMonthName(){
     return  new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month:'long'})}
}
}
</script>

<style>

</style>