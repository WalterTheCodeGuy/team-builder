import React, {useState} from 'react';

const Form = props => {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		role: ""
	});

  const changeHandler = e => {
    setInfo({...info, [e.target.name]: e.target.value});
  };

  const submitForm = e => {
    e.preventDefault();
    const newInfo = {
      ...info,
      id: Date.now()
    };
    props.addMember(newInfo);
    setInfo({name: "", email: "", role: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={info.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        name="role"
        value={info.role}
        onChange={changeHandler}
      />
      <button className="submit-button" type="submit">Create User</button>
    </form>
  );
};

export default Form;