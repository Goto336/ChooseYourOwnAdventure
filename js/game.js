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
            music: "InFamous.mp3",
            message: "You walk through the door and see two ways to go. Do you go left or right?",
             choices: [
                {
                    text: "Go left",
                    nextLevel: "luckyroom",
                },

                {
                    text: "Go right",
                    nextLevel: "nightmare",
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
        
        nightmare: {
            background_image: "giphy.gif",
            music: "Guardian Battle.mp3",
            message: "You encounter your demon self and is chargering at you. What do you do?",
            choices: [
                {
                    text: "Face your fears",
                    nextLevel: "death1",
                },

                {
                    text: "Dip",
                    nextLevel: "death2",
                },
            ]
        },
        
        death1: {
            background_image: "gameover.jpg",
            music: "Challenge Failed.mp3",
            message: "You try to fight your demon self but since you have no weapon, it beats and stabs you and you die. What did you expect?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        death2: {
            background_image: "gameover.jpg",
            music: "Challenge Failed.mp3",
            message: "Before you get clapped, you decide to run. But you realize that you have nowhere to run and you still get clapped and die. Tough luck buddy.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        luckyroom: {
            background_image: "glow.gif",
            music: "Uncharted Mid.mp3",
            message: "You see a glowing object on the floor. Do you pick it up?",
            choices: [
                {
                    text: "OBVIOUSLY!",
                    nextLevel: "goodmare",
                },

                {
                    text: "YEET",
                    nextLevel: "death3",
                },
            ]
        },
        
        death3: {
            background_image: "gameover.jpg",
            music: "Challenge Failed.mp3",
            message: "Not wanting to risk your life by touching the object, you got stabbed from behide by a demon figure and died.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
       goodmare: {
            background_image: "giphy.gif",
            music: "Guardian Battle.mp3",
            message: "You encounter your demon self and is chargering at you. What do you do?",
            choices: [
                {
                    text: "COME AT ME BRO!",
                    nextLevel: "goodend",
                },

                {
                    text: "Yeet the attack and dip",
                    nextLevel: "death4",
                },
            ]
        },
        
        death4: {
            background_image: "gameover.jpg",
            music: "Challenge Failed.mp3",
            message: "Even with your glowing object, you chicken out and run. The demon catches you and kills you. Let's be honest, WHERE WERE YOU GOING TO GO???",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        goodend: {
            background_image: "YouWin.jpg",
            music: "Uncharted End.mp3",
            message: "Using the glowing object you picked up, a fire awakens inside you and you manage to match your demon self. You daze the demon and charge a super punch. You punch the demon so hard, it turns into ashes. You then go and try to find a way out of this hell.",
            choices: [
                {
                    text: "Congratulation! You live to fight another day. Start over?",
                    nextLevel: "start",
                },
            ]
        },

    }
};
