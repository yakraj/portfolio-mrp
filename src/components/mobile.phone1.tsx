import "./styles/mobile.phone.css";

interface Chat {
  message: string;
  side: string;
}

interface MobilePhoneOppProps {
  Re: React.RefObject<HTMLDivElement>;
  chats: Chat[];
}

export const MobilePhoneOpp = ({ Re, chats }: MobilePhoneOppProps) => {
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
                  justifyContent: i.side === "left" ? "flex-end" : undefined,
                }}
                className="messagecontainer-left"
              >
                <div
                  style={{
                    backgroundColor: i.side === "left" ? "#96d796" : undefined,
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
