// ==UserScript==
//
// @name            WBR cheat
// @namespace       Violentmonkey Scripts
// @match           https://www.whatbeatsrock.com/*
// @grant           none
// @version         1.0
// @author          GameRoMan
// @description     WBR cheat script
// @downloadURL     https://github.com/GameRoMan/whatbeatsrock/raw/refs/heads/main/scripts/hack/index.user.js
//
// ==/UserScript==


(function () {
    const words = [
        'apple', 'avocado', 'bacon', 'baguette', 'banana', 'bed', 'bird', 'book',
        'bottle', 'box', 'broccoli', 'cake', 'camel', 'camera', 'carrot', 'cat',
        'cheese', 'chicken', 'chocolate', 'coconut', 'coffee', 'cookie', 'cow',
        'croissant', 'cucumber', 'diamond', 'dog', 'door', 'egg', 'elephant', 'fox',
        'frog', 'garlic', 'goat', 'grape', 'hamburger', 'honey', 'horse', 'hot-dog',
        'kangaroo', 'koala', 'lemon', 'mango', 'milk', 'monkey', 'mushroom', 'onion',
        'oyster', 'pancake', 'panda', 'pear', 'pencil', 'pepper', 'piano', 'pig',
        'pizza', 'popcorn', 'potato', 'pumpkin', 'rabbit', 'snail', 'snake', 'soup',
        'spaghetti', 'spider', 'strawberry', 'sushi', 'tea', 'tomato', 'turtle',
        'waffle', 'watermelon', 'wheel', 'window', 'yogurt'
    ]


    function get_new() {
        const text = (document.querySelectorAll(".text-center")[2]).innerHTML;
        const phrases = text.split('  🤜 ');

        if (phrases.length == 1) return 'apple that destroys this exact rock';

        const last = phrases[0].split(' that destroys this exact ');

        for (let i = 0; i < words.length; i++) {
            const next = words[i];
            const string = `${next} that destroys this exact ${last[0]}`;

            if (phrases.includes(string) || last.includes(next)) {
                continue;
            }

            return string;
        }

        return 'https://www.whatbeatsrock.com/user/gameroman/custom';
    }


    document.onkeypress = function(event) {
        if (event.key == ' ') {
            const inputBox = document.querySelector('.pl-4.py-4.text-lg.border.border-1-black');
            inputBox.id = 'input-box';
            inputBox.value = get_new();
        }
    };
})();
