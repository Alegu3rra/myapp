<template>
<div id="nombre">
  <p>
    Mi nombre es <input v-model="name">
    y tengo <input v-model="age"> años.
  </p>
  <p>
    <button @click="persist">Guardar</button>
  </p>
</div>
</template>

<script>
export default {
  el: 'nombre',
data: {
    name: '',
    age: 0
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.age) {
      this.age = localStorage.age;
    }
  },
  methods: {
    persist() {
      localStorage.name = this.name;
      localStorage.age = this.age;
      console.log('imaginen que estoy haciendo más cosas...');
    }
  }
};
</script>

<style>

</style>
