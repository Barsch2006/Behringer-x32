class Channel {
    id
    value
    anzeige
    buttons

    constructor(configuration) {
        this.id = configuration.id
        this.value = configuration.value
        this.anzeige = configuration.anzeige
        this.buttons = configuration.buttons
    }

    mute() {
        this.buttons.mute = !this.buttons.mute
        if (this.buttons.mute == true) {
            document.querySelector(`#${this.id} .mute_btn`).classList.add('muted')
        } else {
            document.querySelector(`#${this.id} .mute_btn`).classList.remove('muted')
        }
    }

    select() {
        config.channels.forEach(channel => {
            if (channel.id == this.id) {
                this.buttons.select = !this.buttons.select
            } else {
                channel.buttons.select = false
                document.querySelector(`#${channel.id} .select_btn`).classList.remove('selected')
            }
        })
        if (this.buttons.select == true) {
            document.querySelector(`#${this.id} .select_btn`).classList.add('selected')
        } else {
            document.querySelector(`#${this.id} .select_btn`).classList.remove('selected')
        }
    }

    solo() {
        this.buttons.solo = !(this.buttons.solo)
        config.channels.forEach(channel => {
            if (channel.buttons.solo == true) {
                config.mainButtons.clearSolo = true
            } else {
                config.mainButtons.clearSolo = false
            }
        })
        if (this.buttons.solo == true) {
            document.querySelector(`#${this.id} .solo_btn`).classList.add('solo')
        } else {
            document.querySelector(`#${this.id} .solo_btn`).classList.remove('solo')
        }
    }

    build() {
        let sect = document.createElement('section')
        sect.classList.add('channel')
        sect.id = this.id

        let select_btn = document.createElement('button')
        select_btn.classList.add('select_btn')
        select_btn.addEventListener('click', () => {
            this.select();
        })
        sect.appendChild(select_btn)

        let input_anzeige = document.createElement('div')
        input_anzeige.classList.add('input_anzeige')
        sect.appendChild(input_anzeige)

        let solo_btn = document.createElement('button')
        solo_btn.classList.add('solo_btn')
        solo_btn.addEventListener('click', () => {
            this.solo()
        })
        sect.appendChild(solo_btn)


        let anzeige = document.createElement('div')
        anzeige.classList.add('channel_anzeige')
        anzeige.style.backgroundColor = this.anzeige.color
        let name = document.createElement('p')
        name.innerText = this.anzeige.name
        anzeige.appendChild(name)
        let img = document.createElement('img')
        img.src = this.anzeige.img
        anzeige.appendChild(img)
        sect.appendChild(anzeige)

        let mute_btn = document.createElement('button')
        mute_btn.classList.add('mute_btn')
        mute_btn.addEventListener('click', () => {
            this.mute()
        })
        sect.appendChild(mute_btn)

        let fader = document.createElement('input')
        fader.addEventListener('change', () => {
            this.value = fader.value
        })
        fader.classList.add('fader')
        fader.type = "range"
        fader.min = '-100'
        fader.max = '+10'
        fader.setAttribute('orient', "vertical")
        fader.value = this.value
        sect.appendChild(fader)

        return sect
    }
}