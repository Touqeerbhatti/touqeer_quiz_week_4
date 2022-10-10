import React from "react";

function Enterypoint() {
  return (
    <>
     <h1>
        hello Entery_point
    </h1>
    <div className="container">
      <div className="form-div">
       <form> 
    <select name="enterypoints" id="enterypoints">
      <option value="interchanges">interchanges</option>
      <option value="Zero point">Zero point</option>
       <option value="Ns interchang">Ns interchang</option>
       <option value="Lake city interchang">Lake city interchang</option>
        <option value="Rawal city interchang">Rawal city interchang</option>
      <option value="Behria city interchang">Behria city interchang</option>
      </select>
    <br>
    </br>
    <input type="text"  placeholder="Number-plate"/>
    <br>
    </br>
    <input type="date" id="date" name="date"></input>
    <br>
    </br>
    <button>
      Submit
    </button>
    
    </form>


      </div>

    </div>

    </>
  );
}

export default Enterypoint;
