import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

  const handleclick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to= "/">
          <h1>
             Your Own Workout List
          </h1>
          <h4 className='phrase'>
           " Exercise is labor without weariness ""
          </h4>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleclick}>
                  Log out
              </button>
              </div>
          )}
          {!user && (
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}  
        </nav>
      </div>
    </header>
  )
}

export default Navbar