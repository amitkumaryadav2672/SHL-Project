import ResultCard from "./ResultCard";

const Results = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="no-data">No results found</p>;
  }

  return (
    <div className="results">
      {data.map((item, index) => (
        <ResultCard
          key={index}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default Results;
