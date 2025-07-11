module.exports = ( client ) => {
    
    client.readyCommand(
        {
            channel: "",
            code:`
$log[[ + ] $userTag[$clientID] olarak giriş yapıldı.]
            `
        }
    )
    
}