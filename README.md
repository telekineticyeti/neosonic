# NeoSonic

A playlist-first organization tool that provides a clean, functional UI for maintaining playlists on music servers that support the [subsonic API](http://www.subsonic.org/), such as Airsonic, Subsonic and Funkwhale.

## Try it

You can use a compiled version of [NeoSonic on Github.io](https://telekineticyeti.github.io/neosonic/). Simply log in to your hosted Subsonic-API-compatible server using the login dialog.

Please note that your credentials are saved in your browser using [localstorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Credentials are not stored by any other means.

## Why this tool was made

Playlist management in Airsonic, Subsonic & Funkwhale is cumbersome. Adding or removing tracks to existing playlists is clunky and more time consuming than it should be.

There are several alternative frontend UI's available to interact with these APIs, however most either consider playlists an afterthought or do not support them at all.

NeoSonic aims to fill this void with a playlist management UI that is familiar to those found in commercial cloud music applications.

## What it is not

NeoSonic is not a music player or music uploading tool. For the time being, it is purely a playlist organization tool for music that already exists in your hosted library.

This may change in the future, but for now please consider this an additional tool to compliment your self-hosted cloud music toolbox.

NeoSonic currently does not support multi-user setups, and is intended for use on servers that are used by a single user.

## Features

- Multi-song selection using CTRL/CMD, Shift modifiers
- Drag and drop songs to sidebar playlists list

## Development

NeoSonic is written in Angular, NgRx and Angular Material. It has been developed using an Airsonic server as the API target, however it should work with any server that supports the Subsonic API.

NeoSonic is still under development but offers the basic functionality stated above. A list of features that have been/will be implemented is available on the [wiki](https://github.com/telekineticyeti/neosonic/wiki).

```sh
# Install dependencies
npm i

# Start local development sever. Will watch source directory and recompile app on changes
npm run start

# Compile production build for deployment
npm run build

# Compile production build for hosting on github pages
npm run deploy
```
