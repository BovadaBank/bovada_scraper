import mongoose from 'mongoose'
import firebase from 'firebase'
firebase.initializeApp({
  databaseURL:'https://bovadascraper-8c581.firebaseio.com/',
  apiKey: 'AIzaSyDs6kWurS9hvEhWbHW4vrizDxjrVcCfxFw'
})
//this doesn't look like it's being used but import is neccessary for mongoose to register the model
import { match } from './models'
export const matchRef = firebase.database().ref('matches')
export const headers = {
    'Origin': 'https://www.bovada.lv',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json, text/plain, */*',
    'Referer': 'https://www.bovada.lv/?overlay=login',
    'Connection': 'keep-alive',
    'ADRUM': 'isAjax:true',
    'Cookie': 'JOINED=true; BG_UA=Desktop|OS X|10_12_1|Chrome|55.0.2883.95||; ux=created=true; ln_grp=2; LANGUAGE=en; ADRUM=s=1483171346890&r=https%3A%2F%2Fwww.bovada.lv%2F%3F0; has_js=1; DEFLANG=en; s_cc=true; bsp=1; s_fid=25EB81C40CBC6670-086F7CF1DDF960B8; s_sq=bdbovadalv%3D%2526pid%253DbovadaLV%25253AHome%2526pidt%253D1%2526oid%253DLogin%2526oidt%253D3%2526ot%253DSUBMIT'
};

global.Promise = require('bluebird')
mongoose.Promise = global.Promise
export const initializeDatabase = () => {
  return new Promise((resolve, reject)=> {
    mongoose.connect('mongodb://localhost/betstream_db');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('connected to database')
      resolve('connected to database')
    });
  })
}