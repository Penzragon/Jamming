const clientId = "739c31e7b96e4fd0b52fd35a950da9aa";
const redirectUri = "http://localhost:3000/";
let accessToken;

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expireInMatch = window.location.href.match(/expires_in=([^&]*)/);
		if (accessTokenMatch && expireInMatch) {
			accessToken = accessTokenMatch[1];
			const expireIn = Number(expireInMatch[1]);
			window.setTimeout(() => (accessToken = ""), expireIn * 1000);
			window.history.pushState("Access Token", null, "/");
			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},
};

export default Spotify;
