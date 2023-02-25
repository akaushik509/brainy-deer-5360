// import {React,useState} from 'react';
// import { useNavigate } from 'react-router';

// const Payment = () => {
//   return (
//     <div>
//       <MainContainer>
//             <PaymentOption>
//                 <Heading>Choose Your Payment Method</Heading>
//                 <VoucherBox>
//                     <div>
//                         <input type="checkbox" style={{marginLeft:"20px"}} />
//                         <span style={{marginLeft:"20px"}}>Vouchers</span>
//                     </div>
//                     <p style={{marginRight:"20px", color:"red"}}>Link</p>
//                 </VoucherBox>
//                 <PaytmBox>
//                     <div>
//                         <img src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png" alt="paytm" width={50} style={{marginLeft:"20px"}}/>
//                     </div>
//                     <p style={{marginRight:"20px", color:"red"}}>Link</p>
//                 </PaytmBox>
//                 <PaytmBox>
//                     <div>
//                         <img src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png" alt="paytm" width={30} style={{marginLeft:"20px"}}/>
//                     </div>
//                     <div>
//                         <input type="checkbox" style={{marginRight:"20px"}} onChange={()=>setCheck(!check)}/>
//                         {!check ? (<div></div>):(<Button onClick={handleSuccess}>Pay Rs.{tp}</Button>)}
//                     </div>
//                 </PaytmBox>
//                 <PaytmBox>
//                     <div style={{display:"flex", alignItems:"center"}}>
//                         <img src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png" alt="paytm" width={30} style={{marginLeft:"20px"}}/>
//                         <span style={{marginLeft:"20px"}}>UPI</span>
//                     </div>
//                     <p style={{marginRight:"20px", color:"red"}}>Link</p>
//                 </PaytmBox>
//                 <COD>
//                     <img src="https://www.netmeds.com/assets/pgicon/COD.png" alt="cod" />
//                     <div>
//                         <p style={{fontSize:"14px", margin:"0"}}>Cash On Delivery</p>
//                         <PP style={{fontSize:"12px", margin:"0", marginRight:"20px"}}>Hear us out! Pay online and earn 100% NMS SuperCash (up to Rs. 3000) on all prepaid orders</PP>
//                     </div>
//                 </COD>
//             </PaymentOption>
//             <ImgDiv>
//                 <img src="https://images.bewakoof.com/uploads/grid/app/1x1-flat-65-off-common-1674288704.jpg" alt="dummy" width="100%" />
//             </ImgDiv>
//         </MainContainer>
//     </div>
//   )
// }

// export default Payment
