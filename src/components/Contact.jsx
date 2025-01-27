import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {
  const formRef = useRef();
  const [form, setForm]= useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading, setLoading] = useState(false);

  const handelChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handelSubmit = (e) =>{
    e.preventDefault();

    emailjs.send(process.env.serviceId, process.env.templateId,
      {
        from_name: form.name,
        to_name: 'Tanmay Sontakke',
        from_email: form.email,
        to_email:'tanmaysontakke99@gmail.com',
        message: form.message,
      },
      process.env.secret
     ).then(()=>{
      setLoading(false);
      alert('Tank you for your message. I will get back to you soon')
      setForm({
        name:'',
        email:'',
        message:'',
      })
     },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again later')
     })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 roundex-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="whats your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="whats your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="whats do you wnat to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            >
            </textarea>
          </label>
          <label className="flex flex-col">
            <div
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            >
              <a href="https://docs.google.com/document/d/1q-UwCl56I8MD-xU4ldN5Xh0Sq67X0Nizv5lX_apODOI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </label>
          <label className="flex flex-col">
            <div
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            >
              <a href="https://www.linkedin.com/in/tanmay-sontakke-3b99b4228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </label>
          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </motion.div>
      
      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl-h-auto xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')

