<template> 
    <Panel header="Today Pick-ups" class="shadow-1 border-round today-pickups">
        <template #icons>
            <Button label="View all" class="p-button-outlined  p-button-secondary" />
        </template>
        <DataTable :value="products" selectionMode="single" dataKey="id" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">
            <Column field="pick_return" header="Pick-up"></Column>
            <Column field="type" header="Type"></Column>
            <Column field="car" header="Car"></Column>
            <Column field="client" header="Client"></Column>
        </DataTable>
    </Panel>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class TodayPickups extends Vue {
  products = [
    {
        id: '001',
        pick_return: 'Hogarth Road, London',
        type: 'Large: Premium',
        car: 'BMW 7',
        client: 'Muhammad',
    },
    {
        id: '002',
        pick_return: 'Gazi Road',
        type: 'Smal: Mehran',
        car: 'Mehran 700',
        client: 'Sajid',
    },
    {
        id: '003',
        pick_return: 'Mola Road, Karachi',
        type: 'Medium: Margala',
        car: 'Margala 1000',
        client: 'Salman',
    },
    {
        id: '001',
        pick_return: 'Hazrat Road, PHP',
        type: 'Large: Civic',
        car: 'Civic Honda',
        client: 'Anas',
    }
  ]
}
</script>
 