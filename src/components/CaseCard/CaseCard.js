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
      <div className='card'>
        <img src={eachCase.imageURL} alt='case-img' loading='lazy' className='card-img' />
        <p className='case-company-name'>{eachCase.company}</p>
        <h3 className='case-title'>{eachCase.title} </h3>
        <div>
          <button className='view-case-btn' onClick={toggleDescription}>
            <img src={Polygon} alt='polygon' className={!description ? "polygon turn" : "polygon"} />
            View Case
          </button>
          <p className={!description ? "show" : "hide"}>
            {eachCase.description}. View full case <a href='/'>here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
