fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(memeData =>{
        const memeText = memeData.attachments[0].text;
        const memeElement = document.getElementById("memeId");

        memeElement.innerHTML = memeText;
    })