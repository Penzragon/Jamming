import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
import PlaylistList from "../PlaylistList/PlaylistList";

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(e) {
		this.props.onNameChange(e.target.value);
	}

	render() {
		return (
			<div className="Playlist">
				<input defaultValue="New Playlist" onChange={this.handleNameChange} />
				<div className="PlaylistItem">
					<TrackList
						tracks={this.props.playlistTracks}
						onRemove={this.props.onRemove}
						isRemoval={true}
					/>
				</div>
				<button className="Playlist-save" onClick={this.props.onSave}>
					SAVE TO SPOTIFY
				</button>
				<PlaylistList />
			</div>
		);
	}
}

export default Playlist;
