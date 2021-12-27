import React, { useState } from 'react'
import "../AppPage/appPage.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectByFeature = () => {
    const [age, setAge] = useState('selectoption');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className='appPage_select' >

                <FormControl >

                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        className='con'
                    >
                        <MenuItem value="selectoption">
                            <em>By Feature</em>
                        </MenuItem>
                        <MenuItem value={10}>By Feature</MenuItem>
                        <MenuItem value={21}>Random Order</MenuItem>

                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default SelectByFeature
