const getStoredReadList = () =>{
      const storedListStr = localStorage.getItem('read-list');

      if(storedListStr){
            const storedList = JSON.parse(storedListStr);
            return storedList;
      }
      else{
           return [];
      }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();

    if(storedList.includes(id)){
        console.log('already exists in the read list', id)
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString)
    }
}

export {addToStoredReadList}