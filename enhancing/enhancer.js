module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(!item.durability || !item.name || !item.enhancement){
    return {...item, message:'This item does not have the credentials to work'};
  }
  else if(item.enhancement === 20){
    return {...item};
  }
  else{
    item.enhancement++;
    return{...item};
  }
}

function fail(item) {
  if(!item.durability || !item.name || !item.enhancement){
    return {...item, message:'This item does not have the credentials to work'};
  }
  
  else{
    return {...item};
  }
}

function repair(item) {
  if(!item.durability || !item.name || !item.enhancement){
    return {...item, message:'This item does not have the credentials to work'};
  }
  else if(item.durability < 100){
    item.durability = 100
    return { ...item };
  }
  else{
    return {...item};
  }
  
}

function get(item) {
  if(!item.durability || !item.name || !item.enhancement){
    return {...item, message:'This item does not have the credentials to work'};
  }
  
  else{
    return {...item};
  }
}
