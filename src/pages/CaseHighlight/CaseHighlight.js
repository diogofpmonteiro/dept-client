import "./CaseHighlight.css";
import { useEffect, useState } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseHighlight = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const getHighlights = async () => {
      const result = await fetch("http://localhost:3000/highlights/");
      const data = await result.json();
      setHighlights(data);

      // console.log("fetch highlights ->", data);
    };
    getHighlights();
  }, []);

  return (
    <div className='case-highlight-container'>
      <div className='title-container'>
        <p className='case-highlight-title'>
          "Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online
          bookings in just one month
        </p>
        <p className='ceo-name'>Mattijs Ten Brink - CEO, Transavia</p>
      </div>
      <ul className='case-list'>
        {highlights &&
          highlights.map((eachCase) => (
            <li className='case-list-item' key={eachCase.id}>
              <CaseCard eachCase={eachCase} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CaseHighlight;
