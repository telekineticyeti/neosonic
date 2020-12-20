declare namespace SubSonicApi {
  export interface Response {
    'subsonic-response': {
      $: {
        status: StatusTypes;
        version: string;
        xmlns: string;
      };
      error?: {};
      albumList2?: [
        {
          album: GetAlbumList[];
        },
      ];
      getAlbum?: [
        {
          $: GetAlbumEntity;
          song: GetSongList[];
        },
      ];
      playlists?: [
        {
          playlist?: PlaylistList[];
        },
      ];
      playlist?: [
        {
          $: Playlist;
          entry: GetSongList[];
        },
      ];
      searchResult3?: [
        {
          artist?: GetArtistList[];
          album?: GetAlbumList[];
          song?: GetSongList[];
        },
      ];
      artist?: {};
      album?: {};
    };
  }

  export interface Error {
    code: string;
    message: string;
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

  // http://www.subsonic.org/pages/api.jsp#getAlbumList2
  export interface AlbumListEntity {
    artist: string;
    artistId: string;
    coverArt: string;
    created: string;
    duration: string;
    genre?: string;
    id: string;
    name: string;
    songCount: string;
    year?: string;
  }

  // http://www.subsonic.org/pages/api.jsp#getAlbum
  export interface GetAlbumEntity {
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

  export interface Artist {
    id: string;
    name: string;
    coverArt: string;
    albumCount: string;
  }

  export interface GetArtistList {
    $: Artist;
  }

  export interface GetSongList {
    $: Song;
  }

  export interface GetAlbumList {
    $: AlbumListEntity;
  }

  export interface GetAlbum {
    $: GetAlbumEntity;
  }

  export type StatusTypes = 'ok' | 'error';
}
