import './bootstrap.js'

import { createApp } from 'vue';
import App from "./App.vue";
import router from './router/router';
import store from './store/store';

import PrimeVue from "primevue/config";
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import ProgressBar from 'primevue/progressbar';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import Toolbar from 'primevue/toolbar';
import ProgressSpinner from 'primevue/progressspinner';
import MultiSelect from 'primevue/multiselect';
import RadioButton from 'primevue/radiobutton';
import YouTube from 'vue3-youtube';
import Avatar from 'primevue/avatar';
import DataView from 'primevue/dataview';
import Editor from 'primevue/editor';
import InputNumber from 'primevue/inputnumber';
import Tooltip from 'primevue/tooltip';
import Menu from 'primevue/menu';
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import Timeline from 'primevue/timeline';
import Badge from 'primevue/badge';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputSwitch from 'primevue/inputswitch';

// Full Calendar Component
 

const app = createApp(App);
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(router);
app.use(store);
app.use(ToastService);
app.use(ConfirmationService);

app.component('YouTube', YouTube)
app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Image', Image);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('Card', Card);
app.component('Calendar', Calendar);
app.component('ProgressBar', ProgressBar);
app.component('Toast', Toast);
app.component('FileUpload', FileUpload);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Dialog', Dialog);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Toolbar', Toolbar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('MultiSelect', MultiSelect);
app.component('RadioButton', RadioButton);
app.component('Avatar', Avatar);
app.component('DataView', DataView);
app.component('Editor', Editor);
app.component('InputNumber', InputNumber);
app.component('Menu', Menu);
app.component('MegaMenu', MegaMenu)
app.component('Checkbox', Checkbox)
app.component('Panel', Panel)
app.component('Timeline', Timeline)
app.component('Badge', Badge)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('InputSwitch', InputSwitch)

app.directive('tooltip', Tooltip)

app.mount('#app');