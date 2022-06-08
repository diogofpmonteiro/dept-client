import "./CaseShowcase.css";
import { useState, useEffect } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseShowcase = () => {
  const [casesData, setCasesData] = useState([]);
  const [visibleCases, setVisibleCases] = useState(10);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const showMoreCases = () => {
    setVisibleCases((previousValue) => previousValue + 4);
  };

  const allIndustries = casesData.map((eachCase) => {
    return eachCase.industry;
  });

  let filteredIndustries = [...new Set(allIndustries)];

  const searchFilter = (event) => {
    event.preventDefault();

    console.log(event.target.value);
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

      <form method='get' id='filter' className='filter-form'>
        <span className='form-text'>in </span>
        <select name='industries' form='filter' onSelect={searchFilter} className='select-btn'>
          <option value=''>All industries</option>
          {filteredIndustries.map((industry) => (
            <option value=''>{industry}</option>
          ))}
        </select>
        <span className='form-text'>show me</span>
        <select name='industries' form='filter' className='select-btn'>
          <option value=''>Alphabetically</option>
          <option value=''>By most recent</option>
        </select>
      </form>

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
      ) : null}
    </div>
  );
};

export default CaseShowcase;
