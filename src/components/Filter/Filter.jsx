// DEPENDENCIES
import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

// STATE
import { useStateValue } from "../../state";

// STYLES
import FilterStyles from "./Filter.styles";

// COMPONENTS
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSection from "./FilterSection/FilterSection";

export default function Filter() {
  const [{ filters }] = useStateValue();
  return (
    <FilterStyles>
      <FilterSearch></FilterSearch>
      <Scrollbars
        style={{ width: "100%" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <div className="filter__sections">
          <FilterSection
            active={filters["Audience"].length > 0}
            title="Audience"
          />
          <FilterSection
            active={filters["Distance"].length > 0}
            title="Distance"
          />
          <FilterSection
            active={filters["Practice Size"].length > 0}
            title="Practice Size"
          />
          <FilterSection
            title="OSJ Designation"
            active={filters["OSJ Designation"].length > 0}
          />
          <FilterSection title="Tenure" active={filters["Tenure"].length > 0} />
          <FilterSection
            active={filters["Job Responsibilities"].length > 0}
            title="Job Responsibilities"
          />
          <FilterSection
            active={filters["Production"].length > 0}
            title="Production"
            type="checkbox list"
          />
          <FilterSection
            active={filters["Affiliation Model"].length > 0}
            title="Affiliation Model"
          />
          <FilterSection
            active={filters["Business Interests"].length > 0}
            title="Business Interests"
          />
          <FilterSection
            active={filters["Business Niche"].length > 0}
            title="Business Niche"
          />
          <FilterSection
            active={filters["Personal Interests"].length > 0}
            title="Personal Interests"
          />
        </div>
      </Scrollbars>
    </FilterStyles>
  );
}
