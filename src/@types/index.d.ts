declare namespace airsonic {
  export interface Playlist {
    songCount: string;
    public: string;
    owner: string;
    name: string;
    id: string;
    duration: string;
    created: string;
    coverArt: string;
    comment: string;
    changed: string;
  }

  export interface SubSonicApiResponse {
    'subsonic-response': {
      $: {
        status: string;
        version: string;
        xmlns: string;
      };
      playlists?: [
        {
          playlist?: SubsonicPlaylist[];
        }
      ];
    };
  }
}

interface SubsonicPlaylist {
  $: {
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
  };
}
