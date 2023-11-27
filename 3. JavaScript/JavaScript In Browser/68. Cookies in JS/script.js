/*
Note:
1. Cookies store data in the browser based on the actions performed on visited sites and can be specific to the user's country or username.
2. Example: If you visit an Amazon website and add products to the cart without logging in, when you return to the site from the same browser, the added items may still be in the cart. This is possible because the browser stored cookies (information about selected products) for the Amazon domain.
3. This is a simple way of storing data in the browser to personalize the user experience, such as showing items based on previous choices or displaying ads based on previous interactions with the site.
*/

// Adding cookies to the website.
// To remove cookies, simply set the past date.
// Different cookie options can be set, such as expires, path, etc.

document.cookie = "item=Sony Bravia 65inch 4K TV; expires=3 Dec 2023 10:55:40 UTC";
document.cookie = "item1=Sony PlayStation 5 - 1TB";
document.cookie = "item2=GTA 5 - PlayStation Disc";

// Retrieving Cookies
console.log(document.cookie);

// Replacing the value of a key
document.cookie = "item2=EA Sport 24";

/* encodeURIComponent and decodeURIComponent
1. If we write any special characters like =, ;, etc., we can face problems setting cookies.
2. The above functions help us resolve such problems.
*/

let key = encodeURIComponent(";Ln==a:me=;");
let value = encodeURIComponent(";Saro=de");

let a = document.cookie = `${key}=${value}`;
console.log(a);

console.log(decodeURIComponent(key));
console.log(decodeURIComponent(value));

/*
Cookies Options:
1. Cookies have different options that we can set, like path, expires, etc.
2. expires: We can set when we want to remove the cookies; if we set a past date, the cookies will be removed.
3. path: Path helps us specify on which pages the cookies are applied. For example, if you have /blog, it will work on all blogs under the blog tab, e.g., blog/AIblogs.
*/

document.cookie = "userID=798hhsa79; expires=29 Nov 2023 13:53:00 UTC; path=/";
