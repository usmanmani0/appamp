import React, { useState } from "react";
import "./appcard.css";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Appcard = () => {
  const [select, setSelect] = useState(false)
  const isSort = useSelector((state) => state.hideShow.appCard)
  const getCheckBoxValue = useSelector((state) => state.hideShow.landingPageFillterSearch)

  // <========This below function is used to compaire 
  // select filter valure through filter functionality========>
  let ae = []
  var newArray = getCheckBoxValue.map((item) =>
    isSort.map((data) => {
      if (data.sub.toLowerCase() == item.toLowerCase()) {
        ae.push(data)
      }
    }));
  newArray = ae
  ae = []
  // ..........function end........

  return (
    <>

      {getCheckBoxValue.length === 0 ? <div className="appCard_wrap">
        {isSort.map((data, index) => {
          return (
            <>
              <div>
                <div className="card_div" key={index}>
                  <div className="img_div">
                    <Link to="/apppage"><img className="card_img" src={data.img} alt="logo" /></Link>
                  </div>
                </div>

                <div className="category_div">{data.title}</div>
                <div className="name_div">{data.sub}</div>
              </div>{" "}
            </>
          );
        })}
      </div> :
        <div className="appCard_wrap">
          {newArray.map((data, index) => {
            return (
              <>
                <div>
                  <div className="card_div" key={index}>
                    <div className="img_div">
                      <Link to="/apppage"><img className="card_img" src={data.img} alt="logo" /></Link>
                    </div>
                  </div>

                  <div className="category_div">{data.title}</div>
                  <div className="name_div">{data.sub}</div>
                </div>{" "}
              </>
            );
          })}
        </div>
      }
      {/* {
        newArray.length === 0 &&
        <div className="d-flex justify-content-center result_not_found" >
          <div>No Results Found</div>
        </div>} */}

      <div className="bottom_button"><button className="button_4" type="button" onClick={() => { setSelect(!select) }}>Load More</button></div>
      {select && <div className="d-flex justify-content-center py-1 loader" >
        <div class="spinner-border text-secondary" role="status">

        </div>
        <span class="sr-only"> &nbsp;&nbsp; Loading...</span>
      </div>}
    </>
  );
};

export default Appcard;
