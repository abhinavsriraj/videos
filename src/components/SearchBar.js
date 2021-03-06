import React from'react';

class SearchBar extends React.Component{
    state = {term: '' }
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }
    onFormSubmit = (e) => {
        e.preventDefault()

        //callback to parent component
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return (
            <div className="searchi-bar ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field" >
                    <label>Video Search</label>
                    <input value={this.state.term} 
                            onChange={this.onInputChange}
                            type="text"  />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar