import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {Score, isGameOver, TotalScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="score-container">
        <p className="score-board">Score: {Score}</p>
        <p className="score-board">Top Score: {TotalScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar-continer">
        <div className="logo-container">
          <div className="logo-and-title-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="logo"
            />
            <h1 className="logo-name">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}
export default NavBar
