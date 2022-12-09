import React, { useState } from 'react';
import { socialLink } from '../data';
function RightNav() {
	const [more, setMore] = useState(false);
	return (
		<div>
			<div className="right-sidebar">
				<h1 className="sidebar-title">Contact Link</h1>

				<ul>
					{socialLink.map((item, index) => (
						<li key={index} className={`${more ? 'active' : ' '}`}>
							<a href={item.src}>{item.title}</a>
						</li>
					))}
				</ul>
				<div className="right-sidebar-footer">
					<span onClick={() => setMore(!more)}>{`${!more ? 'See More' : 'See Less'}`}</span>
				</div>
			</div>
		</div>
	);
}

export default RightNav;
