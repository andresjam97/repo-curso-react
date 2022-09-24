
import img from './assets/casos-de-uso.png';
import "./PresentationCard.css";
function PresentationCard() {
    let name = 'Ivancho';
     return (
        <div className="presentation-card">
            <img src={img} className="avatar" />
            <h1>
                Hola, soy { name } y estoy aprendiendo React 
            </h1>
        </div>
     );
}

export default PresentationCard;