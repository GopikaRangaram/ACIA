import React from 'react';
import TextInput from '../Elements/TextInput'
import Select from '../Elements/Select';
import Radio from '../Elements/Radio';
import MultiSelect from '../Elements/MultiSelect';
import DateInput from '../Elements/DateInput';

const Element = ( {field: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_mandatory,
    errors,
    field_value,
    field_options,
    yes_options
} }) => {

    switch (field_type) {
        case 'text':
            return (<TextInput
                field_id = {field_id}
                field_label = {field_label}
                field_placeholder = {field_placeholder}
                field_mandatory = {field_mandatory}
                errors={errors}
                field_type={field_type}
                field_value = {field_value}
            />)

            case 'password':
                return (<TextInput
                    field_id = {field_id}
                    field_label = {field_label}
                    field_placeholder = {field_placeholder}
                    field_mandatory = {field_mandatory}
                    errors={errors}
                    field_type={field_type}
                    field_value = {field_value}
                />)
              

        case 'select':
            return (<Select
                field_id = {field_id}
                field_label = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                field_mandatory = {field_mandatory}
                errors={errors}
                field_options = { field_options }
                />)
               

        case 'radio':
            return (<Radio
                field_id = {field_id}
                field_label = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                field_mandatory = {field_mandatory}
                errors={errors}
                field_options = { field_options }
                yes_options = { yes_options ? yes_options: "" }
            />)
               

        case 'multiselect':
            return (<MultiSelect
                field_id = {field_id}
                field_label = {field_label}
                field_placeholder = {field_placeholder}
                field_value = {field_value}
                field_mandatory = {field_mandatory}
                errors={errors}
                field_options = { field_options }
            />)
                
                
        case 'date':
            return (<DateInput
                field_id = {field_id}
                field_label = {field_label}
                field_placeholder = {field_placeholder}
                field_mandatory = {field_mandatory}
                errors={errors}
                field_value = {field_value}
            />)
               
        default:
            return null;
    }
}

export default Element