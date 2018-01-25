import React from 'react';
import mortgageComparison from "../data/mortgageComparison.json";
import CompareItemList from "./CompareItemList";

class MortgageCompare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: ''};
    }

    componentWillMount() {
        const comparisons = mortgageComparison["comparisons"];
        this.setState(() => ({ comparisons }));
    }

    render() {
        return (
            <div>
                <form className="mortgage-comparison">
                    <h2>Mortgage Options</h2>
                    <CompareItemList comparisons={this.state.comparisons} />
                </form>
                {this.state.error && <div className="error-message">{this.state.error}</div>}
            </div>
        )
    };
};
export default MortgageCompare;
