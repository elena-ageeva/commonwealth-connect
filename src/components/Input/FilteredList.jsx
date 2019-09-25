import React, { useState } from "react";
import { FilteredListStyles } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";

import { TextInput, Checkbox } from ".";

export default function FilteredList({ items, placeholder, values, onChange }) {
  const [searchTerm, updateSearchTerm] = useState("");
  return (
    <FilteredListStyles>
      {/* <TextInput
        value={searchTerm}
        onChange={updateSearchTerm}
        placeholder={placeholder}
      /> */}
      {/* <Scrollbars
        style={{ width: "100%", height: "200px", marginTop: "10px" }}
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      > */}
      <div className="item__list">
        {searchTerm.length === 0
          ? items.map((e, i) => {
              return (
                <Checkbox
                  checked={values && values.indexOf(e) > -1}
                  highlight
                  highlightTerm={searchTerm}
                  label={e}
                  key={`checkbox${e}`}
                  onChange={onChange}
                />
              );
            })
          : items
              .filter(e => {
                return e.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
              })
              .map((e, i) => {
                return (
                  <Checkbox
                    highlight
                    highlightTerm={searchTerm}
                    label={e}
                    key={`checkbox${e}`}
                    onChange={onChange}
                  />
                );
              })}
      </div>
      {/* </Scrollbars> */}
    </FilteredListStyles>
  );
}
