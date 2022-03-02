import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { SortMostRecent, SortMostrelevent } from "../../feature/addCollection/counterSlice"
import { useDispatch, useSelector } from 'react-redux';


const MostRecent = (props) => {

    const [isActve, setIsActive] = useState(false)
    const option = ["Most Recent", "Most Relevant"]

    const [select, setSelect] = useState("Most Recent")
    const dispatch = useDispatch()
    const SortAray = (option) => {
        setSelect(option)
        if (option === "Most Recent") {
            dispatch(SortMostRecent())
        }
        if (option === "Most Relevant") {
            dispatch(SortMostrelevent())
        }

    }

    return (
        <>
            <div className='appPage_select' onClick={() => setIsActive(!isActve)}>
                <div>{select}</div>

                <div>{isActve == false ? <BsChevronDown style={{ fontSize: "20px", color: "#161618" }} /> : <BsChevronUp style={{ fontSize: "20px", color: "#161618" }} />}  </div>
                {isActve && <div className='select_by_feature_content shadow'>
                    {

                        <div className='select_opton'>
                            {
                                option.map((option) => {


                                    return (
                                        <>
                                            <div onClick={(e) => SortAray(option)}>{option}</div>
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

export default MostRecent
