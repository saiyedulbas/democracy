<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
{
    $events = Event::with('team')->get();
    return response()->json($events);
}

    public function create()
    {
        $teams = Team::all();
        return view('events.create', compact('teams'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:155',
            'event_date' => 'required|date|before_or_equal:today',
            'team_id' => 'required|exists:teams,id',
        ]);

        Event::create($request->all());

        return redirect()->route('events.index')->with('success', 'Event created successfully.');
    }
}
