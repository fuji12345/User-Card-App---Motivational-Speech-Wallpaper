// ここから書いてください。
function createMotivationalSpeechWallpaper(object){
    //カード
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "container", "my-5", "border", "border-white");
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "justify-content-center", "align-items-center");
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "col-md-8", "col-lg-8");


    //画像の部分
    let backgroundImg = document.createElement("img");
    backgroundImg.classList.add("card-img");
    backgroundImg.src = object.imgUrl;
    

    //文の外枠div
    let sentenceOuter = document.createElement("div");
    sentenceOuter.classList.add("card-img-overlay", "d-flex");
    //カラーコードで色を変換したいときのやり方。
    sentenceOuter.style.color = object.color;

    //位置によって別々のクラスを追加する。
    if(object.vertical === "top"){
        sentenceOuter.classList.add("align-items-start");
    }else if(object.vertical === "center"){
        sentenceOuter.classList.add("align-items-center");
    }else if(object.vertical === "bottom"){
        sentenceOuter.classList.add("align-items-end");
    }
    if(object.horizontal === "left"){
        sentenceOuter.classList.add("justify-content-start");
    }else if(object.horizontal === "center"){
        sentenceOuter.classList.add("justify-content-center");
    }if(object.horizontal === "right"){
        sentenceOuter.classList.add("justify-content-end");
    }


    //文
    let sentenceH4 = document.createElement("h4");
    sentenceH4.classList.add("font-weight-bold", "col-8", "col-md-7");

    sentenceH4.innerHTML = object.sentence;


    sentenceOuter.append(sentenceH4);
    //console.log(sentenceOuter);
    colDiv.append(backgroundImg);
    colDiv.append(sentenceOuter);
    //
    rowDiv.append(colDiv);
    //
    cardDiv.append(rowDiv);

    return cardDiv;
}

class Paper{
    constructor(sentence, color, imgUrl, vertical, horizontal){
        this.sentence = sentence;
        this.color = color;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }
}

let target = document.getElementById("target");


let paper1 = new Paper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");

target.append(createMotivationalSpeechWallpaper(paper1));


let paper2 = new Paper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");

target.append(createMotivationalSpeechWallpaper(paper2));


let paper3 = new Paper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

target.append(createMotivationalSpeechWallpaper(paper3));

// 関数呼び出しの例
// let domObj = document.getElementById("target");

// motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");

// motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");

// motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");;