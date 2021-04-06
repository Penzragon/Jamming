import React from "react";
import "./Track.css";

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			audio: new Audio(this.props.track.preview),
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.playSample = this.playSample.bind(this);
		this.pauseSample = this.pauseSample.bind(this);
	}

	playSample() {
		this.setState({ isPlaying: true });
		this.state.audio.play();
	}

	pauseSample() {
		this.setState({ isPlaying: false });
		this.state.audio.pause();
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

	renderPlayPause() {
		if (this.state.isPlaying) {
			return (
				<button className="Track-action PlayPause" onClick={this.pauseSample}>
					Pause
				</button>
			);
		} else {
			return (
				<button className="Track-action PlayPause" onClick={this.playSample}>
					Play
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

					{this.props.track.preview && this.renderPlayPause()}
					{!this.props.track.preview && (
						<p className="NoAudio">No Audio Sample</p>
					)}
				</div>

				{this.renderAction()}
			</div>
		);
	}
}

export default Track;
