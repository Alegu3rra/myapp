<template>
    <div id="catss">
  <h2>Cats</h2>
  <div v-for="(cat,n) in cats" v-bind:key="cat">
    <p>
    <span class="cat">{{cat}}</span> <button @click="removeCat(n)">Remove</button>
    </p>
  </div>
  
  <p>
    <input v-model="newCat"> 
    <button @click="addCat">Add Cat</button>
  </p>
  
</div>
</template>
<script>
export default {
    el:'#catss',
  data: {
    cats:[],
    newCat:null
  },
  mounted() {
    
    if(localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
  },
  methods: {
    addCat() {
      // ensure they actually typed something
      if(!this.newCat) return;
      this.cats.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x,1);
      this.saveCats();
    },
    saveCats() {
      let parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
    }
  }
}
</script>
<style>
.cat {
  width: 100px;
  display: inline-block;
}
</style>