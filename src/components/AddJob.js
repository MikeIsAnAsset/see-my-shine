import React, { Component } from 'react';

class AddJob extends Component {

    constructor() {
        super();
        this.state = {
            // companyProfile = <companyProfile>;
            typeOfRole: '',
            jobLevel: '',
            description: '',
            employementType: '',
            Skills skills: '',
            requiredExperience: '',
            Long compensation: 0,
            compensationDescription: '',
            equity: '',
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmitJob} class="container" style={{ marginTop: "150" }}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="typeOfRole">Type of Role</label>
                        <input onChange={this.handleChange} name="typeOfRole" value={this.state.typeOfRole} type="text"
                            className="form-control" id="typeOfRole" placeholder="typeOfRole"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="jobLevel">Job Level</label>
                        <input onChange={this.handleChange} name="jobLevel" value={this.state.jobLevel} type="text"
                            className="form-control" id="jobLevel" placeholder="jobLevel"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="description">Description</label>
                        <input onChange={this.handleChange} name="description" value={this.state.description} type="text"
                            className="form-control" id="description" placeholder="description"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="requiredExperience">Required Experience</label>
                        <input onChange={this.handleChange} name="requiredExperience" value={this.state.requiredExperience} type="text"
                            className="form-control" id="requiredExperience" placeholder="requiredExperience"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="compensationDescription">Compensation Description</label>
                        <input onChange={this.handleChange} name="compensationDescription" value={this.state.compensationDescription} type="text"
                            className="form-control" id="compensationDescription" placeholder="compensationDescription"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="equity">Equity</label>
                        <input onChange={this.handleChange} name="equity" value={this.state.equity} type="text"
                            className="form-control" id="equity" placeholder="equity"/>
                    </div>
                </div>
            </form>
        )


    }












}