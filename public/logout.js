function Logout(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    
  const ctx = React.useContext(UserContext); 

  

  return (
    <Card
      bgcolor="secondary"
      header="Logout"
      status={status}
      body={show ? 
        <LogoutForm setShow={setShow} setStatus={setStatus} context={ctx}/> :
        <LogoutMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LogoutMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LogoutForm(props){
  const [email, setEmail]       = React.useState('');

  function handle(){
    props.context.setRole('visitor');
    props.context.currentUser = null;
    props.setStatus('');
    props.setShow(false);
    setTimeout(window.location.assign("#/login/"), 2000);
  }


  return (<>

    Logout<br/>
    <button type="submit" className="btn btn-light" onClick={handle}>Logout</button>
   
  </>);
}