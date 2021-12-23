const gifts = [
    {
        name: "partridge in a pear tree",
        type: "bird",
        quantity: 1,
        ordinal: "first",
        numName: "a"
    }, {
        name: "turtle doves",
        type: "bird",
        quantity: 2,
        ordinal: "second",
        numName: "two"
    }, {
        name: "French hens",
        type: "bird",
        quantity: 3,
        ordinal: "third",
        numName: "three"
    }, {
        name: "calling birds",
        type: "bird",
        quantity: 4,
        ordinal: "fourth",
        numName: "four"
    }, {
        name: "golden rings",
        type: "apparel",
        quantity: 5,
        ordinal: "fifth",
        numName: "five"
    }, {
        name: "geese a-laying",
        type: "bird",
        quantity: 6,
        ordinal: "sixth",
        numName: "six"
    }, {
        name: "swans a-swimming",
        type: "bird",
        quantity: 7,
        ordinal: "seventh",
        numName: "seven"
    }, {
        name: "maids a-milking",
        type: "human",
        quantity: 8,
        ordinal: "eighth",
        numName: "eight"
    }, {
        name: "ladies dancing",
        type: "human",
        quantity: 9,
        ordinal: "ninth",
        numName: "nine"
    }, {
        name: "lords a-leaping",
        type: "human",
        quantity: 10,
        ordinal: "tenth",
        numName: "ten"
    }, {
        name: "pipers piping",
        type: "human",
        quantity: 11,
        ordinal: "eleventh",
        numName: "eleven"
    }, {
        name: "drummers drumming",
        type: "human",
        quantity: 12,
        ordinal: "twelfth",
        numName: "twelve"
    },
]

function giveGift(day) {
    let section = document.querySelector("section");
    if (day > 0 && day < 13) {
        section.append(`On the ${gifts[day - 1].ordinal} day of Christmas, my true love gave to me...`, document.createElement("br"));
        let dayGifts = gifts.slice(0, day);
        while (dayGifts.length > 0) {
            if (dayGifts.length == 1 && day > 1) section.append(`and...`, document.createElement("br"));
            gift = dayGifts.pop()
            section.append(`${gift.numName} ${gift.name}`, document.createElement("br"));
        }
    } else section.append('CHRISTMAS IS 12 DAYS!')
}

function submit(event) {
    event.preventDefault();
    document.querySelector("section").innerHTML = ""
    let formData = Object.fromEntries(new FormData(event.target))
    giveGift(formData.day);
    document.querySelector("form").reset();
}

function init() {
    document.querySelector("form").addEventListener('submit', submit)
}

window.onload = init;