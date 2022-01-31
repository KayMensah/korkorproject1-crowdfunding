import { isVisible } from "@testing-library/user-event/dist/utils"

export default function AboutUsComponent () {

    return (
    
            <section id="features">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="title">
							<h2>ABOUT US</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.  <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-xs-6 col-sm-6">
						<div className="feature-block text-center">
							<div className="icon-box">
								<i className="ion-easel"></i>
							</div>
							<h4 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: "0.3s", animationName: "fadeInUp"}}>Our Board</h4>
							<p className="wow fadeInUp" data-wow-delay=".5s" style={{visibility: "isVisible", animationDelay: "0.5s", animationName: "fadeInUp"}}>Lorem ipsum dolor sit amet, consectetur adipisic-<br/>ing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim</p>
						</div>
					</div>
					<div className="col-md-4 col-xs-6 col-sm-6">
						<div className="feature-block text-center">
							<div className="icon-box">
								<i className="ion-paintbucket"></i>
							</div>
							<h4 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: "0.3s", animationName: "fadeInUp"}}>Our Team</h4>
							<p className="wow fadeInUp" data-wow-delay=".5s" style={{visibility: "visible", animationDelay: '0.5s', animationName: "fadeInUp"}}>Lorem ipsum dolor sit amet, consectetur adipisic-<br/>ing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim</p>
						</div>
					</div>
					<div className="col-md-4 col-xs-6 col-sm-6">
						<div className="feature-block text-center">
							<div className="icon-box">
								<i className="ion-paintbrush"></i>
							</div>
							<h4 className="wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: "fadeInUp"}}>Our Partners</h4>
							<p className="wow fadeInUp" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: "fadeInUp"}}>Lorem ipsum dolor sit amet, consectetur adipisic-<br/>ing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim</p>
						</div>
					</div>
				</div>
			</div>

		</section>


	
    )
}

