import React, { useState } from 'react';
import './index.css'

const App = () => {
    const [text, setText] = useState('')
    const [empty, setEmpty] = useState(true)
    const [send, setSend] = useState(false)
    const [blur, setBlur] = useState(false)

    const handleText = (e) => {
        setText(e.target.value)

        setEmpty(false)
        setSend(false)
        setBlur(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)

        setText('')
        setEmpty(true)
        setSend(true)
        setBlur(false)
    }

    const handleBlur = () => {
        setBlur(true)
        setSend(false)
    }

    return (
<>
  <form onSubmit={handleSubmit}>
    <input type='text' placeholder='texto' value={text} onChange={handleText} onBlur={handleBlur} />
    <button type='submit' disabled={empty}>send</button>
  </form>
  { empty && blur ? <div className='empty'>Поле ввода не должно быть пустым</div>  : null}
  { send ? <div className='send'>Сообщение успешно отправлено</div> : null}
</>   
    );
};

export default App;