import React from 'react';
import BlogSection from '../components/BlogSection';
import Quote from '../components/Quote';
import RightNav from '../components/RightNav';
import Video from '../components/Video';
// import Audio from '../components/Audio';
function Home() {
	return (
		<div className="content-area">
			<div className=" container">
				<div className="home-content">
					<BlogSection />
				</div>
			</div>
			<Video />
			<Quote />
		</div>
	);
}

export default Home;
