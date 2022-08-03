<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4 shadow-1" >
                <template #start >
                    <Button label="New" icon="pi pi-plus" class="p-button mr-2 " @click="createReservation" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger " @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block " />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help " @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable class="shadow-1 " v-model:selection="selectedProducts"  :value="products"  
               :paginator="true" :rows="10" :filters="filters"
               responsiveLayout="stack" breakpoint="960px">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<span class="mb-2 text-xl md:m-0 p-as-md-center font-medium">Manage Reservations</span>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 5rem" :exportable="false"></Column>
                <Column field="code" header="Pick-up / Return" style="width: 40rem" :sortable="true"></Column>
                <Column field="name" header="Type" :sortable="true"></Column>
                <Column field="price" header="Car" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Client"  :sortable="true" ></Column>
                <Column field="inventoryStatus" header="Total" :sortable="true">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" :sortable="true">
                    <template #body="slotProps">
                        <Badge class="capitalize" :value="slotProps.data.inventoryStatus" :severity="getStatusSeverity(slotProps.data.inventoryStatus.toLowerCase())"></Badge>
                       <!-- <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span> -->
                    </template>
                </Column>
                <Column :exportable="false" header="Actions" >
                    <template #body="slotProps">
                        <div class="flex justiify-content-between">
                            <Button icon="pi pi-pencil" class="p-button-outlined  mr-2" @click="editProduct(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-outlined p-button-danger" @click="confirmDeleteProduct(slotProps.data)" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
        <ReservationDialog :visibility="reservationDialog" @hideReservationDialog="closeReservationDialog" header="Add new reservation" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardLayout from '../layouts/DashboardLayout.vue';
import { FilterMatchMode } from 'primevue/api';
import ReservationDialog from '../dialogs/ReservationDialog.vue'
import { markRaw } from "vue";

@Options({
  components: markRaw({
    ReservationDialog
  }),
})
export default class Reservations  extends Vue {
    reservationDialog = false

    createReservation() {
        this.reservationDialog = true
    }

    closeReservationDialog() {
        return this.reservationDialog = false
    }

getStatusSeverity(value:string) {
    switch(value) {
        case 'confirmed':
            return 'success'
            break
        case 'pending':
            return 'warning'
            break
        case 'collected':
            return 'info'
            break
        case 'completed':
            return 'danger'
            break
    }
}
  products = [
    {
        code: 'KJB-8484',
        name: 'Smith',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Large',
        rating: 5,
        inventoryStatus: 'confirmed',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'pending',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'confirmed',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'cancelled',
    },
     {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'cancelled',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'collected',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'completed',
    },
    {
        code: 'kjb56',
        name: 'Islam',
        image: './images/logo.png',
        price: '$5.3',
        category: 'Human',
        rating: 5,
        inventoryStatus: 'pending',
    }
  ]
  created() {
    this.$emit("update:activeLayout", DashboardLayout)
  }
        selectedProducts = false;
        filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        };
        
        formatCurrency = (value) => {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
        };
}
</script>
 