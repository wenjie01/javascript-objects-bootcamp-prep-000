var playlist = {
  taylor:"bad blood",
  Katy:'roar'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
