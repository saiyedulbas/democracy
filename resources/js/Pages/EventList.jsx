import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
            });
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                            <td>{new Date(event.event_date).toLocaleDateString()}</td>
                            <td>{event.team ? event.team.name : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventList;
