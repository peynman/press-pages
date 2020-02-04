@extends(\Larapress\Dashboard\Rendering\BladeCRUDViewProvider::getThemeViewName('layouts.master'))

@section('page-title', '')
@section('lang-direction', '')
@section('body-class', '')

@section('meta')
    @if (!is_null(auth()->user()))
        <meta name="jwt-token" content="{{ auth()->guard('api')->tokenById(auth()->user()->id) }}">
    @endif
@endsection

@section('pre-styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('/storage/vendor/larapress-pages/css/app.css') }}">
@endsection

@section('body')
    <div id="App">
    </div>
@endsection

@section('pre-scripts')
    <script>
        window.AppConfig = {!! json_encode($config) !!};
        console.log(window.AppConfig);
    </script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/manifest.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/vendor.bundle.js') }}"></script>
    <script src="{{ asset('/storage/vendor/larapress-pages/js/app.bundle.js') }}"></script>
@endsection

@section('scripts')
@endsection