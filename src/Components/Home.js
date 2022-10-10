import React from "react";
import { Link } from "react-router-dom";


const Home=()=>
{
  return(
    <>
    <nav>
      <ul>
      {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/Enterypoint">Entery_point</Link>
        </li>
        <li>
          <Link to="/Exitpoint">Exit_point</Link>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Home;