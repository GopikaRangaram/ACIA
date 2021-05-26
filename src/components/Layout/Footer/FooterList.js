import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scss';
import list from './footerList.json';
import {Col} from 'react-bootstrap';
export default function FooterList() {


return (
    list.map((item) => {
    return(
    <Col className='footer-Column'>
    <div className="columnTitle"><b>{item.title}</b></div>
    <ul className="list-unstyled">
    {
      item.content.map((links) => {
        return(
          <li key = {links.label}>
             <Link to={links.url} className="innerLink py-1">{links.label}</Link>
          </li>
         )
      })
    }
    </ul>
    </Col>
    
    )
    }
)
)

}