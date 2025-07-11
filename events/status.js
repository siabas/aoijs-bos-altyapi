module.exports = ( client ) => {
    
    client.status(
        {
            name: "javelinjsx",
            type: "PLAYING",
            STATUS: "idle",
            time: 12
        }
    );

    client.status(
        {
            name: "javelinjsx",
            type: "CUSTOM",
            STATUS: "dnd",
            time: 12
        }
    );
    
}