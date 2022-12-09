import React from 'react';
import { videoItems } from '../data';
function Video() {
	return (
		<div className="video-area">
			<div className="container">
				<div className="section-title">
					<h1>My Created Video</h1>
				</div>
				<div className="video-wrapper">
					{videoItems.map((item, index) => (
						<div className="video-item" key={index}>
							<a href="/">
								<iframe
									src={item.src}
									title={item.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</a>
						</div>
					))}
				</div>
				<button className="gradient-button">View All</button>
			</div>
		</div>
	);
}

export default Video;
