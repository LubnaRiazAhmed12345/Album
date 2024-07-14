//  Write a function called make_album() that builds a Object describing a music album.


function make_album(artist_name: string,album_title: string,tracks?:number){
let album: {artist: string, title:string,tracks?:number} = {
    artist: artist_name,
    title:album_title,
};
if(tracks !== undefined){
    album.tracks = tracks
}
return album;
}
let album1 = make_album("Usman" , "Album title 1")

