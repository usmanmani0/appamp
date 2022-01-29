import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";


const SelectByFeature = (props) => {


    const [isActve, setIsActive] = useState(false)
    const option = ["By Feature", "Random Order"]
    const option1 = ["Most Recent", "Most Relevant"]
    const [select, setSelect] = useState("Random Order")
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

                    {/* <div>Random Order</div> */}
                </div>}
            </div>
            {/* <div className='appPage_select' >
                {
                    props.feature == true ? <FormControl onClick={() => setArrow(!Arrow)}>

                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}

                            autoWidth
                            className='con'
                            IconComponent={() => Arrow == false ? <BsChevronDown style={{ fontSize: "20px", marginRight: "10px", color: "#161618" }} /> : <BsChevronUp style={{ fontSize: "20px", marginRight: "10px", color: "#161618" }} />}
                        >
                            <MenuItem value="selectoption" className='language_control' >
                                Most Recent
                            </MenuItem>
                            <MenuItem value={10} className='language_control' onClick={() => setArrow(false)}>Most Relevant</MenuItem >
 
                        </Select>
                    </FormControl> : <FormControl >

                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            className='con'
                        >
                            <MenuItem value="selectoption" className='language_control'>
                                By Feature
                            </MenuItem>
                            <MenuItem value={10} className='language_control'>By Feature</MenuItem>
                            <MenuItem value={21} className='language_control'>Random Order</MenuItem>

                        </Select>
                    </FormControl>
                }

            </div> */}
        </>
    )
}

export default SelectByFeature
