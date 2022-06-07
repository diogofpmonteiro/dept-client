import { useState } from "react";
import "./CaseCard.css";

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
          View Case
        </button>
        <p className={!description ? "show" : "hide"}>{eachCase.description}</p>
      </div>
    </div>
  );
};

export default CaseCard;
