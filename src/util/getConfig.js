require("dotenv").config();

module.exports = () => {
    try {
        const config = require('../../config.dev');
        return config;
    } catch {
        try {
            const config = require('../../config');
            return config;
        } catch {
            console.error('No config file found.');
            process.exit();
        }
    }
};
