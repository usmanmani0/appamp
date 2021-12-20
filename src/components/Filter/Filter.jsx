import React, { useState } from "react";
import "./filter.css";
import { BsChevronDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { data } from "jquery";
const Filter = () => {
  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  window.onscroll = function () {
    myFunction();
  };

  const [show, setShow] = useState(false);
  const handelShow = () => {
    setShow(!show);
  };

  const data = [
    {
      id: 1,
      typeis: "All",
    },
    {
      id: 2,
      typeis: "Art & Design",
    },
    {
      id: 3,
      typeis: "Augmented Reality",
    },
    {
      id: 4,
      typeis: "Auto $ Vehicles",
    },
    {
      id: 5,
      typeis: "Beauty",
    },
    {
      id: 6,
      typeis: "Books & Refrences",
    },
    {
      id: 7,
      typeis: "Bisiness",
    },
    {
      id: 8,
      typeis: "Comics",
    },
    {
      id: 9,
      typeis: "Communication",
    },
    {
      id: 10,
      typeis: "Dating",
    },
  ];
  return (
    <>
      <div class="header" id="myHeader">
        <div className="container">
          <div className="filter_btn">
            <button
              onClick={handelShow}
              className="filter_button"
              type="button"
            >
              <i className="icon_filter">
                <BsFilter className="icon" size="16px" color="black" />
              </i>
              <span>Filter</span>
            </button>
          </div>
          {show ? (
            <div className="filter_expand">
              <div class="form-group has-search">
                <input
                  type="text"
                  class="form-control"
                  id="form_control"
                  placeholder="Search"
                ></input>
              </div>
              <hr className="bottom_line"></hr>
              <div>
                <button className="app_categories_button" type="button">
                  <span>App Categories</span>
                  <i className="icon_down">
                    <BiChevronRight
                      className="icon"
                      size="16px"
                      color="black"
                    />
                  </i>
                </button>
              </div>

              
              {data.map((data, index) => {
                return (
                  <> 
                  <div className="checkbox_div" key={index}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="label">{data.typeis}</label>{" "}
                    
                  </div>
                  <hr className="vertical_line"></hr>
                  </>
                );
              })}
            </div>
          ) : null}
          <div>
            <button className="recent_button" type="button">
              <span>Recently Updated (All)</span>
              <i className="icon_down">
                <BsChevronDown className="icon" size="16px" color="black" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
