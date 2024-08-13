import React, { useState } from 'react';
import axios from 'axios';

function TeamForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/teams', { name })
            .then(response => {
                setMessage('Team created successfully!');
                setName('');
            })
            .catch(error => {
                setMessage('Error creating team.');
            });
    };

    return (
        <div>
            <h2>Create Team</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Team Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default TeamForm;
