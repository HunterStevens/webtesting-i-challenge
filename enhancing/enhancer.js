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
  else if(item.enhancement < 0){
    item.enhancement = 0;
    return{...item};
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
  else if(item.enhancement < 0){
    item.enhancement = 0;
    item.durability = item.durability-5;
    return{...item};
  }
  else if(item.enhancement >= 16){
    item.enhancement--;
    if(item.durability === 0){
      return {...item};
    }else{
      item.durability = item.durability-10;
      return{...item};
    }
  }
  else if(item.enhancement >=15){
    if(item.durability === 0){
      return {...item};
    }else{
      item.durability = item.durability-10;
      return{...item};
    }
  }
  else{
    item.durability = item.durability-5;
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
  else if(item.enhancement <= 0){
    return {...item};
  }
  else{
    item.name = `[+${item.enhancement}]${item.name}`;
    return{...item};
  }
}
