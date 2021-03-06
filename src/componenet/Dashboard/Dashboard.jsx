import { Link } from "react-router-dom";

function Pagebody() {
    return (
        <div class="page-body">

       
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="page-header-left">
                            <h3>Dashboard
                                <small>Flutter Admin panel</small>
                            </h3>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        <div className="container-fluid">
  <div className="row">
    <div className="col-xl-3 col-md-6 xl-50">
      <div className="card o-hidden widget-cards">
        <div className="bg-warning card-body">
          <div className="media static-top-widget row">
            <div className="icons-widgets col-4">
              <div className="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation font-warning"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg></div>
            </div>
            <div className="media-body col-8"><span className="m-0">Earnings</span>
              <h3 className="mb-0">$ <span className="counter">6659</span><small> This Month</small></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 xl-50">
      <div className="card o-hidden  widget-cards">
        <div className="bg-secondary card-body">
          <div className="media static-top-widget row">
            <div className="icons-widgets col-4">
              <div className="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box font-secondary"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg></div>
            </div>
            <div className="media-body col-8"><span className="m-0">Products</span>
              <h3 className="mb-0">$ <span className="counter">9856</span><small> This Month</small></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 xl-50">
      <div className="card o-hidden widget-cards">
        <div className="bg-primary card-body">
          <div className="media static-top-widget row">
            <div className="icons-widgets col-4">
              <div className="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square font-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
            </div>
            <div className="media-body col-8"><span className="m-0">Messages</span>
              <h3 className="mb-0">$ <span className="counter">893</span><small> This Month</small></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 xl-50">
      <div className="card o-hidden widget-cards">
        <div className="bg-danger card-body">
          <div className="media static-top-widget row">
            <div className="icons-widgets col-4">
              <div className="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users font-danger"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            </div>
            <div className="media-body col-8"><span className="m-0">New Vendors</span>
              <h3 className="mb-0">$ <span className="counter">45631</span><small> This Month</small></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
        

    </div>
    );
  }
  
  export default Pagebody;
