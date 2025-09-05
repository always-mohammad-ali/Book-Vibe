const getStoredReadList = () =>{

}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();

    if(storedList.includes(id)){
        console.log('already exists in the read list', id)
    }
    else{
        storedList.push(id);
    }
}