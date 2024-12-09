import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    title: String,        
    artist: String,        
    genre: String,        
    album: String,        
    releaseYear: Number,   
    duration: Number,      
    composers: [String],   
    producers: [String],   
  
});

const Song = mongoose.model('Song', songSchema);

export default Song;