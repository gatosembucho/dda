import mongoose,{Schema, Document } from 'mongoose';
import Project from './project.ts';
import { StartupSnapshotCallbackFn } from 'node:v8';


export interface IQuest extends Document{
    title: string,
    difficulty: string,
    xpReward: string,
    completed: string
}


const QuestSchema: Schema  = new Schema({
    title: {type: String, required: true},
    difficulty: {type: String, required: true, default: 0},
    xpReward:  {type: String, required: true, default: 0},
    completed: {type: String, required: true, default: 0},
 
});

const Quest = mongoose.model<IQuest>('Quest', QuestSchema, 'Quest');

export default Quest;
