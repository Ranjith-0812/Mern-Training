let reachone = new Promise((resolve,reject)=>{
    const reached = true;
    if(reached) setTimeout(resolve,3000,"One REached");
    else reject("One rejected");
})

async function(){
    console.log("hello");
    let res=await(reachone);
    console.log("bye");
    
}

