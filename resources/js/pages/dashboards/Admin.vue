<template> 
  <div>
    <Overview />
    <div class="grid mt-4">
        <div class="col-12 md:col-12 lg:col-8">
            <LatestReservations />
        </div>
        <div class="col-12 md:col-12 lg:col-4">
            <div class="today-pickup-widget"><TodayPickups /></div>
            <div class="today-return-widget mt-5"><TodayReturns /></div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Overview from '../../components/dashboard/Overview.vue'
import LatestReservations from '../../components/dashboard/LatestReservations.vue'
import TodayPickups from '../../components/dashboard/TodayPickups.vue'
import TodayReturns from '../../components/dashboard/TodayReturns.vue'
import DashboardLayout from '../../layouts/DashboardLayout.vue';
import { markRaw } from "vue";
@Options({
  components: markRaw({
    Overview,
    LatestReservations,
    TodayPickups,
    TodayReturns
  }),
})
export default class Admin extends Vue {
  created() {
    this.$emit("update:activeLayout", markRaw(DashboardLayout))
  }
}
</script>

<style>

</style>