declare namespace airsonic {
  export interface AlbumListResult {
    artist: string;
    artistId: string;
    coverArt: string;
    created: string;
    duration: string;
    genre?: string;
    id: string;
    name: string;
    songCount: string;
  }

  export interface Album {
    id: string; // number
    artist: string;
    artistId: string;
    coverArt: string;
    created: string; // timestamp
    duration: string;
    genre?: string;
    name: string;
  }

  // Yo I hate this...
  export interface Album2 {
    id: string; // number
    name: string;
    artist: string;
    artistId: string; //number
    coverArt: string;
    songCount: string; //number
    duration: string; //number
    created: string; //timestamp
    year: string; //number
    genre?: string;
  }

  export interface PlaylistDetails {
    playlist: Playlist;
    songs: Song[];
  }

  export interface AlbumDetails {
    album: Album;
    songs: Song[];
  }

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

  export interface getAlbumOptions {
    fromYear?: number;
    toYear?: number;
    genre?: string;
    offset?: number;
    size?: number;
  }

  export interface PlaylistUpdateRequest {
    playlistId: string;
    name?: string;
    comment?: string;
    public?: boolean;
    songIdsToAdd?: string[];
    songIndexesToRemove?: string[];
  }

  export interface Playlist {
    changed: string; // TODO: Timestamp conversion
    comment: string;
    coverArt: string;
    created: string; // TODO: Timestamp conversion
    // duration: number;
    duration: string;
    id: string;
    owner: string;
    name: string;
    // public: boolean;
    public: string;
    // songCount: number;
    songCount: string;
  }

  export interface Song {
    album: string;
    albumId?: string;
    artistId?: string;
    artist: string;
    discNumber?: string;
    bitRate: string;
    contentType: string;
    coverArt?: string;
    created: string; // TODO: Timestamp conversion
    // duration: number;
    duration: string;
    genre?: string;
    id: string;
    isDir: string;
    isVideo: string;
    // isDir: boolean;
    // isVideo: boolean;
    parent: string;
    // playCount?: number;
    // size: number;
    // starred?: boolean;
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
}

declare namespace airsonicEvents {
  export interface SongClick {
    event: MouseEvent;
    song: airsonic.Song;
  }
}
