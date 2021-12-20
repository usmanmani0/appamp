import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./footer.css"


const Footer = () => {
    return (
        <>
        <div className='footer_div'>
            <Container>
            <div className='footer_desc'>
            <div className='footerheading_row'>
            <h4 className='footer_heading'>Cookie Policy</h4>
            <h4 className='footer_heading'>Privacy Policy</h4>
            <h4 className='footer_heading'>Provide Feedback</h4>
            </div>
            </div>
            </Container>
        </div>
        </>
    )
}

export default Footer
