<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p id="axios">{{info}}</p>
    <div id="content">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputemail" v-model="inputemail" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputpass" v-model="inputpass" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputaddress"
            placeholder="1234 Main St"
            v-model="inputadress"
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="inputcheck" v-model="inputcheck" />
            <label class="form-check-label" for="gridCheck">Check me out</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
    <FormForm></FormForm>
    <cats></cats>
  </div>
</template>

<script>
import FormForm from "./form.vue";
import cats from "./cats";
import axios from "axios";

export default {
  name: "app",
  components: {
    FormForm,
    cats
  },
  data() {
    return {
      msg: "Registro",
      info: null,
      inputemail: null,
      inputpass: null,
      inputadress: null,
      inputcheck: null
    };
  },
  mounted() {
    axios
      .get("http://192.168.1.73:8082/gato")

      .then(response => (this.info = response))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
