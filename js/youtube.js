var player;
const openModalElement = document.querySelector(".js-open-video");
const modal = document.querySelector(".js-video");
const containerPrev = document.querySelector(".js-prev-container");
const containerNext = document.querySelector(".js-next-container");


openModalElement.addEventListener("click", function(){
    modal.classList.add("video--active");
    onPlayerReady();
})

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
         playerVars: {
        //    'rel': 0,
        //    'showinfo': 0,
        //    'autoplay': 0,
        //    'controls': 0,
         },
        events: {
            // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });

    // document.querySelector(".js-title-video").innerHTML = player.videoTitle;

    // console.log(player.videoTitle)
}

function onPlayerReady(event) {
    player.loadPlaylist({
        'listType': 'playlist',
        'list': 'PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
        "loopPlaylists": false,
    });

    onChangeTitle(player)
    verifyIndexVideo(player)
}

function onChangeTitle(e){
    document.querySelector(".js-title-video").innerHTML = "";
    setTimeout(function(){
        document.querySelector(".js-title-video").innerHTML = e.getIframe().getAttribute("title");
    }, 2000)
}

function onPlayerStateChange(e){

}

function verifyIndexVideo(e) {
    setTimeout(function(){
        containerPrev.classList.remove("disabled");
        containerNext.classList.remove("disabled");

        if(e.getPlaylistIndex() == 0){
            containerPrev.classList.add("disabled")
        }

        if(e.getPlaylistIndex() == parseInt(e.playerInfo.playlist.length) - 1){
            containerNext.classList.add("disabled")
        }

    }, 1000)
}

document.querySelector(".js-close-video").addEventListener("click", ()=> {
    player.stopVideo();
    modal.classList.remove("video--active");
})

document.querySelector(".js-next").addEventListener("click", ()=> {
    player.nextVideo();
    onChangeTitle(player)
    verifyIndexVideo(player)
})

document.querySelector(".js-prev").addEventListener("click", ()=> {
    player.previousVideo();
    onChangeTitle(player)
    verifyIndexVideo(player)
})

