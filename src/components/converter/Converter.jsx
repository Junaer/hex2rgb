import React from 'react'
import { useState } from 'react'

export default function Converter() {
  const [text, setText] = useState('')
  const [rgb, setRgb] = useState('')
  const [color, setColor] = useState('#34495e')

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function handleInputChange(e) {
    if (text.length <= 5) {
      console.log(text.length)
      setText(e.target.value)
      setRgb('')
    }
    else {
      setText(e.target.value)
      let rgb = hexToRgb(e.target.value)
      if (rgb != null) {
        let rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
        setColor(rgbColor)
        setRgb(rgbColor)
      }else {
        setRgb('Error!!!')
      }
      
    }
  }

  return (
    <div className='main' style={{backgroundColor: color}}>
      <form>
        <label>
          <input type="text" name="hex" className='text' value={text} onChange={handleInputChange}/>
          <input type="text" name='rgb' className='rgb' value={rgb}/>
        </label>
      </form>
    </div>
  )
}
