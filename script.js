function fetchMeme(){    
    const memeElement = document.getElementById("memeId");
    memeElement.innerHTML = 'Loading...';
    
    fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(memeData =>{
        const memeText = memeData.attachments[0].text;
        memeElement.innerHTML = memeText;
    })
}

document.getElementById('next').addEventListener('click', fetchMeme);

fetchMeme();