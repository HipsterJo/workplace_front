import React from "react";
import { Workplace } from "../../types";
import WorkplaceCard from "../WorkPlaceCard/WorkPlaceCard.tsx";
import styles from "./WorkPlaceList.module.css";
import { Link } from "react-router-dom";

interface WorkPlaceListProps {
  workplaces: Workplace[];
  setWorkplaces: React.Dispatch<React.SetStateAction<Workplace[]>>;
}

const WorkPlaceList: React.FC<WorkPlaceListProps> = ({
  workplaces,
  setWorkplaces,
}) => {
  return (
    <div className={styles.workplaceList}>
      {workplaces.map((workplace) => (
        <Link
          onClick={(e) => {
            if ((e.target as HTMLElement).nodeName === "BUTTON") {
              e.preventDefault();
            }
          }}
          to={`/workplace/${workplace.id}`}
          key={workplace.name}
        >
          <WorkplaceCard workplace={workplace} setWorkplaces={setWorkplaces} />
        </Link>
      ))}
    </div>
  );
};

export default WorkPlaceList;
