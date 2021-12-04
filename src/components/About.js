import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black">
      <NavLink to="/" exact className="block relative p-10">
        <img
          alt="profil"
          src="https://res.cloudinary.com/riotpixel/image/upload/v1629313496/Asha-pf/asha-avatar_hzhhi7.jpg"
          className="mx-auto object-cover rounded-full h-50 w-50 mb-10"
        />
        <hr
          style={{
            border: "none",
            borderTop: "solid 3px #3b82f6",
            marginTop: "-155px",
            marginBottom: "100px",
          }}
        />
      </NavLink>
      <div className="md:container p-6 mx-auto w-full">
        <span className="block text-2xl my-10 font-bold text-center text-gray-400 dark:text-white lg:text-xl hover:text-gray-400 font-qs">
          ABOUT
        </span>
        <h2 className="text-center text-gray-900 tracking-widest uppercase pt-1 mb-10 font-bold bg-blue-500 w-96 mx-auto rounded-3xl text-lg font-qs">
          Who is Dr. Asha?
        </h2>
        <p className="font-heading text-center p-2 pb-8 text-gray-400 text-lg lg:text-2xl underline ">
          Dr. Asha S Vijay – A doyen in the field of infertility treatment, a
          proficient academician, an accomplished entrepreneur and a social
          visionary !!!{" "}
        </p>
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr Asha S Vijay, can be described as a passionate Fertility Specialist
          who doesn’t just stop with medical treatments but goes beyond that to
          assure her patients an experience of a lifetime. She possesses a
          strong expertise in fertility treatments for 15 years and has brought
          in happiness to many childless couples. Her goal is to end the woes of
          couples in need of a child, change their lives and bring a brightness
          to their future.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Patients finds Dr Asha S Vijay a compassionate doctor, who listens and
          understands their agony. She takes a holistic approach while treating
          the patients.
          <br /> <br />
          Dr Asha S Vijay strongly believes that her patients need more than
          just medical attention and gives them a support system that will give
          an emotional warmth and physical stamina to handle the entire process.
          <br /> <br />
          Before starting the treatment she does a counseling session to soothe
          the patient and clear all the doubts that they might have in their
          minds.
        </p>
        <h2 className="text-center text-gray-900 tracking-widest uppercase mb-10 font-qs font-semibold mt-10 bg-blue-500 w-96 mx-auto rounded-3xl text-lg">
          Career
        </h2>
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha S Vijay’s dream of becoming a doctor started at a very young
          age. Her first step towards becoming a renowned Fertility Consultant
          started with her MBBS from Prestigious Bangalore Medical College.
          Later she went on to complete her Post Graduate Diploma in Gynecology
          and Obstetrics and Diplomate in National Board, New Delhi. She pursued
          her career as a Senior Resident in Kidwai Hospital. Through these
          years she also underwent training in Scanning and Laparascopy.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha S Vijay’s career took a different direction and interest at
          this point of time. While practicing as a Obstetrics and Gynecology
          specialist, she came across women who were unable to conceive and were
          knocking on every door possible to get the right answers and
          solutions. This pathetic & frustrating situation of infertile ladies
          made her give attention to Fertility and Reproductive Health
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha S Vijay went on to complete her Infertility training and Post
          Graduate Diploma in Reproductive Health in Mumbai and Germany. With
          the knowledge she had earned over the years, she started an exclusive
          infertility treatment center in 2011, named as GarbhaGudi IVF Center,
          the cosmic womb. From then Dr Asha S Vijay has become a well known
          Fertility Specialist in Bangalore.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha has over well over two decades of experience in field of
          obstetrics, gynecology and infertility. She is a well-known name in
          infertility – both in treating patients and also in infertility
          education. Many consider her as a medical genius with an overarching
          vision to eradicate infertility.
        </p>
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha has been instrumental in creating happy endings in the lives
          of more than 7000+ couples, by ensuring they have a child of their
          own. With her immense knowledge, expertise, skills and cutting-edge
          medical technology, she has been able to produce extraordinary success
          rates in the field of infertility. She is highly dedicated to her
          vision and leaves no stone unturned to ensure that the couple can take
          home a healthy baby and enjoy parenthood. <br />
          <br />
        </p>
        <p className="text-gray-400 text-lg lg:text-xl tracking-wide font-extralight font-qs">
          <p>
            Dr. Asha S Vijay has undergone specialized training in the field of
            infertility at the following Centers:
          </p>
          <ul className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs list-disc ml-5 mt-4">
            <li>
              Bangalore Assisted Conception Center under the guidance of Dr.
              Kamini Rao.
            </li>
            <li>
              Reliance ART Foundation under the guidance of Dr. Ameet Patki.
            </li>
            <li>Hands on Training at EART Mumbai</li>
          </ul>
        </p>
        <h2 className="text-center text-gray-900 tracking-widest uppercase mb-10 font-qs font-bold mt-10 bg-blue-500 w-96 mx-auto rounded-3xl text-lg">
          Awards
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl tracking-wide font-extralight font-qs">
          <p className="underline">
            Dr. Asha has received several awards and has been felicitated by
            some of the leading organizations.
          </p>
          <ul className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs list-disc ml-5 mt-4">
            <li>Patient Satisfaction & Excellence award – ElaWoman</li>
            <li>FKCCI & Riovera women achievers Award</li>
            <li>
              Women Achiever award -COWE – By Union Minister of Govt. of India
            </li>
            <li>Rotary Rajyothsava Award 2019</li>
            <li>Radiant Infinitheist Award</li>
            <li>KSRTC – Association felicitation on Woman’s Day 2018 </li>
          </ul>
        </p>
        <h2 className="text-center text-gray-900 tracking-widest uppercase mb-10 font-qs font-bold mt-10 bg-blue-500 w-96 mx-auto rounded-3xl text-lg">
          Her Journey, Vision and Mission
        </h2>
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Growing up, Dr. Asha always wanted to be a doctor and serve society,
          and hers is a story of hard work, overcoming stiff challenges and
          impediments. She has demonstrated a razor-sharp focus on what she
          wants to achieve and usually aligns it with the greater good.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Dr. Asha graduated in Medicine from the prestigious Bangalore Medical
          College and started her career with Kidwai Institute of Oncology,
          Bangalore, as a senior resident doctor. She then completed her
          post-graduation in Obstetrics & Gynecology in the year 1996 from
          Bangalore Medical College. Dr. Asha set up her own practice with
          ‘Sannidhi Multi-Specialty Hospital”. Over time, she gained enormous
          experience in the field of Gynecology & Infertility. Over the course
          of 15 years of dealing with gynecology, obstetrics, and fertility
          issues as part of her practice, she made it her life’s purpose to try
          and address the scourge of infertility.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          She knew that people with reproductive disorders were clueless about
          whom to approach and, how to decide about the treatment they have to
          adopt, how to manage the costs etc. She also noticed that in many
          cases, the causes of infertility often went undiagnosed, and in most
          cases, the couples did not get the right treatment at the right time.
          Even if they did get it, the treatment would be highly expensive with
          low success rates and barely within the reach of a middle-class
          family. It was then that Dr. Asha, along with a team of
          first-generation entrepreneurs, decided to approach the problem
          holistically – to provide world-class treatment and services at
          affordable costs.
        </p>
        <br />
        <p className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs">
          Thus, GarbhaGudi IVF was born!
        </p>
        <h2 className="text-center text-gray-900 tracking-widest uppercase mb-10 font-qs font-bold mt-10 bg-blue-500 w-96 mx-auto rounded-3xl text-lg">
          Accomplishments
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl tracking-wide font-extralight font-qs">
          <p className="underline">Founder - GarbhaGudi IVF Centre</p>
          <ul className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs list-disc ml-5 mt-4">
            <li>
              Dr. Asha Vijay founded GarbhaGudi IVF Centre in 2011 to provide
              holistic world-class fertility treatment at affordable cost.{" "}
            </li>
            <li>
              Since then, there has been much progress towards this vision
              because of the founders’ commitment, abilities, and determination
              to build a strong, value-based organization. GarbhaGudi’s
              hand-picked team of fertility specialists, includes highly capable
              gynecologists, embryologists, technicians, and staff. They work
              closely with patients to develop a personalized fertility
              treatment plan and offer fertility treatments like IUI, IVF, donor
              programs, advanced treatment options like ERA, PGD, sequential
              transfers and much more. Today, GarbhaGudi’s success rate stands
              at over 65%, which is one of the highest in the industry.
            </li>
          </ul>
        </p>
        <p className="text-gray-400 text-lg lg:text-xl tracking-wide font-extralight font-qs mt-8">
          <p className="underline">
            Founder – GGIRHR (GarbhaGudi Institute of Reproductive Health and
            Research)
          </p>
          <ul className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs list-disc ml-5 mt-4">
            <li>
              Dr. Asha is the Dean and Scientific Director of GGIRHR, a premier
              institute in the field of reproductive health training and
              research.
            </li>
            <li>
              This institution provides top-notch training in the field of
              infertility. It offers a wide choice of online and offline courses
              which provide phenomenal learning and upskilling opportunities to
              gynecologists, medical students, urologists, science graduates,
              and para-medical staff. GGIRHR’s primary aim has been to share the
              rich expertise and success in infertility and reproductive
              technologies of the parent organization – GarbhaGudi IVF.
            </li>
          </ul>
        </p>
        <p className="text-gray-400 text-lg lg:text-xl tracking-wide font-extralight font-qs mt-8">
          <p className="underline">Founder Trustee of GarbhaGnan Foundation</p>
          <ul className="text-gray-400 text-md lg:text-lg tracking-wide font-extralight font-qs list-disc ml-5 mt-4">
            <li>
              Dr. Asha is part of the founding trust of GarbhaGnan Foundation, a
              trust that is established for fulfilling the corporate social
              responsibility of GarbhaGudi group. The aim is to help the
              economically weaker sections of the society in getting infertility
              treatment, educate and train doctors practicing in rural areas to
              address infertility in the right way, at the right time.
            </li>
            <li>
              Dr. Asha Vijay is a guiding light, and has illuminated the lives
              of many childless couples. She is kind, dedicated and a visionary.
              She is a true inspiration for all whose lives she touches.
            </li>
            <li>
              Infinitheism, a well-known school of philosophy, has played a key
              role in Dr. Asha’s life. Mahatria, the founder of Inifinitheism,
              has been a lighthouse in Dr. Asha’s life- giving her the
              direction, tools and inspiration to make it very big in life,
              peacefully. The teachings of Mahatria have been the key
              standpoints in the life of Dr. Asha and also of GarbhaGudi group
              of companies.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
