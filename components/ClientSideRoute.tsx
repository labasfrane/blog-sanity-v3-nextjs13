"use client";

import Link from "next/link";

const ClientSideRoute = ({ children, route }: Props) => {
  return <Link href={route}>{children}</Link>;
};

type Props = {
  children: React.ReactNode;
  route: string;
};

export default ClientSideRoute;
