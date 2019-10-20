window.onload = () => {
    let app = new Vue({
        el: "#app",
        data: {
            count: 0
        },
        methods: {
            // es6의 객체 리터럴 프로퍼티 축약 기능
            plus () {
                this.count++;
            },
            minus () {
                this.count--;
            }
        }
    })
}