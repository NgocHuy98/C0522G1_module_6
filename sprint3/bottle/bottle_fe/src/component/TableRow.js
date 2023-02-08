import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        // this.delete = this.delete.bind(this);
    }

    //
    // delete() {
    //     console.log('begin delete')
    //     console.log('http://localhost:8080/api/person/delete/' + this.props.obj.id)
    //     axios.delete('http://localhost:8080/api/person/delete/' + this.props.obj.id)
    //         .then(
    //             console.log('Deleted'),
    //             window.location.reload()
    //         )
    //         .catch(err => console.log(err))
    //
    // }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.volume}
                </td>
                {/*<td>*/}
                {/*    {this.props.obj.color}*/}
                {/*</td>*/}
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <img src={this.props.obj.image} style={{height: 80, width: 80}} alt=""/>

                </td>
                {/*<td>*/}
                {/*    {this.props.obj.description}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {this.props.obj.quantity}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {this.props.obj.material}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {this.props.obj.bottleType}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {this.props.obj.promotion}*/}
                {/*</td>*/}

                <td>
                    <Link to={"update/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
