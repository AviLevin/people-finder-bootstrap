import React, { useState, useEffect } from "react";
import classes from "./EmployeesHK.module.css";
import CheckBox from "../CheckBox/CheckBox";

import Employee from "./Employee/Employee";
import UserFavorite from "./UserListFavorite";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
import InfiniteScroll from "react-infinite-scroll-component";

const EmployeesHK = ({}) => {
  const {
    users,
    isLoading,
    setPage,
    page,
    onUserFavoriteToggle,
    isFavorited,
    handleScroll,
    onToggleSelectNat,
  } = usePeopleFetch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const nation = [
    { value: "BR", label: "Brazil" },
    { value: "AU", label: "Australia" },
    { value: "CA", label: "Canada" },
    { value: "CH", label: "Switzerland" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
  ];

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <div className={classes.container}>
      <div className={classes.check}>
        <div className="row row-users">
          <div className={classes.checklist}>
            {nation.map((na, index) => (
              <CheckBox
                key={index}
                value={na.value}
                label={na.label}
                onChange={onToggleSelectNat}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-11 ">
          <InfiniteScroll
            dataLength={users.length}
            next={() => setPage(page + 1)}
            hasMore={true}
            scrollableTarget="scrollableDiv"
            style={{ overflow: "hidden" }}
          >
            {users &&
              users.map((user, index) => {
                return (
                  <Employee
                    key={index}
                    id={user.id}
                    name={user.name.first}
                    location={user.location.country}
                    pic_url={user.picture.medium}
                    onUserFavoriteToggle={() => onUserFavoriteToggle(user)}
                    isFavorited={() => isFavorited(user)}
                  />
                );
              })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default EmployeesHK;
