
export const randomIDReminder = ()=>{
    const s4 = () =>{
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    const randomID = () =>{
        return s4()+ s4() +'_'+s4()+ s4() +'_'+s4()+ s4() +'_'+s4()+ s4();
    }
    return randomID();
}

export const findIDReminder = (listReminder, id) =>{
    var result = -1;
    listReminder.forEach((reminderItem, index)=>{
        if(reminderItem.id === id){
            result = index;
        }
    });
    return result;
}