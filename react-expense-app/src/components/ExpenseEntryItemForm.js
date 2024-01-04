import React from "react"; 
 
import { connect } from 'react-redux'; 
import { Formik } from 'formik'; 
import { withRouter } from "react-router-dom"; 
import { addExpense } from '../actions/expenseActions'; 
 
class ExpenseEntryItemForm extends React.Component { 
 
  constructor(props) { 
    super(props); 
 
    this.initialValues = { name: '', amount: '', spend_date: '', category: '' } 
  } 
 
  validate = (values) => { 
    const errors = {}; 
    if (!values.name) { 
      errors.name = 'Required'; 
    } 
    if (!values.amount) { 
      errors.amount = 'Required'; 
    } 
    if (!values.spend_date) { 
      errors.spend_date = 'Required'; 
    } 
    if (!values.category) { 
      errors.category = 'Required'; 
    } 
    return errors; 
  } 
 
  handleSubmit = (values, setSubmitting) => { 
    setTimeout(() => { 
      let newItem = { 
        name: values.name, 
        amount: values.amount, 
        spendDate: values.spend_date,
        category: values.category 
      } 
      this.props.addExpense(newItem); 
      setSubmitting(false); 
      this.props.history.push("/list"); 
    }, 400); 
  } 
  render() { 
  return ( 
    <div id="expenseForm"> 
      <Formik 
        initialValues={this.initialValues} 
        validate={values => this.validate(values)} 
        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}> 
        {({ 
          values, 
          errors, 
          touched, 
          handleChange, 
          handleBlur, 
          handleSubmit, 
          isSubmitting, 
          /* and other goodies */ 
        }) => ( 
          <form onSubmit={handleSubmit}> 
            <label for="name">Title <span>{errors.name && touched.name && errors.name}</span></label> 
            <input type="text" id="name" name="name" placeholder="Enter expense title" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.name} /> 
            <label for="amount">Amount <span>{errors.amount && touched.amount && errors.amount}</span></label> 
            <input type="number" id="amount" name="amount" placeholder="Enter expense amount" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.amount} /> 
            <label for="spend_date">Spend Date <span>{errors.spend_date && touched.spend_date && errors.spend_date}</span></label> 
            <input type="date" id="spend_date" name="spend_date" placeholder="Enter date" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.spend_date} /> 
            <label for="category">Category <span>{errors.category && touched.category && errors.category}</span></label>
              <select id="category" name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}>
                <option value="">Select</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Academic">Academic</option>
              </select>
 
              <input type="submit" value="Submit" disabled={isSubmitting} />
            </form>
          )}
        </Formik>
      </div>
    )
  }
}
const mapDispatchToProps = {
 addExpense,
};
export default withRouter(connect(
 null,
 mapDispatchToProps
)(ExpenseEntryItemForm));