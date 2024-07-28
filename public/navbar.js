function NavBar(props){
  
  const ctx = React.useContext(UserContext); 

  function VistorNavBar(){
    return(<>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">GoodBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
              </li>   
            </ul>
          </div>
        </nav>
    </>);
  }
  function UserNavBar(){
    return(<>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">GoodBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/logout/">Logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/balance/">Balance</a>
              </li>        
            </ul>
          </div>
        </nav>
    </>);
  }
  function AdminNavBar(){
    return(<>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">GoodBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/balance/">Balance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">AllData</a>
              </li>          
            </ul>
          </div>
        </nav>
    </>);
  }

  function NavUser() {

    switch (ctx.role) {
      case 'admin':
        return <AdminNavBar />;
      case 'user':
        return <UserNavBar />;
        case 'visitor':
      return <VistorNavBar />;
      default:
        return null;
    }
  }

    return (
      <>
      {NavUser()}
      </>
  );

}