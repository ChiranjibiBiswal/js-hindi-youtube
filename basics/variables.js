const accountId = 114456
let accountEmail = "chiranjibi@gmail.com"
var accountPassword = "122112"
accountCity = "Jaipur"
let accountState;

/*
    Prefer not to use var 
    because of issue in block Scope & functional Scope 
*/

accountEmail = "Google@gamil.com"
accountPassword = "321123"
accountCity = "Kolkata"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])