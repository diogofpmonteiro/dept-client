import "./CaseShowcase.css";
import { useState, useEffect } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseShowcase = () => {
  const [casesData, setCasesData] = useState([]);
  const [visibleCases, setVisibleCases] = useState(10);

  const showMoreCases = () => {
    setVisibleCases((previousValue) => previousValue + 4);
  };

  useEffect(() => {
    const getCases = async () => {
      const result = await fetch("http://localhost:3000/cases/");
      const data = await result.json();
      setCasesData(data);

      // console.log("fetch data ->", data);
    };
    getCases();
    setVisibleCases(10);
  }, []);

  return (
    <div className='case-showcase-container'>
      {/* // ! use buttons or form with select option? */}
      <div className='filter-form'>
        <span>in</span> <button>all industries</button> <span>show me</span> <button>all work</button>
      </div>
      <ul className='case-list'>
        {casesData &&
          casesData.slice(0, visibleCases).map((eachCase) => (
            <li className='case-list-item' key={eachCase.id}>
              <CaseCard eachCase={eachCase} />
            </li>
          ))}
      </ul>
      {visibleCases <= casesData.length ? (
        <button className='loadmore-btn' onClick={showMoreCases}>
          Load More
        </button>
      ) : (
        "Hi"
      )}
    </div>
  );
};

export default CaseShowcase;
