import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className='display-1'>page not found 404!</h1>
      <Link to="/">Back to home</Link>
    </div>
  )
}
