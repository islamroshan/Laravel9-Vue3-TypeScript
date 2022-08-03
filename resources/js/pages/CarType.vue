<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4 shadow-1" >
                <template #start >
                    <Button label="New" icon="pi pi-plus" class="p-button mr-2 " @click="createCarType" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger " @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block " />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help " @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable class="shadow-1 car-type-datatable" v-model:selection="selectedProducts" :value="carTypes" :paginator="true" :rows="10" :filters="filters" responsiveLayout="stack" breakpoint="960px">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<span class="mb-2 text-xl md:m-0 p-as-md-center font-medium">Car Types</span>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 5rem" :exportable="false"></Column>
                <Column header="Image" style="width: 40rem">
                    <template #body="slotProps">
                        <img src="../images/logo.png" :alt="slotProps.data.image" class="car-image" />
                    </template>
                </Column>
                <Column field="type" header="Type" :sortable="true"></Column>
                <Column field="carModels" header="Car models" :sortable="true">
                </Column>
                <Column field="numberOfCars" header="Number of cars" :sortable="true" ></Column>
                <Column header="Status" :sortable="true">
                    <template #body="slotProps">
                        <Badge class="capitalize" :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status.toLowerCase())"></Badge>
                    </template>
                </Column>
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
        <CarTypeDialog :visibility="carTypeDialog" @hideCarTypeDialog="closeCarTypeDialogDialog" header="Add new car type" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardLayout from '../layouts/DashboardLayout.vue';
import { FilterMatchMode } from 'primevue/api';
import CarTypeDialog from '../dialogs/CarTypeDialog.vue'
import { markRaw } from "vue";

@Options({
  components: markRaw({
    CarTypeDialog
  }),
})
export default class CarType  extends Vue {
    carTypeDialog = false

    createCarType() {
        this.carTypeDialog = true
    }

    closeCarTypeDialogDialog() {
        return this.carTypeDialog = false
    }

    getStatusSeverity(value:string) {
        switch(value) {
            case 'active':
                return 'info'
                break
        }
    }
  carTypes = [
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'active',
    },
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'inactive',
    },
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'active',
    },
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'inactive',
    },
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'inactive',
    },
    {
        image: '',
        type: 'Large: Premium',
        carModels: 'Toyota 1998',
        numberOfCars: '2',
        status: 'active',
    },
  ]
  created() {
    this.$emit("update:activeLayout", DashboardLayout)
  }
        selectedProducts = false;
        filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        };
}
</script>
 