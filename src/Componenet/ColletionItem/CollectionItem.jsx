import "../ColletionItem/CollectionItem.style.scss";

const CollectionItem = (props) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${props.imageUrl})` }}
			/>
			<div className="collection-footer">
				<span>{props.name}</span>
				<span>{props.price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
