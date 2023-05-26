const pics = [
    'url("Playboi-Carti.webp")',
    'url("67887b345e287d258854176b677ebb1e.jpg")',
    'url("4568392-min-1200x834.webp")',
    'url("download-1.jpg")',
    'url("download copy.jpg")',
    'url("PlayBoi-Carti-Quotes-for-Rap-Fans.webp")',
    'url("Carti1.jpg")',
    'url("Carti2.jpg")',
    'url("gq-playboi-carti-lead.webp")',
    'url("c7dgac5wcaapax6.jpg")',
    'url("Playboi-Carti-800x454.jpg")',
    'url("1200x1200bf-60.jpg")',
    'url("playboi-carti-2-1608636043-view-1.jpg")',

    
];

const pic = document.querySelector('section');


function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}

setInterval(showImage,1000);