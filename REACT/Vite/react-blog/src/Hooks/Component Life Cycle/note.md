#### Life Cycle in Human
same in React
![alt text](image.png)
3 cycle must: 1. birh, 2. Young, 3. Expire 

#### Life cycle in ReactJS
![alt text](image-1.png)
Mounting: UI Rendering
Updating
Unmount

![alt text](image-2.png)

##### Mounting
useEffect(()=>{
    //This code will run on mount
}, [])

##### Updating
useEffect(()=>{
    // This code will run on update
}, [state1 or props])

#### Unmount
useEffect(()=>{
    
    return ()=>{
        //This code will run on unmount
    }

}, [])


useEffect(()=>{
    // This code will run on every life cycle
})
