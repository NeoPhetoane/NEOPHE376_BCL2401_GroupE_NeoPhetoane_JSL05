// Array of song objects. Add at least 5 songs with title, artist, and genre properties

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
  { title: "" },
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
  // return playlist;
  return Object.entries(guardians).map(([guardian, preferredGenre]) => {
    let playlist = songs.filter((song) => song.genre === preferredGenre);
    return { guardian, playlist };
  });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

const playlistDesign = document.getElementById("playlists");

playlists.forEach(({ guardian, playlist }) => {
  // const { guardian, songs} = playlist;
  const playlistElement = document.createElement("div");
  playlistElement.classList.add("playlist");

  const heading = document.createElement("h2");
  heading.textContent = `${guardian}'s Playlist:`;
  playlistElement.appendChild(heading);

  // Display

  playlist.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song");

    const songTitle = document.createElement("span");
    songTitle.textContent = song.title;
    songTitle.classList.add("song-title");
    songElement.appendChild(songTitle);

    const songArtist = document.createElement("span");
    songArtist.textContent = ` - ${song.artist}`;
    songElement.appendChild(songArtist);

    playlistElement.appendChild(songElement);
  });

  playlistDesign.appendChild(playlistElement);
});
