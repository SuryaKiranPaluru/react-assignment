import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';
import {v4 as uuid} from 'uuid'
import NoteService from '../services/ParticipantService';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');

  const handleFullName = e => setFullName(e.target.value);

  const [email, setEmail] = useState('');

  const handleEmail = e => setEmail(e.target.value);

  const [country, setCountry] = useState('');

  const handleCountry = e => setCountry(e.target.value);

  const [git, setGit] = useState('');

  const handleGit = e => setGit(e.target.value);

  const handleSubmit = event => {
    event.preventDefault()

    const obj = {
      id: uuid(),
      fullName,
      email,
      country,
      gitHubLink: git
    }

    if (fullName === "" || email === "" || country === "" || git === ""){
      window.alert("Fill all the details!")
    }
    
    else{
    NoteService.register(obj);
    navigate("/Participants")
    //console.log(obj);
    }
  };

  const handleReset = event => {
    event.preventDefault();

    setFullName("")
    setEmail("")
    setCountry("")
    setGit("")
  }

  return (
    <>
      {false && <Loader />}
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={git}
            onChange={handleGit}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="reset">
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};