const accountId= 21222
let accountEmail= "alok@gmail.com"
var accountPassword= "alok9350"
accountCity="alok"

// accountId=2 const is not change
// dont use var because of issue in Functional scope and block scope 

accountEmail="asdf@gmail.com"
accountPassword="13421"
accountCity="amrit"

console.log(accountId);
console.table([accountEmail,accountId,accountCity,accountPassword])
