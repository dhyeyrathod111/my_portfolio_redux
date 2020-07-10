import React from 'react';

import Header from '../components/Header';
import PageHead from '../components/PageHead';
import Breadcrumb from '../components/Breadcrumb';
import Blogsection from '../components/Blog';
import Footer from '../components/Footer';

export default class Blog extends React.Component {

	componentDidMount() {
        window.scrollTo(0,0);
    }

	render() {
		return (
			<React.Fragment>
                <Header />
                <PageHead headValue={'Our Blog'} />
                <Breadcrumb pageName={'Blog'} />
                <Blogsection />
                <Footer />
            </React.Fragment>
		);
	}
}
