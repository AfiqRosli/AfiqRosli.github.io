<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Highscore extends Model
{
    protected $fillable = [
        'name',
        'score',
        'highest_combo',
        'total_time',
    ];
}
