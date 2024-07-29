import "./styles/mobile.phone.css";

export const MobilePhoneOpp = ({ chats }) => {
  return (
    <>
      <div className="mobile-phone">
        <div className="mobile-upper-div">
          <div className="mobile-earpic"></div>
        </div>
        <div className="mobile-display">
          {chats.reverse().map((i) => (
            <div
              key={i.message}
              style={{
                justifyContent: i.side === "left" && "flex-end",
              }}
              className="messagecontainer-left"
            >
              <div
                style={{ backgroundColor: i.side === "left" && "#96d796" }}
                className="text"
              >
                {i && i.message}
              </div>
            </div>
          ))}
        </div>
        <div className="mobile-lower-div">
          <div className="mobile-home-buttton"></div>
        </div>
      </div>
    </>
  );
};
