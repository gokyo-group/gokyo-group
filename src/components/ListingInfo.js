import React from 'react'

export default function ListingInfo(props) {
   return (
      <div className="card">
         <div className="card-content">
            <div className="content has-text-justified">

               <div className ="columns">
                  <div className='column'>
                     <b>Location:</b> {props.info.location}
                  </div>
                  <div className='column'>
                     <b>Type:</b> {props.info.type}
                  </div>
               
                  <div className='column'>
                     <b>Bedrooms:</b> {props.info.bedroom}
                  </div>
                  <div className='column'>
                     <b>Bathrooms:</b> {props.info.bathroom}
                  </div>
               </div>
               <div className ="columns">
                  <div className='column'>
                  <b>Floor:</b> {props.info.floor}
                  </div>
                  <div className='column'>
                  <b>Land Size:</b> {props.info.landsize}
                  </div>
                  <div className='column'>
                  <b>Price:</b> {props.info.price}
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}
