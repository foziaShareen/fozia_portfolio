import React from 'react';
import {Media} from 'reactstrap';

function Menu({title,description}) {
    return (
        <div>
        <Media
              className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              {title}
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              {description}
                            </p>
                          </Media>
                        </Media>    
        </div>
    )
}

export default Menu
