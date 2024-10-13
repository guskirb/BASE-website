import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const ContactBanner = () => {
  const bannerData = [
    {
      icon: <MapPin />,
      name: "Address",
      details: (
        <>
          274 Charminster Rd
          <br />
          Bournemouth
        </>
      ),
    },
    {
      icon: <Mail />,
      name: "Email",
      details: <>base-bournemout@gmail.com</>,
    },
    {
      icon: <Phone />,
      name: "Phone",
      details: <>01202 535555</>,
    },
    {
      icon: <Clock />,
      name: "Opening Hours",
      details: <>Thurs - Sat: 10am - 6pm</>,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full 2xl:w-[1400px] flex flex-col lg:flex-row gap-14 items-center justify-between py-10">
        {bannerData.map((data) => (
          <div className="w-fit flex flex-col items-center gap-3">
            {data.icon}
            <h1 className="text-2xl">{data.name}</h1>
            <p className="text-center opacity-50">{data.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
