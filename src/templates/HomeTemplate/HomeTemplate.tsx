import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Header from "../../components/Header/Header";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div className="relative min-h-screen md:px-10 md:py-5 bg-lite dark:bg-darkbg">
      <Header />
      <div className="md:flex md:items-start md:gap-x-10 ">
        <div className="fixed">
          <Dashboard />
        </div>
        <div className="w-full md:pl-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
