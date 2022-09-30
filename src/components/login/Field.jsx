export const Field = ({ id, label, placeholder, name, type = "text" }) => {
  return (
    <div className="trial-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        placeholder={placeholder}
        aria-describedby={`${id}-help`}
      />
      <div id={`${id}-help`} className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
};
