let current_users: string [] = ["sana","hudaibya","saba","amna","admin"];
let new_users: string[] = ["Ahmed","Aman","amir","bilal","yaseen"];
new_users.forEach((newUsers)=>{
    if(
        current_users.some(
            (current_users)=> current_users.toLocaleLowerCase() === newUsers.toLocaleLowerCase()
        )
    ){
        console.log(`${newUsers}will need to enter new username`);
    }else{
        console.log(`${newUsers}is available`);
    }
})