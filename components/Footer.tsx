import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="text-xs sm:text-sm md:text-base flex flex-col items-center justify-between border-t py-5 px-1 border-neutral-400 bg-gradient-to-t from-neutral-100">
      <address className="text-sm">
        <a className="flex items-center not-italic" href="mailto:info@hdepo.hr">
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          info@hdepo.hr
        </a>
      </address>
      <small>Park kneza Branimira 1, 31000 Osijek</small>
      <small>
        &copy; Hrvatsko društo za embriologiju i potpomognutu oplodnju
      </small>
    </footer>
  );
};

export default Footer;
