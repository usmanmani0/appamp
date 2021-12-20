import React, { useState } from "react";
import "./filter.css";
import { BsChevronDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
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
  return (
    <>
      <div class="header" id="myHeader">
        <div className="container">
          <div>
            <button
              onClick={handelShow}
              className="filter_button"
              type="button"
            >
              <i className="icon_filter">
                <BsFilter className="icon" size="16px" color="black" />
              </i>
              <span>Filter</span>

              {
                show ? <div className="filter_expand">
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
                <hr className="vertical_line"></hr>
                <div className="All_button">
                  <span>App Categories</span>
                  <i className="icon_forward">
                    <BiChevronRight
                      className="icon"
                      size="16px"
                      color="black"
                    />
                  </i>
                </div>
              </div>: null
              }
              
            </button>
          </div>
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
