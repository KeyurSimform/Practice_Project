import React from "react";
import "../MenuItem/MenuItem.scss";
// import {withRouter} from "react-router";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
	// const history = useHistory();
	const navigate = useNavigate();
	// console.log(props);
	return (
		<div
			className={`${props.size} menu-item`}
			onClick={() => navigate(props.linkUrl)}
		>
			<div
				style={{ backgroundImage: `url(${props.imageUrl})` }}
				className="background-image"
			/>
			<div className="category-content">
				<h1 className="content-title">{props.title.toUpperCase()}</h1>
				<span className="content-subtitle">Order Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
