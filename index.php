<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <title>xBotJS - Bot by xMoveton</title>
    <meta name="theme-color" content="#000000">
    <meta name="msapplication-navbutton-color" content="#000000">
    <meta name="apple-mobile-web-app-status-bar-style" content="#000000">
    <!-- Reset styles -->
    <link rel="stylesheet" href="src/styles/xReset.css">
    <!-- Custom styles -->
    <link rel="stylesheet" href="src/styles/xBotJS.css">
</head>
<body>
    <div id="xBotJS">
        <header class="header">
            <div class="bot-info">
                <img src="src/images/xBotAvatar.png" alt="" class="avatar">
                <div class="info">
                    <h3 class="username"></h3>
                    <span class="status"></span>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="messages"></div>
        </main>
        <footer class="footer">
            <form action="" method="dialog">
                <div class="form-group">
                    <input type="message" class="form-control" placeholder="Сообщение (отправить Enter)">
                </div>
            </form>
        </footer>
    </div>
</body>
<!-- JQuery 3.5.1 -->
<script src="src/javascripts/libraries/jquery-3.5.1.min.js"></script>
<!-- Bot Settings -->
<script src="src/javascripts/settings/Settings.js"></script>
<!-- Custom javascript -->
<script src="src/javascripts/xBotJS.js"></script>
</html>