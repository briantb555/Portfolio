import { useState } from "react"

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError('All fields are required')
    } else {
      console.log(name, email, message)
      setName('')
      setEmail('')
      setMessage('')
      setError('')
    }
  }
  return (
    <div className="container">
      <h1>Contact</h1>
      <form style={{maxWidth:'600px'}} onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email address</label>
          <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>Message</label>
          <textarea className='form-control' id='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        {error && <div className='alert alert-danger'>{error}</div>}
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default Contact