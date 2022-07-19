import "../FormInput/FormInput.style.scss";

const FormInput = ({value , ...otherProps}) => {
	// console.log(value);
	return (
		<div className="group">
			<input className="form-input" value={value} onChange={otherProps.handleChange} {...otherProps}/>
			{otherProps.label ? (
				<label
					className={`${value.length  ? "shrink" : ""} form-input-label`}
				>
					{otherProps.label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
