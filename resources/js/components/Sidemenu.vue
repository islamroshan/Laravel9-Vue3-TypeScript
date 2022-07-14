<template>
  <div class="p-grid p-nogutter p-jc-between p-ai-center top-menubar">
    <div class="p-md-6">
      <div class="logo-wrapper p-d-flex p-jc-between p-ai-center">
        <div class="image-wall">
          <!-- <Image :src="settings.logo" alt="Logo Image" /> -->
        </div>
        <div
          class="sidemenu-icon-wall"
 
        >
          <Button
            type="button"
            class="p-button-text p-button-rounded"
            @click="toggleSidebar"
            ><i class="pi pi-bars"></i>
          </Button>
        </div>
      </div>
    </div>
    <div class="p-md-2 p-jc-end p-d-flex">
      <div class="quick-icons">
        <div class="menu-icon-wall">
          <Button
            type="button"
            class="p-button-text p-button-rounded"
             
            ><i class="pi pi-power-off"></i>
          </Button>
        </div>
      </div>
    </div>
  </div>

  <Sidebar v-model:visible="visibleLeft" position="top" :showCloseIcon="false">
    <MegaMenu :model="items" />
  </Sidebar>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import MegaMenu from "primevue/megamenu";

// import UserAuth from "../services/UserAuth";
import ResponseData from "../types/ResponseData";

class Props {
  settings = {
    logo: "",
  };
}

@Options({
  components: {
    MegaMenu,
  },
})
export default class Sidemenu extends Vue.with(Props) {
  visibleLeft = true;

//   logout() {
//     this.$confirm.require({
//       message: "Do you want to end this session?",
//       header: "Logout",
//       icon: "pi pi-info-circle",
//       acceptClass: "p-button-primary",
//       accept: () => {
//         UserAuth.logout()
//           .then((response: ResponseData) => {
//             this.$toast.add({
//               severity: "success",
//               summary: "Action Completed!",
//               detail: "Logged out successfully",
//               life: 2000,
//             });
//             this.$store.commit("a/isLogin", response.data);
//             this.$router.push({ path: "/" });
//             localStorage.clear();
//           })
//           .catch((e: Error) => {
//             this.$router.push({ path: "/" });
//             localStorage.clear();
//           });
//       },
//       reject: () => {
//         return;
//       },
//     });
//   }

  toggleSidebar() {
    if (this.visibleLeft) {
      this.visibleLeft = false;
    } else {
      this.visibleLeft = true;
    }
  }

  items = [
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-home",
      to: "/dashboard",
      command: () => {
        this.visibleLeft = false;
      },
    },
    {
      label: "Event's",
      icon: "pi pi-plus-circle pi-align-center",
      to: "/event",
      command: () => {
        this.visibleLeft = false;
      },
    },
    {
      label: "User's",
      icon: "pi pi-user-plus",
      to: "/user",
      command: () => {
        this.visibleLeft = false;
      },
    },
    {
      label: "Certificate",
      icon: "pi pi-bookmark",
      to: "/certificate",
      command: () => {
        this.visibleLeft = false;
      },
    },
    {
      label: "Setting's",
      icon: "pi pi-fw pi-cog",
      to: "/settings",
      command: () => {
        this.visibleLeft = false;
      },
    },
  ];
}
</script>

<style scoped>
.logo {
  max-width: 15rem;
  max-height: 5rem;
}
</style>