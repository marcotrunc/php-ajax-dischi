console.log('VUE OK', Vue);

Vue.config.devtools = true

const root = new Vue({
    el: '#root',
    data: {
        discs: [],
        search: ''
    },
    methods: {
        searchDisc() {
            axios.get(`http://localhost/php-ajax-dischi/vue_version/api/db.php?search=${this.search}`).then(res => {
                this.discs = res.data;
            }).catch(err => console.error(err))
        }
    },
    created() {
        this.searchDisc();
    }
});


