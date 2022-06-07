import "./CaseShowcase.css";
import { useState, useEffect } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseShowcase = () => {
  const [casesData, setCasesData] = useState([]);

  useEffect(() => {
    const getCases = async () => {
      const result = await fetch("http://localhost:3000/cases/");
      const data = await result.json();
      setCasesData(data);

      // console.log("fetch data ->", casesData);
    };
    getCases();
  }, []);

  return (
    <div className='case-showcase-container'>
      {/* // ! use buttons or form with select option? */}
      <span>in</span> <button>all industries</button> <span>show me</span> <button>all work</button>
      <ul className='case-list'>
        {casesData &&
          casesData.map((eachCase) => (
            <li className='case-list-item' key={eachCase.id}>
              <CaseCard eachCase={eachCase} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CaseShowcase;
