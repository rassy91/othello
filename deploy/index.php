<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Othello</title>
    <link rel="stylesheet" href="./css/style.css?v=<?php echo time(); ?>">
</head>
<body class="othello">

<div id="wrapper" class="wrapper">
    <canvas id="canvas" class="canvas"></canvas>
</div>
<p class="stoneColorWrap"><span id="stoneColor" class="stoneColor">黒</span>の番</p>
<p id="caution" class="caution">※そこには石を置くことができません。</p>

<script src="./js/app.js?v=<?php echo time(); ?>"></script>
</body>
</html>