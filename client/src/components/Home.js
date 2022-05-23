import React from "react";
// import Navbar from "react"
function Home({ user,setUser }) {
  

  return (
    <div>
      {/* <Navbar user={user} setUser={setUser}/> */}

      {!user ?  
            <>
              <h1>Welcome!</h1>
              <p> 
                This app was made for you to help organize your day.
              </p> 
            </> :
            <>
              <h1>Welcome back {(user.username)}!</h1>
              <p >  This app was made for you to help organize your day. 
              <br></br>
              <br></br>
              Click the "ToDO" button to get started!
              <br></br>
              <br></br>
              </p>
            </> 
      }
    </div>
  
  );
}

export default Home;
