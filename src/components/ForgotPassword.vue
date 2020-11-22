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
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "ForgotPassword",
  data() {
      return {
          email: ""
      }
  },
  methods: {
      async handleSubmit() {
          const res = await axios.post('forgot', {
              email: this.email
          })

          console.log(res);
      }
  },

};
</script>

<style scoped>
.global-container{
	height:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
}

form{
	padding-top: 10px;
	font-size: 14px;
	margin-top: 30px;
}

.card-title{ font-weight:300; }

.btn{
	font-size: 14px;
	margin-top:20px;
}


.login-form{ 
	width:330px;
	margin:20px;
}

.sign-up{
	text-align:center;
	padding:20px 0 0;
}

.alert{
	margin-bottom:-30px;
	font-size: 13px;
	margin-top:20px;
}
</style>
