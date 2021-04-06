import React from "react";
import "./PlaylistList.css";
import Spotify from "../../util/Spotify";
import PlaylistItem from "../PlaylistItem/PlaylistItem";

class PlaylistList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { listPlaylists: [] };
	}

	componentWillMount() {
		Spotify.getUserPlaylist().then((listPlaylist) => {
			this.setState({ listPlaylists: listPlaylist });
		});
	}

	render() {
		return (
			<div className="containerPlaylist">
				<h2 className="local">Local Playlist</h2>
				<div className="Playlist-list">
					<div className="PlaylistList">
						{this.state.listPlaylists
							? this.state.listPlaylists.map((playlist) => {
									return <PlaylistItem playlist={playlist} key={playlist.id} />;
							  })
							: false}
					</div>
				</div>
			</div>
		);
	}
}

export default PlaylistList;
