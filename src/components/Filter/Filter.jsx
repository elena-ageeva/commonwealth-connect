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
import { Distance, Checkbox, Number, FilteredList } from "../Input";

export default function Filter() {
  const [{ directory }, dispatch] = useStateValue();
  // useEffect(() => {
  //   dispatch({ type: "setSearchResults", searchResults: [...directory] })
  // }, [directory, dispatch])
  return (
    <FilterStyles>
      <FilterSearch></FilterSearch>
      <Scrollbars
        style={{ width: "100%" }}
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <div className="filter__sections">
          <FilterSection
            title="Audience"
            children={[
              <Checkbox key="audience checkbox 1" label="Advisors" />,
              <Checkbox key="audience checkbox 2" label="Staff" />,
              <Checkbox
                key="audience checkbox 3"
                label="People in my practice"
              />
            ]}
          />
          <FilterSection
            title="Distance"
            children={[<Distance key="distance" />]}
          />
          <FilterSection
            title="Practice Size"
            children={[
              <Checkbox key="checkbox 1" label="1-5" />,
              <Checkbox key="checkbox 2" label="6-10" />,
              <Checkbox key="checkbox 3" label="11-15" />,
              <Checkbox key="checkbox 4" label="16-20" />,
              <Checkbox key="checkbox 5" label="20+" />,
            ]}
          />
          <FilterSection
            title="OSJ Designation"
            children={[
              <Checkbox key="checkbox 1" label="Yes" />,
              <Checkbox key="checkbox 2" label="No" />
            ]}
          />
          <FilterSection
            title="Tenure"
            children={[
              <Checkbox key="checkbox 1" label="1-5 years" />,
              <Checkbox key="checkbox 2" label="6-10 years" />,
              <Checkbox key="checkbox 3" label="11-15 years" />,
              <Checkbox key="checkbox 4" label="16-20 years" />,
              <Checkbox key="checkbox 5" label="20+ years" />,
            ]}
          />
          <FilterSection
            title="Job Responsibilities"
            children={[
              <FilteredList
                placeholder="Find a job responsibility"
                key="responList"
                items={[
                  `Completing client paperwork`,
                  `Handling client phone calls`,
                  `Track pending business paperwork`,
                  `Greeting clients`,
                  `Generate client reports`,
                  `Maintain client records in CRM`,
                  `Coordinate client events`,
                  `Prepare client correspondence`,
                  `Prepare for client meetings`,
                  `Assist with marketing campaigns`,
                  `Track and order office supplies`,
                  `Create and manage internal workflows`,
                  `Manage staff`,
                  `Train staff`,
                  `Create and update procedures manual`,
                  `Upload documents`,
                  `Perform general office duties (such as filing, sorting mail, typing correspondence)`,
                  `Organizing and maintaining client financial documents`,
                  `Assist with investment decisions (such as portfolio construction, asset allocation, and rebalancing)`,
                  `Maintain client cost basis information`,
                  `Conduct onthly/quarterly/ad hoc client reporting`,
                  `Conduct investment research`,
                  `Review client statements`,
                  `Create personal financial statements`,
                  `Keep abreast of industry trends`,
                  `Input data into financial planning software`,
                  `Conduct client review meetings`,
                  `Recommend plans and products to help clients achieve goals`,
                  `Create & execute business plan`,
                  `Create & execute marketing plan`,
                  `Oversee compliance`,
                  `schedule meetings for advisors`,
                  `Assist with projects, as needed`,
                  `Manage and update firms website`,
                  `Maintain client gift program`,
                  `Set marketing deadlines`,
                  `Perform mail merges`,
                  `Maintain brochures and firm stationery`,
                  `Coordinate production and mailing of client newsletter`,
                  `Meet with clients to review paperwork to ensure accuracy`,
                  `Research new products and services`,
                  `Trade in client accounts`,
                  `Generating and pursuing new client opportunities`,
                  `Presenting at prospect meetings`,
                  `Developing and sustaining relationships with strategic alliances (CPAs, attorneys, etc.)`,
                  `Complying with all FINRA/SEC/Commonwealth compliance regulations`,
                  `Anticipate advisor's needs and handle proactively`
                ]}
              />
            ]}
          />
          <FilterSection
            title="Production"
            type="checkbox list"
            children={[
              <Checkbox key="checkbox 1" label="Up to $199,000" />,
              <Checkbox key="checkbox 2" label="$200,000 - $499,999" />,
              <Checkbox key="checkbox 3" label="$500,000 - $749,999" />,
              <Checkbox key="checkbox 4" label="$750,000 - $999,999" />,
              <Checkbox key="checkbox 5" label="$1,000,000 - $1,499,999" />,
              <Checkbox key="checkbox 6" label="$1,500,000 - $1,999,999" />,
              <Checkbox key="checkbox 6" label="$2,000,000 - $2,499,999" />,
              <Checkbox key="checkbox 6" label="$2,500,000 - $2,999,999" />,
              <Checkbox key="checkbox 6" label="$3,000,000+" />,
            ]}
          />
          <FilterSection
            title="Affiliation Model"
            children={[
              <Checkbox key="checkbox 1" label="Dual Registration" />,
              <Checkbox key="checkbox 2" label="Hybrid" />,
              <Checkbox key="checkbox 3" label="Corporate RIA" />,
              <Checkbox key="checkbox 4" label="RIA-Only" />,
            ]}
          />
          <FilterSection
            title="Business Interests"
            children={[
              <FilteredList
                placeholder="Find a business interest"
                key="businessInterestList"
                items={[
                  `2nd Generation Clients`,
                  `401Ks`,
                  `Advanced Planning topics`,
                  `Best Practices`,
                  `Business Continuity`,
                  `Career Paths`,
                  `CFP`,
                  `Charitable Giving Strategies`,
                  `Client Events`,
                  `Client Experience`,
                  `Client reviews`,
                  `Compensation/equity strategies`,
                  `Continuity Planning`,
                  `Economic Trends`,
                  `Ensemble evolution`,
                  `Hiring an advisor`,
                  `Mentoring the next gen`,
                  `Business transitions: I need a continuity partner`,
                  `Business transitions: I'm thinking about selling my practice`,
                  `Business transitions: I would like to buy a practice`,
                  `Estate Law Changes`,
                  `Family Offices`,
                  `Fee Structure`,
                  `Financial Planning`,
                  `Giving Back`,
                  `Goal Setting`,
                  `Growth through referrals`,
                  `Growth/Business Development`,
                  `Human Resources`,
                  `Investment Ideas`,
                  `Investment Strategies`,
                  `Marketing/Social Media`,
                  `Mergers and Acquisitions`,
                  `Networking`,
                  `Niche Partnerships`,
                  `Operational Efficiency`,
                  `Options`,
                  `P360 Models`,
                  `Pensions`,
                  `Personal Development`,
                  `Picking stocks`,
                  `Portfolio Management`,
                  `PR Strategies`,
                  `Practice Management`,
                  `Process Improvement`,
                  `Retirement Income Planning`,
                  `Retirement Planning`,
                  `RIA`,
                  `Social Media`,
                  `Small Business Owners`,
                  `Small Practice`,
                  `Staff Development`,
                  `Study Groups`,
                  `Succession Planning`,
                  `Tax Law Changes`,
                  `Tax Strategies`,
                  `Team Building`,
                  `Technology Super User`,
                  `Transitioning Practice to next generation`,
                  `Working with seniors`,
                  `Working with strategic alliances`
                ]}
              />
            ]}
          />
          <FilterSection
            title="Business Niche"
            children={[
              <FilteredList
                placeholder="Find a business niche"
                key="nichelist"
                items={[
                  "Working with family members",
                  "Teachers",
                  "Millennials",
                  "Women in transition",
                  "Retirement plans",
                  "Doctors and dentists",
                  "Pharmaceutical/Tech executives",
                  "Small business owners",
                  "LGBT Clients"
                ]}
              />
            ]}
          />
          <FilterSection
            title="Personal Interests"
            children={[
              <FilteredList
                placeholder="Find a personal interest"
                key="personalInterestList"
                items={[
                  "Baseball",
                  "Basketball",
                  "Bird watching",
                  "Blogging",
                  "Boating",
                  "Callighraphy",
                  "Career Coach",
                  "Cato Institute Ideas",
                  "Charitable causes",
                  "Chess",
                  "Classical Music",
                  "Cooking",
                  "Crafts",
                  "Creative Writing",
                  "Cricket",
                  "Cross Country Skiing",
                  "Crossword puzzles",
                  "Dancing",
                  "Down Hill Skiing",
                  "Environmental responsibility",
                  "Fine Art",
                  "Fishing",
                  "Food and Drink",
                  "Football",
                  "Gardening",
                  "Golf",
                  "Grandparenting",
                  "Gym Cardio",
                  "Hiking",
                  "Hockey",
                  "Hunting",
                  "Kayaking",
                  "Knitting",
                  "Life Coach",
                  "Live music",
                  "Meditation",
                  "Mountain biking",
                  "Nature",
                  "Non-Profit Boards",
                  "Nutrition",
                  "Painting/Drawing",
                  "Parenting",
                  "Personal retirement readiness",
                  "Philanthropy",
                  "Photography",
                  "Pickle Ball",
                  "Playing music/Singing",
                  "Podcasts",
                  "Pottery",
                  "Real Estate",
                  "Road Biking",
                  "Rock Climbing",
                  "Running",
                  "Scrapbooking",
                  "Singing",
                  "Skydiving",
                  "Snowboarding",
                  "Soccer",
                  "Special Service Award Winner",
                  "Spiritual Beliefs/Religion/Faith",
                  "Squash",
                  "Tennis",
                  "Theater",
                  "Traveling",
                  "Veteran",
                  "Video games",
                  "Volunteering",
                  "Wake Surfing",
                  "Weightlifting",
                  "Wood working",
                  "Writing",
                  "Yoga"
                ]}
              />
            ]}
          />
        </div>
      </Scrollbars>
    </FilterStyles>
  );
}
