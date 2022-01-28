import React from 'react';
import '../CollectionHeroSection/collectionhero.css'
import Plus from "../../../assets/images/plus.png"
import Header from '../../Header/Header';
import CreateCollecton from "../../Collection/CreateCollection"
import { addNewCollection } from "../../../feature/addCollection/counterSlice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CollectionHeroSection = () => {
    const dispatch = useDispatch()
    const createNewCollection = () => {
        dispatch(addNewCollection())
    }
    const createCollection = useSelector((state) => state.hideShow.createCollection)
    return <>
        <Header />
        <div className='collection_hero_section'>
            <div>
                <div className='collection_heading'>Collections</div>
                <div className='Collections_counter'>{createCollection.length} Collections</div>
            </div>
            <div className='create_collection_btn' onClick={() => dispatch(addNewCollection())} ><div><img src={Plus} className='collection_plus_icon' /></div>new Collection </div>
            <div className='create_collection_btn_mobile' onClick={() => dispatch(addNewCollection())} ><div><img src={Plus} className='add_collection_mobile_icon' /></div></div>

        </div>
        <CreateCollecton />

    </>;
};

export default CollectionHeroSection;
