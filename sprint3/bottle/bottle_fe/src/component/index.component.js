import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {bottles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/bottle/list/home')
            .then(response => {
                console.log(response.data);
                this.setState({bottles: response.data.content});
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    tabRow() {
        return this.state.bottles.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">

                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img style={{height: 500}}
                                         src="https://locklockchinhhang.com/wp-content/uploads/2021/10/bi%CC%80nh-giu%CC%9B%CC%83-nhie%CC%A3%CC%82t-locknlock-locklockchinhhang-1.png"
                                         className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img style={{height: 500}}
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3dxgS5rMR0WQ0cghKH6u-CMTR5jkbyYfWQ&usqp=CAU"
                                         className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img style={{height: 500}}
                                         src="https://locknlockvietnam.com.vn/wp-content/uploads/2021/08/binh-giu-nhiet-name-tumbler-locklock-lhc4125-300x300.jpg"
                                         className="d-block w-100"/>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-2"></div>
                </div>
                <hr/>

                <div className="row mt-3">

                    <div className="col-6"></div>
                    <div className="col-5">
                        <select className="inputt" style={{borderRadius: 5, width: 200}}>
                            <option value="0">Mức giá</option>
                            <option>Dưới 1.000.000đ</option>
                            <option>Dưới 500.000đ</option>
                            <option>Dưới 100.000đ</option>

                        </select>
                        <input className="inputt" type="text" placeholder="Tìm tên sản phẩm..."
                               aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">Tìm</button>
                    </div>

                    <div className="col-1"></div>


                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="container-fluid">
                            <h3 align="center">Bottle List</h3>
                            <table className="table table-striped" style={{marginTop: 20}}>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Volume</th>
                                    {/*<th>Color</th>*/}
                                    <th>Price</th>
                                    <th>Image</th>
                                    {/*<th>Description</th>*/}
                                    {/*<th>Quantity</th>*/}
                                    {/*<th>Material</th>*/}
                                    {/*<th>Bottle Type</th>*/}
                                    {/*<th>Promotion</th>*/}

                                </tr>
                                </thead>
                                <tbody>
                                {this.tabRow()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
}
