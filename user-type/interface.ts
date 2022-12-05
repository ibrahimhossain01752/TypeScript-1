let users:{
    id: number;
    name: string;
    age: number;
}[] = [];

let user1:{
id: number;
name: string;
age: number;
}={
id:1,
name:"Ibrahim", 
age:24
}

let user2:{
id: number;
name: string;
age: number;
} = {
id:2,
name:"Homyra",
age:25
}

users.push(user1);
users.push(user2);

console.log(users);