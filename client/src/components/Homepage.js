import '../assets/css/Homepage.css';

function Homepage(){
    return(<div className="Homepage">
     <h1>Welcome! Which room are you looking for?</h1>
     <label for="buildings">Choose a building:</label>
     <select name="Buildings" id="buildings">
  <option value="hospital">Hospital</option>
  <option value="university">University</option>
  <option value="office-building">Office-building</option>
  <option value="other">Other</option>
</select>
    
    </div>);
    

}

export default Homepage;