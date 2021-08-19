new Vue({
    el: '#tab',
    data: {
        isActive : 'home'
    },
    methods: {
        isSelect: function (num) {
            this.isActive = num;
 }
    }
});