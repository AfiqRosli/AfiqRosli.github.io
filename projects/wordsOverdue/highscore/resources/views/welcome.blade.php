<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Words Overdue</title>

    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

</head>

<body>
    <div class="container pt-5">
        <div class="row">
            <div class="col">

                <div class="jumbotron p-4">
                    <h1>New Entry</h1>
                    <form action="{{action('HighscoreController@store')}}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name='name'>
                        </div>
                        <div class="form-group">
                            <label for="score">Score</label>
                            <input type="number" class="form-control" id="score" name='score'>
                        </div>
                        <div class="form-group">
                            <label for="highest_combo">Highest Combo</label>
                            <input type="number" class="form-control" id="highest_combo" name='highest_combo'>
                        </div>
                        <div class="form-group">
                            <label for="total_time">Total Time</label>
                            <input type="number" step="0.01" class="form-control" id="total_time" name='total_time'>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col">
                <h2>Records</h2>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Score</th>
                            <th scope="col">Highest Combo</th>
                            <th scope="col">Total Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($records as $record)
                        <tr>
                            <th scope="row">{{$listNo++}}</th>
                            <td>{{$record->name}}</td>
                            <td>{{$record->score}}</td>
                            <td>{{$record->highest_combo}}</td>
                            <td>{{$record->total_time}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>

</html>
