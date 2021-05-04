const path = require("path");
const daggerCommand = require("fw_dagger_command");
var _a = new daggerCommand(path.dirname(__dirname),path.basename(__dirname));
_a.run();
