let final_result = ''
let permission = true

function bot(){
    let array_bot_options = ['paper','rock','scisor'];
    let num_selector = Math.round(Math.random()*2);
    let bot_choice = array_bot_options[num_selector];
    return bot_choice
}
function crossingAnswers(player_answers,bot_answers){
    if(player_answers === 'paper'){
        switch(bot_answers){
            case 'paper':
                final_result = 'tie'
                break;
            case 'rock':
                final_result = 'win'
                break;
            case 'scisor':
                final_result = 'lose'
                break;
        }
    }else if(player_answers === 'rock'){
        switch(bot_answers){
            case 'paper':
                final_result = 'lose'
                break;
            case 'rock':
                final_result = 'tie'
                break;
            case 'scisor':
                final_result = 'win'
                break;
        }
    }else if(player_answers === 'scisor'){
        switch(bot_answers){
            case 'paper':
                final_result = 'win'
                break;
            case 'rock':
                final_result = 'lose'
                break;
            case 'scisor':
                final_result = 'tie'
                break;
        }
    }
    return final_result
}
function showingBotAnswer(bot){
    let bot_hand = document.querySelector('img#' + bot)
    bot_hand.style.display = 'block'
}
function hidingHands(){
    let hand1 = document.querySelector('img#paper')
    let hand2 = document.querySelector('img#rock')
    let hand3 = document.querySelector('img#scisor')

    hand1.style.display = 'none'
    hand2.style.display = 'none'
    hand3.style.display = 'none'
}
function printingResult(final){
    let result = document.querySelector('span#' + final)
    result.style.display = 'block'
}
function hidingResults(){
    let result1 = document.querySelector('span#win')
    let result2 = document.querySelector('span#tie')
    let result3 = document.querySelector('span#lose')

    result1.style.display = 'none'
    result2.style.display = 'none'
    result3.style.display = 'none'
}
function check(player_answers){
    if(permission){
        permission = false
        let bot_answers = bot()
        let result = crossingAnswers(player_answers,bot_answers)

        showingBotAnswer(bot_answers)

        setTimeout(() => {
            hidingHands()
            hidingResults()
            permission = true
        },3000)

        printingResult(result)
    }
}
