import { MotionFadeRightSection } from "../framerMotion/motion"

export default function Services() {
  return (
    <MotionFadeRightSection>
    <div className="flex overflow-hidden bg-[#f7f6fb] flex-col px-[1rem] justify-center gap-5 py-[7rem] items-center">
      <div className="text-center flex flex-col items-center">
        <h1 className="font-bold text-[3rem]">Professional Services</h1>
        <p className="w-[70%] text-[1.2rem] lg:font-semibold">
          From initial consultation to ongoing maintenance, we provide
          comprehensive services to ensure your solar investment delivers
          maximum value.
        </p>
      </div>
      <div className="flex justify-cemter  gap-7 items-center flex-wrap lg:p-[1rem] p-[0.5rem]">
        {ServicesDetails.map((item, index) => (
          <div
            className="lg:w-[30%] border-[1px] border-[var(--greyText)] rounded-lg bg-white hoverUp shadow-lg p-[0.5rem] lg:p-[1rem] border-l-[#3b82f6] border-l-[7px]"
            key={index}
          >
            <div className="font-semibold py-[0.5rem]">{item.title}</div>
            <div className="py-[0.5rem]">{item.desc}</div>
            <div className="py-[1rem]">
              {item.features.map((item, index) => (
                <div key={index}><span className="font-bold text-[1rem]">.</span>   {item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 py-[3rem] w-full rounded-lg justify-center items-center bg-gradient-to-r from-[var(--secondary)] to-[var(--fourth)]">
        <div className="font-bold text-[2rem] lg:text-left text-center">
          Ready to Start Your Solar Journey?
        </div>
        <div className="lg:w-[60%]  text-[1.3rem] text-center">
          Get a free consultation and personalized quote for your solar energy
          needs. Our experts are ready to help you save money and go green.
        </div>
        <div className="gap-7 flex lg:flex-row flex-col ">
          {buttonDetails.map((item, index) => (
            <button
              key={index}
              className={`  w-[11rem] bg-[var(--foreground)] text-[var(--secondary)] px-[1rem]  hover:opacity-[70%] h-[2.4rem] rounded-lg ${index===1?"bg-white text-black":"bg-[var(--foreground)] text-[var(--secondary)]"} `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
    </MotionFadeRightSection>
  );
}

const buttonDetails = ["Send a message", "Call", "Talk to Us"];

const ServicesDetails = [
  {
    title: "Site Assessment & Design",
    desc: "Comprehensive evaluation of your property and custom system design",
    features: [
      "Energy Audit",
      "Roof Analysis",
      "Shading Study",
      "3D System Design",
    ],
  },
  {
    title: "Site Assessment & Design",
    desc: "Comprehensive evaluation of your property and custom system design",
    features: [
      "Energy Audit",
      "Roof Analysis",
      "Shading Study",
      "3D System Design",
    ],
  },
  {
    title: "Site Assessment & Design",
    desc: "Comprehensive evaluation of your property and custom system design",
    features: [
      "Energy Audit",
      "Roof Analysis",
      "Shading Study",
      "3D System Design",
    ],
  },
  {
    title: "Site Assessment & Design",
    desc: "Comprehensive evaluation of your property and custom system design",
    features: [
      "Energy Audit",
      "Roof Analysis",
      "Shading Study",
      "3D System Design",
    ],
  },
  {
    title: "Site Assessment & Design",
    desc: "Comprehensive evaluation of your property and custom system design",
    features: [
      "Energy Audit",
      "Roof Analysis",
      "Shading Study",
      "3D System Design",
    ],
  },
];
