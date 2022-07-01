import "../FormInput/FormInput.style.scss";

const FormInput = (props) => {

	return (
		<div className="group">
			<input className="form-input" onChange={props.handleChange} />
			{props.label ? (
				<label
					className={`${props.value ? "shrink" : ""} form-input-label`}
				>
					{props.label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
