import React from 'react';
import { connect } from 'react-redux';

function LoadingIndicator({ loading, children }) {
    if (loading) {
        return <div> loading ..... </div>
    }
    else {
        <div>
            {children}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading
    };
}

export default connect(mapStateToProps)(LoadingIndicator);
