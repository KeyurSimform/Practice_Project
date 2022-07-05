import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "../CategoryMenu/CategoryMenu.scss";

const CategoryMenu = () => {
	const [sections, setsections] = useState([
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			linkUrl: "Hats"
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			linkUrl:''
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl:''
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			linkUrl:''
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			linkUrl:''
		},
	]);

	return (
		<div className="category-menu">
			{sections.map(({id , ...otherSectionProps}) => (
				<MenuItem
					key={id}
					// title={section.title}
					// imageUrl={section.imageUrl}
					// size={section.size}
					{...otherSectionProps}
				/>
			))}
		</div>
	);
};

export default CategoryMenu;
