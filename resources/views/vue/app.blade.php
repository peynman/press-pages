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

    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('/vendor/larapress-pages/css/app.css') }}">
    <title>
    </title>
</head>
<body class="@yield('body-class')">
    <div id="App"></div>
    <script>
        window.PageConfig = {!! json_encode($config) !!};
        window.echoConfig = {
            protocol: window.location.protocol.startsWith('https') ? 'https':'http',
            host: window.location.hostname,
            port: {!! json_encode(env('ECHO_PORT')) !!},
        };
    </script>
    <script src="{!! env('ECHO_WEB_PATH') !!}/socket.io/socket.io.js"></script>
    @if(env('APP_ENV') === 'debug')
        <script src="{{ asset('/vendor/larapress-pages/js/app.js') }}"></script>
    @else
        <script src="{{ asset('/vendor/larapress-pages/js/manifest.js') }}"></script>
        <script src="{{ asset('/vendor/larapress-pages/js/vendor.bundle.js') }}"></script>
        <script src="{{ asset('/vendor/larapress-pages/js/app.bundle.js') }}"></script>
    @endif
</body>
</html>
