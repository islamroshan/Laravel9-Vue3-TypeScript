<template>
   <Toast />
   <ConfirmDialog   class="w-80 lg:w-3" ></ConfirmDialog>
   <component :is="activeLayout" >
        <router-view v-model:activeLayout.sync="activeLayout" />
   </component>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  activeLayout = `div`
}
</script>