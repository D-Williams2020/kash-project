import React, { Fragment } from "react";
import Header from './Header'
import {MDBBtn} from "mdbreact"
//import '../styles/dropdown.css'

class NewTransaction extends React.Component{
    
    render(){
        return(
            <div>
                <Header />
                <Fragment>
                    <div className="form-group text-center">
                        <label htmlFor="example1">Amount :</label>
                        <input type="text" placeholder="The amount" id="example1" className="mx-auto form-control form-control-lg w-25" />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example2">Payable To :</label>
                        <input type="number" placeholder="payment" id="example2" className="mx-auto form-control form-control-lg w-50" />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example3">Memo</label>
                        <textarea placeholder="memo of transaction" id="example3" className="mx-auto form-control form-control-lg w-50" />
                    </div>

                    <div className="text-center">
                        <select className="w-25 browser-default custom-select">
                        {/* <option disabled value="">Type Of Transaction</option> */}
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdrawer</option>
                            <option value="transfer">Transfer</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <MDBBtn gradient="blue">Submit</MDBBtn>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default NewTransaction