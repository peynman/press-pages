<!DOCTYPE html>
<html lang="{{ $config['language']['id'] }}" dir="{{ $config['language']['direction'] }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta name="description" content="{{ $config['metas']['description'] }}">
    <meta name="author" content="{{ $config['metas']['author'] }}">
    @foreach ($config['metas']['extra'] as $meta)
        <meta name="{{ $meta['name'] }}" content="{{ $meta['content'] }}">
    @endforeach
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if (!is_null(auth()->user()))
        <meta name="jwt-token" content="{{ auth()->guard('api')->tokenById(auth()->user()->id) }}">
    @endif

    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('/vendor/larapress-pages/css/app.css') }}">
    <title>{{ $config['title'] }}</title>
</head>
<body>
    <div id="App"></div>
    <script>
        window.PageConfig = {!! json_encode($config) !!}
        window.SessionData = {!! json_encode(session()->all()) !!}
    </script>
    @if(!env('PUSHER_OFF'))
        <script>
            window.echoConfig = {
                protocol: window.location.protocol.startsWith('https') ? 'https':'http',
                host: window.location.hostname,
                port: {!! config('larapress.pages.echo.port') !!},
            };
        </script>
        <script src="{!! config('larapress.pages.echo.web_path') !!}/socket.io/socket.io.js"></script>
    @endif
    @if(env('APP_ENV') === 'production')
    <script src="{{ mix('js/manifest.js', '/vendor/larapress-pages') }}"></script>
    <script src="{{ mix('js/vendor.bundle.js', '/vendor/larapress-pages') }}"></script>
    <script src="{{ mix('js/app.bundle.js', '/vendor/larapress-pages') }}"></script>
    @else
    <script src="{{ asset('/vendor/larapress-pages/js/app.js') }}"></script>
    @endif
</body>
</html>
