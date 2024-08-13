<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'event_date', 'team_id'];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
