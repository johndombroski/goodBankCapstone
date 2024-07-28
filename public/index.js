function Spa() {
  const [role, setRole]     = React.useState('visitor');
  const [currentUser, setCurrentUser]     = React.useState({name:'visitor',email:'',password:'',role:'visitor', balance:100});

  return (
    <HashRouter>
      <div>     
        <UserContext.Provider value={{
          role: role,
          setRole : setRole,
          currentUser : currentUser,
          setCurrentUser : setCurrentUser,
          users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]
          }}>
          <NavBar />   
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/logout/" component={Logout} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
