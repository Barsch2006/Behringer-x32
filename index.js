/**
 * @description Lädt alles aus der Config beim Laden der Seite
 */
function load() {
    let i = 1;
    let j = 1;
    config.channels.forEach(channel => {
        document.querySelector(`#channelList${j}`).appendChild(channel.build())
        try { channel.mute() } catch { }
        try { channel.mute() } catch { }
        try { channel.select() } catch { }
        try { channel.select() } catch { }
        try { channel.solo() } catch { }
        try { channel.solo() } catch { }
        if (i == 16) {
            i = 1;
            j++;
        } else {
            i++;
        }
    });
}