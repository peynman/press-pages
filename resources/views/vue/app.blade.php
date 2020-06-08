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
        .larapress-app {
            font-family: "IRANSans", "Tahoma" !important;
        }
    </style>

    <title></title>
</head>
<body class="@yield('body-class')">
    <div id="App"></div>
    <script>
        window.PageConfig = {!! json_encode($config) !!};
        console.log(window.PageConfig);
    </script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/manifest.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/vendor.bundle.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/app.bundle.js') }}"></script>
</body>
</html>
