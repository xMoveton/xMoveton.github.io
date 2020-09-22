// Status bot
const BotSettings = {
    'NameBot' : 'xBotJS',
    'Status' : {
        'offline' : 'был не давно',
        'online' : 'в сети'
    },
    'ShipmentStatus' : {
        'sms' : 'набирает сообщение...',
        'image' : 'отправляет фото...',
        'audio' : 'отправляет аудио...'
    }
};

// Bot command list
const CommandList = {
    'messages' : {
        'not_command' : {
            'type' : 'sms',
            'text' : 'Нету такой команды :('
        }
    },
    'commands' : {
        '/start' : {
            'type': 'sms',
            'text' : 'Добро пожаловать!'
        },
        '/help' : {
            'type': 'sms',
            'text' : '/start, /image, /audio'
        },
        '/image' : {
            'type': 'image',
            'text' : 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'
        },
        '/audio' : {
            'type' : 'audio',
            'text' : 'src/audios/izmena.mp3'
        }
    }
};