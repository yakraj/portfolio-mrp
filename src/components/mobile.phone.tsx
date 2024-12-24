import "./styles/mobile.phone.css";

interface MobilePhoneProps {
  Re: React.RefObject<HTMLDivElement>;
  chats: { message: string; side: string }[];
}

export const MobilePhone = ({ Re, chats }: MobilePhoneProps) => {
  return (
    <>
      <div ref={Re} className="mobile-phone">
        <div className="mobile-upper-div">
          <div className="mobile-earpic"></div>
        </div>
        <div className="mobile-display">
          {chats
            .slice()
            .reverse()
            .map((i) => (
              <div
                key={i.message + Math.random()}
                style={{
                  justifyContent: i.side === "right" ? "flex-end" : undefined,
                }}
                className="messagecontainer-left"
              >
                <div
                  style={{
                    backgroundColor: i.side === "right" ? "#96d796" : undefined,
                  }}
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
