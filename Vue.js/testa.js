let obj = {
    data: "hi",
    test: ()=>{
        console.log(this.data)
    },
    test2(){
        console.log(this.data)
    }
}
obj.test()
obj.test2()