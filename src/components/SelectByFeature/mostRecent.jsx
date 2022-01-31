import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";


const MostRecent = (props) => {


    const [isActve, setIsActive] = useState(false)
    const option = ["Most Recent", "Most Relevant"]

    const [select, setSelect] = useState("Most Recent")
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
                                            <div onClick={(e) => setSelect(option)}>{option}</div>
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
