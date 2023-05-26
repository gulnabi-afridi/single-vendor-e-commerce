import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col font-inter gap-6 px-0 py-4 md:py-6 md:px-10">
      <p className="font-[400] text-black-main text-[22px]">
        Hello <span className="font-semibold">UserName21212</span>{" "}
        <span
          className="text-[16px] font-semibold
        "
        >
          (not UserName21212?{" "}
          <Link
            href={"myaccount/account"}
            className="font-semibold text-[16px] relative after:absolute after:w-0 after:-bottom-[10px] after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300"
          >
            Log out
          </Link>
          )
        </span>
      </p>
      <p className="font-[400] text-[16px] max-w-[90%] lead-[28px]">
        From your account dashboard you can view your{" "}
        <Link
          href={"myaccount/orders"}
          className="font-semibold text-[17px] relative after:absolute after:w-0 after:-bottom-[10px] after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300"
        >
          recent orders
        </Link>{" "}
        , manage your
        <Link
          href={"myaccount/addresses"}
          className="font-semibold text-[17px] relative after:absolute after:w-0 after:-bottom-[10px] after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300"
        >
          {" "}
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link
          href={"myaccount/account"}
          className="font-semibold text-[16px] relative after:absolute after:w-0 after:-bottom-[10px] after:left-0 after:h-[2px] after:bg-main-brand hover:after:w-full after:duration-300"
        >
          {" "}
          edit your password and account details.
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
