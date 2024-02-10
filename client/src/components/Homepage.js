const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>Welcome! Which room are you looking for?</h1>
      <label for="buildings">Choose a building: </label>
      <select name="Buildings" id="buildings">
        <option value="hospital">Hospital</option>
        <option value="university">University</option>
        <option value="office-building">Office-building</option>
        <option value="other">Other</option>
      </select>
    </div>
  );

  /*
    return (
        <div className="Homepage">
            <h1>Welcome! Reserve your room now?</h1>
            <h2>To reserve room, you first need to login!</h2>
            <button>Register</button>
            <button>I already have an account</button>
        </div>
    );
    
    */
};

export default Homepage;
