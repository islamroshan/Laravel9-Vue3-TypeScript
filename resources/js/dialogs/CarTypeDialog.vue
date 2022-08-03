<template>
   <Dialog :header="header" position="top" class="car-type-dialog" v-model:visible="visibility" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '90vw'}" :maximizable="true" :closable="false" :modal="false">
            <div class="grid">
              <div class="col-12 lg:col-12">
               <div class="surface-card p-4 shadow-2 border-round">
                    <div class="grid  mt-2">
                        <div class="col-12 mb-4">
                            <label for="status" class="mr-3">Status </label>
                            <InputSwitch id="status" class="p-button-success" v-model="carTypeStatus"  />
                        </div>
                        <div class="col-6">
                            <div class="grid">
                              <div class="col-12 mb-4">
                                <span class="p-float-label">
                                  <InputText class=" w-full" />
                                  <label for="username">Type</label>
                                </span>
                              </div>
                               
                              <div class="col-12 mb-4">
                                <span class="p-float-label">
                                  <Dropdown class="w-full" :multiple="true" optionLabel="name" :options="status" />
                                  <label for="username">Available extras</label>
                                </span>
                              </div>
                              <div class="col-12 mb-4">
                                <span class="p-float-label">
                                  <FileUpload mode="basic" url="./upload" class="p-button-outlined" chooseLabel="Select Image" />
                                </span>
                              </div>
                            </div>
                        </div>
                        <div class="col-6 mb-4">
                          <span class="p-float-label">
                              <Textarea rows="11"  class="w-full" :autoResize="true" />
                              <label for="username">Description</label>
                          </span>
                        </div>
                        <div class="col-3 mb-4">
                          <div class="p-inputgroup">
                            <div class="p-float-label">
                              <InputText />
                              <label for="username">Price per day</label>
                            </div>
                              <span class="p-inputgroup-addon"><i class="pi pi-dollar"></i></span>
                          </div>
                        </div>
                        <div class="col-3 mb-4">
                          <div class="p-inputgroup">
                            <div class="p-float-label">
                              <InputText />
                              <label for="username">Price per hour</label>
                            </div>
                              <span class="p-inputgroup-addon"><i class="pi pi-dollar"></i></span>
                          </div>
                        </div>
                        <div class="col-3 mb-4">
                          <span class="p-float-label">
                           <InputNumber showButtons class="w-full" />
                            <label for="username">Limit milage(km)</label>
                          </span>
                        </div>
                        <div class="col-3 mb-4">
                          <div class="p-inputgroup">
                            <div class="p-float-label">
                              <InputText />
                              <label for="username">Price for extra milage(km)</label>
                            </div>
                              <span class="p-inputgroup-addon"><i class="pi pi-dollar"></i></span>
                          </div>
                        </div>
                        <div class="col-3 ">
                          <span class="p-float-label">
                           <InputNumber showButtons class="w-full" />
                            <label for="username">Num. of passengers</label>
                          </span>
                        </div>
                         <div class="col-3 ">
                          <span class="p-float-label">
                           <InputNumber showButtons class="w-full" />
                            <label for="username">Pieces of bags</label>
                          </span>
                        </div>
                         <div class="col-3 ">
                          <span class="p-float-label">
                           <InputNumber showButtons class="w-full" />
                            <label for="username">Number of doors</label>
                          </span>
                        </div>
                         <div class="col-3  ">
                          <span class="p-float-label">
                            <Dropdown class="w-full" optionLabel="name" :options="status" />
                            <label for="username">Transmission</label>
                          </span>
                        </div>
                    </div>
               </div>
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
  carTypeStatus = false
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
    this.$emit('hideCarTypeDialog')
  }
}
</script>