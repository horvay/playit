import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import YouTube from "react-youtube";

const styles = createStyles({ root: { width: "100%", height: "100%" } });

export interface IVideoPlayerProps extends WithStyles<typeof styles> {
    videoId: string;
    className?: string;
}

function VideoPlayer(props: IVideoPlayerProps) {
    const { videoId } = props;

    const videoOpts = { playerVars: { modestbranding: 1, iv_load_policy: 3 } } as any;
    return <div className={props.className}>
        <YouTube videoId={videoId} className={props.classes.root} opts={videoOpts} />
    </div>;
}

export default withStyles(styles)(VideoPlayer);
