import React, { useState, useEffect } from "react";
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
import { handelShow } from '../../feature/addCollection/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import RecentlyUpdate from "../../components/SelectByFeature/recentlyUpdate"

function Filter() {
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

  // const [show, setShow] = useState(false);
  const show = useSelector((state) => state.hideShow.show)
  const dispatch = useDispatch()
  // const handelShow = () => {
  //   setShow(!show);
  // };

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
  ]);

  useEffect(() => {
    // setList(data);
  }, [list]);

  const handleSelectAll = (e) => {
    // alert("ALL")
    setIsCheckAll(!isCheckAll);
    SetSelectedFilter(list.map((li) => `${li.typeis}`));
    if (isCheckAll) {
      SetSelectedFilter([]);
    }
  };

  const handleClick = (e, name) => {
    // alert("JJ")
    const { id, checked } = e.target;
    let present = selectedFilter.find((data) => data == name);
    console.log("PRESENT", present);
    if (present) {
      SetSelectedFilter(selectedFilter.filter((item) => item !== name));
    } else {
      SetSelectedFilter([...selectedFilter, name]);
    }
  };
  const enteringAutoComplete = (value) => {
    console.log("AUTOVALUE", value);
    SetSelectedFilter((preValue) => {
      return value;
    });
  };

  return (
    <>
      <div className="header" id="myHeader">
        <div className="container">

          <div
            onClick={() => dispatch(handelShow())}
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
            {/* <button className="recent_button" type="button">
              <span>Recently Updated (All)</span>
              <i className="icon_down">
                <BsChevronDown className="icon" size="16px" color="black" />
              </i>
            </button> */}

            {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}

            <RecentlyUpdate />
          </div>
        </div>
      </div>
      <div className="filter_outer_wrapper">
        {show ? (
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
                      // defaultValue={[list[3].title]}
                      // freeSolo
                      onChange={(e, v) => enteringAutoComplete(v)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label=""
                          placeholder="Search Elements"
                        />
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
                      onClick={handleSelectAll}
                      isChecked={isCheckAll}
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
                        {/* <hr className="vertical_line"></hr> */}
                      </>
                    );
                  })}
                </div>

              </div>




            </div>
          </div>

        ) : null}
      </div>
    </>
  );
}

export default Filter;
