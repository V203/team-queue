let Node = require("./node");

module.exports =  ()=>{
   
    
    // var arr_queue = [12,54,67,87,9,10] 

    // let front = ()=>{
    //     return arr_queue[0];
        

    // }

    let front = ()=>{
        return arr_queue[0];
        

    }

    let back = ()=>{
        return arr_queue[arr_queue.length -1]
        
    }

    let enqueue = (val)=>{ 
        // let node1 = new Node(val);
        // while(node1.next){
        //     node1.next

        // }

        
        console.log(`The value ${val} has been placed ${arr_queue.push(val)}th position at the back of the queue.`)

    }

    let dequeue = ()=>{
        return arr_queue.shift()

    }

    let display_arr = ()=>{
        return arr_queue
    }

    return {
        front,
        back,
        enqueue,
        dequeue,
        display_arr
    }

}