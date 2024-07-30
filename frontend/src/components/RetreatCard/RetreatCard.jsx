import { useState } from "react";
import "./RetreatCard.css";
const RetreatCard = ({ image, title, description, date, location, price }) => {
    const newDate = new Date(date * 1000).toLocaleDateString();
    const showCondition = description.length > 50 ? false : true;
    const [showDescription, setShowDescription] = useState(showCondition);

  return (
    <div className="retreat-card">
      <div className="retreat-card-image">
        <img src={image} alt="" />
      </div>

      <div className="retreat-card-content">
        <div className="title">{title}</div>
              <div className="description" onClick={() => setShowDescription(!showDescription)}>{ !showDescription && description.length > 50 ? description.substring(0, 50) + "..." : description}</div>
        <div className="retreat-card-content-info">
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <div className="location">Location: {location}</div>
          <div className="retreat-card-content-info-price">
            <div className="condition">Price: ${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatCard;
