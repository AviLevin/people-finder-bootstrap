import React, { useEffect } from "react";
import classes from "../EmployeesHK.module.css";
import HeartIcon from "./HeartIcon";

// import imgMale from "../../../assets/imgMale.png";
import imgFemale from "../../../assets/imgFemale.png";
import car from "../../../assets/car.png";
import { usePeopleFetch } from "../../../hooks/usePeopleFetch";

const Employee = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardtop}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.name}>{props.location}</span>
        <span className={classes.icon}>
          <button
            type="button"
            onClick={() => props.onUserFavoriteToggle(props.user)}
            className={classes.heartButton}
          >
            <HeartIcon
              isFavorited={() => props.isFavorited(props.user)}
            ></HeartIcon>
          </button>
        </span>
      </div>

      <img
        className={classes.image}
        src={
          props.pic_url
            ? props.pic_url
            : props.gender === "Male"
            ? "https://www.w3schools.com/bootstrap4/img_avatar3.png"
            : "https://www.w3schools.com/bootstrap4/img_avatar5.png"
        }
      />

      <br></br>

      <br></br>

      <div className={classes["card-body"]}>
        <ul>
          {props.city == null ? null : (
            <li>
              {" "}
              <b>city: </b>
              {props.city}
            </li>
          )}
          {props.email == null ? null : (
            <li>
              {" "}
              <b>mail:</b>{" "}
              <a href={`mailto:${props.email}?subject=Hi, ${props.name}`}>
                {props.email}
              </a>{" "}
            </li>
          )}

          {props.gender == null ? null : (
            <li>
              <b>gender: </b> {props.gender}
            </li>
          )}
        </ul>
      </div>

      <br></br>
      <div className={classes.car}>
        {props.car === true ? (
          <img className={classes.carIcon} src={car}></img>
        ) : null}
      </div>
    </div>
  );
};

export default Employee;
