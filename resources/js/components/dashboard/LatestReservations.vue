<template> 
    <Panel header="Latest Reservations" class="shadow-1 border-round latest-reservations" :toggleable="true" :collapsed="collapaseReservationPanel">
        <Timeline :value="reservations" align="alternate" class="customized-timeline px-5 py-7 ">
            
            <template #content="slotProps">
                <Card class="shadow-2">
                    <template #title>
                        {{slotProps.item.status}}
                    </template>
                    <template #subtitle>
                        {{slotProps.item.date}}
                    </template>
                    <template #content>
                        <!-- <img v-if="slotProps.item.image" src="../../images/logo.png" :alt="slotProps.item.name" width="200" class="shadow-2" /> -->
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        <Button label="Read more" class="p-button-text"></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </Panel>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class LatestReservations extends Vue {
    collapaseReservationPanel = false;
     created() {
        window.addEventListener("resize", this.onResize);
        if (window.innerWidth < 960) {
            this.collapaseReservationPanel = true
        } else {
            this.collapaseReservationPanel = false
        }
  }

  onResize() {
      if (window.innerWidth < 960) {
        this.collapaseReservationPanel = true
      } else {
        this.collapaseReservationPanel = false
      }
  }
  reservations = [
            {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
            {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
        ]
}
</script>
 