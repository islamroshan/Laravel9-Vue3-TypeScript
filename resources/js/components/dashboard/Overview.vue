<template> 
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between align-items-center mb-2">
                    <div>
                        <div class="text-900 font-medium text-2xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-calendar-plus text-blue-500 text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">24 new </span> -->
                <span class="text-500">new reservations today</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-2">
                    <div>
                        <div class="text-900 font-medium text-2xl">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-arrow-up-right text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">pick-ups today</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-2">
                    <div>
                        <div class="text-900 font-medium text-2xl">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-directions-alt text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">returns today</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-2">
                    <div>
                        <div class="text-900 font-medium text-2xl">0</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-car text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">available cars now</span>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useStore } from "vuex";

@Options({
  components: {},
})
export default class Overview extends Vue {
  
}
</script>