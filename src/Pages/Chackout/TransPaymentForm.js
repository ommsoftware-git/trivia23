import {
    CardCvcElement,
    CardElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import cogoToast from "cogo-toast";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { useNavigate, useParams } from "react-router-dom";
  import "./TransPaymentForm.css"
  import Swal from 'sweetalert2'

  
  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "18px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };


const TransPaymentForm = () => {
    const Price  = 34545;
    // console.log(checkoutDetails)
    const elements = useElements();
    const stripe = useStripe();
    const [postal, setPostal] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
  

    // console.log(user)
    const navigate = useNavigate();


    function handleClick() {

 

      let timerInterval
Swal.fire({
  title: 'Success!',
  html: `<p style="color: black; font-size: 15px" > Creation Done! Admin Approve You Soon </p>`,
  timer: 3000,
  width: '500px',
  customClass: {
    container: 'my-custom-class'
  },
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

setTimeout(() => {
  // setShowText(true);

  navigate("/");
}, 1000);
   
    }
  
  

  
    // payment intent
    useEffect(() => {
      fetch("https://energetic-pear-threads.cyclic.app/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({Price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data?.clientSecret));
    }, []);
  
    // payment stystem
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardNumberElement);
  
      if (card == null) {
        return;
      }
  
      setProcessing(true);
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          name: "nesat",
          email: "nesat@hotmail.com",
          phone: 2423434343,
        },
      });
  
      if (payload.error) {
        setErrorMessage(payload.error.message);
        setPaymentMethod(null);
      } else {
        // cogoToast.success(payload.paymentMethod.id, { options: "bottom-right" });

        setPaymentMethod(payload.paymentMethod);
        setErrorMessage(null);
      }
  
      // payment intent
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: 'nesat',
              email: 'nesat@hotmail.com',
            },
          },
        }
      );
  
      if (error) {
        cogoToast.error(error.message);
      }
      if (paymentIntent) {
      }
    };
  
   
  
    return (
        <div class="paymentcontainer">

        <form onSubmit={handleSubmit}>
    
            <div class="row">
    
                <div class="col">
    
                    <h3 class="title">billing address</h3>
    
                    <div class="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="john deo" />
                    </div>
                    <div class="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com" />
                    </div>
                    <div class="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="mumbai india" />
                    </div>
                    <div class="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="mumbai" />
                    </div>
                    {/* <div class="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="mumbai" />
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>state :</span>
                            <input type="text" placeholder="mumbai" />
                        </div>
                        <div class="inputBox">
                            <span>zip code :</span>
                            <input type="text" placeholder="123 456" />
                        </div>
                    </div> */}
    
                </div>
    
                <div class="col">
    
                    <h3 class="title">payment</h3>
    
                    <div class="inputBox">
                        <span>cards accepted :</span>
                        <img src="https://i.ibb.co/n0S80X9/card-img.png" alt="" />
                    </div>
                    {/* <div class="inputBox">
                        <span style={{}}>name on card :</span>
                        <input type="text" placeholder="mr. john deo" />
                 
                    </div> */}
                    <div class="inputBox">
                        <span>credit card number :</span>
                        {/* <input type="number" placeholder="1111-2222-3333-4444" /> */}
                        <CardNumberElement
                      style={{border:"1px solid black"}}
                id="cardNumber"
                className="paymentifputinput"
                options={ELEMENT_OPTIONS}
              />
                    </div>
                    <div class="inputBox">
                        <span>exp date :</span>
                        {/* <input type="text" placeholder="january" /> */}
                        <CardExpiryElement
                id="expiry"
                className="paymentifputinput"
                options={ELEMENT_OPTIONS}
              />
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>card cvc :</span>
                            {/* <input type="number" placeholder="2022" /> */}
                            <CardCvcElement
                id="cvc"
                className="paymentifputinput "
                options={ELEMENT_OPTIONS}
              />
                        </div>
                        {/* <div class="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="1234" />
                        </div> */}
                    </div>
    
                </div>
        
            </div>
    <div style={{display:"flex", justifyContent:'space-around'}}>
            <input onClick={handleClick} style={{border:"none"}} type="submit" value="Done" class="submit-btn" />
            <input onClick={handleClick} style={{border:"none"}} type="submit" value="Skip" class="submit-btn" />
            </div>
        </form>
    
    </div>  
    );
};

export default TransPaymentForm;