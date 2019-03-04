import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    container: {

    }
});

export class VideoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {selectedVideo, classes} = this.props;

        if (!selectedVideo) {
            return null;
        }

        const videoId = selectedVideo.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;

        console.log(selectedVideo)
        console.log(selectedVideo.snippet.title)
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl}></iframe>
                </div>
                <Typography variant="h6">
                    {selectedVideo.snippet.title}
                </Typography>
                <div className="details">
                    <div>{selectedVideo.snippet.title}</div>
                    <div>{selectedVideo.snippet.description}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedVideo: state.common.selectedVideo
});

export default withStyles(styles)(connect(mapStateToProps)(VideoDetail));