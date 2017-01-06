import mongoose from 'mongoose'

const matchSchema = mongoose.Schema({
  homeTeam: String,
  awayTeam: String,
  startTime: Date,
  gameLines: [],
  alternateLines:[]
})

export const matches = mongoose.model('Match', matchSchema)