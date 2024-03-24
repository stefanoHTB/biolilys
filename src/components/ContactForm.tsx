import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_xdb540l",
        "template_nf5ucwd",
        form.current as unknown as string,
        "DqNYxANfyrS45nhUB"
      )
      .then(
        (result) => {
          setShowPopup(true);
          console.log(result.text);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
    console.log("sent");
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-10">
      <div className="md:w-1/2 md:mr-8">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Contact Us Today!
        </h1>
        <p className="text-black dark:text-white">
          Get in touch with us today! We value your feedback and inquiries. If
          you have any questions, comments, or requests, please use our
          convenient email form. Just click on the 'Contact Us' title, fill in
          the required details, and let us know how we can assist you. Our team
          is committed to providing you with timely and personalized responses,
          so don't hesitate to reach out. Your satisfaction is our top priority,
          and we're here to make your experience exceptional.
        </p>
        <div className="flex justify-center">
          <img className="h-80" alt="img" src={"/img/website/r8gg-plan.png"} />
        </div>
      </div>

      <form
        className="md:w-1/2 mt-8 md:mt-0"
        ref={form as React.RefObject<HTMLFormElement>}
        onSubmit={sendEmail}
      >
        {/* <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
          Enter your contact information
        </h2> */}
        <label
          htmlFor="user_email"
          className="block text-sm font-medium text-black dark:text-white"
        >
          E-mail
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-300"
          type="email"
          id="user_email"
          name="user_email"
          required
        />

        <label
          htmlFor="user_name"
          className="block mt-4 text-sm font-medium text-black dark:text-white"
        >
          Name
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-300"
          type="text"
          name="user_name"
          id="user_name"
          required
        />

        <label
          htmlFor="user_last_name"
          className="block mt-4 text-sm font-medium text-black dark:text-white"
        >
          Last Name
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-300"
          type="text"
          name="user_last_name"
          id="user_last_name"
          required
        />

        <label
          htmlFor="user_country"
          className="block mt-4 text-sm font-medium text-black dark:text-white"
        >
          Country
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-300"
          type="text"
          name="user_country"
          id="user_country"
          required
        />

        <label
          htmlFor="message"
          className="block mt-4 text-sm font-medium text-black dark:text-white"
        >
          Message
        </label>
        <textarea
          className="mt-1 p-2 border border-gray-300 rounded-md w-full h-40 focus:outline-none focus:ring focus:ring-indigo-300"
          name="message"
          id="message"
        />

        <div className="flex justify-between items-center mt-6">
          {isSending ? (
            <CircularProgress className="text-indigo-500" size={24} />
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Send
            </button>
          )}
          {showPopup && (
            <h5 className="text-green-600">Email sent successfully</h5>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
