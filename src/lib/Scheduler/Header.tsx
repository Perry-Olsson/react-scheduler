// import { CalenderGrid } from "./components";
import { DaysOfTheWeek } from "./components/DaysOfTheWeek";

export const Header: React.FC = () => {
  return (
    <header className="ReactScheduler_calenderGrid ReactScheduler_header">
      <DaysOfTheWeek />
    </header>
  );
};
