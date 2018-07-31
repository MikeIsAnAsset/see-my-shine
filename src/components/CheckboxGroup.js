import React from 'react';
import PropTypes from 'prop-types';

let checkboxName=null;
let skillsToSearch = null;

const CheckboxGroup = (props) => (
   
    <div>

        

        <label className="form-label">{props.title}</label>
        <div className="checkbox-group">
        {/* let checkboxLabelsAndValues = null; */}
    console.log(props.skillObject)
            {props.skillObject.keys((checkboxName).map((checkbox, i) => {
                
                return (
                    <label key={i} className="form-label capitalize">
                        <input
                            className="form-checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            // value={checkbox}
                            skillObject={props.skillObject}
                            // checked={ props.selectedCheckboxes.indexOf(checkbox > -1) }
                            type={props.type}
                        />{i}
                    </label>)
                 
            }))
            }
        </div>
    </div>
)

CheckboxGroup.propTypes = {  
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['checkbox']).isRequired,
    setName: PropTypes.string.isRequired,
    checkboxLabelsAndValues: PropTypes.array.isRequired,
    selectedCheckboxes: PropTypes.array,
    controlFunc: PropTypes.func.isRequired
  };

  export default CheckboxGroup;