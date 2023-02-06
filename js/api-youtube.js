const apiKey = 'AIzaSyAnPO7JaEMbrENYdEYsyCMcfL9WYRYUfRM';
const playlistId = "PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n";

console.log("teste")

async function getPlaylistData() {
  console.log("alou")
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );
  const data = await response.json();

  console.log(data)

  return data;
}

getPlaylistData()

async function insertPlaylist() {
  const playlistData = await getPlaylistData();

  console.log(playlistData)

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

    return;

  });
}

insertPlaylist()



