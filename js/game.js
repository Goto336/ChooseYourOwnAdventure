// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You awaken from your 100 year slumber in an unknown place. You see a glowing door appear before you. What do you?",
            choices: [
                {
                    text: "Get up and walk through the glowing door",
                    nextLevel: "cave",
                },

                {
                    text: "Go back to sleep",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You walk through the door and see two ways to go. Do you go left or right?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "You smart, but you lose",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
