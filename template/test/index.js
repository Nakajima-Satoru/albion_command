const path = require("path");
const daggerCommand = require("fw_dagger_command");
new daggerCommand(path.dirname(__dirname),path.basename(__dirname)).projectRun();