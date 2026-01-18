const isNotEmpty = (val) => val.length > 0;
const isSafeLength = (val) => val.length < 10;

const validateInput = (text) => {
    if (!isNotEmpty(text)) {
        return "ERROR: Empty string";
    }
    
    if (!isSafeLength(text)) {
        return "ERROR: Too long";
    }
    
    return "SUCCESS: " + text;
};

const processInput = (input) => {
    const status = validateInput(input);
    return { timestamp: Date.now(), status: status };
};

console.log(processInput(""));
console.log(processInput("This string is way too long"));
console.log(processInput("Valid"));



























































// const double = (n) => n * 2;
// const square = (n) => n * n;

// const computeAndReport = (num, transformationFn) => {
//     const transformedValue = transformationFn(num);
//     console.log("Transformation complete.");
//     return "The result is: " + transformedValue;
// };

// // Data flows: 5 -> computeAndReport -> double -> transformedValue -> Return
// const pathA = computeAndReport(5, double);
// const pathB = computeAndReport(5, square);

// console.log(pathA);
// console.log(pathB);























// // const applyDefaults = (userConfig) => {
// //     const defaults = { theme: "light", fontSize: 14, notifications: true };
    
// //     // Logic: User settings override defaults
// //     const finalConfig = {
// //         theme: userConfig.theme || defaults.theme,
// //         fontSize: userConfig.fontSize || defaults.fontSize,
// //         notifications: userConfig.notifications || defaults.notifications
// //     };
    
// //     return finalConfig;
// // };

// // const buildStyles = (config) => {
// //     return "Theme: " + config.theme + " | Size: " + config.fontSize + "px";
// // };

// // const mySettings = { theme: "dark" }; // Note: fontSize and notifications are missing
// // const finalSettings = applyDefaults(mySettings);
// // const styleString = buildStyles(finalSettings);

// // console.log(styleString);


// // "Theme: dark | Size: 14 px"


























// // // const isActive = (user) => user.loginCount > 0;

// // // const formatName = (user) => {
// // //     return user.firstName + " " + user.lastName;
// // // };

// // // const getActiveDisplayNames = (userList=[
// // //     { firstName: "Jane", lastName: "Doe", loginCount: 5 },
// // //     { firstName: "John", lastName: "Smith", loginCount: 0 }
// // // ]) => {
// // //     const activeNames = [];
    
// // //     for (let i = 0; i < userList.length; i++) {
// // //         const currentUser = userList[i];
        
// // //         if (isActive(currentUser)) {
// // //             const fullName = formatName(currentUser);
// // //             activeNames.push(fullName);
// // //         }
// // //     }
    
// // //     return activeNames;

// // // };

// // // const rawUsers = [
// // //     { firstName: "Jane", lastName: "Doe", loginCount: 5 },
// // //     { firstName: "John", lastName: "Smith", loginCount: 0 }
// // // ];

// // // const result = getActiveDisplayNames(rawUsers);
// // // console.log(result); // Predict: ["Jane Doe"]





























// // // // const extractStats = (player) => {
// // // //     return {
// // // //         score: player.points * 10,
// // // //         level: Math.floor(player.points / 5)
// // // //     };
// // // // };

// // // // const formatProfile = (data) => {
// // // //     const stats = extractStats(data.gameData);
    
// // // //     return {
// // // //         username: data.id,
// // // //         rank: stats.level,
// // // //         highScore: stats.score
// // // //     };
// // // // };

// // // // const rawUser = {
// // // //     id: "pro_gamer_99",
// // // //     gameData: { points: 22 }
// // // // };

// // // // const profile = formatProfile(rawUser);
// // // // console.log(profile);










































// // // // // const calculateDiscount = (price, discountPercent) => {

// // // // //     return price * (discountPercent / 100);
// // // // // };

// // // // // const processCart = (items, discount) => {

// // // // //     let finalTotal = 0;
    
// // // // //     for (let itemPrice of items) {

// // // // //         const savings = calculateDiscount(itemPrice, discount);

// // // // //         finalTotal = finalTotal + (itemPrice - savings);
// // // // //     }
    
// // // // //     return finalTotal;
// // // // // };

// // // // // const myItems = [100, 200];
// // // // // const total = processCart(myItems, 10); // 10% discount

// // // // // console.log("Total to Pay: " + total);























// // // // // // const removeSensitiveData = (userObj) => {

// // // // // //     delete userObj.password;
    
// // // // // //     delete userObj.secretKey;
    
// // // // // //     return userObj;
// // // // // // };

// // // // // // const formatForPublic = (userObj) => {

// // // // // //     const cleaned = removeSensitiveData(userObj);
    
// // // // // //     cleaned.viewedAt = "2024-01-01";
    
// // // // // //     return cleaned;
// // // // // // };

// // // // // // const rawData = { id: 1, password: "123", secretKey: "ABC", name: "Bob" };

// // // // // // const publicProfile = formatForPublic(rawData);

// // // // // // console.log(publicProfile);

// // // // // // { id: 1,
// // // // // //  name: "Bob"
// // // // // // "2024-01-01"; };























// // // // // // // const getDomain = (company) => company.toLowerCase() + ".com";


// // // // // // // const createEmail = (firstName=John, lastName=Doe, company=Google) => {

// // // // // // //     const domain = getDomain(company);

// // // // // // //     const username = firstName[0] + lastName; // Taking first letter of first name

// // // // // // //     return username.toLowerCase() + "@" + domain;
// // // // // // // };

// // // // // // // const staffEmail = createEmail("John", "Doe", "Google");

// // // // // // // console.log(staffEmail);


// // // // // // // jdoe@google.com







// // // // // // // const getTier = (points=75) => {

// // // // // // //     if (points > 100) return "GOLD";

// // // // // // //     if (points > 50) return "SILVER";
    
// // // // // // //     return "BRONZE";
// // // // // // // };

// // // // // // // const upgradeUser = (user={ name: "Alice", points: 75 }) => {

// // // // // // //     const tier = getTier(user.points);

// // // // // // //     return { name: user.name, status: tier };
// // // // // // // };

// // // // // // // const member = { name: "Alice", points: 75 };

// // // // // // // const updatedMember = {name: 'Alice', status: 'SILVER'};

// // // // // // // console.log(updatedMember);





   























// // // // // // // const transformData = (name) => {
// // // // // // //     const upper = name.toUpperCase();
// // // // // // //     return `USER_${upper}`;
// // // // // // // };

// // // // // // // const formatGreeting = (id, timeOfDay) => {
// // // // // // //     return `Good ${timeOfDay}, your ID is ${id}.`;
// // // // // // // };

// // // // // // // const userName = "alex";
// // // // // // // const userId = 'USER_ALEX'

// // // // // // // const message = formatGreeting('USER_ALEX', "Morning");

// // // // // // // console.log(message);



// // // // // // // // let age =10;
// // // // // // // // let cls = 'second'

// // // // // // // // const hello =(name)=>{
// // // // // // // //     console.log(name)
// // // // // // // // }

// // // // // // // // const tata =(e)=>{
// // // // // // // //     console.log(e)
// // // // // // // //     hello(e+30)
// // // // // // // //     hello(cls)

// // // // // // // // }

// // // // // // // // tata(age)
// // // // // // // // hello("vipan")
