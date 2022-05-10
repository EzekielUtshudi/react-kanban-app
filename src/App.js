import './App.css';

function App() {
  return (
    <div className='ui container'>
      <div className="ui segment">
        <h1>Hello Ezekiel and Edward</h1>
        
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
