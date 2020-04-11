import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import RichTextEditor from 'rich-text-editor-vuetify';
import Axios from 'axios';

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(RichTextEditor);

Vue.filter('fullname', user => {
    if (user.length < 10) return '';
    while (typeof user != typeof {}) {
        user = JSON.parse(user);
    }
    return user.first_name + " " + user.last_name
});

Vue.filter('genavatar', user => {
    if (user.length < 10) return '';
    while (typeof user != typeof {}) {
        user = JSON.parse(user);
    }
    return user.first_name[0] + user.last_name[0]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');