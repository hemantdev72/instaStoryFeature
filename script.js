const story=document.getElementById('storyian');

let arr=[
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",img:"https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {
        dp:"https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80",
        img:"https://images.unsplash.com/photo-1511039912745-8bfa0bc56aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        img:"https://images.unsplash.com/photo-1525348371953-ac094a7e70be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
]

let cultter="";

arr.forEach(function(elem,index){
    cultter+= `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
    
})
story.innerHTML=cultter;

let grow=0;

story.addEventListener('click',(e)=>{
    document.getElementById('full-scr').style.display='block';
    document.getElementById('full-scr').style.backgroundImage=`url(${arr[e.target.id].img})`
    setTimeout(()=>{
        document.getElementById('full-scr').style.display='none';
    },3000)

    if(grow<100){
        setInterval(function(){
            document.getElementById('grow').style.width=`${grow++}%`;
        },30)
    } else{
        grow=0;
    }
    

});
