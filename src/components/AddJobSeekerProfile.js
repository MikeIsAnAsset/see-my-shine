import React, { Component } from 'react';

class CreateJobSeekerProfile extends Component {

    constructor() {
        super();
        this.state = {
            location: '',
            state: [AK, AS, AZ, AR, CA, CO, CT, DE, DC, FM, FL, GA, GU, HI, ID, IL, IN,
                IA, KS, KY, LA, ME, MH, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ,
                NM, NY, NC, ND, MP, OH, OK, OR, PW, PA, PR, RI, SC, SD, TN, TX, UT,
                VT, VI, VA, WA, WV, WI, WY],
            stateSelected: '',
            headline: '',
            industry: 0,
            numLinkedInConnections: 0,
            summary: '',
            specialities: '',
            // position: this should be a Position
            formattedLinkedInPictureURL: '',
            unformattedLinkedInPictureURL: '',
            publicLinkedInProfile: '',
            skills: {},
            perks: '',
            employmentType: '',
        }
        this.handleSubmitCreateJobSeekerProfile = this.handleSubmitCreateJobSeekerProfile.bind(this);
        this.handleSelectedState = this.handleSelectedState.bind(this);
    }

    handleSelectedState = (e) =>{
        this.setState({ state: e.target.value})
    }


    handleSubmitCreateJobSeekerProfile = (e) => {
        e.preventDefault();
        let jobSeekerProfile = {
            location: this.state.location,
            state: this.state.state,
            headline: this.state.headline,
            industry: this.state.industry,
            numLinkedInConnections: this.state.numLinkedInConnections,
            summary: this.state.summary,
            specialities: this.state.specialities,
            // position: this should be a Position
            formattedLinkedInPictureURL: '',
            unformattedLinkedInPictureURL: '',
            publicLinkedInProfile: this.state.publicLinkedInProfile,
            // skills:  what should go here?
            perks: this.state.perks,
            employmentType: this.state.employmentType
        }
        axios.post('http://localhost:8080/createJobSeekerProfile', jobSeekerProfile)
            .then(response => {
                console.log("job profile created")
                const jobSeekerProfile = response.data;
            })
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitCreateJobSeekerProfile}>
                <div>
                    <label for='location'>Location</label>
                    <input name="location" id='location' onChange={this.handleChange} type="text" value={this.state.location} placeholder='Enter your location' />
                </div>
                <div>
                    <Select
                        name={'state'}
                        placeholder={'Choose your state'}
                        controlFunc={this.handleSelectedState}
                        options={this.state.state}
                        selectedOption={this.state.stateSelected} />
                </div>
                <div>
                    <label for='headline'>Headline</label>
                    <input name="headline" id='headline' onChange={this.handleChange} type="text" value={this.state.headline} placeholder='Enter a headline' />
                </div>
                <div>
                    <label for='industry'>Industry</label>
                    <input name="industry" id='industry' onChange={this.handleChange} type="text" value={this.state.industry} placeholder='Enter an industry' />
                </div>
                <div>
                    <label for='numLinkedInConnections'>Number of LinkedIn Connections</label>
                    <input name="numLinkedInConnections" id='numLinkedInConnections' onChange={this.handleChange} type="number" value={this.state.numLinkedInConnections} />
                </div>
                <div>
                    <label for='summary'>Summary</label>
                    <input name="summary" id='summary' onChange={this.handleChange} type="text" value={this.state.summary} />
                </div>
                <div>
                    <label for='specialities'>Specialities</label>
                    <input name="specialities" id='specialities' onChange={this.handleChange} type="text" value={this.state.specialities} />
                </div>
                <div>
                    <label for='formattedLinkedInPictureURL'>URL of a formatted LinkedIn Picture</label>
                    <input name="formattedLinkedInPictureURL" id='formattedLinkedInPictureURL' onChange={this.handleChange} type="text" value={this.state.formattedLinkedInPictureURL} />
                </div>
                <div>
                    <label for='unformattedLinkedInPictureURL'>URL of an unformatted LinkedIn Picture</label>
                    <input name="unformattedLinkedInPictureURL" id='unformattedLinkedInPictureURL' onChange={this.handleChange} type="text" value={this.state.unformattedLinkedInPictureURL} />
                </div>
                <div>
                    <label for='publicLinkedInProfile'>Public LinkedIn Profile</label>
                    <input name="publicLinkedInProfile" id='publicLinkedInProfile' onChange={this.handleChange} type="text" value={this.state.publicLinkedInProfile} />
                </div>
                <div>
                    <label for='perks'>Perks</label>
                    <input name="perks" id='perks' onChange={this.handleChange} type="text" value={this.state.perks} />
                </div>
                <div>
                    <label for='employmentType'>Employment Type</label>
                    <input name="employmentType" id='employmentType' onChange={this.handleChange} type="text" value={this.state.employmentType} />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}