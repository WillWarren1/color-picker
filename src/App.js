import React, { Component } from 'react'

class App extends Component {

  state = {
    backgroundHue: ''
    backgroundSaturation: ''
    backgroundLightness: ''
  }

updateHue = event => {
  this.setState({
    backgroundHue: event.target.value
  })
}
  render() {
    return (
      <>
        <main>
          <section>
            <input type="range" onChange={this.updateHue} name="Hue" min="0" max="255" />
            <label for="Hue">Hue</label>
            <input type="range" name="Saturation" min="0" max="255" />
            <label for="Saturation">Saturation</label>
            <input type="range" name="Lightness" min="0" max="255" />
            <label for="Lightness">Lightness</label>
          </section>
        </main>
      </>
    )
  }
}

export default App
