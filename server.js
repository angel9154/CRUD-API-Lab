import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import Song from './models/songs.js';

import cors from 'cors';
app.use(cors());


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

app.post ('/songs', async (req, res) => {
    const createdSong = await Song.create(req.body);
    res.json(createdSong)
});

app.get('/songs', async (req, res ) => {
    const getSong = await Song.find();
    res.json(getSong)
})

app.delete('/songs/:songId', async (req, res) => {
    const deletedSong = await Song.findByIdAndDelete(req.params.songId);
    res.json(deletedSong);
    });
    
    app.put('/songs/:songId', async (req, res) => {
        const updatedSong = await Song.findByIdAndUpdate(
            req.params.songId, 
            req.body,
            {new:true}
    
        );
        res.json(updatedSong);
    })
app.listen(3000, () => {
  console.log('The express app is ready!');
});