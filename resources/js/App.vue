<template>
  <header>
    <Menubar
      class="
        layout-topbar
        w-full
        fixed
        h-5
        shadow-1
        bg-white
        border-noround border-none
      "
      :model="showSidebar ? null : sidebarItems"
    >
      <template #start>
        <img
          alt="logo"
          src="http://spantiklab.com/images/logo.png"
          class="logo"
		  width="220"
        />
      </template>

      <template #end v-if="showSidebar">
        <p>Welcome, Muhammad Islam</p>
      </template>
    </Menubar>
  </header>
  <main>
    <Menu
      class="layout-sidebar border-noround border-none border-right-1"
      :model="sidebarItems"
      v-if="showSidebar"
    />
    <div class="layout-main">
      <div class="layout-content">
		<div class="px-5 py-7">
			<router-view />
		</div>
      </div>
      <div
        class="layout-footer flex align-items-center justify-content-between"
      >
        <small>Copyright© <b>spantiklab.com</b> Car Rent</small>
        <small>Version 3.0</small>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useStore } from "vuex";

@Options({
  components: {},
})
export default class App extends Vue {
  showSidebar: Boolean = true;

  mounted() {
    window.onresize = () => {
      if (window.innerWidth < 960) {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    };
  }

  sidebarItems = [
    {
      label: "General",
      items: [
        {
          label: "Dashboard",
		  to: "/admin",
        },
        {
          label: "Reservations",
        },
		{
          label: "Types and Rates",
        },
        {
          label: "Extras",
        },
		{
          label: "Office Locations",
        },
        {
          label: "Users",
        },

      ],
    },
    {
      label: "Car Inventory",
      items: [
        {
          label: "Cars",
        },
        {
          label: "Availability",
        },
      ],
    },
    {
      label: "Options",
      items: [
        {
          label: "Rental Settings",
        },
        {
          label: "Payments",
        },
		{
          label: "Checkout Form",
        },
        {
          label: "Notificatins",
        },
		{
          label: "Terms",
        },
      ],
    },
    {
      label: "System Options",
      items: [
        {
          label: "General",
        },
        {
          label: "API Keys",
        },
		{
          label: "Email Settings",
        },
		{
          label: "SMS Settings",
        },
		{
          label: "Languages",
        },
		{
          label: "Login & Protection",
        },
		{
          label: "Countries",
        },
		{
          label: "Corn Jobs",
        },
      ],
    },
	{
      label: "Profile Settings",
      items: [
        {
          label: "Profile",
        },
        {
          label: "Log out",
        },
      ],
    },
  ]
}
</script>
<style scoped>
.progress-bar {
  height: 0.2rem;
}
</style>