import { Button, createStyles, Typography, withStyles, WithStyles } from "@material-ui/core";
import React, { useState } from "react";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import VideoPlayer from "../common/VideoPlayer";
import { useGlobalState } from "../state";

const styles = createStyles({
    root: {
        padding: 10,
        display: "flex",
        flexDirection: "column"
    },
    gallery: {
        height: "calc(60vh - 100px)",
        width: "100%",
    },
    installLevel: {
        flex: 0,
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 10
    },
    noGrow: {
        flex: 0
    },
    installButton: {
        height: 75,
    },
});

export interface IInfoTabProps extends WithStyles<typeof styles> {
}

let gallery: ReactImageGallery;

function InfoTab(props: IInfoTabProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentGame] = useGlobalState("selectedGame");

    const { classes } = props;

    const renderVideo = (item: ReactImageGalleryItem) => <VideoPlayer className={classes.gallery} videoId={item.original || ""} />;

    const onSlide = (index: number) => {
        if (gallery) { gallery.exitFullScreen(); }
        setCurrentIndex(index);
    };

    return <div className={classes.root}>
        <Typography style={{ flex: 0 }} variant="h5"> {currentGame.name}</Typography>
        <Typography style={{ flex: 0 }} variant="subheading">{currentGame.description}</Typography>
        <div style={{ flex: 1 }}>
            {
                currentGame.preview ?
                    <ReactImageGallery
                        ref={(g: ReactImageGallery) => gallery = g}
                        items={currentGame.preview.map<ReactImageGalleryItem>(p => ({ original: p.source, thumbnail: p.thumb, renderItem: p.video ? renderVideo : undefined }))}
                        autoPlay={false}
                        showPlayButton={false}
                        showFullscreenButton={!currentGame.preview[currentIndex].video}
                        onSlide={onSlide}
                    />
                    :
                    undefined
            }
        </div>
        <div className={classes.installLevel}>
            <Button className={classes.installButton} size="large" variant="raised" color="primary" >Get the Game!</Button>
        </div>
    </div>;
}

export default withStyles(styles)(InfoTab);
