import React, {Component} from 'react';

class AddNinja extends Component {

    state = {
        name : null,
        age : null,
        belt : null
    }; c

    handleChange = (e) => {
        this.setState({ // the setState property updates the state of the appß
            [e.target.id] : e.target.value // it have been set to evaluate the id of the input and find its corresponding counterpart
        })
    };

    handleSubmit = (e) => {
        e.preventDefault(); // stops page referesh on submit
        this.props.addNinja(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit }>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default AddNinja;