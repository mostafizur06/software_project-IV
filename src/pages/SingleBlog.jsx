import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogInfo } from '../data';
function SingleBlog() {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		let blog = blogInfo.find((blog) => blog.id === parseInt(id));
		if (blog) {
			setBlog(blog);
		}
	}, []);

	return (
		<>
			{blog && (
				<div className="blog-area">
					<div className="container">
						<div className="Single-blog-area">
							<div className="single-blog-image">
								<img src={blog.image} alt="" />
							</div>
							<div className="single-blog-info">
								<div className="single-blog-author">
									<span className="blog-author-name">{blog.author}</span>
									<span className="blog-time">{blog.time}</span>
								</div>

								<h2 className="single-blog-title">{blog.title}</h2>
								<p className="single-blog-des">{blog.des}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default SingleBlog;
