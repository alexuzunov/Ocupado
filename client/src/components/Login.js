
import '../assets/css/Login.css';

function Login() {
  return (
    <div className='Login'>
      <div class="banner-bg">
      <h1> OCUPADO </h1>
       <div class="form-container">
                        <div class="form-header">
                            <p>Login to your account</p>
                        </div>
                        <div class="form-group">
                            <form>
                                
                                <div class="form-input">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div class="form-input">
                                    <input type="password" placeholder="Password" />
                                </div>
                                
                            </form>
                            <p> Don't have an account? <a href='/register'>Sign up!</a> </p>
                        </div>
                        <div class="form-submit">
                            <button>
                                Login
                            </button>
                        </div>
                    </div>
      </div>
     
     
     </div> 
  );
}

export default Login;
