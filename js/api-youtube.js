const apiKey = 'AIzaSyAnPO7JaEMbrENYdEYsyCMcfL9WYRYUfRM';
const elementCallback = document.querySelectorAll(".js-open-video");
const modal = document.querySelector(".js-video");

elementCallback.forEach(function(element){
    element.addEventListener("click", function(){
        var playlistId = element.dataset.playlist;
        getPlaylistData(playlistId)
    })
})


async function getPlaylistData(playlistId) {
    console.log(playlistId)
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );
  const data = await response.json();
  
  const playlistItems = data.items;

  modal.classList.add("video--active");

  playlistItems.forEach((item) => {
    var urlIframe = `http://www.youtube.com/embed?listType=playlist&list=${playlistId}` 
    document.querySelector(".video-teste").src = urlIframe;
  })

}

async function insertPlaylist() {
  const playlistData = await getPlaylistData();

  const playlistItems = playlistData.items;
  const playlistContainer = document.getElementById('playlist-container');

  playlistItems.forEach((item) => {
    const playlistId = item.id;

    const playlistTitle = item.snippet.title;
    var urlIframe = `http://www.youtube.com/embed?listType=playlist&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n` 
    document.querySelector(".video-teste").src = urlIframe;

    //const playlistElement = document.createElement('a');
    //playlistElement.href = `https://www.youtube.com/playlist?list=${playlistId}`;
    //playlistElement.innerText = playlistTitle;

    // playlistContainer.appendChild(playlistElement);

  });
}

// insertPlaylist()



