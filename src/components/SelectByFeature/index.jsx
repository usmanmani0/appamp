import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { SortAlphabeticlayFeature, SortRandomly } from "../../feature/addCollection/counterSlice"


const SelectByFeature = (props) => {

    const dispatch = useDispatch()
    const [isActve, setIsActive] = useState(false)
    const option = ["By Feature", "Random Order"]

    const [select, setSelect] = useState("Random Order")
    const SortAray = (option) => {
        setSelect(option)
        if (option === "Random Order") {

            dispatch(SortRandomly())
        }
        if (option === "By Feature") {

            dispatch(SortAlphabeticlayFeature())

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

export default SelectByFeature
