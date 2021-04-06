import React from "react";
import "./PlaylistItem.css";

class PlaylistItem extends React.Component {
	render() {
		return (
			<div className="Playlist-item">
				<p>{this.props.playlist.name}</p>
			</div>
		);
	}
}

export default PlaylistItem;
