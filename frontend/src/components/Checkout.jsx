import React, { useRef } from "react";
import { FadeIn } from "react-slide-fade-in";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /*emailjs
      .sendForm(
        "service_41hbnhd",
        "template_qnkxpkv",
        form.current,
        "HxjZLb_ub2_Ku6tG8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/complete");*/
  };
  return (
    <div className="bg-black">
      <FadeIn
        from="bottom"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={0}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="shadow-sm  my-4 bg-black outline-green-600 text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-green-600 focus:ring-green-600 focus:border-green-600  placeholder-green-600 "
              placeholder="Votre Nom"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              class="shadow-sm  my-4 bg-black outline-green-600 text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-green-600 focus:ring-green-600 focus:border-green-600  placeholder-green-600"
              placeholder="Address de Maison"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="telnum"
              id="telnum"
              class="shadow-sm  my-4 bg-black outline-green-600 text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-green-600 focus:ring-green-600 focus:border-green-600  placeholder-green-600"
              placeholder="Numero de Telephone"
              required
            />
          </div>
          <div>
            <input
              style={{ display: "none" }}
              name="message"
              id="message"
              class="shadow-sm  outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="Numero de Telephone"
              required
            />
          </div>

          <button
            type="submit"
            class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-green-600  hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700 "
          >
            Order Now
          </button>
        </form>
      </FadeIn>
    </div>
  );
};

export default Checkout;
