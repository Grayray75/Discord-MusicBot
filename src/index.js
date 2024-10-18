require('dotenv').config();

const DiscordMusicBot = require('./lib/DiscordMusicBot');
const client = new DiscordMusicBot();

console.log('Make sure to fill in the config.js before starting the bot.');
client.start();

const getClient = () => client;

module.exports = {
    getClient
};
