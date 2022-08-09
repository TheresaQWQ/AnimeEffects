class Lycoris {
  constructor(query) {
    this.el = document.querySelector(query)
    return this
  }

  color (color) {
    this.el.style.setProperty('--color', color)
    return this
  }

  play () {
    this.el.style.setProperty('--state', 'running')
    this.display()
    return this
  }

  display () {
    this.el.style.visibility = 'visible'
  }

  pause () {
    this.el.style.setProperty('--state', 'paused')
    return this
  }

  onEnd (callback) {
    this.el.addEventListener('animationend', e => {
      const name = e.animationName
      const type = name === 'lycoris-block' ? 'block' : 'text'
      callback(type, this)
    })
    return this
  }

  text (text) {
    this.el.innerText = text
  }

  destroy () {
    this.el.removeAllListeners('animationend')
  }
}

window.Lycoris = Lycoris
