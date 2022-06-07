import "./CaseHighlight.css";
import { useEffect } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";

const CaseHighlight = () => {
  useEffect(() => {
    //Setup fetch request to get 2 cases and present them here—
  });

  return (
    <div className='case-highlight-container'>
      <h3>
        "Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online
        bookings in just one month
      </h3>
      <h4>Mattijs Ten Brink - CEO, Transavia</h4>
      {/* <CaseCard eachCard={} /> */}
      {/* <CaseCard eachCard={} /> */}
    </div>
  );
};

export default CaseHighlight;
