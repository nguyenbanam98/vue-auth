<template>
  <div class="global-container">
    <div class="card login-form">
      <div class="card-body">
        <h3 class="card-title text-center">Log in to Codepen</h3>
        <div class="card-text">
          <!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
          <form @submit.prevent="handleSubmit">
            <!-- to error: add class "has-danger" -->
            <div class="form-group">
              <label for="username">Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="name"
                id="username"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
              />
            </div>
            <div class="form-group">
              <label for="phoneuser">Phone</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="phone"
                id="phoneuser"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control form-control-sm"
                id="password"
              />
            </div>
            <div class="form-group">
              <label for="password_confirm">Comfirm Password</label>
              <input
                type="password"
                v-model="password_confirm"
                class="form-control form-control-sm"
                id="password_confirm"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign Up
            </button>

            <div class="sign-up">
              Do have an account? <router-link to="/login">Sign In</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        password_confirm: this.password_confirm,
      };
     await axios.post("register", data)

    this.$router.push("/login")

    },
  },
};
</script>

<style scoped>
.global-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

form {
  padding-top: 10px;
  font-size: 14px;
  margin-top: 30px;
}

.card-title {
  font-weight: 300;
}

.btn {
  font-size: 14px;
  margin-top: 20px;
}

.login-form {
  width: 330px;
  margin: 20px;
}

.sign-up {
  text-align: center;
  padding: 20px 0 0;
}

.alert {
  margin-bottom: -30px;
  font-size: 13px;
  margin-top: 20px;
}
</style>
