import img from "../../assets/avatars/image-juliusomo.png";

interface User {
  username: string;
}

const Info = ({ username }: User) => {
  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      <img
        src={img}
        alt={username}
        style={{
          backgroundSize: "cover",
          borderRadius: "50%",
          height: "30px",
          marginRight: "10px",
          width: "1.88rem",
        }}
      />
      <p style={{ color: "#324152", fontWeight: 500 }}>{username}</p>
      <p
        style={{
          background: " #5457b6",
          borderRadius: "0.19rem",
          color: "#fff",
          fontSize: ".9rem",
          fontWeight: 400,
          marginLeft: "10px",
          padding: "  0.13rem 0.63rem 0.19rem",
        }}
      >
        you
      </p>
      <p style={{ marginLeft: " 15px" }}>7 hrs ago</p>
    </div>
  );
};

export default Info;
