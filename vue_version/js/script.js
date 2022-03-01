console.log('VUE OK', Vue);

Vue.config.devtools = true

const root = new Vue({
    el: '#root',
    data: {
        discs: [],
    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/vue_version/api/db.php').then(res => {
            this.discs = res.data;
        }).catch(err => console.error(err))
    }
});


