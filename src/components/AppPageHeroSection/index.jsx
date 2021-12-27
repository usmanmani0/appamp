import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Sound from "../../assets/images/sound.png"
import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"

const AppPageHeroSection = () => {
    return (
        <>
            <div className='sound_cloud_wrapper'>
                <div className='sound_cloud_content'>
                    <div className='hero_section_wraper'>
                        <div className='hero_section_content'>
                            <div>
                                <img src={Sound} className='img-fluid' />
                            </div>
                            <div>
                                <div className='sound_cloud_text'>
                                    <div className='d-flex align-items-center justify-content-center music_audio'>
                                        music & audio
                                    </div>
                                    <div className='sound_cloud_heading'>SoundCloud</div>
                                    <div className='d-flex'>
                                        <div className='ux10'>10 UX Videos</div>
                                        <div className='ui93'>93  UI Screens</div>
                                    </div>
                                    <div className='_copy'>© SoundCloud</div>
                                </div>

                            </div>

                        </div>
                        <div className='copy_download'>
                            <div className='copy_wrap '>
                                <OverlayTrigger
                                    delay={{ hide: 150, show: 300 }}
                                    overlay={(props) => (
                                        <Tooltip {...props}>
                                            Copy Share Link
                                        </Tooltip>
                                    )}
                                    placement="bottom"
                                ><Button variant="">    <img src={Copy} /></Button>
                                </OverlayTrigger>

                            </div>

                            <div className='download_wrap'>         <OverlayTrigger
                                delay={{ hide: 150, show: 300 }}
                                overlay={(props) => (
                                    <Tooltip {...props}>
                                        Download Video
                                    </Tooltip>
                                )}
                                placement="bottom"
                            ><Button variant="">    <img src={Down} /></Button>
                            </OverlayTrigger></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPageHeroSection
