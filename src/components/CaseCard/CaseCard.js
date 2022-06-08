import { useState } from "react";
import "./CaseCard.css";
import Polygon from "../../polygon.svg";

const CaseCard = ({ eachCase }) => {
  const [description, setDescription] = useState(true);

  const toggleDescription = () => {
    if (description) {
      setDescription(false);
    } else {
      setDescription(true);
    }
  };

  return (
    <div className='case-card-container'>
      <img src={eachCase.imageURL} alt='case-img' loading='lazy' />
      <p className='case-company-name'>{eachCase.company}</p>
      <h3>{eachCase.title} </h3>
      <div>
        <button className='view-case-btn' onClick={toggleDescription}>
          <img src={Polygon} alt='polygon' className={!description ? "polygon turn" : "polygon"} />
          View Case
        </button>
        <p className={!description ? "show" : "hide"}>{eachCase.description}</p>
      </div>
    </div>
  );
};

export default CaseCard;
