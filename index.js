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

function changechannelListChanger(id) {
    document.querySelector('#channelListChanger4').classList.remove('selected')
    document.querySelector('#channelListChanger3').classList.remove('selected')
    document.querySelector('#channelListChanger2').classList.remove('selected')
    document.querySelector('#channelListChanger1').classList.remove('selected')
    document.querySelector(`#channelListChanger${id}`).classList.add('selected')
    document.querySelector(`#channelList1`).style.display='none'
    document.querySelector(`#channelList2`).style.display='none'
    document.querySelector(`#channelList3`).style.display='none'
    document.querySelector(`#channelList4`).style.display='none'
    document.querySelector(`#channelList${id}`).style.display='flex'
}