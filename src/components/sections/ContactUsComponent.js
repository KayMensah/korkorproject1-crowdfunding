export default function ContactUsComponent () {

    return (
<section id="contact-form">
			<div className="container">
				<div className="row">
					<div className="title">
						<h2>CONTACT US</h2>
						<p>Dantes remained confused and silent by this explanation of the <br/> thoughts which had unconsciously</p>
					</div>
					<div className="col-md-3 col">
					
						{/* <div className="map">
	                      <div id="googleMap" style={{position: 'relative', overflow: 'hidden'}}><div style={{height: "100%", width: "100%", position: 'absolute', top: "0px", left: "0px", backgroundColor: "rgb(229, 227, 223)"}}><div className="gm-err-container"><div className="gm-err-content"><div className="gm-err-icon"><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" draggable="false" style={{userSelect: 'none'}}/></div>
                          <div className="gm-err-title">Oops! Something went wrong.</div><div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div></div></div>
	                   </div> */}

					</div>
					<div className="col-md-6">
						<form>
                            <input type="text" className="form-control" placeholder="Name"/>
                            <input type="text" className="form-control" placeholder="Email"/>
                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                            <button className="btn btn-default" type="submit">SEND</button>
                        </form>
					</div>
                    
				</div>
			</div>
		</section>
    )
}
