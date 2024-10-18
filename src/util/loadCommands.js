const path = require('path');
const fs = require('fs');

function loadCommands() {
    return new Promise((resolve) => {
        let slash = loadDirectory('slash');
        let context = loadDirectory('context');

        resolve({ slash, context });
    });
}

function loadDirectory(dir) {
    let commands = [];
    let commandsDir = path.join(__dirname, '..', 'commands', dir);
    let files = fs.readdirSync(commandsDir);

    for (const file of files) {
        let cmd = require(path.join(commandsDir, file));
        if (!cmd || !cmd.run || (dir == 'context' && !cmd.command)) {
            return console.log('Unable to load Command: ' + file.split('.')[0] + ", File doesn't have either command");
        }
        if (dir == 'context') {
            commands.push(cmd.command);
        } else {
            commands.push(cmd);
        }
    }

    return commands;
}

module.exports = loadCommands;
