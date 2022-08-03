<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" src="../images/logo.png" />
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="toggleSidebar">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button" @click="toggleDropdown">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu scalein animation-duration-200 lg:flex origin-top " :class="showDropdown"  >
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button" @click="logout">
					<i class="pi pi-power-off"></i>
					<span>Logout</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";
    import UserAuth from "../services/UserAuth";
    import ResponseData from "../types/ResponseData";

    @Options({
        components: {},
    })
    export default class AppTopbar  extends Vue {
    showDropdown = 'hidden';
    showSidebar = 'hidden';
    toggleDropdown() {
        switch(this.showDropdown) {
            case 'hidden':
                this.showDropdown = ''
                break
            case '':
                this.showDropdown = 'hidden'
                break
        }
    }

    toggleSidebar() {
         this.$emit("toggleSidebar");
    }

    logout() {
    this.$confirm.require({
	  message: "Do you want to end this session?",
	  header: "Logout",
	  icon: "pi pi-info-circle",
	  acceptClass: "p-button-primary",
	  accept: () => {
		UserAuth.logout()
		  .then((response: ResponseData) => {
			this.$toast.add({
			  severity: "success",
			  summary: "Action Completed!",
			  detail: "Logged out successfully",
			  life: 2000,
			});
			this.$store.commit("a/isLogin", response.data)
			this.$router.push({ path: "/" })
			localStorage.clear()
		  })
		  .catch((e: Error) => {
			this.$router.push({ path: "/" })
			localStorage.clear()
		  });
	  },
	  reject: () => {
		return
	  },
	})
  }
}
</script>