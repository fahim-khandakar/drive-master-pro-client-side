import { FaDollarSign } from "react-icons/fa";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { AiFillCar, AiFillSafetyCertificate } from "react-icons/ai";
import { CgStyle } from "react-icons/cg";

const BestServices = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl border-b-2 w-1/2 mx-auto md:w-1/4 border-black font-bold mt-20 text-[#403f3f] font-serif text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-10">
        <div className="text-left mt-10">
          <div className="flex  text-4xl items-center gap-3">
            <AiFillCar></AiFillCar>
            <h3 className="text-2xl font-semibold py-5">Vehicle Listings</h3>
          </div>
          <p>
            Browse through our extensive collection of top-quality vehicles.
            Find the perfect car that suits your style, needs, and budget from
            our diverse listings.
          </p>
        </div>
        {/* second  */}
        <div className="text-left mt-10">
          <div className="flex items-center gap-3 text-4xl">
            <FaDollarSign></FaDollarSign>
            <h3 className="text-2xl font-semibold py-5">
              Trade-In and Financing
            </h3>
          </div>
          <p>
            Streamline your car-buying experience with our trade-in and
            financing options. We offer flexible solutions to help you drive
            your dream car.
          </p>
        </div>
        {/* third  */}
        <div className="text-left mt-24">
          <div className="flex items-center gap-3 text-4xl">
            <AiFillSafetyCertificate></AiFillSafetyCertificate>
            <h3 className="text-2xl font-semibold py-5">
              Vehicle Inspection and Certification
            </h3>
          </div>
          <p>
            Rest assured with our thorough vehicle inspection and certification
            services. We ensure that every car meets the highest standards of
            safety and quality.
          </p>
        </div>
        {/* fourth  */}
        <div className="text-left mt-24">
          <div className="flex items-center gap-3 text-4xl">
            <MdSentimentVerySatisfied></MdSentimentVerySatisfied>
            <h3 className="text-2xl font-semibold py-5">
              Test Drives and Expert Guidance
            </h3>
          </div>
          <p>
            Experience the car of your choice firsthand with test drives. Our
            experts are here to guide you through the selection process, making
            sure you find the right fit.
          </p>
        </div>
        {/* fifth  */}
        <div className="text-left mt-24">
          <div className="flex items-center gap-3 text-4xl">
            <GrUserWorker></GrUserWorker>
            <h3 className="text-2xl font-semibold py-5">
              Car Maintenance and Repairs
            </h3>
          </div>
          <p>
            Keep your vehicle in peak condition with our car maintenance and
            repair services. Our skilled technicians are ready to maintain and
            repair your car efficiently.
          </p>
        </div>
        {/* sixth  */}
        <div className="text-left mt-24">
          <div className="flex items-center gap-3 text-4xl">
            <CgStyle></CgStyle>
            <h3 className="text-2xl font-semibold py-5">
              Car Valuation and Appraisal
            </h3>
          </div>
          <p>
            Get an accurate estimate of your vehicle's value with our car
            valuation and appraisal services. Whether you're selling or trading
            in, we help you understand your car's worth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
