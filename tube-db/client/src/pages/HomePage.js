
import React from 'react';

import {
  Table,
  Pagination,
  Select
} from 'antd'

import Header from '../components/Header';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                <h3>Videos</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                <h3>Channels</h3>
                </div>
            </div>
        )

    };

}

export default HomePage;

        