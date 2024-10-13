import { ContactBanner } from "../components/ui/contact-banner/contact-banner";
import { ContactForm } from "../components/ui/contact-form/contact-form";
import { Map } from "../components/ui/map/map";

export const Contact = () => {
  return (
    <>
      <Map />
      <ContactBanner />
      <ContactForm />
    </>
  );
};
