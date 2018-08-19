'use strict';

import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    noteTitle: {type: String},
    noteBody: {type: String},
    noteId: {type: String},
    timestamp: {type: String},
});




export default mongoose.model('note', noteSchema);
