declare namespace airsonic {
  export interface PlaylistDetails {
    playlist: Playlist;
    songs: Song[];
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
  }
}

declare namespace SubSonicApi {
  export interface Response {
    'subsonic-response': {
      $: {
        status: StatusTypes;
        version: string;
        xmlns: string;
      };
      playlists?: [
        {
          playlist?: PlaylistList[];
        },
      ];
      playlist?: [
        {
          $: Playlist;
          entry: SongList[];
        },
      ];
    };
  }

  export interface Playlist {
    id: string;
    name: string;
    comment: string;
    owner: string;
    public: string;
    songCount: string;
    duration: string;
    created: string;
    changed: string;
    coverArt: string;
  }

  export interface PlaylistList {
    $: Playlist;
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
  }

  export interface SongList {
    $: Song;
  }

  export type StatusTypes = 'ok' | 'error';
}
