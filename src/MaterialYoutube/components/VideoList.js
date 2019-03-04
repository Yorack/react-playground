import React, {Component} from 'react';
import VideoListItem from './videoListItem.js';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => {
    return ({
        listContainerFull: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        },
        listContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        },
        loadingContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
        },
        progress: {
            margin: theme.spacing.unit * 2,
            color: theme.palette.secondary.main,
        },
    });
};

class VideoList extends Component {
    static defaultProps = {
        videos: [],
    };

    constructor(props) {
        super(props);
    }

    renderEmpty() {
        const {classes} = this.props;

        return (
            <div className={classes.loadingContainer}>
                <Typography variant="subtitle1" color="textSecondary">
                    Please search for videos
                </Typography>
            </div>
        );
    }

    renderLoading() {
        const {classes} = this.props;

        return (
            <div className={classes.loadingContainer}>
                <CircularProgress className={classes.progress} size={30} thickness={5}/>
            </div>
        );
    }

    render() {
        const {videos, loading, classes, selectedVideo} = this.props;

        if (loading) {
            return this.renderLoading();
        }

        if (videos.length === 0) {
            return this.renderEmpty();
        }

        const videoItems = videos.map((video) => {
            return <VideoListItem
                key={video.etag}
                video={video}
            />;
        });

        return (
            <div className={selectedVideo ? classes.listContainer : classes.listContainerFull}>
                {
                    videoItems
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        videos: state.common.videos,
        loading: state.common.loading,
        search: state.common.search,
        selectedVideo: state.common.selectedVideo,
    };
};

export default withStyles(styles)(connect(mapStateToProps)(VideoList));