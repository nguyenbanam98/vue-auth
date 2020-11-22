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
            <div v-if="error" class="alert alert-danger" role="alert">
                {{error}}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control form-control-sm"
                id="exampleInputPassword1"
              />
              <router-link to="/forgot" style="float:right;font-size:12px;"
                >Forgot password?</router-link
              >
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign in
            </button>

            <div class="sign-up">
              Don't have an account?
              <router-link to="/register">Create One</router-link>
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const res = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", res.data.token);
        this.$store.dispatch("user", res.data.user);
        this.$router.push("/");
      } catch (e) {
          this.error = e
      }
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
