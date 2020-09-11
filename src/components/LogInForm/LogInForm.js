import React from "react";

function LogInForm(props) {
  return (
    <div>
      <h2>Log In</h2>

      <form>
         <input value="Log In!" type="submit" onClick={props.handleLogIn} />
      </form>
    </div>
  );
}

export default LogInForm;