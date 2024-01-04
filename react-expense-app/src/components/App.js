import React from "react"; 
 
import { 
    BrowserRouter as Router, 
    Link, 
    Switch, 
    Route 
} from 'react-router-dom'; 
 
import './App.css'; 
 
import Home from './Home'; 
import ExpenseEntryItemList from './ExpenseEntryItemList'; 
import ExpenseEntryItemForm from './ExpenseEntryItemForm'; 
 
class App extends React.Component { 
    render() { 
        return ( 
            <Router> 
                <div> 
                    <nav> 
                        <ul> 
                            <li> 
                                <Link to="/">Home</Link> 
                            </li> 
                            <li> 
                                <Link to="/list">List Expenses</Link> 
                            </li> 
                            <li> 
                                <Link to="/add">Add Expense</Link> 
                            </li> 
                        </ul> 
                    </nav> 
 
                    <Switch> 
                        <Route path="/list"> 
                            <div style={{ padding: "10px 0px" }}> 
                                <ExpenseEntryItemList /> 
                            </div> 
                        </Route> 
                        <Route path="/add"> 
                            <div style={{ padding: "10px 0px" }}> 
                                <ExpenseEntryItemForm /> 
                            </div> 
                        </Route> 
                        <Route path="/"> 
                            <div> 
                                <Home /> 
                            </div> 
                        </Route> 
                    </Switch> 
                </div> 
            </Router> 
        );
    } 
} 
export default App; 