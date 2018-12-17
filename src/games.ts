
type IGamePreview = Array<{
    source: string,
    thumb: string,
    video?: boolean,
}>;

export interface IGameState {
    id: number;
    name: string;
    backgroundImg: string;
    iconImg: string;
    backgroundColor: string;
    preview?: IGamePreview;
    description: string;
}

export const GAMES: IGameState[] = [
    {
        id: 1,
        name: "URumble 3",
        iconImg: "../assets/UR3_icon.png",
        backgroundImg: "../assets/UR3.png",
        backgroundColor: "#111111",
        description: "URumble3 is the best game since Dungeon Defenders. DD2 sucked, so URumble3 was born! You may ask what happened to the first 2 in the series, and that's a valid question! Unfortunately that's confidential, so just have fun, and don't think about it too much.",
        preview: [
            {
                source: "hR9-gYvJlpE",
                thumb: "https://i9.ytimg.com/vi/hR9-gYvJlpE/mq3.jpg?sqp=CLSl1eAF&rs=AOn4CLD3E_T-sP-Ag1la-QNxc6d2pHZexg",
                video: true,
            },
            {
                source: "../assets/TD_1.png",
                thumb: "../assets/TD_1_small.png",
            },
            {
                source: "../assets/TD_2.png",
                thumb: "../assets/TD_2_small.png",
            }
        ]
    },
    {
        id: 2,
        name: "URumble 2",
        iconImg: "../assets/UR2_icon.png",
        backgroundImg: "../assets/UR2.png",
        backgroundColor: "#111111",
        description: "Ukranian Rumble 2 was a landmark game selling 10 of 100s of youtube views on it's one demo video debut. Click the video below to see what no one is raving about. You can find out more about this game on none of the social medias of your choice, or anyone's choice.",
        preview: [
            {
                source: "EQjnSBOSgTM",
                thumb: "https://i9.ytimg.com/vi/EQjnSBOSgTM/mq3.jpg?sqp=CLSl1eAF&rs=AOn4CLD3E_T-sP-Ag1la-QNxc6d2pHZexg",
                video: true,
            },
            {
                source: "../assets/UR2_1.png",
                thumb: "../assets/UR2_1_small.png",
            },
        ],
    },
    {
        id: 3,
        name: "Game 3",
        iconImg: "",
        backgroundImg: "",
        backgroundColor: "#111111",
        description: "This is a game description!!!!1 el eoh eloeloh lelhe",
    },
    {
        id: 4,
        name: "Game 4",
        iconImg: "",
        backgroundImg: "",
        backgroundColor: "#111111",
        description: "This is a game description!!!!1 el eoh eloeloh lelhe",
    },
];
