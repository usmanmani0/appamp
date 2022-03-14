import React, { useState, useRef, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./filter.css";
import { IoIosArrowDown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import RightArrow from "../../assets/images/right-arrow.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import img1 from "../../assets/images/s.png";
import HomeMobileFilter from "../UiSecreenFilter/HomemobileFilter"
import { handelShow, isFillter, getAllProducts } from '../../feature/addCollection/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import RecentlyUpdate from "../../components/SelectByFeature/recentlyUpdate"
// import { getCheckBoxValue } from "../../feature/addCollection/counterSlice"

function Filter() {

  const getCheckBoxValue = useSelector((state) => state.hideShow.landingPageFillterSearch)
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
  const show = useSelector((state) => state.hideShow.show)
  const dispatch = useDispatch()
  // ..................for select checkbox....
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedFilter, SetSelectedFilter] = useState([]);
  const [list, setList] = useState([
    {
      id: 2,
      typeis: "Art & Design",
    },
    {
      id: 2,
      typeis: "Augmented Reality",
    },
    {
      id: 3,
      typeis: "Auto & Vehicles",
    },
    {
      id: 4,
      typeis: "Beauty",
    },
    {
      id: 5,
      typeis: "Books & Reference",
    },
    {
      id: 6,
      typeis: "Business",
    },
    {
      id: 7,
      typeis: "Comics",
    },
    {
      id: 8,
      typeis: "Communication",
    },
    {
      id: 8,
      typeis: "Dating",
    },

  ]);

  useEffect(() => {
  }, [list]);
  useEffect(() => {
  }, [getCheckBoxValue]);

  const handleSelectAll = (e) => {
    dispatch(getAllProducts([]))
    setIsCheckAll(!isCheckAll);
    SetSelectedFilter(list.map((li) => `${li.typeis}`));
    if (isCheckAll) {
      SetSelectedFilter([]);
    }


  };

  const handleClick = (e, name) => {
    const { id, checked } = e.target;
    dispatch(isFillter(name))

    let present = selectedFilter.find((data) => data == name);
    if (present) {
      SetSelectedFilter(selectedFilter.filter((item) => item !== name));
    } else {
      SetSelectedFilter([...selectedFilter, name]);
    }
  };

  const enteringAutoComplete = (value, e, r, d) => {
    console.log("app page filter", d)
    dispatch(isFillter(d.option))
    if (r === "clear") {
      setIsCheckAll(false)
    }
    SetSelectedFilter((preValue) => {
      return value;
    });
  };
  // .......................?

  // .....................handle filter open & close====
  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])
  return (
    <>

      <div className="header" id="myHeader" ref={ref}>
        <div className="container">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="filter_button"
            type="button"
          >
            <i className="icon_filter" style={{ marginLeft: "-10px" }}>
              {selectedFilter.length == 0 ? (
                <BsFilter className="iconH" size="16px" color="black" />
              ) : (
                <div className="filter_count_app_card">
                  {selectedFilter.length}
                </div>
              )}
            </i>
            <div>Filter</div>
          </div>
          <div>
            <RecentlyUpdate />
          </div>
        </div>

        <div className="filter_outer_wrapper" id="mapsec">
          {isMenuOpen ? (
            <div>
              <div className='mobile_filter_view'>
                <HomeMobileFilter />
              </div>
              <div className="filter_expand">
                <div style={{ marginTop: "8px" }}>
                  <div className="filter_input_element">
                    <img src={img1} className="search_element" />
                    <Stack spacing={1} style={{ width: "95%" }}>
                      <Autocomplete
                        multiple
                        popupIcon=""
                        id="tags-filled"
                        value={selectedFilter}
                        options={list.map((option) => option.typeis)}
                        onChange={(e, v, r, d) => enteringAutoComplete(v, e, r, d)}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (

                            < Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <>
                            <TextField
                              {...params}
                              variant="filled"
                              label=""
                              placeholder="Search Elements"
                            />
                          </>

                        )}
                      />
                    </Stack>
                  </div>
                </div>
                <hr className="bottom_line"></hr>
                <div className="d-flex">
                  <div className="UiSecreen_app_categories_button">
                    <div className="d-flex" style={{ color: "black" }}>
                      App Categories
                    </div>
                    <div>
                      <img src={RightArrow} />
                    </div>
                  </div>
                  <div className="landing_page_input_wrapper">
                    <div className="checkbox_div">
                      <input
                        type="checkbox"
                        onClick={(e) => handleSelectAll(e)}
                        value=""
                        checked={isCheckAll}
                      />
                      <label className="label">All</label>{" "}
                    </div>
                    {list.map((data, index) => {
                      return (
                        <>
                          <div className="checkbox_div" key={index}>
                            <input

                              key={data.id}
                              type="checkbox"
                              id={data.id}
                              onClick={(e) => handleClick(e, data.typeis)}
                              checked={selectedFilter.includes(`${data.typeis}`)}
                            />
                            <label className="label">{data.typeis}</label>{" "}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          ) : null}
        </div>
      </div>

    </>
  );
}

export default Filter;
