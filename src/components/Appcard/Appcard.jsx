import React, { useState, useEffect } from "react";
import "./appcard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Appcard = () => {
  const isSort = useSelector((state) => state.hideShow.appCard);
  const getCheckBoxValue = useSelector(
    (state) => state.hideShow.landingPageFillterSearch
  );

  const [select, setSelect] = useState(false);
  const [mainArray, setMainArray] = useState([]);


  // <=========used for apply filter functionality========>
  useEffect(() => {
    if (getCheckBoxValue.length === 0) {
      setMainArray(isSort)
    } else {
      let temp = [];
      getCheckBoxValue.map((item) =>
        isSort.map((data) => {
          if (data.title.toLowerCase() == item.toLowerCase()) {
            temp.push(data);
          }
        })
      );

      setMainArray(temp);
      temp = [];
    }
  }, [getCheckBoxValue]);

  // <======set the redux Array into local and sorting functionlity state=====>
  useEffect(() => {
    setMainArray(isSort)
  }, [isSort])


  return (
    <>
      <div className="appCard_wrap">
        {mainArray.map((data, index) => {
          return (
            <>
              <div>
                <div className="card_div" key={index}>
                  <div className="img_div">
                    <Link to="/apppage">
                      <img className="card_img" src={data.img} alt="logo" />
                    </Link>
                  </div>
                </div>

                <div className="category_div">{data.title}</div>
                <div className="name_div">{data.sub}</div>
              </div>
            </>
          );
        })}
      </div>

      {mainArray.length === 0 && (
        <div className="d-flex justify-content-center result_not_found">
          <div>No Results Found</div>
        </div>
      )}
      {mainArray.length != 0 && <div className="bottom_button">
        <button
          className="button_4"
          type="button"
          onClick={() => {
            setSelect(!select);
          }}
        >
          Load More
        </button>
      </div>}

      {select &&
        <>


          <div className="d-flex justify-content-center py-1 loader">
            <div class="spinner-border text-secondary" role="status"></div>
            <span class="sr-only"> &nbsp;&nbsp; Loading...</span>
          </div>
        </>
      }
    </>
  );
};

export default Appcard;
