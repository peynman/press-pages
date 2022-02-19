<!DOCTYPE html>
<html lang="{{ $config['language']['id'] }}" dir="{{ $config['language']['direction'] }}">
<head>
    <meta name="description" content="{{ $config['metas']['description'] }}">
    <meta name="author" content="{{ $config['metas']['author'] }}">
    @foreach ($config['metas']['extra'] as $meta)
        <meta name="{{ $meta['name'] }}" content="{{ $meta['content'] }}">
    @endforeach
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if (!is_null(auth()->user()))
        <meta name="jwt-token" content="{{ auth()->guard('api')->tokenById(auth()->user()->id) }}">
    @endif
    @yield("scripts")
</head>
<body>
    @yield("content")
    <script>
        window.PageConfig = {!! json_encode($config) !!}
        window.SessionData = {!! json_encode(session()->all()) !!}
    </script>
</body>
</html>
