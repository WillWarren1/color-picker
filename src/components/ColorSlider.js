import React, { useState } from 'react'

export default function ColorPicker(props) {
  const [backgroundHue, setbackgroundHue] = useState(
    Math.floor(Math.random() * 240)
  )
  const [backgroundSaturation, setbackgroundSaturation] = useState(
    Math.floor(Math.random() * 100)
  )
  const [backgroundLightness, setbackgroundLightness] = useState(
    Math.floor(Math.random() * 100)
  )
  const [color, setColor] = useState([])

  const randomColor = () => {
    setbackgroundHue(Math.floor(Math.random() * 240))
    setbackgroundSaturation(Math.floor(Math.random() * 100))
    setbackgroundLightness(Math.floor(Math.random() * 100))
  }
  // const [colorOfText, setcolorOfText] = useState('')

  // state = {
  //   backgroundHue: '196',
  //   backgroundSaturation: '12',
  //   backgroundLightness: '78',
  //   colorOfText: '',
  //   color: []
  // }

  const addColorToDOM = () => {
    setColor(oldColor =>
      oldColor.concat(
        `hsl(${backgroundHue}, ${backgroundSaturation}%, ${backgroundLightness}%)`
      )
    )
  }

  // updateHue = event => {
  //   this.setState({
  //     backgroundHue: event.target.value
  //   })
  //   if (this.state.backgroundHue > 200) {
  //     this.setState({
  //       colorOfText: 'whitesmoke'
  //     })
  //   }
  //   if (this.state.backgroundHue <= 200) {
  //     this.setState({
  //       colorOfText: 'black'
  //     })
  //   }
  // }
  // updateSaturation = event => {
  //   this.setState({
  //     backgroundSaturation: event.target.value
  //   })
  // }
  // updateLightness = event => {
  //   this.setState({
  //     backgroundLightness: event.target.value
  //   })
  //   if (this.state.backgroundLightness <= 40) {
  //     this.setState({
  //       colorOfText: 'whitesmoke'
  //     })
  //   }
  //   if (this.state.backgroundLightness > 40) {
  //     this.setState({
  //       colorOfText: 'black'
  //     })
  //   }
  // }

  return (
    <>
      <header>{props.title}</header>
      <main
        style={{
          backgroundColor: `hsl(${backgroundHue}, ${backgroundSaturation}%, ${backgroundLightness}%)`,
          border: '1px solid green'
        }}>
        <p>{`hsl(${backgroundHue}, ${backgroundSaturation}%, ${backgroundLightness}%)`}</p>
        <section>
          <label>Hue</label>
          <input
            type="range"
            onChange={event => setbackgroundHue(event.target.value)}
            name="Hue"
            min="0"
            max="240"
          />
          <label>Saturation</label>
          <input
            type="range"
            onChange={event => setbackgroundSaturation(event.target.value)}
            name="Saturation"
            min="0"
            max="100"
          />
          <label>Lightness</label>
          <input
            type="range"
            onChange={event => setbackgroundLightness(event.target.value)}
            name="Lightness"
            min="0"
            max="100"
          />
          <button onClick={randomColor}>Randomize</button>
          <button onClick={addColorToDOM}>Save Color</button>
        </section>
      </main>
      <section>
        <ul>
          {color.map(colors => {
            return (
              <section key={colors}>
                <figure
                  className="colorthing"
                  style={{
                    backgroundColor: `${colors}`
                  }}
                />
                <li>{colors}</li>
              </section>
            )
          })}
        </ul>
      </section>
    </>
  )
}
