<template>
   <Dialog :header="header" position="top" class="reservation-dialog" v-model:visible="visibility" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '90vw'}" :maximizable="true" :closable="false" :modal="false">
            <div class="grid">
              <div class="col-12 lg:col-8">
                <TabView  class="shadow-2 border-round">
                  <TabPanel header="Reservation Detail" >
                      <div class="grid mt-2">
                        <div class="col-3">
                            <span class="p-float-label">
                              <Calendar class=" w-full" :showTime="true" :showSeconds="true" :showIcon="true" />
                              <label for="username">From</label>
                            </span>
                        </div>
                         <div class="col-3">
                             <span class="p-float-label">
                              <Calendar class=" w-full" :showTime="true" :showSeconds="true" :showIcon="true" />
                              <label for="username">To</label>
                            </span>
                        </div>
                        <div class="col-3">
                             <span class="p-float-label">
                              <Dropdown class=" w-full" optionLabel="name" :options="status" />
                              <label for="username">Status</label>
                            </span>
                        </div>
                        <div class="col-3">
                             <span class="p-float-label">
                                <Dropdown class=" w-full" optionLabel="name" :options="paymentMethods" optionGroupLabel="name" optionGroupChildren="items" >
                                  <template #optiongroup="slotProps">
                                      <div class="flex align-items-center">
                                          <div class="font-semibold">{{slotProps.option.name}}</div>
                                      </div>
                                  </template>
                                  <template #option="slotProps">
                                      <div class="flex align-items-center">
                                          <div class="font-light text-500">{{slotProps.option.name}}</div>
                                      </div>
                                  </template>
                                </Dropdown>
                              <label for="username">Payment Methods</label>
                            </span>
                        </div>
                        <div class="col-12   mb-2"> </div>
                        <div class="col-6">
                            <span class="p-float-label">
                              <Dropdown class=" w-full" optionLabel="name" :options="status" :filter="true" filterPlaceholder="Find Type"/>
                              <label for="username">Type</label>
                            </span>
                        </div>
                         <div class="col-6">
                             <span class="p-float-label">
                              <Dropdown class=" w-full" optionLabel="name" :options="status" :filter="true" filterPlaceholder="Find Car"/>
                              <label for="username">Car</label>
                            </span>
                        </div>
                          <div class="col-12   mb-2"> </div>
                        <div class="col-6">
                             <span class="p-float-label">
                              <Dropdown class=" w-full" optionLabel="name" :options="status" :filter="true" filterPlaceholder="Find Location" />
                              <label for="username">Pick-up Locatin</label>
                            </span>
                        </div>
                        <div class="col-6">
                             <span class="p-float-label">
                              <Dropdown class=" w-full" optionLabel="name" :options="status" :filter="true" filterPlaceholder="Find Location"/>
                              <label for="username">Return Location</label>
                            </span>
                        </div>
                        <div class="col-12 mb-2"></div>
                        <div class="col-12">
                          <DataTable :value="extras" showGridlines  editMode="cell" dataKey="id" v-model:editingRows="editingRows"  responsiveLayout="scroll">
                            <Column field="extra" header="Extra" style="width:30%">
                                <template #editor="{ data, field }">
                                    <InputText class="w-full" v-model="data[field]" autofocus />
                                </template>
                            </Column>
                            <Column field="price" header="Price" style="width:25%">
                                <template #editor="{ data, field }">
                                    <InputText v-model="data[field]" />
                                </template>
                            </Column>
                            <Column field="qty" header="Qty"  style="width:25%">
                                <template #editor="{ data, field }">
                                    <InputText v-model="data[field]" />
                                </template>
                            </Column>
                            <Column >
                                <template #header>
                                   <Button label="Add Extra" icon="pi pi-plus" @click="addExtra"  class="p-button-sm  "/>
                                </template>
                                  <template #body="slotProps">
                                       <Button icon="pi pi-trash" @click="removeExtra(slotProps.data)"  class="p-button-sm p-button-danger"/>
                                  </template>
                            </Column>
                          </DataTable>
                        </div>
                      </div>
                  </TabPanel>
                  <TabPanel header="Customer Detail">
                    <div class="grid mt-2">
                        <div class="col-6">
                            <span class="p-float-label">
                              <InputText class=" w-full" />
                              <label for="username">Name</label>
                            </span>
                        </div>
                         <div class="col-6">
                             <span class="p-float-label">
                              <InputText class=" w-full" />
                              <label for="username">Email Address</label>
                            </span>
                        </div>
                        <div class="col-12 mb-2"> </div>
                        <div class="col-6">
                             <span class="p-float-label">
                              <InputText class=" w-full" />
                              <label for="username">Telephone Number</label>
                            </span>
                        </div>
                      </div>
                  </TabPanel>
                </TabView>
              </div>
              <div class="col-12 lg:col-4">
                <Panel class="shadow-2 border-round">
                    <template #header>
                        <div class="flex w-full justify-content-between">
                          <span class="font-semibold text-lg">Status:</span>
                          <span class="font-semibold text-lg">Pending</span>
                          
                        </div>
                    </template>
                      <DataTable :value="calculations" class="border-none"  responsiveLayout="stack" breakpoint="10200px">
                          <Column field="rentalDuration" header="Rental Duration:" style="width:20%" />
                          <Column field="pricePerDay" header="Price per day:" style="width:20%" />
                          <Column field="carRentalFee" header="Car rental fee:" style="width:20%" />
                          <Column field="extraPrice" header="Extras Price:" style="width:20%" />
                          <Column field="insurance" header="Insurance:" style="width:20%" />
                          <Column field="subTotal" header="Sub-total:" style="width:20%" />
                          <Column field="tax" header="Tax:" style="width:20%" />
                          <Column class="text-2xl " field="totalPrice" header="Total Price:" style="width:20%" />
                          <Column field="requiredDeposit" header="Required deposit:" style="width:20%" />
                      </DataTable>
                </Panel>
              </div>
            </div>

            <template #footer >
                <Button label="Cancel" icon="pi pi-times" @click="closeDialog" class="p-button-text p-button-secondary"/>
                <Button label="Save" icon="pi pi-check" @click="closeMaximizable" class="p-button" autofocus />
            </template>
        </Dialog>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
class Props {
    visibility:boolean = false
    header:string = ''
}
@Options({
  components: {},
})
export default class  ReservationDialog extends Vue.with(Props) {
  status  = [
    {name: 'Cancelled', value: 'cancelled'},
    {name: 'Completed', value: 'completed'},
    {name: 'Colledted', value: 'colledted'},
    {name: 'Confirmed', value: 'confirmed'},
    {name: 'Pending', value: 'pending'},
  ]

  paymentMethods = [
    {
      name: 'Online payment gateway', value: 'online',
      items: [
        {name: 'PayPal', value: 'paypal'}
      ]
    },
    {
      name: 'Offline payment', value: 'offline',
      items: [
        {name: 'Wire transfer', value: 'wire transfer'},
        {name: 'Cash', value: 'cash'},
      ]
    }
  ]

  extras = [
    {id: 0,extra: 'Child seat', price: '$44', qty: '1'},
    {id: 1,extra: 'Boy seat', price: '$66', qty: '1'}
  ]

  calculations = [
    {
      rentalDuration: 0,
      pricePerDay: '0.00$',
      carRentalFee: '0.00$',
      extraPrice: '0.00$',
      insurance: '0.00$',
      subTotal: '0.00$',
      tax: '0.00$',
      totalPrice: '0.00$',
      requiredDeposit:'0.00$'
    }
  ]

  addExtra() {
    let extra = {id: 0,extra: 'Old seat', price: '$88', qty: '2'}
    this.extras.push(extra)
  }

  removeExtra(extra) {
    this.extras.splice(this.extras.indexOf(extra), 1);
    // this.extras.filter( (extra) => { 
    //   if(extra.id == id) {
    //      this.extras.splice(extra.id, 1)
    //   }
    //  })
  }

  closeDialog() {
    this.$emit('hideReservationDialog')
  }
}
</script>