import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Julian Rodriguez",
          from_email: "julian.andres.rodriguez@gmail.com",
          message: form.message,
        },
        import.meta.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Gracias por ponerte en contact. Tratare de responder en el menor tiempo posible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(":( algo salio mal, por favor intenta de nuevo.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Contactame</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.value}
              onChange={handleChange}
              placeholder="¿Cual es tu nombre?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cual es tu correo electronico?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Que te gustaria decirme?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
