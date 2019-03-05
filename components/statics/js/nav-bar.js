import React from "src.build.react";


function Navigation() {
    const navigation =  <div className="nav-bar">
                            <ul className="nav">
                                <li><a href="">Dash</a></li>
                                <li><a href="">Profile</a></li>
                                <li><a href="">Logout</a></li>
                            </ul>
                        </div>;
    return navigation;
}

export default Navigation;