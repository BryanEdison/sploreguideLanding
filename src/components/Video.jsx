import React, {Component} from 'react';


const vidStyle = {
height: '100%',
width: '100%',
top: 0,
padding: 'none',
position: 'absolute'
}


class Vid extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://cdn-b-east.streamable.com/video/mp4/n0fiy.mp4?token=SpBWdEUc9oTg77dnqdKLCA&expires=1531947604'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay muted style={vidStyle}>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                <source src={this.state.videoURL} type="video/flv" />

                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Vid;