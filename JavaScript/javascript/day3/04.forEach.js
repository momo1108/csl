const colors = ['red','blue','green'];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// ES6
colors.forEach(color=>console.log(color));

function forEach2(el, callback) {
    if(!Array.isArray(el)) throw new Error('배열이아님');

    for(var i = 0; i < el.length; i++){
        callback(el[i]);
    }
}
forEach2(colors, e=>console.log(e));

const images = [
    {
        h:5,
        w:5,
    },
    {
        h:15,
        w:15,
    },
    {
        h:25,
        w:25,
    },
]

images.push({h:35, w:35});
console.log(images);
const pushing = (arr, el)=>{
    arr[arr.length] = el;
}
pushing(images,{h:45,w:45});
console.log(images);
images.forEach((e,i)=>{
    images[i].area = e.h*e.w;
})
console.log(images);