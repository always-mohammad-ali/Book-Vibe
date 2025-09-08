import { toast } from "react-toastify";

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
        console.log('already exists in the mark as read list', id)
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
        toast('Successfully it is added to marked as read list')
    }
}

const getAlreadyReadList = () =>{
      
    const alreadyReadListStr = localStorage.getItem('wish-read-list');

    if(alreadyReadListStr){
        const storedReadList = JSON.parse(alreadyReadListStr);
        return storedReadList;
    }
    else{
        return [];
    }
}

const addToWishReadList = (id) =>{
    
    const storedReadList = getAlreadyReadList();

    if(storedReadList.includes(id)){
        console.log('it has already existed in the wish read list', id)
    }
    else{
        storedReadList.push(id);
        const storedReadListStr = JSON.stringify(storedReadList)
        localStorage.setItem('wish-read-list',storedReadListStr)
        toast('succesfully it is added to wish list')
    }
}

export {addToStoredReadList, addToWishReadList, getStoredReadList, getAlreadyReadList}