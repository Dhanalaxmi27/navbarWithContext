import ThemeContext from '../../context/ThemeContext'
import Navbar from '../NotFound'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'bg-bark' : 'bg-light'
      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'
      return (
        <div className={`about-app-container ${bgClassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img className="about-image" src={aboutImageURL} alt="about" />
              <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
