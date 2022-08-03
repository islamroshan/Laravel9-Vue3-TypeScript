<template>
<div class="flex align-items-center justify-content-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-80 lg:w-3">
      <div class="text-center mb-5">
          <img src="../images/logo.png" alt="Image" height="50" class="mb-3">
          <div class="text-900 text-3xl font-medium mb-3">Login</div>
          <!-- <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> -->
      </div>
    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" v-model="user.email" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" v-model="user.password" class="w-full mb-3" />

        <Button label="Sign In" @click="login"  class="w-full"></Button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserAuth from "../services/UserAuth";
import { markRaw } from "vue";
import ResponseData from "../types/ResponseData";
import LoginLayout from "../layouts/LoginLayout.vue";

class Props {
  settings = {
    logo: "",
  };
}

@Options({
  components: {

  },
})
export default class Login extends Vue.with(Props) {
  // store = useStore()
  checked = false
  user = {
    email: '',
    password: '',
  }

  created() {
    this.$emit("update:activeLayout", markRaw(LoginLayout))
  }

  login() {
   UserAuth.login(this.user)
      .then((response: ResponseData) => {
        if (response.data.success) {
          this.$toast.add({
            severity: "success",
            summary: "Login Successful!",
            detail: "Welcome to the dashboard",
            life: 3000,
          });

          // if (response.data.user.roles[0].name == "admin") {
            this.$router.push({ path: "/admin" });
          // } else if (response.data.user.roles[0].name == "manager") {
          //   this.$router.push({ path: "/manager-dashboard" });
          // } else {
          //   this.$router.push({ path: "/participant-dashboard" });
          // }

          this.$store.commit("auth/isLogin", response.data);
        } else {
          this.$toast.add({
            severity: "error",
            summary: "Incorrect Credentials!",
            detail: "Please try again",
            life: 3000,
          });
        }
      })
      .catch((e: Error) => {
        this.$toast.add({
          severity: "error",
          summary: e.message,
          detail: "Please reload the page",
          life: 3000,
        });
      });
  }
  setLayout() {
    this.$store.commit("auth/setLayout", 'Layout');
 
    this.$store.commit("auth/isLogin", true);
    //   this.store.getters["auth/layoutName"]
    // if (layout == 'Layout' ) {
    //   this.$router.push({ path: "/admin" })
    // } else {
    //   this.$router.push({ path: "/login" })
    // }

  }

  //   console.log(this.$store.getters['auth/layoutName'])
  //   // this.$store.commit("auth/setLayout", 'Layout');
  //   // console.log(this.$store.getters['auth/layoutName'])
  // }
}
</script>
 