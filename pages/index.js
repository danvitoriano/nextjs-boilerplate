import React, { PureComponent } from 'react';

import Head from '../components/head';
import Layout from '../components/layout';

const divStyle = {
	margin: '40px',
	border: '5px solid pink'
};

class Page extends PureComponent {
	render() {
		return (
			<>
				<Head title="Home" />
				<Layout>
					<div style={divStyle}>Home</div>
				</Layout>
			</>
		);
	}
}

export default Page;
