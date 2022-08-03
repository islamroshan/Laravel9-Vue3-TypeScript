<template>
    <div class="grid">
        <div class="col-12">
            <div>
                <FullCalendar :options="calendarOptions" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardLayout from '../layouts/DashboardLayout.vue';
import { FilterMatchMode } from 'primevue/api';

import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Options({
  components: {
    FullCalendar
  },
})
export default class Availibility extends Vue {
    mounted() {
        this.$emit("update:activeLayout", DashboardLayout)
    }

    events = [
        {id: 1,title: "All Day Event",start: "2022-08-01"},
        {id: 2,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 3,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 4,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 5,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 6,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 7,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 8,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
        {id: 9,title: "Long Event",start: "2022-08-02T01:59:35",end: "2022-08-12", allDay: true,},
    ]

    calendarOptions = {
        plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialDate : '2022-08-01',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
            eventContent: function(info) {
            return {html: '<div>' +info.event.title+ '</div><div>' +info.event.end+ '</div>'}
        },
        events:  this.events,
        editable: false,
        selectable:false, 
        selectMirror: false, 
        dayMaxEvents: true
    };
}
</script>
 