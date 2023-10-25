import teamM1 from "../../../assets/images//team/1.jpg";
import teamM2 from "../../../assets/images//team/2.jpg";
import teamM3 from "../../../assets/images//team/3.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";

const MeetOurTeam = () => {
  return (
    <div className="my-24">
      <div className="max-w-xl mx-auto">
        <h3 className="text-center text-2xl text-orange-700">Team</h3>
        <h1 className="5xl text-center">Meet Out Team</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={teamM1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className="card-actions">
                  <FaFacebook className=" text-blue-700"></FaFacebook>
                  <FaLinkedin className="text-blue-400"></FaLinkedin>

                  <FaSquareInstagram className="text-red-500"></FaSquareInstagram>
                  <FaTwitter className="text-sky-600"></FaTwitter>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={teamM2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className="card-actions">
                  <FaFacebook className=" text-blue-700"></FaFacebook>
                  <FaLinkedin className="text-blue-400"></FaLinkedin>

                  <FaSquareInstagram className="text-red-500"></FaSquareInstagram>
                  <FaTwitter className="text-sky-600"></FaTwitter>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={teamM3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className="card-actions">
                  <FaFacebook className=" text-blue-700"></FaFacebook>
                  <FaLinkedin className="text-blue-400"></FaLinkedin>

                  <FaSquareInstagram className="text-red-500"></FaSquareInstagram>
                  <FaTwitter className="text-sky-600"></FaTwitter>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MeetOurTeam;
