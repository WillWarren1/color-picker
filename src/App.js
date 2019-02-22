import React, { Component } from 'react'

class App extends Component {
  state = {
    backgroundHue: '196',
    backgroundSaturation: '12',
    backgroundLightness: '78',
    colorOfText: '',
    color: []
  }

  addColorToDOM = () => {
    this.setState({
      color: this.state.color.concat(
        `hsl(${this.state.backgroundHue}, ${
          this.state.backgroundSaturation
        }%, ${this.state.backgroundLightness}%)`
      )
    })
  }

  updateHue = event => {
    this.setState({
      backgroundHue: event.target.value
    })
    if (this.state.backgroundHue > 200) {
      this.setState({
        colorOfText: 'whitesmoke'
      })
    }
    if (this.state.backgroundHue <= 200) {
      this.setState({
        colorOfText: 'black'
      })
    }
  }
  updateSaturation = event => {
    this.setState({
      backgroundSaturation: event.target.value
    })
  }
  updateLightness = event => {
    this.setState({
      backgroundLightness: event.target.value
    })
    if (this.state.backgroundLightness <= 40) {
      this.setState({
        colorOfText: 'whitesmoke'
      })
    }
    if (this.state.backgroundLightness > 40) {
      this.setState({
        colorOfText: 'black'
      })
    }
  }

  render() {
    return (
      <>
        <main
          style={{
            backgroundColor: `hsl(${this.state.backgroundHue}, ${
              this.state.backgroundSaturation
            }%, ${this.state.backgroundLightness}%)`,
            border: '1px solid green'
          }}>
          <section>
            <label style={{ color: `${this.state.colorOfText}` }}>Hue</label>
            <input
              type="range"
              onChange={this.updateHue}
              name="Hue"
              min="0"
              max="240"
            />
            <label style={{ color: `${this.state.colorOfText}` }}>
              Saturation
            </label>
            <input
              type="range"
              onChange={this.updateSaturation}
              name="Saturation"
              min="0"
              max="100"
            />
            <label style={{ color: `${this.state.colorOfText}` }}>
              Lightness
            </label>
            <input
              type="range"
              onChange={this.updateLightness}
              name="Lightness"
              min="0"
              max="100"
            />
            <button onClick={this.addColorToDOM}>Save Color</button>
          </section>
        </main>
        <section>
          <ul>
            {this.state.color.map(color => {
              return (
                <>
                  <figure
                    className="colorthing"
                    style={{
                      backgroundColor: `${color}`
                    }}
                  />
                  <li>{color}</li>
                </>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default App
