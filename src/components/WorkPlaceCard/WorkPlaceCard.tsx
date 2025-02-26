import React from "react";
import { Workplace } from "../../types";
import styles from "./WorkPlaceCard.module.css";
import { deleteWorkplace } from "../../api";

interface WorkplaceCardProps {
  workplace: Workplace;
  setWorkplaces: React.Dispatch<React.SetStateAction<Workplace[]>>;
}

const WorkplaceCard: React.FC<WorkplaceCardProps> = ({
  workplace,
  setWorkplaces,
}) => {
  const onDelete = async (id: number) => {
    try {
      await deleteWorkplace(id);
      setWorkplaces((prev: Workplace[]) => prev.filter((w) => w.id !== id));
    } catch (error) {
      console.error("Error deleting workplace:", error);
    }
  };

  return (
    <div className={styles.workplaceCard}>
      <h2>{workplace.name}</h2>
      <p>{workplace.description}</p>
      <p>{workplace.workplace_type}</p>
      {workplace.ip_address && <p>IP Address: {workplace.ip_address}</p>}
      <button
        className={styles.closeButton}
        data-btn="close"
        onClick={() => onDelete(workplace.id)}
      >
        ✖
      </button>
    </div>
  );
};

export default WorkplaceCard;
