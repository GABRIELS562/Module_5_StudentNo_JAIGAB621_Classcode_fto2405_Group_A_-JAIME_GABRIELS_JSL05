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


// Object containing each Guardian's preferred genre
const guardians = {

    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rap", 
    "Rocket": "Hip Hop", 
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

//console.log(guardians)

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

        
function generatePlaylist(guardians, songs) {
   
    return Object.entries(guardians).map(([guardian, preferredGenre]) => ({
        guardian,
        playlist: songs.filter(song => song.genre.toLowerCase() === preferredGenre.toLowerCase())
    }))
}
const playlist = generatePlaylist(guardians, songs);

console.log(playlist); 


    



// Call generatePlaylist and display the playlists for each Guardian
