import '../assets/css/Register.css';

function Register() {
  return (
    <div className='Register'>
      <div class="banner-bg">
      <h1> OCUPADO </h1>
       <div class="form-container">
                        <div class="form-header">
                            <p>Register for <span class="text-warning">FREE</span> Today</p>
                        </div>
                        <div class="form-group">
                            <form>
                                <div class="form-input">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div class="form-input">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div class="form-input">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div class="form-input">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div class="form-input">
                                    <input type="password" placeholder="Confirm password" />
                                </div>
                            </form>
                            <p> Already have account? <a href='/login'>Login!</a> </p>
                        </div>
                        <div class="form-submit">
                            <button>
                                Get Started
                            </button>
                        </div>
                    </div>
      </div>
     
     
     </div> 
  );
}

export default Register;
