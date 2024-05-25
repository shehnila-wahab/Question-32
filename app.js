var current_users = ["sana", "hudaibya", "saba", "amna", "admin"];
var new_users = ["Ahmed", "Aman", "amir", "bilal", "yaseen"];
new_users.forEach(function (newUsers) {
    if (current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === newUsers.toLocaleLowerCase(); })) {
        console.log("".concat(newUsers, "will need to enter new username"));
    }
    else {
        console.log("".concat(newUsers, "is available"));
    }
});
