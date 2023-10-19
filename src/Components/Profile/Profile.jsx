import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import profile from "../../assets/user.png";

const Profile = () => {
  const { user, name } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      {user && (
        <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-5 items-center">
          <div className=" text-xs md:text-base text-center">
            {user.displayName ? user.displayName : name}
          </div>
          <div>
            {user.photoURL ? (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
                src={user.photoURL}
                alt="User Photo"
              />
            ) : (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
                src={profile}
                alt="User Photo"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
