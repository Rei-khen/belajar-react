import starIcon from "../assets/star-solid-full.svg";
import acerola from "../assets/acerola.jpg";

function StarDisplay() {
  return (
    <div
      className="star-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.1px",
      }}
    >
      <img src={starIcon} alt="" style={{ width: "20px" }} />
      <img src={starIcon} alt="" style={{ width: "20px" }} />
      <img src={starIcon} alt="" style={{ width: "20px" }} />
      <img src={starIcon} alt="" style={{ width: "20px" }} />
      <img src={starIcon} alt="" style={{ width: "20px" }} />
    </div>
  );
}

function Text() {
  return (
    <div
      className="text-area"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <p style={{ textAlign: "center", fontSize: "24px" }}>
        As small business owner, I've tried a lot platforms - but Untitled{" "}
        <br />
        blew me away. Selling my digital products is now effortless, and the
        <br />
        built-in Xero integration saves me hours eatch month.
      </p>
    </div>
  );
}

function ProfileSession() {
  return (
    <div
      className="profile-session"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "24px",
      }}
    >
      <img
        src={acerola}
        alt=""
        style={{ width: "70px", borderRadius: "50%" }}
      />
      <p id="profile-name" style={{fontWeight : "bold"}}>Acerola</p>
      <p id="profile-rank">CEO of Untitled</p>
    </div>
  );
}

export default function Bawah() {
  return (
    <div className="bawah-container" style={{ marginTop: "90px" }}>
      <StarDisplay />
      <Text />
      <ProfileSession />
    </div>
  );
}
