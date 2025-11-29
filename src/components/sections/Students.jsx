import TiltedCard from "../reactbits/TiltedCard";

export default function Students() {
  return (
    <div className="p-20">
      <div>
        {" "}
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Ghal"
          containerHeight="500px"
          containerWidth="300px"
          imageHeight="200px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="flex flex-col gap-20">
              <div className="p-6 bg-slate-800/20 rounded-xl w-[300px] flex justify-between items-center">
                <p className="text-sm font-bold  ">Gustavo Alcantara</p>
                <img src="Bandor.png" alt="" className="w-8 h-8" />
              </div>
              <div className="bg-blue-400 w-[300px] h-[230px] rounded-2xl p-3 flex justify-between ">
                <div className="flex justify-center ">
                  <img src="Bandor.png" alt="" className="w-5 h-5" />
                  <img src="Bandor.png" alt="" className="w-5 h-5" />

                </div>
                <p className="">teste</p>
                <div className="flex justify-center ">
                  <p>30</p>
                  <p className="text-sm">X</p>
                </div>

              </div>
            </div>
          }
        ></TiltedCard>
      </div>
    </div>
  );
}
