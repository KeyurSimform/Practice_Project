import React from "react";
import "../MenuItem/MenuItem.scss";
const MenuItem = (props) => {
	return (
		<div className={`${props.size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${props.imageUrl})`
				}}
			></div>
			<div className="category-content">
				<h1 className="content-title">{props.title.toUpperCase()}</h1>
				<span className="content-subtitle">Order Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
