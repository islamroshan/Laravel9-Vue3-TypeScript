<template>
    <div class="grid">
        
        <div class="col-8">
              
            <div class="card">
            <DataTable class="shadow-1 car-type-datatable" :value="carInventory" :paginator="true" :rows="10" :filters="filters"
               responsiveLayout="stack" breakpoint="960px">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<span class="mb-2 text-xl md:m-0 p-as-md-center font-medium">Cars Inventory</span>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column field="reg_num" header="Registration number" style="width: 30rem" :sortable="true"></Column>
                <Column field="make" header="Make" style="width: 10rem" :sortable="true"></Column>
                <Column field="model" header="Model" :sortable="true"></Column>
                <Column field="default_location" style="width: 20rem" header="Default Location"  ></Column>
                <Column field="car_type"  style="width: 20rem" header="Car type" :sortable="true"></Column>
                <Column :exportable="false" header="Actions" >
                    <template #body="slotProps">
                        <div class="flex justiify-content-between">
                            <Button icon="pi pi-pencil" class="p-button-outlined mr-2" @click="editProduct(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-outlined p-button-danger" @click="confirmDeleteProduct(slotProps.data)" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
        </div>
        <div class="col-4">
            <Panel class="shadow-2 border-round car-inventory-panel">
                <template #header>
                     <span class="text-xl font-medium">Add new car</span>
                </template>
                <div class="grid">
                    <div class="col-12 mb-4 mt-4">
                        <div class="p-float-label">
                            <InputText  class="w-full" />
                            <label for="username">Make</label>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-float-label">
                            <InputText  class="w-full" />
                            <label for="username">Model</label>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-float-label">
                            <InputText class="w-full" />
                            <label for="username">Registration number</label>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-float-label">
                            <InputText  class="w-full" />
                            <label for="username">Current milage (km)</label>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-float-label">
                             <Dropdown class=" w-full" optionLabel="name" :options="status" />
                            <label for="username">Default location</label>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-float-label">
                            <Dropdown class=" w-full" optionLabel="name" :options="status" />
                            <label for="username">Car type</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="flex justify-content-between">
                            <Button label="Save" icon="pi pi-check" class="p-button" autofocus />
                            <Button label="Cancel" icon="pi pi-times" class="p-button p-button-secondary"/>
                        </div>
                    </div>
                </div>
            </Panel>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardLayout from '../layouts/DashboardLayout.vue';
import { FilterMatchMode } from 'primevue/api';

@Options({
  components: {
  },
})
export default class CarInventory extends Vue {
    mounted() {
        this.$emit("update:activeLayout", DashboardLayout)
    }
    selectedProducts = false;
        filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
    };
  carInventory = [
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
    {
        reg_num: 'KJB-8484',
        make: 'BMW',
        model: '7',
        default_location: 'Hogarth Road, London',
        car_type: 'Large:Premium',
    },
  ]
}
</script>
 