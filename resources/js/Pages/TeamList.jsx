import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('/api/teams')
            .then(response => {
                setTeams(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the teams!', error);
            });
    }, []);

    return (
        <div>
            <h2>Team List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.id}</td>
                            <td>{team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeamList;
