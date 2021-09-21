import React, { useEffect, useState } from "react";
import _ from "lodash";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
import classes from "./EmployeesHK.module.css";
import Employee from "./Employee/Employee";

const UserListFavorite = ({}) => {
  const { isLoading, onUserFavoriteToggle, favorites, isFavorited } =
    usePeopleFetch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-11 ">
          {favorites.map((user, index) => {
            return (
              <Employee
                key={index}
                id={user.id}
                name={user.name.first}
                location={user.location.country}
                pic_url={user.picture.medium}
                isFavorited={() => isFavorited(user)}
                onUserFavoriteToggle={() => onUserFavoriteToggle(user)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserListFavorite;
