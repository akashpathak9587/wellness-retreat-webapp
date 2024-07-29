import { useEffect, useState } from "react";
import "./TypeFilter.css";
import { retreatList } from "../../../lib/data";
const TypeFilter = ({ filterByType }) => {
  const [type, setType] = useState('');
  const [options, setOptions] = useState([]);
  const filterUniqueOption = () => {
    let optionList = [];
    retreatList.forEach((item) => {
      let itemTags = item.tag;
      itemTags.forEach((itemTag) => {
        if (!optionList.includes(itemTag)) {
          optionList = [...optionList, itemTag];
        }
      });
    });
    setOptions(optionList);
  };
    
    const onSelectChange = (e) => {
        setType(e.target.value);
        filterByType(e.target.value);
    }

  useEffect(() => {
    filterUniqueOption();
  }, []);
  return (
      <div className="type-filter">
          <select value={type} onChange={(e) => onSelectChange(e)}>
        <option value="">Filter By Type</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
