const motds = [
    "Try the mushroom stew!",
    "Awesome!",
    "GOTY!",
    "Limited edition!",
    "It's here!",
    "More than 999 sold!",
    "Holy cow, man!",
    "The bee's knees!",
    "Spesgoat",
    "POEKOEMASTER5000",
    "FE!NMASTER7",
];

const getRandomInt = function(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const showRandomMessage = function() {
    const messageContainer = document.querySelector("#myMessage");
    
    const currentMessage = messageContainer.innerText;
    const filteredMessages = motds.filter((motd) => motd !== currentMessage);
    const randomIndex = getRandomInt(0, filteredMessages.length);

    messageContainer.innerText = filteredMessages[randomIndex];
}

const addButtonClickEvent = function() {
    const buttonElement = document.querySelector("#myButton");

    buttonElement.addEventListener("click", showRandomMessage);
}

document.addEventListener("DOMContentLoaded", addButtonClickEvent);
document.addEventListener("DOMContentLoaded", showRandomMessage);
