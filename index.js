/* Hi Benjamin, this exercise was really tough. I had to do extensive research and AI to help me along the steps.
It really seems complicated but i have tried to break down each line of code. I will keep practicing this specific
 example and hopefully it will stick*/






// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Shot for me", artist: "Drake", genre: "Rap" },
    { title: "Hymn for the weekend", artist: "Coldplay", genre: "Rock" },
    { title: "Heartbreak Anniversary", artist: "Giveon", genre: "R&B, Soul" },
    { title: "I wonder", artist: "Kanye West", genre: "Hip Hop" },
    { title: "Stronger", artist: "Kanye West", genre: "Hip Hop" },
    // Feel free to add even more songs
];
//console.log(songs);

// Object containing each Guardian's preferred genre
const guardians = {

    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rap", 
    "Rocket": "Hip Hop", 
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

//console.log(guardians);

/* Function to generate playlist based on preferred genre
Explanation of code below: 
- function takes two arguments one object and one array --First time iv come across an example like this-- 
- Object.entries(guardians)---Converts the guardians object into an array of key-value pairs (guardian name and preferred genre).
- .map(([guardian, preferredGenre]) => ...): Iterates over each guardian-genre pair. Creates a new object for each guardian.
- { guardian, playlist: ... }: Creates an object with two properties: guardian: The guardian's name. playlist: An array of songs filtered based on the guardian's preferred genre.
 songs.filter(song => song.genre.toLowerCase() === preferredGenre.toLowerCase()):
- Filters the songs array to include only songs whose genre matches the guardian's preferred genre.
Converts both song.genre and preferredGenre to lowercase for case-insensitive comparison.
*/        

        
function generatePlaylist(guardians, songs) /* Functions takes two arguments */ {
   
    return Object.entries(guardians).map(([guardian, preferredGenre]) => ({ /* Object.entries converts guardians into an array of key-value pairs
        (guardian name and preferred genre)                                  .map it uses the map method to iterate over each key-value pair and create a new object.                                                             */
        guardian,
        playlist: songs.filter(song => song.genre.includes(preferredGenre))
            }));
        }

const playlists = generatePlaylist(guardians, songs);

console.log(Object.entries(guardians));

//console.log(playlists); 

// Call generatePlaylist to get the playlists

// Get the #playlists div---This was straight forward to understand and implement
const playlistsDiv = document.getElementById('playlists');



// Dynamically create and append elements to display each Guardian's playlist
playlists.forEach(({ guardian, playlist }) => { //iterates over playlist array. Each iteration creates a new object with two properties: guardian: The guardian's name. playlist: An array of songs filtered based on the guardian's preferred genre.
    // Create a div for each Guardian's playlist
    const guardianDiv = document.createElement('div');// Create new div
    guardianDiv.className = 'playlist'; //add class name from css

    // Create and append the Guardian's name
    const guardianName = document.createElement('h2'); // Create new h2 element
    guardianName.textContent = `${guardian}'s Playlist`;
    guardianDiv.appendChild(guardianName); // Append the h2 element to the div

    // Create and append the list of songs
    const songList = document.createElement('ul'); // Create new ul element
    playlist.forEach(song => {
        const songItem = document.createElement('li');
        songItem.className = 'song';

        const songTitle = document.createElement('span');
        songTitle.className = 'song-title';//   Add class name from css
        songTitle.textContent = song.title;// Add the song's title

        const songArtist = document.createElement('span');// Create new span element
        songArtist.textContent = ` by ${song.artist}`;  // Add the song's artist

        songItem.appendChild(songTitle);// Append the span element to the li element
        songItem.appendChild(songArtist);// Append the span element to the li element
        songList.appendChild(songItem);// Append the li element to the ul element
    });
    guardianDiv.appendChild(songList);

    // Append the Guardian's playlist div to the #playlists div
    playlistsDiv.appendChild(guardianDiv);
});
    

