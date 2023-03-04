//Code by ahmetacr61(same name on all platforms)

const cardData = [
    { title: "MAINBOARD", desc: "The Mainboard is used to install all the other units to use them in your PC", img: "mainboard.jpg", link: "https://www.youtube.com/watch?v=b2pd3Y6aBag" },
    { title: "CPU", desc: "The CPU, also known as the Core Processor Unit, is the main Component on the PC. It calculates all the needed things so that the Pc can run properly.", img: "cpu.jpg", link: "https://www.youtube.com/watch?v=jx-w2o-Lj8g" },
    { title: "GPU", desc: "The GPU, also known as the Graphics Processor Unit, is used to calculate all the things that have something to do with graphic\index.htmls like videogames or 3D Modeling.", img: "gpu.jpg", link: "https://www.youtube.com/watch?v=Kgcfj_KV-mo" },
    { title: "RAM", desc: "The Ram, also known as the Random Access Memory, is the cache which stores Data just the time the PC is running. As soon as you close our Computer the Ram ist set to default back again.", img: "ram.jpg", link: "https://www.youtube.com/watch?v=6pp_krChw_A" },
    { title: "SSD", desc: "The SSD, also known as the Solid-state drive, is a component to store Data. It is also a much faster version of the HDD but costs a lot more.", img: "ssd.jpg", link: "https://www.youtube.com/watch?v=6pp_krChw_A" },
    { title: "HDD", desc: "The HDD, also known as the Hard disk drive, is another Component just like the SSD to store data. It's much slower than the SSD but is a lot cheaper to buy.", img: "hdd.jpg", link: "https://www.youtube.com/watch?v=6pp_krChw_A" },
    { title: "POWER SUPPLY", desc: "The Power Supply is used to give the computer it's power to run. All the components need energy and the Power supply simpy makes the energy usable for the PC.", img: "power_supply.jpg", link: "https://www.youtube.com/watch?v=Cur3nQjjyyo" }
];

//First Card
const cardList = document.getElementsByClassName("card");
const firstCard = cardList[0];
//All cards: Container
const cards = document.getElementsByClassName("cards")[0];
debugger;

for (i = 1; i < cardData.length; i++) {
    const clone = firstCard.cloneNode(true);
    cards.appendChild(clone);

    //cards.appendChild(firstCard.cloneNode(true));
}

let actElement;
for (i = 0; i < cardList.length; i++) {
    //Hiermit bekomme ich die "i te" Karte
    let actCard = cardList[i];
    //Set Title
    actElement = actCard.getElementsByClassName("card-title")[0];
    actElement.innerHTML = cardData[i].title;
    //Set Picture
    actElement = actCard.getElementsByClassName("card-img")[0];
    actElement.setAttribute("src", cardData[i].img);
    //Set Descripiton
    actElement = actCard.getElementsByClassName("card-desc")[0];
    actElement.innerHTML = cardData[i].desc;
    //Set link
    actElement = actCard.getElementsByClassName("link")[0];
    actElement.setAttribute("href", cardData[i].link);
}