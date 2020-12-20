declare namespace airsonic {
  /**
   * Generic interface for playlist objects
   */
  export interface Playlist {
    changed: string;
    comment: string;
    coverArt: string;
    created: string;
    duration: string;
    id: string;
    owner: string;
    name: string;
    public: string;
    songCount: string;
  }

  /**
   * Generic interface for song objects
   */
  export interface Song {
    album: string;
    albumId?: string;
    artistId?: string;
    artist: string;
    discNumber?: string;
    bitRate: string;
    contentType: string;
    coverArt?: string;
    created: string;
    duration: string;
    genre?: string;
    id: string;
    isDir: string;
    isVideo: string;
    parent: string;
    playCount?: string;
    size: string;
    starred?: string;
    suffix: string;
    title: string;
    track?: string;
    transcodedContentType?: string;
    transcodedSuffix?: string;
    type?: string;
    year?: string;
    selected?: boolean;
    previousClicked?: boolean;
  }

  /**
   * Generic interface for album objects
   */
  export interface Album {
    artist: string;
    artistId: string;
    coverArt?: string;
    created: string;
    duration: string;
    genre?: string;
    id: string;
    name: string;
    songCount: string;
  }

  export interface AlbumViewItem extends Album {
    year?: string;
  }

  /**
   * http://www.subsonic.org/pages/api.jsp#getPlaylist
   *
   * Interface contains details of retrieved playlist in addition
   * to a list of songs.
   */
  export interface PlaylistDetails {
    playlist: Playlist;
    songs: Song[];
  }

  /**
   * http://www.subsonic.org/pages/api.jsp#getAlbum
   *
   * Interface contains details of album in addition
   * to the album song list.
   */
  export interface AlbumDetails {
    album: AlbumViewItem; // AlbumViewItem
    songs: Song[];
  }

  /**
   * http://www.subsonic.org/pages/api.jsp#getAlbumList2
   *
   * Album types that can be used to filter the /getAlbumList and
   * /getAlbumList2 requests.
   */
  export type getAlbumTypes =
    | 'random'
    | 'newest'
    | 'highest'
    | 'frequent'
    | 'recent'
    | 'alphabeticalByName'
    | 'alphabeticalByArtist'
    | 'starred'
    | 'byYear'
    | 'byGenre';

  /**
   * http://www.subsonic.org/pages/api.jsp#getAlbumList2
   *
   * Additional options that can be applied to filter /getAlbumList and
   * /getAlbumList2 requests.
   *
   * @link getAlbumTypes
   */
  export interface getAlbumOptions {
    fromYear?: number;
    toYear?: number;
    genre?: string;
    offset?: number;
    size?: number;
  }

  /***
   * http://www.subsonic.org/pages/api.jsp#updatePlaylist
   */
  export interface PlaylistUpdateRequest {
    playlistId: string;
    name?: string;
    comment?: string;
    public?: boolean;
    songIdsToAdd?: string[];
    songIndexesToRemove?: string[];
  }
}

declare namespace airsonicEvents {
  export interface SongClick {
    event: MouseEvent;
    song: airsonic.Song;
  }
}
