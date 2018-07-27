import React from 'react';
import PropTypes from 'prop-types';

let checkbox=null;

const CheckboxGroup = (props) => (
    
    
    
    <div>
        <label className="form-label">{props.title}</label>
        <div className="checkbox-group">
        {/* let checkboxLabelsAndValues = null; */}
    
            {props.checkboxLabelsAndValues.map((checkbox, index) => {
                
                return (
                    <label key={index} className="form-label capitalize">
                        <input
                            className="form-checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={checkbox}
                            checked={ props.selectedCheckboxes.indexOf(checkbox > -1) }
                            type={props.type}
                        />{checkbox}
                    </label>)
                 
            })
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