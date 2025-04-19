// export default function Home() {
//     return (
//       <section className="bg-gray-950 text-white h-screen flex items-center justify-center flex-col text-center px-4">
//         <h1 className="text-5xl font-bold text-pink-300 mb-4">Hi, I'm Raeshal Khurana 💫</h1>
//         <p className="text-lg text-gray-300 max-w-xl">
//           A passionate Frontend Developer with a flair for creativity and detail. I craft beautiful, responsive, and meaningful user experiences.
//         </p>
//         <img src="https://via.placeholder.com/150" alt="Reshil" className="rounded-full mt-8 border-4 border-pink-400" />
//       </section>
//     );
//   }
import React from "react";
import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";


export default function Home() {
    const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_rhcov6q",
          "template_ezulk3g",
          e.target,
          "TYBNPWgGDgGdeuuE5"
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent!',
              text: 'Thanks for reaching out ✨',
              confirmButtonColor: '#d946ef'
            });
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong. Please try again!',
              confirmButtonColor: '#f87171'
            });
          }
        );
    };
    return (
        <div className="bg-black text-white">
        {/* HOME SECTION */}
        <motion.section
          id="home"
          className="h-screen flex flex-col justify-center text-right px-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Floating Sparkles ✨ */}
          <div className="absolute w-full h-full pointer-events-none z-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  fontSize: `${Math.random() * 15 + 10}px`,
                  color: "#ff90d0",
                }}
              >
                ✨
              </div>
            ))}
          </div>
      
          {/* Text Container aligned to right */}
          <motion.div
            className="z-10 px-8 py-10 border-pink-200 bg-color justify-center sparkle-box relative overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl font-bold text-yellow-300 drop-shadow-lg glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Raeshal Khurana 💫
            </motion.h1>
      
            <motion.p
              className="text-lg text-pink-100 mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Frontend Developer ✨ <br />
              Creating magical experiences with a sprinkle of color & code 💻🧚
            </motion.p>
      
            {/* Barbie Button */}
            <div className="mt-6">
  <a href="#contact">
    <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl border-2 border-white backdrop-blur-sm transition duration-300 glow-button">
      💕 Let's Connect
    </button>
  </a>
</div>
          </motion.div>
      
          {/* Sparkly Background */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <img
              src="/path-to-your-sparkle-bg.png"
              alt="sparkles"
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
      
          {/* Floating Butterflies/Birds */}
          <video autoPlay muted playsInline className="absolute loop top-10 bg-transparent right-0 h-full drop-shadow-lg opacity-30">
  <source src="/rapunzel.mp4" type="video/webm" />
</video>





          <motion.img
            src="image5.png"
            alt="butterfly"
            className="w-28 absolute top-12 right-1/3 z-10 animate-float opacity-30"
          />
          <motion.img
            src="image5.png"
            alt="butterfly"
            className="w-28 absolute top-12 right-1/3 z-10 animate-float opacity-50"
          />
          <motion.img
            src="image6.png"
            alt="butterfly"
            className="w-32 absolute bottom-10 left-1/3 z-10 animate-float-slow opacity-30"
          />
        </motion.section>
      
        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          className="min-h-screen flex items-center justify-center px-10"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-2xl text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-pink-200 shadow-xl scale-95 hover:scale-100 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-pink-400 mb-2">About Me 💖</h2>
            <p className="mt-2 text-pink-100 text-lg">
              Just a frontend fairy ✨ sprinkling color and sparkle on the web!
            </p>
          </motion.div>
        </motion.section>
      
        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          className="h-screen flex items-center justify-center text-center bg-gray-600 gap-6 flex-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-yellow-300">Projects 💻</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-pink-200">Project {i + 1}</h3>
            {i === 0 && (
              <a
                href="https://fakezon.netlify.app"
                className="text-gray-300 mt-2 block underline hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                fakezon.netlify.app
              </a>
            )}
          </div>
        ))}
      </div>
        </motion.section>
      
        {/* CONTACT SECTION */}
        <motion.section
  id="contact"
  className="h-screen flex flex-col items-center justify-center p-8 text-center bg-gray-600"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
<h2 className="text-4xl font-bold text-pink-300 mb-6">Contact Me 📬</h2>
      <form
        onSubmit={sendEmail}
        className="max-w-md mx-auto space-y-4"
      >
        <input name="name" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" required />
        <input name="email" placeholder="Email" type="email" className="w-full p-3 rounded bg-gray-800 text-white" required />
        <textarea name="message" placeholder="Message" rows={5} className="w-full p-3 rounded bg-gray-800 text-white" required></textarea>
        <button
  type="submit"
  className="custom-submit-btn cursor-pointer text-center bg-pink-500 hover:bg-pink-400 text-white px-6 py-2 rounded font-semibold"
>
  Send Message
</button>

        {status && <p className="text-white mt-2">{status}</p>}
      </form>
</motion.section>

      </div>
      
    );
  }
  