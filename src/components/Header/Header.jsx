import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
      <div className="flex flex-col gap-8 m-5">
        <div className="flex justify-between">
        <h1 className="text-5xl font-bold capitalize">knowledge cafe</h1>
        <img src={profile} alt="" />
      </div>
      <hr />
      </div>
    );
};

export default Header;