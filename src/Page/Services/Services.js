import React ,{useState} from 'react'
import "../../Component/Css/Services.css"
import g3 from "../../Assets/1 (3).jpeg"
export const Services = ({reset=false}) => {
	const [active, setActive] = useState('home')

	const scrollView = (id) => {
		try {
			setActive(id)
			var element = document.getElementById(id);
			element && element.scrollIntoView({ behavior: "smooth" });
		} catch (err) {
			console.error("error occur on scrollView()", err)
		}
	}
  return (
    <div><div class="bg-light py-3 service-13" id ="features">
        <h3 className='text-center'>Services</h3>
    <div class="container">
   
        <div class="row">
       
            <div class="col-lg-6 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4">
									<div class="row no-gutters align-items-stretch">
											<div class="col-md-6 d-flex align-items-stretch">
												<img src="https://weddingplz-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto/v1/live/photo-gallery/real_wedding/36/37k-meghna-and-harsh-wedding--6.jpg" alt="wrapkit" class="img-fluid rounded" />
											</div>
											<div class="col-md-6 p-3 d-flex align-items-stretch">
												<div class="ml-2">
													<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Bridal Makeup</a></h6>
													<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
												</div>
											</div>
									</div>
                </div>
            </div>
           
            <div class="col-lg-6 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4">
									<div class="row no-gutters align-items-stretch">
										<div class="col-md-6 d-flex align-items-stretch">
										<img src="https://weddingplz-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto/v1/live/photo-gallery/real_wedding/36/37k-meghna-and-harsh-wedding--6.jpg" alt="wrapkit" class="img-fluid rounded" />
										</div>
										<div class="p-3 col-md-6 d-flex align-items-stretch">
											<div class="ml-2">
												<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Bridal Packge</a></h6>
												<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
											</div>
										</div>
									</div>
                </div>
            </div>

            <div class="col-lg-6 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4">
										<div class="row no-gutters align-items-stretch">
												<div class="col-md-6 d-flex align-items-stretch">
														<img src={g3} alt="wrapkit" class="img-fluid rounded" height="100px" />
												</div>
												<div class="col-md-6 p-3 d-flex align-items-stretch">
													<div class="ml-2">
														<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Groom's Mehendi</a></h6>
														<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
													</div>														
												</div>
										</div>
                </div>
            </div>
            <div class="col-lg-6 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4">
									<div class="row no-gutters align-items-stretch">
                    <div class="col-md-6 d-flex align-items-stretch">
                        <img src="https://charlesofitaly.edu/wp-content/uploads/2016/02/nails.jpg" alt="wrapkit" class="img-fluid rounded" />
										</div>
										<div class="col-md-6 p-3 d-flex align-items-stretch">
											<div class="ml-2">
												<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Nail Services</a></h6>
												<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
											</div>
										</div>
									</div>
                </div>
            </div>
          
         
          
       
						<div class="col-md-12 mt-3 text-center" onClick={() => scrollView('contact')}>
                <a class="btn btn-success-gradiant btn-md border-0 text-white" href="#f13"><span>View Details</span></a>
            </div>
        </div>
    </div>
</div></div>
  )
}
