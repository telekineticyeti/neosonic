# NeoSonic

A playlist-first organization tool that provides a clean, functional UI for maintaining playlists on music servers that support the [subsonic API](http://www.subsonic.org/), such as Airsonic, Subsonic and Funkwhale.

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

NeoSonic is still under development but offers the basic functionality stated above. Here is a running list of features that have been/will be implemented.

### Done

- [x] Router state + serializer
- [x] Material Icons
- [x] CDK Drag & Drop
- [x] Multiselect Songs
- [x] Album Viewer
- [x] Album Viewer - Song Drag & Drop
- [x] Playlist Details
- [x] Playlist Creation
- [x] Playlist Deletion
- [x] Playlist Editing
- [x] Playlist removal to trigger reload of songs
- [x] Artist Viewer
- [x] Search
- [x] Move songclick logic to utility service to reduce code duplication

### TODO

- [ ] Toaster feedbacks
- [ ] Album Browser by Type
- [ ] Album Browser Infinite Scroll
- [ ] Album Drag & Drop to Playlist
- [ ] Drag & Drop preview improvements
- [ ] Album Viewer - More by this artist
- [ ] Context menus for playlist/songs
- [ ] Server login & persistance
- [ ] Search typeahead
- [ ] Search Icon / Clear Button
- [ ] Recent Searches (from persist)
- [ ] Load Spinner
- [ ] Keyboard Shortcuts
