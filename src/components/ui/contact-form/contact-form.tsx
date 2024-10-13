import { Input } from "../form/input";
import { TextArea } from "../form/text-area";

export const ContactForm = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <div className="w-full 2xl:w-[1400px] px-6 lg:px-16 py-16 flex flex-col gap-10 items-center">
        <form
          action=""
          className="flex flex-col gap-3 bg-white p-8 w-[100%] lg:w-[50%]"
        >
          <h1 className="text-3xl">Get in touch</h1>
          <Input name="NAME" id="name" type="text" />
          <Input name="EMAIL ADDRESS" id="email" type="email" />
          <TextArea name="YOUR MESSAGE" id="message" />
          <button className="w-fit py-2 px-4 lg:py-3 lg:px-6 duration-300 bg-lime-900 hover:bg-lime-800 text-white z-10">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};
