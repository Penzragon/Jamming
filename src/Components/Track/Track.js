import React from "react";
import "./Track.css";

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	renderAction() {
		if (this.props.isRemoval) {
			return (
				<button className="Track-action" onClick={this.removeTrack}>
					-
				</button>
			);
		} else {
			return (
				<button className="Track-action" onClick={this.addTrack}>
					+
				</button>
			);
		}
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	removeTrack() {
		this.props.onRemove(this.props.track);
	}

	render() {
		return (
			<div className="Track">
				<img src={this.props.track.img} />
				<div className="Track-information">
					<h3>{this.props.track.name}</h3>
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
					{this.props.track.preview && (
						<audio id="player" src={this.props.track.preview} controls></audio>
					)}
					{!this.props.track.preview && (
						<p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
							No Audio Sample
						</p>
					)}
				</div>
				{this.renderAction()}
			</div>
		);
	}
}

export default Track;
