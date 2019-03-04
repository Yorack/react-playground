import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {commonActions} from '../actions';

const styles = theme => ({
    card: {
        display: 'flex',
        cursor: 'pointer',
        width: '30%',
        marginBottom: 10,
        height: 100,
    },
    cardFull: {
        display: 'flex',
        cursor: 'pointer',
        width: '100%',
        marginBottom: 10,
        height: 100,
    },
    cardArea: {
        display: 'flex',
        height: 100,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '70%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 100,
        alignSelf: 'baseline',
        flexBasis: '30%',
    },
    title: {
        fontSize: '1rem',
    },
});

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, video, selectedVideo } = this.props;

        if (!video) {
            return null
        }

        const imageUrl = video.snippet.thumbnails.medium.url;


        return (
            <Card className={selectedVideo ? classes.cardFull : classes.card}>
                <CardActionArea className={classes.cardArea} onClick={() => this.props.commonActions.selectVideo(video)}>
                    <CardMedia
                        className={classes.cover}
                        image={imageUrl}
                        title={video.snippet.title}
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} variant="h6">
                                {video.snippet.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {video.snippet.channelTitle}
                            </Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.common.selectedVideo
    };
};

const mapDispatchToProps = dispatch => ({
    commonActions: bindActionCreators(commonActions, dispatch),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(VideoListItem));