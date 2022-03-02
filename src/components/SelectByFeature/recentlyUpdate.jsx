import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { SortAlphabeticlay, SortRecentlyUpdate } from "../../feature/addCollection/counterSlice"
import { useSelector, useDispatch } from 'react-redux';


const RecentlyUpdate = (props) => {


    const [isActve, setIsActive] = useState(false)
    const option = ["Recently Updated (All)", "Alphabetically"]
    const [sort, setSort] = useState()

    const [select, setSelect] = useState("Recently Updated (All)")
    const isSort = useSelector((state) => state.hideShow.appCard)
    const SortArray = (option) => {
        setSelect(option)
        if (option === "Alphabetically") {
            dispatch(SortAlphabeticlay())
        }
        if (option === "Recently Updated (All)") {
            dispatch(SortRecentlyUpdate())
        }

    }
    const dispatch = useDispatch()
    return (
        <>
            <div className='appcard_select' onClick={() => setIsActive(!isActve)}>
                <div>{select}</div>

                <div>{isActve == false ? <BsChevronDown style={{ fontSize: "20px", color: "#161618" }} /> : <BsChevronUp style={{ fontSize: "20px", color: "#161618" }} />}  </div>
                {isActve && <div className='appcard_select_by_feature_content shadow'>
                    {

                        <div className='select_opton'>
                            {
                                option.map((option) => {


                                    return (
                                        <>
                                            <div onClick={(e) => SortArray(option)} >{option}</div>
                                        </>
                                    )
                                })

                            }
                        </div>



                    }


                </div>}
            </div>

        </>
    )
}

export default RecentlyUpdate
