let items = [
    {
        name: "사또밥",
        price: 1000,
        quantity: 0
    },
    {
        name: "새우깡",
        price: 700,
        quantity: 0
    },
    {
        name: "버터링",
        price: 2200,
        quantity: 0
    }
];
let app = new Vue({
    el: "#app",
    data: {
        items: items,
        showtotal: true
    },
    methods: {
        quantitycontroller: function(which, index){
            which==0? this.items[index].quantity++ : this.items[index].quantity--
            if(this.items[index].quantity<0) {
                alert("수량은 0개 미만이 될 수 없습니다!");
                this.items[index].quantity++;
            }
        },
        order: function(){
            if(this.totalprice>10000) {
                alert("주문완료!");
                this.items.forEach(e=>{
                    e.quantity = 0;
                })
            }
            else alert("최소 주문 금액을 맞춰주세요!")
        }
    },
    filters: {
        addwon: function(e){
            return `${e} 원`;
        }
    },
    computed: {
        totalprice: function() {
            let total=0;
            this.items.forEach(e=>{
                total += e.price * e.quantity;
                console.log(typeof(total));
                console.log(total);
            })
            console.log(total);
            return total;
        }
    }

})
app.$watch(function (){
    return this.items[0].quantity;
}, (quantity)=>{
    console.log(quantity)
})