import React,{useState,useEffect} from "react";
import "./homepage.css";
import "./bootstrap.css";
const Homepage = () => {
  const [isState, setState] = useState([]);
  useEffect(() => {
    const state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
    setState(state_arr)
  }, [])
  // function print_state(state_id){
  //   // given the id of the <select> tag as function argument, it inserts <option> tags
  //   var option_str = document.getElementById(state_id);
  //   option_str.length=0;
  //   option_str.options[0] = new Option('Select State','');
  //   option_str.selectedIndex = 0;
  //   for (var i=0; i<state_arr.length; i++) {
  //     option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
  //   }
  //   console.log("js", option_str)
  //   return option_str;
  // }
  
  // function print_city(city_id, city_index){
  //   var option_str = document.getElementById(city_id);
  //   option_str.length=0;	// Fixed by Julian Woods
  //   // option_str.options[0] = new Option('Select a state first for city options','');
  //   option_str.selectedIndex = 0;
  //   var city_arr = s_a[city_index].split(" | ");
  //   for (var i=0; i<city_arr.length; i++) {
  //     option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
  //   }
  //   return option_str;
  // }
  return (
    <body onContextMenu='return false' className='snippet-body'>
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item text-center">
            <a className="nav-link active btl" id="pills-donor-tab" data-toggle="pill" href="#pills-donor" role="tab" aria-controls="pills-donor" aria-selected="true">Donor</a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link btr" id="pills-receiver-tab" data-toggle="pill" href="#pills-receiver" role="tab" aria-controls="pills-receiver" aria-selected="false">Receiver</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-donor" role="tabpanel" aria-labelledby="pills-donor-tab">
            <div className="form px-4 pt-5">
              <input type="text" id="dname" name="dname" className="form-control" placeholder="Name" required />
              <input type="number" id="dage" name="dage" className="form-control" placeholder="Age" required />
              <input type="number" id="dmob" name="dmob" className="form-control" placeholder="Mobile number (Whatsapp)*" required />

							 &nbsp;&nbsp;<label>Blood Group:</label>
              <select id="dbgroup" name="dbgroup" className="form-control" required>
                <option hidden disabled selected value> Select your blood group </option>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>

							&nbsp;&nbsp;<label>Location:</label>
              <div className="form-control">
                <select onChange="print_city('dcity', this.selectedIndex);" id="dstate" name="dstate" className="form-control" required></select>
                <select id="dcity" name="dcity" className="form-control" required></select>
                <input type="number" id="dpincode" name="dpincode" className="form-control" placeholder="Pin code"  style={{marginBottom:"0px"}} required />
                <script language="javascript">{isState}</script>
                <script language="javascript">print_city("dcity", 0);</script>
              </div>

							&nbsp;&nbsp;<label>Date of testing positive for COVID-19:</label>
              <input type="date" id="dpos" name="dpos" className="form-control" placeholder="dd-mm-yyyy" required />

							&nbsp;&nbsp;<label>Date of testing negative after COVID-19:</label>
              <input type="date" id="dneg" name="dneg" className="form-control" placeholder="dd-mm-yyyy" required />

              <div className="form-control">
                Were you symptomatic at the time of disease? <br/>
                  <input type="radio" id="yes" name="symptom" value="yes" required />
                  <label for="yes">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
								<input type="radio" id="no" name="symptom" value="no" />
                  <label for="no">No</label>
							</div>

                <div className="form-control">
                  Are you suffering from any transmissible disease? <br/>
                    <input type="radio" id="yes" name="diseased" value="yes" required />
                    <label for="yes">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
								<input type="radio" id="no" name="diseased" value="no" />
                    <label for="no">No</label><br/>
							  </div>

                    <div className="form-control">
                      Are you currently or were you recently pregnant? <br/>
                        <input type="radio" id="yes" name="pregnant" value="yes" required />
                        <label for="yes">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
								<input type="radio" id="no" name="pregnant" value="no" />
                        <label for="no">No</label><br/>
							</div>

                        <div className="form-control">
                          <label for="dack"> <input type="checkbox" id="dack" name="dack" value="True" required /> I acknowledge that by registering on this site I agree to receive whatsapp messages regarding details of covid patients in need of plasma.</label>
                        </div>

                        <button className="btn btn-dark btn-block">Register</button>
						</div>
                    </div>
                    <div className="tab-pane fade" id="pills-receiver" role="tabpanel" aria-labelledby="pills-receiver-tab">
                      <div className="form px-4">
                        <input type="text" id="pname" name="pname" className="form-control" placeholder="Patient's name" required />
                        <input type="number" id="rage" name="rage" className="form-control" placeholder="Age" required />

							 &nbsp;&nbsp;<label>Blood Group:</label>
                        <select id="rbgletter" name="rbgletter" className="form-control" required>
                          <option hidden disabled selected value> Select your blood group </option>
                          <option value="O+">O+</option>
                          <option value="A+">A+</option>
                          <option value="B+">B+</option>
                          <option value="AB+">AB+</option>
                          <option value="O-">O-</option>
                          <option value="A-">A-</option>
                          <option value="B-">B-</option>
                          <option value="AB-">AB-</option>
                        </select>

                        <input type="number" id="numdonors" name="numdonors" className="form-control" placeholder="Number of donors needed" required />

                        <input type="text" id="hospital" name="hospital" className="form-control" placeholder="Hospital name" />

							&nbsp;&nbsp;<label>Location of the hospital:</label>
                        <div className="form-control">
                          <select onChange="print_city('rcity', this.selectedIndex);" id="rstate" name="rstate" className="form-control" required></select>
                          <select id="rcity" className="form-control" required></select>
                          <input type="number" id="rpincode" name="rpincode" className="form-control" placeholder="Pin code" style={{marginBottom:"0px"}} required />
                          <script language="javascript">print_state("dstate");</script>
                <script language="javascript">print_city("dcity", 0);</script>
                        </div>

							&nbsp;&nbsp;<label>Blood bank start time:</label>
                        <input type="time" id="bbstart" name="bbstart" className="form-control" placeholder="--:--" required />

							&nbsp;&nbsp;<label>Blood bank end time:</label>
                        <input type="time" id="bbend" name="bbend" className="form-control" placeholder="--:--" required />

							&nbsp;&nbsp;<label>Point of contact(POC) details:</label>
                        <div className="form-control">
                          <input type="text" id="rname" name="rname" className="form-control" placeholder="POC's name" required />
                          <input type="number" id="rmob" name="rmob" className="form-control" placeholder="POC's mobile number (Whatsapp)*" required />
                        </div>

                        <button className="btn btn-dark btn-block">Register</button>
                      </div>
                    </div>
				</div>
                </div>
              </div>
              </body>
    );
  };

  export default Homepage;