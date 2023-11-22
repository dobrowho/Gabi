const texts = [
    "Man, I love this girl's smile. It looks so pure and inocent, I like her a lot. Her first smile about me acting stupid was priceless.",
    "I really like her lips too. They are shinny and glossy. Would you believe me that she likes to smoke tigari tractoriste?",
    "Her eyes are something else. I bet that she already sees a lot of things but un rocker manelist? I dont think so.",
    "This silly cat reminds me of her. She is just so small and cute I wish I can make her even smaller and fit her inside my pocket.",
    "I would like to learn how to play the guitar just to sing for her when I get drunk.",
    "That hair so pretty like bruhh. I dont know, it suits her perfectly. I would like to play with her hair.",
    "This is her getting angry at me. So funny bruh she things that she is some big deal but daca ii dau o dreapta...",
    "I would really like a lot to hug her. Gen esti foarte imbratisabila.",
];

const titles = [
    "Her smile.",
    "Her lips.",
    "Her eyes.",
    "She smol.",
    "Guitar car gen.",
    "Her hair.",
    "She fights back.",
    "She huggable.",
]

const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const pics = document.getElementById("pics");
const text = document.getElementById("description");
const title = document.getElementById("minititle");

let number = 0;
let numbert = 0;
let pic = 1;

text.innerHTML = texts[number];
title.innerHTML = titles[numbert];
pics.style.backgroundImage = "url(./1.jpeg)"

let image = "url(./" + pic + ".jpeg)";
pics.style.backgroundImage = image;

buttonLeft.addEventListener("touchstart", (e) =>
{
    if(number)
    {
        number--;
        numbert--;
        pic--;
        text.innerHTML = texts[number];
        title.innerHTML = titles[numbert];
        let image = "url(./" + pic + ".jpeg)";
        pics.style.backgroundImage = image;
    }
    else
    {
        number = 7;
        numbert = 7;
        pic = 8;
        text.innerHTML = texts[number];
        title.innerHTML = titles[numbert];
        let image = "url(./" + pic + ".jpeg)";
        pics.style.backgroundImage = image;
    }
})

buttonRight.addEventListener("touchstart", (e) =>
{
    if(number<7)
    {
        number++;
        numbert++
        pic++;
        text.innerHTML = texts[number];
        title.innerHTML = titles[numbert];
        let image = "url(./" + pic + ".jpeg)";
        pics.style.backgroundImage = image;
    }
    else
    {
        number = 0;
        numbert = 0;
        pic = 1;
        text.innerHTML = texts[number];
        title.innerHTML = titles[numbert];
        let image = "url(./" + pic + ".jpeg)";
        pics.style.backgroundImage = image;
    }
})



