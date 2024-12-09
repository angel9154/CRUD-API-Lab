import React, { useState, useEffect } from 'react';

const MySongs = () => {
    // Step 1: Define state for storing songs
    const [songs, setSongs] = useState([]);
    
    // Step 2: Fetch the data from the API when the component mounts
    useEffect(() => {
        // Fetch the list of songs from the API
        const fetchSongs = async () => {
            try {
                const response = await fetch('http://localhost:3000/songs');  // Adjust the URL if necessary
                const data = await response.json();
                setSongs(data);  // Store the fetched songs in the state
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        fetchSongs();
    }, []);  // Empty dependency array means this will only run once when the component mounts

    // Step 3: Render the data
    return (
        <div>
            <h1>My Songs</h1>
            {songs.length === 0 ? (
                <p>No songs available</p>
            ) : (
                <ul>
                    {songs.map((song) => (
                        <li key={song._id}>
                            <strong>{song.title}</strong> by {song.artist} <br></br>
                            Produced by: {song.producers}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MySongs;
