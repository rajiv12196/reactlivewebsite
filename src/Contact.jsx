import React  from 'react';

const Contact = () =>{
    
    return( 
    <>
     <section id="/#contact">
    
     <h1 className="text-center"> Contact us</h1>

         <div className="container contact_div">
         <div className="row">
             <div className="col-md-6 col-10 mx-auto " >
             <form>
  <div className="form-row form left">
    <div className="col-md-6 " >
      <label for="validationDefault01"></label>
      <input type="text" className="form-control" id="validationDefault01" placeholder="First Name" />
    </div>
    <div className="col-md-6  pb-3">
      <label for="validationDefault02"></label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last Name" />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6  pb-3">
      <label for="validationDefault03"></label>
      <input type="email" className="form-control" id="validationDefault03" placeholder="Email Address" required/>
    </div>
    <div className="col-md-3  pb-3">
      <label for="validationDefault05"></label>
      <input type="tel" className="form-control" id="validationDefault05" placeholder="Mobile number" />
    </div>
  </div>
    <div className="col-md-3  pb-3">
      <label for="validationDefault04">project select</label>
      <select className="custom-select" id="validationDefault04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
    </div>
    
    <div class="form-group pb-3">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Project description" rows="3"></textarea>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
             </div>
         </div>

         </div>
     
</section>
    </>);
};
export default Contact;