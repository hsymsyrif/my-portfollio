import { twMerge } from "tailwind-merge";

import avatar1 from "../../public/avatar/avatar-1.png";
import avatar2 from "../../public/avatar/avatar-2.png";
import avatar3 from "../../public/avatar/avatar-3.png";
import avatar4 from "../../public/avatar/avatar-4.png";
import avatar5 from "../../public/avatar/avatar-5.png";
import avatar6 from "../../public/avatar/avatar-6.png";
import avatar7 from "../../public/avatar/avatar-7.png";
import avatar8 from "../../public/avatar/avatar-8.png";
import avatar9 from "../../public/avatar/avatar-9.png";

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonial[] = [
  { text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", imageSrc: avatar1, name: "Jamie Rivera", username: "@jamietechguru00" },
  { text: "Our team's productivity has skyrocketed since we started using this tool.", imageSrc: avatar2, name: "Josh Smith", username: "@jjsmith" },
  { text: "This app has completely transformed how I manage my projects and deadlines.", imageSrc: avatar3, name: "Morgan Lee", username: "@morganleewhiz" },
  { text: "I was amazed at how quickly we were able to integrate this app into our workflow.", imageSrc: avatar4, name: "Casey Jordan", username: "@caseyj" },
  { text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", imageSrc: avatar5, name: "Taylor Kim", username: "@taylorkimm" },
  { text: "The customizability and integration capabilities of this app are top-notch.", imageSrc: avatar6, name: "Riley Smith", username: "@rileysmith1" },
  { text: "Adopting this app for our team has streamlined our project management and improved communication across the board.", imageSrc: avatar7, name: "Jordan Patels", username: "@jpatelsdesign" },
  { text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.", imageSrc: avatar8, name: "Sam Dawson", username: "@dawsontechtips" },
  { text: "Its user-friendly interface and robust features support our diverse needs.", imageSrc: avatar9, name: "Casey Harper", username: "@casey09" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials }: { className?: string; testimonials: Testimonial[] }) => (
  <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", className)}>
    {testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div key={index} className="card p-4 border rounded-lg shadow-md bg-white text-black">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <img src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="text-gray-500 leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonial = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold mt-5 text-white tracking-wide leading-tight bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Testimonial
          </h2>
          <p className="mt-5 text-gray-300">Base My Own Project</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;