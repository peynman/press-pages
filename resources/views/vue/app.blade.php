<!DOCTYPE html>
<html lang="@yield('page-language')" dir="@yield('lang-direction')">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if (!is_null(auth()->user()))
        <meta name="jwt-token" content="{{ auth()->guard('api')->tokenById(auth()->user()->id) }}">
    @endif

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('/storage/vendor/larapress-pages/css/app.css') }}">
    <style>
    .ribbon {
        position: relative;
        display: inline-block;
        text-align: center;
    }
    .text {
        font-size: 10px;
        display: inline-block;
        position: relative;
    }

    .ribbon:before,
    .text:before {
        content: "";
        position: absolute;
        border-style: solid;
    }
    .ribbon:before {
        top: 0.3em;
        left: 0.2em;
        width: 100%;
        height: 100%;
        border: none;
        background: rgb(235, 235, 237);
        z-index: -2;
    }
    .text:before {
        bottom: 100%;
        left: 0;
        border-width: 0.5em 0.7em 0 0;
        border-color: transparent #181d41 transparent transparent;
    }
    .bold:before {
        top: 0.5em;
        right: -2em;
        border-width: 1.1em 1em 1.1em 3em;
        border-color: #454546 transparent #454546 #454546;
        z-index: -1;
    }
    .bold:before {
        border-color: #e1e1e1 transparent #e1e1e1 #e1e1e1;
        top: 0.7em;
        right: -2.3em;
    }

    .rtl_ace .ace_line {
        direction: rtl;
    }
    .larapress-app {
        font-family: "IRANSans", "Tahoma" !important;
    }

    .vf-blockly-input {
        letter-spacing: 0 !important;
    }

    .big-badge span.v-badge__badge {
        font-size: 15px;
        padding: 9px;
        height: 35px;
    }

    .small-badge span.v-badge__badge {
        font-size: 13px;
        padding: 4px;
        height: 23px;
    }

    .rounded-product-card {
        border-radius: 30px !important;
    }

    .rounded-login-card {
        border-radius: 10px !important;
    }

    .v-btn--contained.xsbtn {
        height: 25px !important;
        width: 25px !important;
    }

    .v-btn--contained.xsBtnCart {
        height: 30px !important;
        width: 30px !important;
    }

    .v-btn--contained.super-big-circle {
        height: 90px !important;
        width: 90px !important;
    }

    .v-btn--contained.super-circle {
        height: 50px !important;
        width: 50px !important;
    }
    </style>

    <title>
    </title>
</head>
<body class="@yield('body-class')">
    <div id="App"></div>
    <script>
        window.PageConfig = {!! json_encode($config) !!};
        window.echoConfig = {
            protocol: {!! json_encode(env('ECHO_WEB_PROTOCOL')) !!},
            host: {!! json_encode(env('ECHO_WEB_HOST')) !!},
            port: {!! json_encode(env('ECHO_WEB_PORT')) !!}
        };
        console.log(window.PageConfig, window.echoConfig);
    </script>
    <script src="{{ env('ECHO_WEB_PROTOCOL').'://'.env('ECHO_WEB_HOST').':'.env('ECHO_WEB_PORT') }}/socket.io/socket.io.js"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/manifest.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/vendor.bundle.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/app.bundle.js') }}"></script>
</body>
</html>
