<div className=" scroll-smooth">
  <div>
    <div className="main-container">
      <Header />
      <div className=" flex flex-col mt-[30vh] sm:mt-[20vh] m-auto justify-center items-center">
        <div className="div">
          <div className="text-white font-thin text-[25px] md:text-[50px] lg:text-[50px]">
            Turning Ideas into
            <code>
              &lt; <span className="text-vermili">/</span>Code&gt;
            </code>
          </div>
          <div className="text-white text-[25px] sm:text-[55px] font-bold">
            and Bugs into Features
          </div>
        </div>
        <div className="text-[16px] ml-8 sm:ml-0  text-white font-thin">
          ________________________ Hey it's Toseef Rana. A{""}
          <span className="text-vermili font-semibold">MERN STACK </span>{" "}
          Developer
        </div>
      </div>
      <div className=" bg-white bar h-10 mt-40 sm:mt-[150px] flex items-center justify-center ">
        <p className=" sm:pl-8 sm:pr-8 justify-center text-accent font-[500] ">
          React JS
        </p>
        <img src={star} width={25} alt="" />
        <p className=" sm:pl-8 sm:pr-8 justify-center text-accent font-[500] ">
          Next JS
        </p>
        <img src={star} width={25} alt="" />
        <p className=" sm:pl-8 sm:pr-8 justify-center text-accent font-[500] ">
          Firebase
        </p>
        <img src={star} width={25} alt="" />
        <p className=" sm:pl-8 sm:pr-8 justify-center text-accent font-[500] ">
          Mongo DB
        </p>
        <img src={star} width={25} alt="" />
        <p className=" sm:pl-8 sm:pr-8 justify-center text-accent font-[500] ">
          Amazon AWS
        </p>
      </div>
    </div>

    {/* About Section */}

    <div id="about" className="about-section">
      <div className="flex sm:flex-row items-center justify-center  flex-col">
        <div className="about-text sm:mt-0 mt-[11vh] text-white font-thin text-[12px]">
          <p>__________________________ About Me !</p>
          <h1 className="sm:text-[72px] text-[70px] font-[400]">Hi I'm,</h1>
          <p className="sm:w-[330px] sm:text-[14px] w-[80vw] ">
            Hey there, I'm{" "}
            <span className="text-vermili font-bold">Toseef Rana</span> ! I'm
            the digital ninja who can turn coffee into code and bugs into
            features faster than you can say "syntax error". With my keyboard as
            my trusty sword and my screen as my canvas, I'm here to make your
            digital dreams a reality. <br /> <br /> Let's turn ideas into pixels
            and bring magic to the web,
            <span className="font-bold"> “One line of code at a time!”</span>
          </p>
          <br />
          <br />
          <p className=" flex flex-row ">
            Find Me On:
            <p className="flex flex-row justify-center items-center space-x-2">
              <a href="http://wa.me/+923043508991" target="blank">
                <RiWhatsappFill className="hover:fill-vermili ml-2" size={13} />
              </a>
              <a href="https://www.facebook.com/devtoseef" target="blank">
                <FaFacebook className="hover:fill-vermili" size={13} />{" "}
              </a>
              <a href="https://www.instagram.com/devtoseef/" target="blank">
                <AiFillInstagram className="hover:fill-vermili" size={13} />
              </a>
              <a href="https://www.linkedin.com/in/devtoseef/" target="blank">
                {" "}
                <FaLinkedin size={13} className="hover:fill-vermili" />
              </a>
              <a href="https://github.com/onlytoseef" target="blank">
                <FaGithub size={13} className="hover:fill-vermili" />
              </a>
            </p>
          </p>
        </div>
        <div className="about-img sm:mt-0 mt-[-90]">
          {/* <img
          src={profileImage}
          className="hover:bg-vermili"
          width={332}
          alt=""
        /> */}
        </div>
      </div>
    </div>

    {/* What I do section  */}

    <div id="services" className="what-i-do-section ">
      <div className="grid  gap-4  sm:grid-cols-12">
        <div className="sm:col-span-4     sm:m-4 ">
          <p className="text-white font-thin">
            __________________ My Services ?
          </p>
          <h1 className="sm:text-[50px]  text-white">What Can </h1>
          <h1 className=" sm:text-[50px] text-vermili">I Do ?</h1>
        </div>

        <div className="sm:col-span-8">
          <div className="flex sm:flex-row text-right flex-col  ">
            <p className="  text-white text-right text-[10px]  w-[320px]">
              Lorem ipsum dolor sit amet consectetur. Tincidunt sed semper
              gravida amet pretium nulla eget feugiat quam. Libero risus
              dictumst dolor nunc aliquet.
            </p>
            <button className="bg-greyWhite rounded-lg  w-[200px]">
              <p className="text-vermili font-bold">Let's Talk !</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
