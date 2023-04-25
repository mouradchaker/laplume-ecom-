import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import laplume from "../assets/logo-removebg-preview.png";
import emailjs from "@emailjs/browser";
import AllProduct from "../components/AllProduct";
import { toast } from "react-hot-toast";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kcbbnkc",
        "template_0krutnb",
        form.current,
        "uD73Iiehdmx2nj9_T"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Envoyé", {
            style: {
              border: "1px solid #43a047",
              padding: "16px",
              color: "#000000",
            },
            iconTheme: {
              primary: "#43a047",
              secondary: "#FFFAEE",
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "parfumes",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  return (
    <div>
      <Header />
      <div className="pt-16  min-h-[calc(100vh)]">
        <div className=" bg-white">
          <div class="px-2 bg-black py-12 md:px-12  text-white text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                <div class="mt-12 lg:mt-0">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                    Biens et services <br />
                    <span class="text-green-600">de haute qualité</span>
                  </h1>
                  <a
                    class="inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#products"
                    role="button"
                  >
                    Nos Produits
                  </a>
                  <a
                    class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded  focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="tel:+213661517007"
                    role="button"
                  >
                    Contactez Nous
                  </a>
                </div>
                <div class="mb-12 px-4 lg:mb-0">
                  <img
                    src="https://i.ibb.co/4dhGdzH/salon.png"
                    class="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <AllProduct heading={"Parcourir Nos Produits"} />
        </div>
      </div>
      {/*the newsletter section */}
      <div className="relative bg-black ">
        <div className="px-4 text-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Restez Informé De La Sortie
              <br className="hidden md:block" /> D'un{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-green-600" />
                <span className="relative text-white">Nouveau Produit</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Envoyez-nous votre e-mail afin que vous puissiez recevoir les
              dernières notifications de produits, offres et réductions pour les
              produits que nous proposons
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-green-600 bg-black rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-green-600 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Abonné
              </a>
            </form>
            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Ou contactez-nous via la plateforme ci-dessous
            </p>
            <a
              href="#contact"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/*the contact section */}
      <section id="contact" class="mb-32 text-gray-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://i.ibb.co/rFbzXS4/hope-rivers-MSg-LEgd-IUi-A-unsplash.jpg')",
            height: "400px",
          }}
        ></div>
        <div class="container text-gray-800 px-4 md:px-12">
          <div
            class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
              <div class="mb-12 lg:mb-0 text-center mx-auto">
                <a href="tel:+213661517007">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-green-600  mb-6 mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <h6 class="font-medium">+213661517007</h6>
                </a>
              </div>
              <div class="mb-12 lg:mb-0 text-center mx-auto">
                <a href="https://goo.gl/maps/xUoUFJc35q9TEHA39" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-green-600  mb-6 mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <h6 class="font-medium">Route de Cherage , Daly Brahim</h6>
                </a>
              </div>
              <div class="mb-6 md:mb-0 text-center mx-auto">
                <a
                  href="https://www.facebook.com/Laplumerelooking"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-green-600  mb-6 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <h6 class="font-medium">Relooking Fashion La Plume</h6>
                </a>
              </div>
              <div class="text-center mx-auto">
                <a
                  href="https://www.instagram.com/institut_la_plume/?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-green-600  mb-6 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <h6 class="font-medium">institut_la_plume</h6>
                </a>
              </div>
            </div>
            <div class="max-w-[700px] mx-auto">
              <form ref={form} onSubmit={sendEmail}>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-green-600
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    id="exampleInput7"
                    name="from_name"
                    placeholder="Nom"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="tel"
                    class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-green-600
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    id="exampleInput8"
                    name="num"
                    placeholder="Numero"
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-green-600
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="
            w-full
            px-6
            py-2.5
            bg-green-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*footer */}

      <footer class="bg-black">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#products" class="flex items-center">
                <img src={laplume} class="h-22 w-16 mr-3" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  La Plume
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="" class="hover:underline">
                      Produits
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:underline">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="" class="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="" class="hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="" class="hover:underline">
                La Plume
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
