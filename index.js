// Array of song objects. Add at least 5 songs with title, artist, and genre properties.

const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  {
    title: "Chasing That Feeling",
    artist: "Tomorrow X Together",
    genre: "Pop",
  },
  { title: "Bouncy", artist: "ATEEZ", genre: "Rock" },

  { title: "Crown", artist: "Tomorrow X Together", genre: "Pop" },
  { title: "Given Taken", artist: "Enhypen", genre: "Pop" },

  { title: "Love Killa", artist: "Monsta X", genre: "Pop" },

  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Rock",
  Groot: "Pop",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  //iteration
  const playlist = {};
  for (const guardian in guardians) {
    const preferredGenre = guardians[guardian];
    playlist[guardian] = [];

    //filtering

    const guardianPlaylist = songs
      .filter((song) => song.genre === preferredGenre)
      .map((song) => ({ title: song.title, artist: song.artist }));

    //assignment
    playlist[guardian] = guardianPlaylist;
  }

  return playlist;
}
// Your code here

//const playlist = generatePlaylist(guardians, songs);
//console.log(playlist);

// Call generatePlaylist and display the playlists for each Guardian

const playlistsDesign = document.getElementById("playlists");

for (const guardian in playlist) {
  const heading = document.createElement("h2");
  heading.textContent = `${guardian}'s Playlist:`;

  // Create an unordered list to display the songs
  const playlistList = document.createElement("ul");

  // Add each song to the list
  playlist[guardian].forEach((song) => {
    const listItem = document.createElement("li");
    listItem.textContent = song;
    playlistList.appendChild(listItem);
  });

  // Append the heading and the playlist list to the container
  playlistsContainer.appendChild(heading);
  playlistsContainer.appendChild(playlistList);
}
