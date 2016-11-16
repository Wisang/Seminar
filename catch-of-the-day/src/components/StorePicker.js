import React from 'react';

import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter a store</h2>
                <input type="test" required placeholder="Store Name"
                    defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;