import "./CaseShowcase.css";
import { useState, useEffect } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseShowcase = () => {
  const [casesData, setCasesData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [visibleCases, setVisibleCases] = useState(10);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  let allIndustries = casesData.map((eachCase) => {
    return eachCase.industry;
  });

  let filteredIndustries = [...new Set(allIndustries)];

  // console.log(casesData.filter((eachCase) => eachCase.industry === selectedIndustry));

  const searchFilter = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const showMoreCases = () => {
    setVisibleCases((previousValue) => previousValue + 4);
  };

  useEffect(() => {
    const getCases = async () => {
      const result = await fetch("http://localhost:3000/cases/");
      const data = await result.json();
      // console.log("fetch data ->", data);

      setCasesData(data);
    };
    getCases();
    setVisibleCases(10);

    if (selectedIndustry === "All industries" || selectedIndustry === "") {
      setFiltered(false);
    } else {
      setFiltered(true);
    }
  }, [selectedIndustry]);

  return (
    <div className='case-showcase-container'>
      <form method='get' id='filter' className='filter-form'>
        <span className='form-text'>in </span>
        <select name='industries' form='filter' value={selectedIndustry} onChange={searchFilter} className='select-btn'>
          <option>All industries</option>

          {filteredIndustries.map((industry) => (
            <option key={industry}>{industry}</option>
          ))}
        </select>
        <span className='form-text'>show me</span>
        <select name='industries' form='filter' className='select-btn'>
          <option>All work</option>
        </select>
      </form>

      <ul className='case-list'>
        {casesData && !filtered
          ? casesData.slice(0, visibleCases).map((eachCase) => (
              <li className='case-list-item' key={eachCase.id}>
                <CaseCard eachCase={eachCase} />
              </li>
            ))
          : casesData
              .filter((eachCase) => eachCase.industry === selectedIndustry)
              .map((eachCase) => (
                <li className='case-list-item' key={eachCase.id}>
                  <CaseCard eachCase={eachCase} />
                </li>
              ))}
        {visibleCases <= casesData.length ? (
          <button className='loadmore-btn' onClick={showMoreCases}>
            Load More
          </button>
        ) : null}
      </ul>
    </div>
  );
};

export default CaseShowcase;
