import { Input } from "../form/input";
import { TextArea } from "../form/text-area";

export const ContactForm = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <div className="w-full 2xl:w-[1400px] px-6 lg:px-16 py-16 flex flex-col gap-10 items-center">
        <form action="">
          <Input name="NAME" id="name" type="text" />
          <Input name="EMAIL ADDRESS" id="email" type="email" />
          <TextArea name="YOUR MESSAGE" id="message" />
        </form>
      </div>
    </div>
  );
};
