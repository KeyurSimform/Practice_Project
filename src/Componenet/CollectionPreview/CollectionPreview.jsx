import React from "react";
import CollectionItem from "../ColletionItem/CollectionItem";
import "../CollectionPreview/CollectionPreview.style.scss"

const CollectionPreview = (props) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{props.title.toUpperCase()}</h1>
			<div className="preview">
				{props.items
					.filter((item, index) => index < 4)
					.map(({id, ...otherItemProps}) => (
						<CollectionItem key={id}{...otherItemProps}/>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
