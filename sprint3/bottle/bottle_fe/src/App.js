import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Index from './component/index.component';


class App extends Component {
    render() {
        return (
            <Router>
                {/*navbar*/}
                <div className="row sticky-lg-top">
                    <nav className="navbar navbar-expand-lg navbar-light "
                         style={{background: "lightsteelblue", paddingRight: 0}}>
                        <div className="container-fluid row">
                            <div className="col-1">
                                <img src="https://s1.storage.5giay.vn/image/2021/01/20210108_455b49e0e4b517ed7e6582c92400cd99_1610073395.jpg"
                                    style={{height: 70, width: 70, borderRadius: 50}}/>
                            </div>
                            <div className="collapse navbar-collapse col-7" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown ms-1 pt-2">
                                        <p className="nav-link dropdown-toggle" style={{color: "black"}}
                                              id="navbarDropdown"
                                              role="button"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false">
                                            LOẠI BÌNH
                                        </p>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown"
                                            style={{borderRadius: 10}}>
                                            <li>
                                                <h6 className="dropdown-item">BÌNH GIỮ NHIỆT</h6>
                                            </li>
                                            <li><h6 className="dropdown-item">LY GIỮ NHIỆT</h6></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ms-1 pt-2">
                                        <Link to={''} className="nav-link active" aria-current="page" style={{color: "black"}}>ĐANG
                                            HOT</Link>

                                    </li>
                                    <li className="nav-item ms-1 pt-2">
                                        <Link to={'/'} className="nav-link active" aria-current="page"
                                              style={{color: "black"}}>KHUYẾN
                                            MÃI</Link>
                                    </li>
                                    <li className="nav-item ms-1 pt-2">
                                        <Link to={''}  className="nav-link active" aria-current="page" style={{color: "black"}}>LIÊN
                                            HỆ</Link>
                                    </li>
                                    <li className="nav-item ms-1">
                                        <Link to={'/cart'} className="nav-link active" aria-current="page"
                                              style={{color: "black"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                 fill="currentColor" className="bi bi-cart4"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                            </svg>
                                            <span className="mx-1" style={{color: "#ea4646"}}>Tổng</span>

                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-4">
                                <div className="mt-2 row">
                                    <div className="col-6">
                                        <Link to={'/register/info'} style={{
                                            textDecoration: "none", color:
                                                "orange", padding: 8
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                 fill="currentColor"
                                                 className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                                <path
                                                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                                <path
                                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            </svg>
                                            <span className="ps-2">Huy jr</span></Link>

                                    </div>
                                    <div className="col-6">
                                        <Link to={'/login'} className="login nav-link mr-5 btn btn-light signin"
                                              data-toggle="dropdown"

                                              style={{color: "black", width: "auto"}}>
                                            <i className="fa fa-right-to-bracket"></i> Đăng Nhập
                                        </Link>
                                    </div>
                                    {/*<div className="col-6">*/}
                                    {/*    <Link to={'/subscribe'} data-toggle="dropdown"*/}
                                    {/*          className="logout btn btn-light mr-1 nav-link" style={{color: " black"}}>Đăng*/}
                                    {/*        ký*/}
                                    {/*    </Link>*/}
                                    {/*    /!*<Link to={'/'} className="logout btn mr-1 btn-light nav-link"*!/*/}
                                    {/*    /!*      style={{color: "black"}}>*!/*/}
                                    {/*    /!*    Đăng xuất*!/*/}
                                    {/*    /!*    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"*!/*/}
                                    {/*    /!*         fill="currentColor"*!/*/}
                                    {/*    /!*         className="bi bi-box-arrow-right" viewBox="0 0 16 16">*!/*/}
                                    {/*    /!*        <path fill-rule="evenodd"*!/*/}
                                    {/*    /!*              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>*!/*/}
                                    {/*    /!*        <path fill-rule="evenodd"*!/*/}
                                    {/*    /!*              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>*!/*/}
                                    {/*    /!*    </svg>*!/*/}

                                    {/*    /!*</Link>*!/*/}
                                    {/*</div>*/}

                                </div>

                            </div>
                        </div>
                    </nav>
                </div>


                <Switch>
                    <Route path='' component={Index}/>
                </Switch>

            </Router>
        );
    }
}

export default App;
