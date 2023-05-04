import YouTube from 'react-native-youtube';
import { API_KEY_1, API_KEY_2 } from "../api/api";

const Video = (props) => {

    const route = props.route;
    const videoId = route.params?.videoId;

    return (
        <YouTube
            apiKey={API_KEY_2}
            videoId='x7g5TK35Yas' // The YouTube video ID
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
        />
    )
}

export default Video;