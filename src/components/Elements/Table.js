import React, {Fragment} from 'react';
import { Form, Table } from 'react-bootstrap'

const TableLayout = ({field_label,field_options}) => {

return (

    <Fragment>
    <Form.Label className='field-label py-3'>{field_label}</Form.Label>
    <Table striped borderes hover size="lg">
        <thead>
            <tr>
                {
                   field_options.map((list,index) => {
                       return(
                           <tr key={index}>
                               <td>
                                 {list.option_label} 
                               </td>
                               <td>
                                   {list.option_value}
                               </td>
                           </tr>
                       )
                   })
                }
            </tr>
        </thead>
    </Table>
    </Fragment>
)

}

export default TableLayout;