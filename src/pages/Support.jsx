import React, { useEffect } from "react";
import Heading from "../components/Heading";

export default function Support() {
  const handleForm = (e) => {
    e.preventDefault();
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.area.value = "";
    e.target.number.value = "";
  };
  useEffect(() => {
    document.title = "Support | Gadget Heaven";
  }, []);

  return (
    <div>
      <div className="bg-primary pb-44">
        <Heading
          title="Support"
          subtitle="At GadgetHaven, we are committed to providing exceptional customer support. If you have any questions or need assistance, our dedicated team is here to help you 24/7!"
        ></Heading>
      </div>
      <div className="lg:w-4/5 w-11/12 mx-auto">
        {/* for faq section */}

        <div className="relative -top-36 border-2 backdrop-blur-2xl bg-white/20 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-white text-center pb-2">
            FAQ
          </h2>
          <div className="join join-vertical w-full bg-primary text-white rounded-2xl">
            <div className="collapse p-3 collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  You can track your order in the 'Orders' section of your
                  account.
                </p>
              </div>
            </div>
            <div className="collapse p-3 collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What is the return policy?
              </div>
              <div className="collapse-content">
                <p>You can return products within 30 days of purchase.</p>
              </div>
            </div>
            <div className="collapse p-3 collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  We accept various payment methods, including credit/debit
                  cards, PayPal, and other popular online payment systems.
                </p>
              </div>
            </div>
            <div className="collapse p-3 collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How long does shipping take?
              </div>
              <div className="collapse-content">
                <p>
                  Shipping typically takes 3-5 business days, depending on your
                  location and the shipping method selected at checkout.
                </p>
              </div>
            </div>
            <div className="collapse p-3 collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I change my order after it has been placed?
              </div>
              <div className="collapse-content">
                <p>
                  Once an order is placed, you cannot change it. However, you
                  can cancel the order within a short period after placing it
                  and then place a new order.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="shadow-2xl p-8 rounded-xl">
          <h3 className="text-center text-3xl text-primary font-bold pb-6">
            Have A Question?
          </h3>
          <form
            onSubmit={handleForm}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              className="p-4 rounded-full placeholder-primary/85"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="p-4 rounded-full placeholder-primary/85"
              placeholder="Email"
              required
            />
            <input
              type="number"
              name="number"
              className="p-4 rounded-full placeholder-primary/85"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              name="subject"
              className="p-4 rounded-full placeholder-primary/85"
              placeholder="Subject"
              required
            />
            <textarea
              name="area"
              className="p-4 rounded-2xl lg:col-span-2  placeholder-primary/85"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
            <input
              type="submit"
              className="lg:col-span-2 text-white bg-primary py-4 px-8 rounded-2xl w-fit mx-auto"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
