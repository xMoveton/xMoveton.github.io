var status = 'offline';

$('.username').text(BotSettings.NameBot);
$('.status').text(BotSettings.Status[status]);

$(window).on('load', function () {
    setTimeout(() => {
        status = 'online';

        $('.status').text(BotSettings.Status[status]);
    }, Math.random() * (5000 - 400) + 400);
});

$(function ($) {
    $('form').submit(function () {
        if (getText()) {
            $('.messages').append(`<div class="chat user"><div class="message"><p>${getText()}</p></div></div>`);

            if (status === 'online') {
                if (typeof CommandList['commands'][getText()] !== 'undefined') {
                    sendMessage(CommandList['commands'][getText()]['type'], CommandList['commands'][getText()]['text']);   
                }
                else {
                    if (typeof CommandList['messages']['not_command'] !== 'undefined') {
                        sendMessage(CommandList['messages']['not_command']['type'], CommandList['messages']['not_command']['text']);  
                    }
                }
            }
            $('form')[0].reset();
            new Audio('src/raw/sound_in.mp3').play();
        }
    });

    function sendMessage (type, value) {
        $('.status').text(BotSettings.ShipmentStatus[type]);

        setTimeout(() => {
            switch (type) {
                case 'sms':
                    $('.messages').append(`<div class="chat bot"><div class="message"><p>${value}</p></div></div>`);
                    break;
                
                case 'image':
                    $('.messages').append(`<img src="${value}" width="100px" style="border-radius: 24px" alt="">`);
                    break;

                case 'audio':
                    $('.messages').append(`<audio controls><source src="${value}" type="audio/mpeg"><source src="${value}" type="audio/ogg"></audio>`);
                    break;

                default:
                    console.log(`Тип ${type} не существует`);
                    break;
            }

            $('.status').text(BotSettings.Status[status]);
            new Audio('src/raw/sound_in.mp3').play();
        }, Math.random() * (5000 - 400) + 400);
    }

    function getText () {
        const value = $('input[type="message"]').val();

        if (value.trim() === '') {
            return false;
        }
        return escapeHtml(value.trim());
    }

    function escapeHtml (value) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return value.replace(/[&<>"']/g, function(m) { 
            return map[m];
        });
    }
});