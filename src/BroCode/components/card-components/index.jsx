import ProfilePic from './assets/profile.png'
import './styles.css'
// or https://via.placeholder.com/150
// card has usually a img, title and description elements.
function CardComponentExample() {

    return (
        <div className="card">
            <img className='card-image' src={ProfilePic} alt="profile picture" />
            <h2 className='card-title'>A. El Yacoubi</h2>
            <p className='card-text'>I'm learning intensively React</p>
        </div>
    )

}

export default CardComponentExample;