const { AoiClient } = require("aoi.js");
const config = require("./config.js")

const client = new AoiClient(config.Bot);

require("./events/ready")( client )
require("./events/status")( client )
require("./handler/variables") ( client )

client.loadCommands("./commands", false);

//discord: javelinjsx\\