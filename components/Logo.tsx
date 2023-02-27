import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-1">
      <Image
        className="rounded-full object-cover"
        height={85}
        width={85}
        src="/hdepo-logo.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
