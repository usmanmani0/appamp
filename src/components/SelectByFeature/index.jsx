import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import BsChevronDown from "@mui/material/BS"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";


const SelectByFeature = (props) => {
    const [age, setAge] = useState('selectoption');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [Arrow, setArrow] = useState(false)
    console.log("Arow==========>", Arrow)
    return (
        <>
            <div className='appPage_select' >
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
                            {/* <MenuItem value={21} className='language_control'>Random Order</MenuItem> */}

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

            </div>
        </>
    )
}

export default SelectByFeature
