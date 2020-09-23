// მოცემული გაქვთ პიცის ობიექტების მასივი
// Math.random - ით აიღეთ მასივიდან ნებისმიერი პიცა შემთხვევითობის პრინციპით
// გამოიტანეთ კონსოლში: "თქვენი პიცა {პეპერონი} მზადდება"
// 2 წამის მერე გამოიტანეთ კონსოლში: "თქვენი პიცა გზაშია"
// 5 წამის მერე გამოიტანეთ კონსოლში: "თქვენი პიცა ადგილზეა, ფასი - {20} ლარი"
// დროის საკონტროლებლად გამოიყენეთ setTimeout ფუნქცია
// ბონუსი: ბოლოს გამოიტანეთ კონსოლში შეკვეთის ხანგრძლივობა დაწყებიდან დასრულებამდე.
const pizzas = [
    {
        name: "პეპერონი",
        price: 20
    },
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }
];

let x = Math.floor(Math.random() * 3);

function a(){
    appendLi(" თქვენი პიცა " +  pizzas[x].name + " მზადდება");
}
let n = new Date();

function b(){
    appendLi(" თქვენი პიცა გზაშია");
    setTimeout(c, 5000 );
    
}

function c(){
    appendLi(" თქვენი პიცა ადგილზეა, ფასი - " + pizzas[x].price + " ლარი")
    let m = new Date ();
    appendLi(" შეკვეთის  სრული  დროა  " + (m-n)/1000 + "  წამი ");
}

const ul = document.getElementById("list");
function appendLi(text){
    const li = document.createElement("li");
    li.textContent=text;
    ul.appendChild(li);
} 

a();

setTimeout (b, 2000);
