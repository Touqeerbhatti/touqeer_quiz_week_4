import React from "react";

function Exitpoint() {
  return (
    <>
      
    <h1>
        hello Exit_point
    </h1>
    <form>

    
    <div className="container">
      <div className="form-div">
        
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

      </div>
      <button>
      Calculate
    </button>
    </div>
    </form>
    </>
  );
}

export default Exitpoint;
